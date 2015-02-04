
function GalileanMoons() {};

GalileanMoons.calculateHelper = function(JD, sunlongrad, betarad, R)
{
	//What will be the return value
	var details = {
		Satellite1: {
			TrueRectangularCoordinates: {},
			ApparentRectangularCoordinates: {}
		},
		Satellite2: {
			TrueRectangularCoordinates: {},
			ApparentRectangularCoordinates: {}
		},
		Satellite3: {
			TrueRectangularCoordinates: {},
			ApparentRectangularCoordinates: {}
		},
		Satellite4: {
			TrueRectangularCoordinates: {},
			ApparentRectangularCoordinates: {}
		}
	};

	//Calculate the position of Jupiter decreased by the light travel time from Jupiter to the specified position
	var DELTA = 5;
	var PreviousLightTravelTime = 0;
	var LightTravelTime = Elliptical.distanceToLightTime(DELTA);
	var x = 0;
	var y = 0;
	var z = 0;
	var l = 0;
	var lrad;
	var b = 0;
	var brad;
	var r;
	var JD1 = JD - LightTravelTime;
	var bIterate = true;
	while (bIterate)
	{
		//Calculate the position of Jupiter
		l = Jupiter.eclipticLongitude(JD1);
		lrad = CoordTrans.degToRad(l);
		b = Jupiter.eclipticLatitude(JD1);
		brad = CoordTrans.degToRad(b);
		r = Jupiter.radiusVector(JD1);

		x = r*Math.cos(brad)*Math.cos(lrad) + R*Math.cos(sunlongrad);
		y = r*Math.cos(brad)*Math.sin(lrad) + R*Math.sin(sunlongrad);
		z = r*Math.sin(brad) + R*Math.sin(betarad);
		DELTA = Math.sqrt(x*x + y*y + z*z);
		LightTravelTime = Elliptical.distanceToLightTime(DELTA);

		//Prepare for the next loop around
		bIterate = (Math.abs(LightTravelTime - PreviousLightTravelTime) > 2E-6); //2E-6 corresponds to 0.17 of a second
		if (bIterate)
		{
			JD1 = JD - LightTravelTime;
			PreviousLightTravelTime = LightTravelTime;
		}
	}

	//Calculate Jupiter's Longitude and Latitude
	var lambda0 = Math.atan2(y, x);
	var beta0 = Math.atan(z/Math.sqrt(x*x + y*y));

	var t = JD - 2443000.5 - LightTravelTime;

	//Calculate the mean longitudes 
	var l1 = 106.07719 + 203.488955790*t;
	var l1rad = CoordTrans.degToRad(l1);
	var l2 = 175.73161 + 101.374724735*t;
	var l2rad = CoordTrans.degToRad(l2);
	var l3 = 120.55883 + 50.317609207*t;
	var l3rad = CoordTrans.degToRad(l3);
	var l4 = 84.44459 + 21.571071177*t;
	var l4rad = CoordTrans.degToRad(l4);

	//Calculate the perijoves
	var pi1 = CoordTrans.degToRad(CoordTrans.mapTo0To360Range(97.0881 + 0.16138586*t));
	var pi2 = CoordTrans.degToRad(CoordTrans.mapTo0To360Range(154.8663 + 0.04726307*t));
	var pi3 = CoordTrans.degToRad(CoordTrans.mapTo0To360Range(188.1840 + 0.00712734*t));
	var pi4 = CoordTrans.degToRad(CoordTrans.mapTo0To360Range(335.2868 + 0.00184000*t));

	//Calculate the nodes on the equatorial plane of jupiter
	var w1 = 312.3346 - 0.13279386*t;
	var w1rad = CoordTrans.degToRad(w1);
	var w2 = 100.4411 - 0.03263064*t;
	var w2rad = CoordTrans.degToRad(w2);
	var w3 = 119.1942 - 0.00717703*t;
	var w3rad = CoordTrans.degToRad(w3);
	var w4 = 322.6186 - 0.00175934*t;
	var w4rad = CoordTrans.degToRad(w4);

	//Calculate the Principal inequality in the longitude of Jupiter
	var GAMMA = 0.33033*Math.sin(CoordTrans.degToRad(163.679 + 0.0010512*t)) +
				0.03439*Math.sin(CoordTrans.degToRad(34.486 - 0.0161731*t));

	//Calculate the "phase of free libration"
	var philambda = CoordTrans.degToRad(199.6766 + 0.17379190*t);

	//Calculate the longitude of the node of the equator of Jupiter on the ecliptic
	var psi = CoordTrans.degToRad(316.5182 - 0.00000208*t);

	//Calculate the mean anomalies of Jupiter and Saturn
	var G = CoordTrans.degToRad(30.23756 + 0.0830925701*t + GAMMA);
	var Gdash = CoordTrans.degToRad(31.97853 + 0.0334597339*t);

	//Calculate the longitude of the perihelion of Jupiter
	var PI = CoordTrans.degToRad(13.469942);

	//Calculate the periodic terms in the longitudes of the satellites
	var Sigma1 = 0.47259*Math.sin(2*(l1rad - l2rad)) +
				-0.03478*Math.sin(pi3 - pi4) +
				0.01081*Math.sin(l2rad - 2*l3rad + pi3) +
				0.00738*Math.sin(philambda) +
				0.00713*Math.sin(l2rad - 2*l3rad + pi2) +
				-0.00674*Math.sin(pi1 + pi3 - 2*PI - 2*G) +
				0.00666*Math.sin(l2rad - 2*l3rad + pi4) +
				0.00445*Math.sin(l1rad - pi3) +
				-0.00354*Math.sin(l1rad - l2rad) +
				-0.00317*Math.sin(2*psi - 2*PI) +
				0.00265*Math.sin(l1rad - pi4) +
				-0.00186*Math.sin(G) +
				0.00162*Math.sin(pi2 - pi3) +
				0.00158*Math.sin(4*(l1rad - l2rad)) +
				-0.00155*Math.sin(l1rad - l3rad) +
				-0.00138*Math.sin(psi + w3rad - 2*PI - 2*G) +
				-0.00115*Math.sin(2*(l1rad - 2*l2rad + w2rad)) +
				0.00089*Math.sin(pi2 - pi4) +
				0.00085*Math.sin(l1rad + pi3 - 2*PI - 2*G) +
				0.00083*Math.sin(w2rad - w3rad) +
				0.00053*Math.sin(psi - w2rad);
	var Sigma1rad = CoordTrans.degToRad(Sigma1);

	var Sigma2 = 1.06476*Math.sin(2*(l2rad - l3rad)) +
				0.04256*Math.sin(l1rad - 2*l2rad + pi3) +
				0.03581*Math.sin(l2rad - pi3) +
				0.02395*Math.sin(l1rad - 2*l2rad + pi4) +
				0.01984*Math.sin(l2rad - pi4) +
				-0.01778*Math.sin(philambda) +
				0.01654*Math.sin(l2rad - pi2) +
				0.01334*Math.sin(l2rad - 2*l3rad + pi2) +
				0.01294*Math.sin(pi3 - pi4) +
				-0.01142*Math.sin(l2rad - l3rad) +
				-0.01057*Math.sin(G) +
				-0.00775*Math.sin(2*(psi - PI)) +
				0.00524*Math.sin(2*(l1rad - l2rad)) +
				-0.00460*Math.sin(l1rad - l3rad) +
				0.00316*Math.sin(psi - 2*G + w3rad - 2*PI) +
				-0.00203*Math.sin(pi1 + pi3 - 2*PI - 2*G) +
				0.00146*Math.sin(psi - w3rad) +
				-0.00145*Math.sin(2*G) +
				0.00125*Math.sin(psi - w4rad) +
				-0.00115*Math.sin(l1rad - 2*l3rad + pi3) +
				-0.00094*Math.sin(2*(l2rad - w2rad)) +
				0.00086*Math.sin(2*(l1rad - 2*l2rad + w2rad)) +
				-0.00086*Math.sin(5*Gdash - 2*G + CoordTrans.degToRad(52.225)) +
				-0.00078*Math.sin(l2rad - l4rad) +
				-0.00064*Math.sin(3*l3rad - 7*l4rad + 4*pi4) +
				0.00064*Math.sin(pi1 - pi4) +
				-0.00063*Math.sin(l1rad - 2*l3rad + pi4) +
				0.00058*Math.sin(w3rad - w4rad) +
				0.00056*Math.sin(2*(psi - PI - G)) +
				0.00056*Math.sin(2*(l2rad - l4rad)) +
				0.00055*Math.sin(2*(l1rad - l3rad)) +
				0.00052*Math.sin(3*l3rad - 7*l4rad + pi3 + 3*pi4) +
				-0.00043*Math.sin(l1rad - pi3) +
				0.00041*Math.sin(5*(l2rad - l3rad)) +
				0.00041*Math.sin(pi4 - PI) +
				0.00032*Math.sin(w2rad - w3rad) +
				0.00032*Math.sin(2*(l3rad - G - PI));
	var Sigma2rad = CoordTrans.degToRad(Sigma2);

	var Sigma3 = 0.16490*Math.sin(l3rad - pi3) +
				0.09081*Math.sin(l3rad - pi4) +
				-0.06907*Math.sin(l2rad - l3rad) +
				0.03784*Math.sin(pi3 - pi4) +
				0.01846*Math.sin(2*(l3rad - l4rad)) +
				-0.01340*Math.sin(G) +
				-0.01014*Math.sin(2*(psi - PI)) +
				0.00704*Math.sin(l2rad - 2*l3rad + pi3) +
				-0.00620*Math.sin(l2rad - 2*l3rad + pi2) +
				-0.00541*Math.sin(l3rad - l4rad) +
				0.00381*Math.sin(l2rad - 2*l3rad + pi4) +
				0.00235*Math.sin(psi - w3rad) +
				0.00198*Math.sin(psi - w4rad) +
				0.00176*Math.sin(philambda) +
				0.00130*Math.sin(3*(l3rad - l4rad)) +
				0.00125*Math.sin(l1rad - l3rad) +
				-0.00119*Math.sin(5*Gdash - 2*G + CoordTrans.degToRad(52.225)) +
				0.00109*Math.sin(l1rad - l2rad) +
				-0.00100*Math.sin(3*l3rad - 7*l4rad + 4*pi4) +
				0.00091*Math.sin(w3rad - w4rad) +
				0.00080*Math.sin(3*l3rad - 7*l4rad + pi3 + 3*pi4) +
				-0.00075*Math.sin(2*l2rad - 3*l3rad + pi3) +
				0.00072*Math.sin(pi1 + pi3 - 2*PI - 2*G) +
				0.00069*Math.sin(pi4 - PI) +
				-0.00058*Math.sin(2*l3rad - 3*l4rad + pi4) +
				-0.00057*Math.sin(l3rad - 2*l4rad + pi4) +
				0.00056*Math.sin(l3rad + pi3 - 2*PI - 2*G) +
				-0.00052*Math.sin(l2rad - 2*l3rad + pi1) +
				-0.00050*Math.sin(pi2 - pi3) +
				0.00048*Math.sin(l3rad - 2*l4rad + pi3) +
				-0.00045*Math.sin(2*l2rad - 3*l3rad + pi4) +
				-0.00041*Math.sin(pi2 - pi4) +
				-0.00038*Math.sin(2*G) +
				-0.00037*Math.sin(pi3 - pi4 + w3rad - w4rad) +
				-0.00032*Math.sin(3*l3rad - 7*l4rad + 2*pi3 + 2*pi4) +
				0.00030*Math.sin(4*(l3rad - l4rad)) +
				0.00029*Math.sin(l3rad + pi4 - 2*PI - 2*G) +
				-0.00028*Math.sin(w3rad + psi - 2*PI - 2*G) + 
				0.00026*Math.sin(l3rad - PI - G) +
				0.00024*Math.sin(l2rad - 3*l3rad + 2*l4rad) +
				0.00021*Math.sin(l3rad - PI - G) +
				-0.00021*Math.sin(l3rad - pi2) +
				0.00017*Math.sin(2*(l3rad - pi3));
	var Sigma3rad = CoordTrans.degToRad(Sigma3);
				  
	var Sigma4 = 0.84287*Math.sin(l4rad - pi4) +
				0.03431*Math.sin(pi4 - pi3) +
				-0.03305*Math.sin(2*(psi - PI)) +
				-0.03211*Math.sin(G) +
				-0.01862*Math.sin(l4rad - pi3) +
				0.01186*Math.sin(psi - w4rad) +
				0.00623*Math.sin(l4rad + pi4 - 2*G - 2*PI) +
				0.00387*Math.sin(2*(l4rad - pi4)) +
				-0.00284*Math.sin(5*Gdash - 2*G + CoordTrans.degToRad(52.225)) +
				-0.00234*Math.sin(2*(psi - pi4)) +
				-0.00223*Math.sin(l3rad - l4rad) +
				-0.00208*Math.sin(l4rad - PI) +
				0.00178*Math.sin(psi + w4rad - 2*pi4) +
				0.00134*Math.sin(pi4 - PI) +
				0.00125*Math.sin(2*(l4rad - G - PI)) +
				-0.00117*Math.sin(2*G) +
				-0.00112*Math.sin(2*(l3rad - l4rad)) +
				0.00107*Math.sin(3*l3rad - 7*l4rad + 4*pi4) +
				0.00102*Math.sin(l4rad - G - PI) +
				0.00096*Math.sin(2*l4rad - psi - w4rad) +
				0.00087*Math.sin(2*(psi - w4rad)) +
				-0.00085*Math.sin(3*l3rad - 7*l4rad + pi3 + 3*pi4) +
				0.00085*Math.sin(l3rad - 2*l4rad + pi4) +
				-0.00081*Math.sin(2*(l4rad - psi)) +
				0.00071*Math.sin(l4rad + pi4 - 2*PI - 3*G) +
				0.00061*Math.sin(l1rad - l4rad) +
				-0.00056*Math.sin(psi - w3rad) +
				-0.00054*Math.sin(l3rad - 2*l4rad + pi3) +
				0.00051*Math.sin(l2rad - l4rad) +
				0.00042*Math.sin(2*(psi - G - PI)) +
				0.00039*Math.sin(2*(pi4 - w4rad)) +
				0.00036*Math.sin(psi + PI - pi4 - w4rad) +
				0.00035*Math.sin(2*Gdash - G + CoordTrans.degToRad(188.37)) +
				-0.00035*Math.sin(l4rad - pi4 + 2*PI - 2*psi) +
				-0.00032*Math.sin(l4rad + pi4 - 2*PI - G) +
				0.00030*Math.sin(2*Gdash - 2*G + CoordTrans.degToRad(149.15)) +
				0.00029*Math.sin(3*l3rad - 7*l4rad + 2*pi3 + 2*pi4) +
				0.00028*Math.sin(l4rad - pi4 + 2*psi - 2*PI) +
				-0.00028*Math.sin(2*(l4rad - w4rad)) +
				-0.00027*Math.sin(pi3 - pi4 + w3rad - w4rad) +
				-0.00026*Math.sin(5*Gdash - 3*G + CoordTrans.degToRad(188.37)) +
				0.00025*Math.sin(w4rad - w3rad) +
				-0.00025*Math.sin(l2rad - 3*l3rad + 2*l4rad) +
				-0.00023*Math.sin(3*(l3rad - l4rad)) +
				0.00021*Math.sin(2*l4rad - 2*PI - 3*G) +
				-0.00021*Math.sin(2*l3rad - 3*l4rad + pi4) +
				0.00019*Math.sin(l4rad - pi4 - G) +
				-0.00019*Math.sin(2*l4rad - pi3 - pi4) +
				-0.00018*Math.sin(l4rad - pi4 + G) +
				-0.00016*Math.sin(l4rad + pi3 - 2*PI - 2*G);
	//There is no need to calculate a Sigma4rad as it is not used in any subsequent trignometric functions
				  
	details.Satellite1.MeanLongitude = CoordTrans.mapTo0To360Range(l1);
	details.Satellite1.TrueLongitude = CoordTrans.mapTo0To360Range(l1 + Sigma1);
	var L1 = CoordTrans.degToRad(details.Satellite1.TrueLongitude);

	details.Satellite2.MeanLongitude = CoordTrans.mapTo0To360Range(l2);
	details.Satellite2.TrueLongitude = CoordTrans.mapTo0To360Range(l2 + Sigma2);
	var L2 = CoordTrans.degToRad(details.Satellite2.TrueLongitude);

	details.Satellite3.MeanLongitude = CoordTrans.mapTo0To360Range(l3);
	details.Satellite3.TrueLongitude = CoordTrans.mapTo0To360Range(l3 + Sigma3);
	var L3 = CoordTrans.degToRad(details.Satellite3.TrueLongitude);

	details.Satellite4.MeanLongitude = CoordTrans.mapTo0To360Range(l4);
	details.Satellite4.TrueLongitude = CoordTrans.mapTo0To360Range(l4 + Sigma4);
	var L4 = CoordTrans.degToRad(details.Satellite4.TrueLongitude);

	//Calculate the periodic terms in the latitudes of the satellites
	var B1 = Math.atan(0.0006393*Math.sin(L1 - w1rad) +
				0.0001825*Math.sin(L1 - w2rad) +
				0.0000329*Math.sin(L1 - w3rad) +
				-0.0000311*Math.sin(L1 - psi) +
				0.0000093*Math.sin(L1 - w4rad) +
				0.0000075*Math.sin(3*L1 - 4*l2rad - 1.9927*Sigma1rad + w2rad) +
				0.0000046*Math.sin(L1 + psi - 2*PI - 2*G));
	details.Satellite1.EquatorialLatitude = CoordTrans.radToDeg(B1);

	var B2 = Math.atan(0.0081004*Math.sin(L2 - w2rad) +
				0.0004512*Math.sin(L2 - w3rad) +
				-0.0003284*Math.sin(L2 - psi) +
				0.0001160*Math.sin(L2 - w4rad) + 
				0.0000272*Math.sin(l1rad - 2*l3rad + 1.0146*Sigma2rad + w2rad) +
				-0.0000144*Math.sin(L2 - w1rad) +
				0.0000143*Math.sin(L2 + psi - 2*PI - 2*G) +
				0.0000035*Math.sin(L2 - psi + G) +
				-0.0000028*Math.sin(l1rad - 2*l3rad + 1.0146*Sigma2rad + w3rad));
	details.Satellite2.EquatorialLatitude = CoordTrans.radToDeg(B2);

	var B3 = Math.atan(0.0032402*Math.sin(L3 - w3rad) +
				-0.0016911*Math.sin(L3 - psi) +
				0.0006847*Math.sin(L3 - w4rad) +
				-0.0002797*Math.sin(L3 - w2rad) +
				0.0000321*Math.sin(L3 + psi - 2*PI - 2*G) +
				0.0000051*Math.sin(L3 - psi + G) +
				-0.0000045*Math.sin(L3 - psi - G) +
				-0.0000045*Math.sin(L3 + psi - 2*PI) +
				0.0000037*Math.sin(L3 + psi - 2*PI - 3*G) +
				0.0000030*Math.sin(2*l2rad - 3*L3 + 4.03*Sigma3rad + w2rad) +
				-0.0000021*Math.sin(2*l2rad - 3*L3 + 4.03*Sigma3rad + w3rad));
	details.Satellite3.EquatorialLatitude = CoordTrans.radToDeg(B3);

	var B4 = Math.atan(-0.0076579*Math.sin(L4 - psi) +
				0.0044134*Math.sin(L4 - w4rad) +
				-0.0005112*Math.sin(L4 - w3rad) +
				0.0000773*Math.sin(L4 + psi - 2*PI - 2*G) +
				0.0000104*Math.sin(L4 - psi + G) +
				-0.0000102*Math.sin(L4 - psi - G) +
				0.0000088*Math.sin(L4 + psi - 2*PI - 3*G) +
				-0.0000038*Math.sin(L4 + psi - 2*PI - G));
	details.Satellite4.EquatorialLatitude = CoordTrans.radToDeg(B4);

	//Calculate the periodic terms for the radius vector
	details.Satellite1.r = 5.90569 * (1 + (-0.0041339*Math.cos(2*(l1rad - l2rad)) +
										-0.0000387*Math.cos(l1rad - pi3) +
										-0.0000214*Math.cos(l1rad - pi4) +
										0.0000170*Math.cos(l1rad - l2rad) +
										-0.0000131*Math.cos(4*(l1rad - l2rad)) +
										0.0000106*Math.cos(l1rad - l3rad) +
										-0.0000066*Math.cos(l1rad + pi3 - 2*PI - 2*G)));

	details.Satellite2.r = 9.39657 * (1 + (0.0093848*Math.cos(l1rad - l2rad) +
										-0.0003116*Math.cos(l2rad - pi3) +
										-0.0001744*Math.cos(l2rad - pi4) +
										-0.0001442*Math.cos(l2rad - pi2) +
										0.0000553*Math.cos(l2rad - l3rad) +
										0.0000523*Math.cos(l1rad - l3rad) +
										-0.0000290*Math.cos(2*(l1rad - l2rad)) +
										0.0000164*Math.cos(2*(l2rad - w2rad)) +
										0.0000107*Math.cos(l1rad - 2*l3rad + pi3) +
										-0.0000102*Math.cos(l2rad - pi1) +
										-0.0000091*Math.cos(2*(l1rad - l3rad))));

	details.Satellite3.r = 14.98832 * (1 + (-0.0014388*Math.cos(l3rad - pi3) +
										-0.0007919*Math.cos(l3rad - pi4) +
										0.0006342*Math.cos(l2rad - l3rad) +
										-0.0001761*Math.cos(2*(l3rad - l4rad)) +
										0.0000294*Math.cos(l3rad - l4rad) +
										-0.0000156*Math.cos(3*(l3rad - l4rad)) +
										0.0000156*Math.cos(l1rad - l3rad) +
										-0.0000153*Math.cos(l1rad - l2rad) +
										0.0000070*Math.cos(2*l2rad - 3*l3rad + pi3) +
										-0.0000051*Math.cos(l3rad + pi3 - 2*PI - 2*G)));

	details.Satellite4.r = 26.36273 * (1 + (-0.0073546*Math.cos(l4rad - pi4) +
										0.0001621*Math.cos(l4rad - pi3) +
										0.0000974*Math.cos(l3rad - l4rad) +
										-0.0000543*Math.cos(l4rad + pi4 - 2*PI - 2*G) +
										-0.0000271*Math.cos(2*(l4rad - pi4)) +
										0.0000182*Math.cos(l4rad - PI) +
										0.0000177*Math.cos(2*(l3rad - l4rad)) +
										-0.0000167*Math.cos(2*l4rad - psi - w4rad) +
										0.0000167*Math.cos(psi - w4rad) +
										-0.0000155*Math.cos(2*(l4rad - PI - G)) +
										0.0000142*Math.cos(2*(l4rad - psi)) +
										0.0000105*Math.cos(l1rad - l4rad) +
										0.0000092*Math.cos(l2rad - l4rad) +
										-0.0000089*Math.cos(l4rad - PI - G) +
										-0.0000062*Math.cos(l4rad + pi4 - 2*PI - 3*G) +
										0.0000048*Math.cos(2*(l4rad - w4rad))));

	//Calculate T0
	var T0 = (JD - 2433282.423)/36525;

	//Calculate the precession in longitude from Epoch B1950 to the date
	var P = CoordTrans.degToRad(1.3966626*T0 + 0.0003088*T0*T0);

	//Add it to L1 - L4 and psi
	L1 += P;
	details.Satellite1.TropicalLongitude = CoordTrans.mapTo0To360Range(CoordTrans.radToDeg(L1));
	L2 += P;
	details.Satellite2.TropicalLongitude = CoordTrans.mapTo0To360Range(CoordTrans.radToDeg(L2));
	L3 += P;
	details.Satellite3.TropicalLongitude = CoordTrans.mapTo0To360Range(CoordTrans.radToDeg(L3));
	L4 += P;
	details.Satellite4.TropicalLongitude = CoordTrans.mapTo0To360Range(CoordTrans.radToDeg(L4));
	psi += P;

	//Calculate the inclination of Jupiter's axis of rotation on the orbital plane
	var T = (JD - 2415020.5)/36525;
	var I = 3.120262 + 0.0006*T;
	var Irad = CoordTrans.degToRad(I);

	var X1 = details.Satellite1.r*Math.cos(L1 - psi)*Math.cos(B1);
	var X2 = details.Satellite2.r*Math.cos(L2 - psi)*Math.cos(B2);
	var X3 = details.Satellite3.r*Math.cos(L3 - psi)*Math.cos(B3);
	var X4 = details.Satellite4.r*Math.cos(L4 - psi)*Math.cos(B4);
	var X5 = 0;

	var Y1 = details.Satellite1.r*Math.sin(L1 - psi)*Math.cos(B1);
	var Y2 = details.Satellite2.r*Math.sin(L2 - psi)*Math.cos(B2);
	var Y3 = details.Satellite3.r*Math.sin(L3 - psi)*Math.cos(B3);
	var Y4 = details.Satellite4.r*Math.sin(L4 - psi)*Math.cos(B4);
	var Y5 = 0;

	var Z1 = details.Satellite1.r*Math.sin(B1);
	var Z2 = details.Satellite2.r*Math.sin(B2);
	var Z3 = details.Satellite3.r*Math.sin(B3);
	var Z4 = details.Satellite4.r*Math.sin(B4);
	var Z5 = 1;

	//Now do the rotations, first for the ficticious 5th satellite, so that we can calculate D
	var omega = CoordTrans.degToRad(ElementsPlanetaryOrbit.jupiterLongitudeAscendingNode(JD));
	var i = CoordTrans.degToRad(ElementsPlanetaryOrbit.jupiterInclination(JD));
	var Rot = this.rotations(X5, Y5, Z5, Irad, psi, i, omega, lambda0, beta0);
	var D = Math.atan2(Rot.A6, Rot.C6);

	//Now calculate the values for satellite 1
	var Rot = this.rotations(X1, Y1, Z1, Irad, psi, i, omega, lambda0, beta0);
	details.Satellite1.TrueRectangularCoordinates.X = Rot.A6*Math.cos(D) - Rot.C6*Math.sin(D);
	details.Satellite1.TrueRectangularCoordinates.Y = Rot.A6*Math.sin(D) + Rot.C6*Math.cos(D);
	details.Satellite1.TrueRectangularCoordinates.Z = Rot.B6;

	//Now calculate the values for satellite 2
	var Rot = this.rotations(X2, Y2, Z2, Irad, psi, i, omega, lambda0, beta0);
	details.Satellite2.TrueRectangularCoordinates.X = Rot.A6*Math.cos(D) - Rot.C6*Math.sin(D);
	details.Satellite2.TrueRectangularCoordinates.Y = Rot.A6*Math.sin(D) + Rot.C6*Math.cos(D);
	details.Satellite2.TrueRectangularCoordinates.Z = Rot.B6;

	//Now calculate the values for satellite 3
	var Rot = this.rotations(X3, Y3, Z3, Irad, psi, i, omega, lambda0, beta0);
	details.Satellite3.TrueRectangularCoordinates.X = Rot.A6*Math.cos(D) - Rot.C6*Math.sin(D);
	details.Satellite3.TrueRectangularCoordinates.Y = Rot.A6*Math.sin(D) + Rot.C6*Math.cos(D);
	details.Satellite3.TrueRectangularCoordinates.Z = Rot.B6;

	//And finally for satellite 4
	var Rot = this.rotations(X4, Y4, Z4, Irad, psi, i, omega, lambda0, beta0);
	details.Satellite4.TrueRectangularCoordinates.X = Rot.A6*Math.cos(D) - Rot.C6*Math.sin(D);
	details.Satellite4.TrueRectangularCoordinates.Y = Rot.A6*Math.sin(D) + Rot.C6*Math.cos(D);
	details.Satellite4.TrueRectangularCoordinates.Z = Rot.B6;

	//apply the differential light-time correction
	details.Satellite1.ApparentRectangularCoordinates.X = details.Satellite1.TrueRectangularCoordinates.X + Math.abs(details.Satellite1.TrueRectangularCoordinates.Z)/17295*Math.sqrt(1 - (details.Satellite1.TrueRectangularCoordinates.X/details.Satellite1.r)*(details.Satellite1.TrueRectangularCoordinates.X/details.Satellite1.r));
	details.Satellite1.ApparentRectangularCoordinates.Y = details.Satellite1.TrueRectangularCoordinates.Y;
	details.Satellite1.ApparentRectangularCoordinates.Z = details.Satellite1.TrueRectangularCoordinates.Z;

	details.Satellite2.ApparentRectangularCoordinates.X = details.Satellite2.TrueRectangularCoordinates.X + Math.abs(details.Satellite2.TrueRectangularCoordinates.Z)/21819*Math.sqrt(1 - (details.Satellite2.TrueRectangularCoordinates.X/details.Satellite2.r)*(details.Satellite2.TrueRectangularCoordinates.X/details.Satellite2.r));
	details.Satellite2.ApparentRectangularCoordinates.Y = details.Satellite2.TrueRectangularCoordinates.Y;
	details.Satellite2.ApparentRectangularCoordinates.Z = details.Satellite2.TrueRectangularCoordinates.Z;

	details.Satellite3.ApparentRectangularCoordinates.X = details.Satellite3.TrueRectangularCoordinates.X + Math.abs(details.Satellite3.TrueRectangularCoordinates.Z)/27558*Math.sqrt(1 - (details.Satellite3.TrueRectangularCoordinates.X/details.Satellite3.r)*(details.Satellite3.TrueRectangularCoordinates.X/details.Satellite3.r));
	details.Satellite3.ApparentRectangularCoordinates.Y = details.Satellite3.TrueRectangularCoordinates.Y;
	details.Satellite3.ApparentRectangularCoordinates.Z = details.Satellite3.TrueRectangularCoordinates.Z;

	details.Satellite4.ApparentRectangularCoordinates.X = details.Satellite4.TrueRectangularCoordinates.X + Math.abs(details.Satellite4.TrueRectangularCoordinates.Z)/36548*Math.sqrt(1 - (details.Satellite4.TrueRectangularCoordinates.X/details.Satellite4.r)*(details.Satellite4.TrueRectangularCoordinates.X/details.Satellite4.r));
	details.Satellite4.ApparentRectangularCoordinates.Y = details.Satellite4.TrueRectangularCoordinates.Y;
	details.Satellite4.ApparentRectangularCoordinates.Z = details.Satellite4.TrueRectangularCoordinates.Z;

	//apply the perspective effect correction
	var W = DELTA/(DELTA + details.Satellite1.TrueRectangularCoordinates.Z/2095);
	details.Satellite1.ApparentRectangularCoordinates.X *= W;
	details.Satellite1.ApparentRectangularCoordinates.Y *= W;

	W = DELTA/(DELTA + details.Satellite2.TrueRectangularCoordinates.Z/2095);
	details.Satellite2.ApparentRectangularCoordinates.X *= W;
	details.Satellite2.ApparentRectangularCoordinates.Y *= W;

	W = DELTA/(DELTA + details.Satellite3.TrueRectangularCoordinates.Z/2095);
	details.Satellite3.ApparentRectangularCoordinates.X *= W;
	details.Satellite3.ApparentRectangularCoordinates.Y *= W;

	W = DELTA/(DELTA + details.Satellite4.TrueRectangularCoordinates.Z/2095);
	details.Satellite4.ApparentRectangularCoordinates.X *= W;
	details.Satellite4.ApparentRectangularCoordinates.Y *= W;

	return details;
}

