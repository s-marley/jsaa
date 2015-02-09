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

FK5.convertVSOPToFK5J2000 = function(value)
{
	var result = new Coord3D();
	result.X = value.X + 0.000000440360 * value.Y - 0.000000190919 * value.Z;
	result.Y = -0.000000479966 * value.X + 0.917482137087 * value.Y - 0.397776982902 * value.Z;
	result.Z = 0.397776982902 * value.Y + 0.917482137087 * value.Z;

	return result;
}

FK5.convertVSOPToFK5B1950 = function(value)
{
	var result = new Coord3D();
	result.X = 0.999925702634 * value.X + 0.012189716217 * value.Y + 0.000011134016 * value.Z;
	result.Y = -0.011179418036 * value.X + 0.917413998946 * value.Y - 0.397777041885 * value.Z;
	result.Z = -0.004859003787 * value.X + 0.397747363646 * value.Y + 0.917482111428 * value.Z;

	return result;
}

FK5.convertVSOPToFK5AnyEquinox = function(value, JDEquinox)
{
	var t = (JDEquinox - 2451545.0) / 36525;
	var tsquared = t*t;
	var tcubed  = tsquared * t;

	var sigma = 2306.2181*t + 0.30188*tsquared + 0.017988*tcubed;
	sigma = CoordTrans.degToRad(CoordTrans.DMSToDegrees(0, 0, sigma));

	var zeta = 2306.2181*t + 1.09468*tsquared + 0.018203*tcubed;
	zeta = CoordTrans.degToRad(CoordTrans.DMSToDegrees(0, 0, zeta));

	var phi = 2004.3109*t - 0.42665*tsquared - 0.041833*tcubed;
	phi = CoordTrans.degToRad(CoordTrans.DMSToDegrees(0, 0, phi));

	var cossigma = Math.cos(sigma);
	var coszeta = Math.cos(zeta);
	var cosphi = Math.cos(phi);
	var sinsigma = Math.sin(sigma);
	var sinzeta = Math.sin(zeta);
	var sinphi = Math.sin(phi);

	var xx = cossigma * coszeta * cosphi -sinsigma*sinzeta;
	var xy = sinsigma * coszeta + cossigma * sinzeta * cosphi;
	var xz = cossigma * sinphi;
	var yx = -cossigma * sinzeta - sinsigma * coszeta * cosphi;
	var yy = cossigma * coszeta - sinsigma * sinzeta * cosphi;
	var yz = -sinsigma * sinphi;
	var zx = -coszeta * sinphi;
	var zy = -sinzeta * sinphi;
	var zz = cosphi;

	var result = new Coord3D();
	result.X = xx * value.X + yx * value.Y + zx * value.Z;
	result.Y = xy * value.X + yy * value.Y + zy * value.Z;
	result.Z = xz * value.X + yz * value.Y + zz * value.Z;

	return result;
}
