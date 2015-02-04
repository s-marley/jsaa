function FK5() {};

FK5.correctionInLongitude = function(Longitude, Latitude, JD)
{
	var T = (JD - 2451545) / 36525;
	var Ldash = Longitude - 1.397*T - 0.00031*T*T;

	//Convert to radians
	Ldash = CoordTrans.degToRad(Ldash);
	Latitude = CoordTrans.degToRad(Latitude);

	var value = -0.09033 + 0.03916*(Math.cos(Ldash) + Math.sin(Ldash))*Math.tan(Latitude);
	return CoordTrans.DMSToDegrees(0, 0, value);
}

FK5.correctionInLatitude = function(Longitude, JD)
{
	var T = (JD - 2451545) / 36525;
	var Ldash = Longitude - 1.397*T - 0.00031*T*T;

	//Convert to radians
	Ldash = CoordTrans.degToRad(Ldash);

	var value = 0.03916*(Math.cos(Ldash) - Math.sin(Ldash));
	return CoordTrans.DMSToDegrees(0, 0, value);
}