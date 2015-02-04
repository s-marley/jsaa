function Elliptical() {}

Elliptical.planetCalculate = function( JD, object ){
	
	var JD0 = JD;
	var L0 = 0;
	var B0 = 0;
	var R0 = 0;
	var cosB0 = 0;
	if (object !== "SUN")
	{
		L0 = Earth.eclipticLongitude(JD0);
		B0 = Earth.eclipticLatitude(JD0);
		R0 = Earth.radiusVector(JD0);		
		L0 = CoordTrans.degToRad(L0);
		B0 = CoordTrans.degToRad(B0);
		cosB0 = Math.cos(B0);
	}

	var L = 0;
	var B = 0;
	var R = 0;
	switch (object)
	{
		case 'SUN':
		{
			L = Sun.geometricEclipticLongitude(JD0);
			B = Sun.geometricEclipticLatitude(JD0);
			R = Earth.radiusVector(JD0);
			break;
		}
		case 'MERCURY':
		{
			L = Mercury.eclipticLongitude(JD0);
			B = Mercury.eclipticLatitude(JD0);
			R = Mercury.radiusVector(JD0);
			break;
		}
		case 'VENUS':
		{
			L = Venus.eclipticLongitude(JD0);
			B = Venus.eclipticLatitude(JD0);
			R = Venus.radiusVector(JD0);
			break;
		}
		case 'MARS':
		{
			L = Mars.eclipticLongitude(JD0);
			B = Mars.eclipticLatitude(JD0);
			R = Mars.radiusVector(JD0);
			break;
		}
		case 'JUPITER':
		{
			L = Jupiter.eclipticLongitude(JD0);
			B = Jupiter.eclipticLatitude(JD0);
			R = Jupiter.radiusVector(JD0);
			break;
		}
		case 'SATURN':
		{
			L = Saturn.eclipticLongitude(JD0);
			B = Saturn.eclipticLatitude(JD0);
			R = Saturn.radiusVector(JD0);
			break;
		}
		case 'URANUS':
		{
			L = Uranus.eclipticLongitude(JD0);
			B = Uranus.eclipticLatitude(JD0);
			R = Uranus.radiusVector(JD0);
			break;
		}
		case 'NEPTUNE':
		{
			L = Neptune.eclipticLongitude(JD0);
			B = Neptune.eclipticLatitude(JD0);
			R = Neptune.radiusVector(JD0);
			break;
		}
		case 'PLUTO':
		{
			L = Pluto.eclipticLongitude(JD0);
			B = Pluto.eclipticLatitude(JD0);
			R = Pluto.radiusVector(JD0);
			break;
		}
		default:
		{
			break;
		}
	}

	var bRecalc = true;
	var bFirstRecalc = true;
	var LPrevious = 0;
	var BPrevious = 0;
	var RPrevious = 0;
	while (bRecalc)
	{
		switch (object)
		{
			case 'SUN':
			{
				L = Sun.geometricEclipticLongitude(JD0);
				B = Sun.geometricEclipticLatitude(JD0);
				R = Earth.radiusVector(JD0);
				break;
			}
			case 'MERCURY':
			{
				L = Mercury.eclipticLongitude(JD0);
				B = Mercury.eclipticLatitude(JD0);
				R = Mercury.radiusVector(JD0);
				break;
			}
			case 'VENUS':
			{
				L = Venus.eclipticLongitude(JD0);
				B = Venus.eclipticLatitude(JD0);
				R = Venus.radiusVector(JD0);
				break;
			}
			case 'MARS':
			{
				L = Mars.eclipticLongitude(JD0);
				B = Mars.eclipticLatitude(JD0);
				R = Mars.radiusVector(JD0);
				break;
			}
			case 'JUPITER':
			{
				L = Jupiter.eclipticLongitude(JD0);
				B = Jupiter.eclipticLatitude(JD0);
				R = Jupiter.radiusVector(JD0);
				break;
			}
			case 'SATURN':
			{
				L = Saturn.eclipticLongitude(JD0);
				B = Saturn.eclipticLatitude(JD0);
				R = Saturn.radiusVector(JD0);
				break;
			}
			case 'URANUS':
			{
				L = Uranus.eclipticLongitude(JD0);
				B = Uranus.eclipticLatitude(JD0);
				R = Uranus.radiusVector(JD0);
				break;
			}
			case 'NEPTUNE':
			{
				L = Neptune.eclipticLongitude(JD0);
				B = Neptune.eclipticLatitude(JD0);
				R = Neptune.radiusVector(JD0);
				break;
			}
			case 'PLUTO':
			{
				L = Pluto.eclipticLongitude(JD0);
				B = Pluto.eclipticLatitude(JD0);
				R = Pluto.radiusVector(JD0);
				break;
			}
			default:
			{
				break;
			}
		}

		if (!bFirstRecalc)
		{
			bRecalc = ((Math.abs(L - LPrevious) > 0.000001) || (Math.abs(B - BPrevious) > 0.000001) || (Math.abs(R - RPrevious) > 0.000001));
			LPrevious = L;
			BPrevious = B;
			RPrevious = R;
		}
		else
			bFirstRecalc = false;

		//Calculate the new value
		if (bRecalc)
		{
			var distance;
			if (object !== 'SUN')
			{
				var Lrad = CoordTrans.degToRad(L);
				var Brad = CoordTrans.degToRad(B);
				var cosB = Math.cos(Brad);
				var cosL = Math.cos(Lrad);
				var x = R * cosB * cosL - R0 * cosB0 * Math.cos(L0);
				var y = R * cosB * Math.sin(Lrad) - R0 * cosB0 * Math.sin(L0);
				var z = R * Math.sin(Brad) - R0 * Math.sin(B0);
				distance = Math.sqrt(x*x + y*y + z*z);
			}
			else
			distance = R; //Distance to the sun from the earth is in fact the radius vector
			
			//Prepare for the next loop around
			JD0 = JD - this.distanceToLightTime(distance);
		}
  	}

	var Lrad = CoordTrans.degToRad(L);
	var Brad = CoordTrans.degToRad(B);
	var cosB = Math.cos(Brad);
	var cosL = Math.cos(Lrad);
	var x = R * cosB * cosL - R0 * cosB0 * Math.cos(L0);
	var y = R * cosB * Math.sin(Lrad) - R0 * cosB0 * Math.sin(L0);
	var z = R * Math.sin(Brad) - R0 * Math.sin(B0);
	var x2 = x*x;
	var y2 = y*y;

	var details = {};

	details.ApparentGeocentricLatitude = CoordTrans.radToDeg(Math.atan2(z, Math.sqrt(x2 + y2)));
	details.ApparentGeocentricDistance = Math.sqrt(x2 + y2 + z*z);
	details.ApparentGeocentricLongitude = CoordTrans.mapTo0To360Range(CoordTrans.radToDeg(Math.atan2(y, x)));
	details.ApparentLightTime = this.distanceToLightTime(details.ApparentGeocentricDistance);

	//Adjust for Aberration
	var aberration = Aberration.eclipticAberration(details.ApparentGeocentricLongitude, details.ApparentGeocentricLatitude, JD);
	details.ApparentGeocentricLongitude += aberration.X;
	details.ApparentGeocentricLatitude += aberration.Y;

	//convert to the FK5 system
	var DeltaLong = FK5.correctionInLongitude(details.ApparentGeocentricLongitude, details.ApparentGeocentricLatitude, JD);
	details.ApparentGeocentricLatitude += FK5.correctionInLatitude(details.ApparentGeocentricLongitude, JD);
	details.ApparentGeocentricLongitude += DeltaLong;

	//Correct for nutation
	var NutationInLongitude = Nutation.nutationInLongitude(JD);
	var Epsilon = Nutation.trueObliquityOfEcliptic(JD);
	details.ApparentGeocentricLongitude += CoordTrans.DMSToDegrees(0, 0, NutationInLongitude);

	//Convert to RA and Dec
	var ApparentEqu = CoordTrans.ecliptic2Equatorial(details.ApparentGeocentricLongitude, details.ApparentGeocentricLatitude, Epsilon);
	details.ApparentGeocentricRA = ApparentEqu.X;
	details.ApparentGeocentricDeclination = ApparentEqu.Y;

	return details;
}

Elliptical.distanceToLightTime = function(Distance) {
	return Distance * 0.0057755183;
}