GalileanMoons.calculate = function(JD)
{
	//Calculate the position of the Sun
	var sunlong = Sun.geometricEclipticLongitude(JD);
	var sunlongrad = CoordTrans.degToRad(sunlong);
	var beta = Sun.geometricEclipticLatitude(JD);
	var betarad = CoordTrans.degToRad(beta);
	var R = Earth.radiusVector(JD);

	//Calculate the the light travel time from Jupiter to the Earth
	var DELTA = 5;
	var PreviousEarthLightTravelTime = 0;
	var EarthLightTravelTime = Elliptical.distanceToLightTime(DELTA);
	var JD1 = JD - EarthLightTravelTime;
	var bIterate = true;
	var x;
	var y;
	var z;
	while (bIterate)
	{
		//Calculate the position of Jupiter
		var l = Jupiter.eclipticLongitude(JD1);
		var lrad = CoordTrans.degToRad(l);
		var b = Jupiter.eclipticLatitude(JD1);
		var brad = CoordTrans.degToRad(b);
		var r = Jupiter.radiusVector(JD1);

		x = r*Math.cos(brad)*Math.cos(lrad) + R*Math.cos(sunlongrad);
		y = r*Math.cos(brad)*Math.sin(lrad) + R*Math.sin(sunlongrad);
		z = r*Math.sin(brad) + R*Math.sin(betarad);
		DELTA = Math.sqrt(x*x + y*y + z*z);
		EarthLightTravelTime = Elliptical.distanceToLightTime(DELTA);

		//Prepare for the next loop around
		bIterate = (Math.abs(EarthLightTravelTime - PreviousEarthLightTravelTime) > 2E-6); //2E-6 corresponds to 0.17 of a second
		if (bIterate)
		{
			JD1 = JD - EarthLightTravelTime;
			PreviousEarthLightTravelTime = EarthLightTravelTime;
		}
	}

	//Calculate the details as seen from the earth
	var details1 = this.calculateHelper(JD, sunlongrad, betarad, R);
	this.fillInPhenomenaDetails(details1.Satellite1);
	this.fillInPhenomenaDetails(details1.Satellite2);
	this.fillInPhenomenaDetails(details1.Satellite3);
	this.fillInPhenomenaDetails(details1.Satellite4);

	//Calculate the the light travel time from Jupiter to the Sun
	JD1 = JD - EarthLightTravelTime;
	var l = Jupiter.eclipticLongitude(JD1);
	var lrad = CoordTrans.degToRad(l);
	var b = Jupiter.eclipticLatitude(JD1);
	var brad = CoordTrans.degToRad(b);
	var r = Jupiter.radiusVector(JD1);
	x = r*Math.cos(brad)*Math.cos(lrad);
	y = r*Math.cos(brad)*Math.sin(lrad);
	z = r*Math.sin(brad);
	DELTA = Math.sqrt(x*x + y*y + z*z);
	var SunLightTravelTime = Elliptical.distanceToLightTime(DELTA);

	//Calculate the details as seen from the Sun
	var details2 = this.calculateHelper(JD + SunLightTravelTime - EarthLightTravelTime, sunlongrad, betarad, 0);
	this.fillInPhenomenaDetails(details2.Satellite1);
	this.fillInPhenomenaDetails(details2.Satellite2);
	this.fillInPhenomenaDetails(details2.Satellite3);
	this.fillInPhenomenaDetails(details2.Satellite4);

	//Finally transfer the required values from details2 to details1
	details1.Satellite1.bInEclipse = details2.Satellite1.bInOccultation;
	details1.Satellite2.bInEclipse = details2.Satellite2.bInOccultation;
	details1.Satellite3.bInEclipse = details2.Satellite3.bInOccultation;
	details1.Satellite4.bInEclipse = details2.Satellite4.bInOccultation;
	details1.Satellite1.bInShadowTransit = details2.Satellite1.bInTransit;
	details1.Satellite2.bInShadowTransit = details2.Satellite2.bInTransit;
	details1.Satellite3.bInShadowTransit = details2.Satellite3.bInTransit;
	details1.Satellite4.bInShadowTransit = details2.Satellite4.bInTransit;

	return details1;
}

