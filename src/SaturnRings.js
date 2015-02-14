function SaturnRings() {}

SaturnRings.calculate = function(JD)
{
	//What will be the return value
	var details = {};

	var T = (JD - 2451545) / 36525;
	var T2 = T*T;

	//Step 1. Calculate the inclination of the plane of the ring and the longitude of the ascending node referred to the ecliptic and mean equinox of the date
	var i = 28.075216 - 0.012998*T + 0.000004*T2;
	var irad = CoordTrans.degToRad(i);
	var omega = 169.508470 + 1.394681*T + 0.000412*T2;
	var omegarad = CoordTrans.degToRad(omega);

	//Step 2. Calculate the heliocentric longitude, latitude and radius vector of the Earth in the FK5 system
	var l0 = Earth.eclipticLongitude(JD);
	var b0 = Earth.eclipticLatitude(JD);
	l0 += FK5.correctionInLongitude(l0, b0, JD);
	var l0rad = CoordTrans.degToRad(l0);
	b0 += FK5.correctionInLatitude(l0, JD);
	var b0rad = CoordTrans.degToRad(b0);
	var R = Earth.radiusVector(JD);

	//Step 3. Calculate the corresponding coordinates l,b,r for Saturn but for the instance t-lightraveltime
	var DELTA = 9;
	var PreviousEarthLightTravelTime = 0;
	var EarthLightTravelTime = Elliptical.distanceToLightTime(DELTA);
	var JD1 = JD - EarthLightTravelTime;
	var bIterate = true;
	var x = 0;
	var y = 0;
	var z = 0;
	var l = 0;
	var b = 0;
	var r = 0;
	while (bIterate)
	{
		//Calculate the position of Saturn
		l = Saturn.eclipticLongitude(JD1);
		b = Saturn.eclipticLatitude(JD1);
		l += FK5.correctionInLongitude(l, b, JD1);
		b += FK5.correctionInLatitude(l, JD1);

		var lrad = CoordTrans.degToRad(l);
		var brad = CoordTrans.degToRad(b);
		r = Saturn.radiusVector(JD1);

		//Step 4
		x = r*Math.cos(brad)*Math.cos(lrad) - R*Math.cos(l0rad);
		y = r*Math.cos(brad)*Math.sin(lrad) - R*Math.sin(l0rad);
		z = r*Math.sin(brad) - R*Math.sin(b0rad);
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

	//Step 5. Calculate Saturn's geocentric Longitude and Latitude
	var lambda = Math.atan2(y, x);
	var beta = Math.atan2(z, Math.sqrt(x*x + y*y));

	//Step 6. Calculate B, a and b
	details.B = Math.asin(Math.sin(irad)*Math.cos(beta)*Math.sin(lambda - omegarad) - Math.cos(irad)*Math.sin(beta));
	details.a = 375.35 / DELTA;
	details.b = details.a * Math.sin(Math.abs(details.B));
	details.B = CoordTrans.radToDeg(details.B);

	//Step 7. Calculate the longitude of the ascending node of Saturn's orbit
	var N = 113.6655 + 0.8771*T;
	var Nrad = CoordTrans.degToRad(N);
	var ldash = l - 0.01759/r;
	var ldashrad = CoordTrans.degToRad(ldash);
	var bdash = b - 0.000764*Math.cos(ldashrad - Nrad)/r;
	var bdashrad = CoordTrans.degToRad(bdash);

	//Step 8. Calculate Bdash
	details.Bdash = CoordTrans.radToDeg(Math.asin(Math.sin(irad)*Math.cos(bdashrad)*Math.sin(ldashrad - omegarad) - Math.cos(irad)*Math.sin(bdashrad)));

	//Step 9. Calculate DeltaU
	var U1 = Math.atan2(Math.sin(irad)*Math.sin(bdashrad) + Math.cos(irad)*Math.cos(bdashrad)*Math.sin(ldashrad - omegarad), Math.cos(bdashrad)*Math.cos(ldashrad - omegarad));
	var U2 = Math.atan2(Math.sin(irad)*Math.sin(beta) + Math.cos(irad)*Math.cos(beta)*Math.sin(lambda - omegarad), Math.cos(beta)*Math.cos(lambda - omegarad));
	details.DeltaU = CoordTrans.radToDeg(Math.abs(U1 - U2));

	//Step 10. Calculate the Nutations 
	var Obliquity = Nutation.trueObliquityOfEcliptic(JD);
	var NutationInLongitude = Nutation.nutationInLongitude(JD);

	//Step 11. Calculate the Ecliptical longitude and latitude of the northern pole of the ring plane
	var lambda0 = omega - 90;
	var beta0 = 90 - i;

	//Step 12. Correct lambda and beta for the aberration of Saturn
	lambda += CoordTrans.degToRad(0.005693*Math.cos(l0rad - lambda)/Math.cos(beta));
	beta += CoordTrans.degToRad(0.005693*Math.sin(l0rad - lambda)*Math.sin(beta));

	//Step 13. Add nutation in longitude to lambda0 and lambda
	//var NLrad = CoordTrans.degToRad(NutationInLongitude/3600);
	lambda = CoordTrans.radToDeg(lambda);
	lambda += NutationInLongitude/3600;
	lambda = CoordTrans.mapTo0To360Range(lambda);
	lambda0 += NutationInLongitude/3600;
	lambda0 = CoordTrans.mapTo0To360Range(lambda0);

	//Step 14. Convert to equatorial coordinates
	beta = CoordTrans.radToDeg(beta);
	// CAA2DCoordinate 
	var GeocentricEclipticSaturn = CoordTrans.ecliptic2Equatorial(lambda, beta, Obliquity);  
	var alpha = CoordTrans.hoursToRadians(GeocentricEclipticSaturn.X);
	var delta = CoordTrans.degToRad(GeocentricEclipticSaturn.Y);
	//CAA2DCoordinate
	var GeocentricEclipticNorthPole = CoordTrans.ecliptic2Equatorial(lambda0, beta0, Obliquity);  
	var alpha0 = CoordTrans.hoursToRadians(GeocentricEclipticNorthPole.X);
	var delta0 = CoordTrans.degToRad(GeocentricEclipticNorthPole.Y);

	//Step 15. Calculate the Position angle
	details.P = CoordTrans.radToDeg(Math.atan2(Math.cos(delta0)*Math.sin(alpha0 - alpha), Math.sin(delta0)*Math.cos(delta) - Math.cos(delta0)*Math.sin(delta)*Math.cos(alpha0 - alpha)));

	return details;
}
