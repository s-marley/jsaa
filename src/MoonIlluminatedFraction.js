function MoonIlluminatedFraction() {}

MoonIlluminatedFraction.geocentricElongation = function(ObjectAlpha,  ObjectDelta,  SunAlpha,  SunDelta)
{
	//Convert the RA's to radians
	ObjectAlpha = CoordTrans.degToRad(ObjectAlpha*15);
	SunAlpha = CoordTrans.degToRad(SunAlpha*15);

	//Convert the declinations to radians
	ObjectDelta = CoordTrans.degToRad(ObjectDelta);
	SunDelta = CoordTrans.degToRad(SunDelta);

	//Return the result
	return CoordTrans.radToDeg(Math.acos(Math.sin(SunDelta)*Math.sin(ObjectDelta) + Math.cos(SunDelta)*Math.cos(ObjectDelta)*Math.cos(SunAlpha - ObjectAlpha)));
}

MoonIlluminatedFraction.phaseAngle = function(GeocentricElongation,  EarthObjectDistance,  EarthSunDistance)
{
	//Convert from degrees to radians
	GeocentricElongation = CoordTrans.degToRad(GeocentricElongation);

	//Return the result
	return CoordTrans.mapTo0To360Range(CoordTrans.radToDeg(Math.atan2(EarthSunDistance * Math.sin(GeocentricElongation), EarthObjectDistance - EarthSunDistance*Math.cos(GeocentricElongation))));
}

MoonIlluminatedFraction.illuminatedFraction = function(PhaseAngle)
{
	//Convert from degrees to radians
	PhaseAngle = CoordTrans.degToRad(PhaseAngle);

	//Return the result
	return (1 + Math.cos(PhaseAngle)) / 2;
}

MoonIlluminatedFraction.positionAngle = function(Alpha0,  Delta0,  Alpha,  Delta)
{
	//Convert to radians
	Alpha0 = CoordTrans.hoursToRadians(Alpha0);
	Alpha = CoordTrans.hoursToRadians(Alpha);
	Delta0 = CoordTrans.degToRad(Delta0);
	Delta = CoordTrans.degToRad(Delta);

	return CoordTrans.mapTo0To360Range(CoordTrans.radToDeg(Math.atan2(Math.cos(Delta0)*Math.sin(Alpha0 - Alpha), Math.sin(Delta0)*Math.cos(Delta) - Math.cos(Delta0)*Math.sin(Delta)*Math.cos(Alpha0 - Alpha))));
}