GalileanMoons.rotations = function(X, Y, Z, I, psi, i, omega, lambda0, beta0)
{
	// Return value
	var Rotation = {};

	var phi = psi - omega;

	//Rotation towards Jupiter's orbital plane
	var A1 = X;
	var B1 = Y*Math.cos(I) - Z*Math.sin(I);
	var C1 = Y*Math.sin(I) + Z*Math.cos(I);

	//Rotation towards the ascending node of the orbit of jupiter
	var A2 = A1*Math.cos(phi) - B1*Math.sin(phi);
	var B2 = A1*Math.sin(phi) + B1*Math.cos(phi);
	var C2 = C1;

	//Rotation towards the plane of the ecliptic
	var A3 = A2;
	var B3 = B2*Math.cos(i) - C2*Math.sin(i);
	var C3 = B2*Math.sin(i) + C2*Math.cos(i);

	//Rotation towards the vernal equinox
	var A4 = A3*Math.cos(omega) - B3*Math.sin(omega);
	var B4 = A3*Math.sin(omega) + B3*Math.cos(omega);
	var C4 = C3;

	var A5 = A4*Math.sin(lambda0) - B4*Math.cos(lambda0);
	var B5 = A4*Math.cos(lambda0) + B4*Math.sin(lambda0);
	var C5 = C4;

	Rotation.A6 = A5;
	Rotation.B6 = C5*Math.sin(beta0) + B5*Math.cos(beta0);
	Rotation.C6 = C5*Math.cos(beta0) - B5*Math.sin(beta0);

	return Rotation
}

GalileanMoons.fillInPhenomenaDetails = function(detail)
{
	var Y1 = 1.071374 * detail.ApparentRectangularCoordinates.Y;

	var r = Y1*Y1 + detail.ApparentRectangularCoordinates.X*detail.ApparentRectangularCoordinates.X;

	if (r < 1)
	{
		if (detail.ApparentRectangularCoordinates.Z < 0)
		{
			//Satellite nearer to Earth than Jupiter, so it must be a transit not an occultation
			detail.bInTransit = true;
			detail.bInOccultation = false;
		}
		else
		{
			detail.bInTransit = false;
			detail.bInOccultation = true;
		}
	}
	else
	{
		detail.bInTransit = false;
		detail.bInOccultation = false;
	}
}
