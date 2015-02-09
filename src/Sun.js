function Sun () {}

Sun.geometricEclipticLongitudeJ2000 = function(JD){
	return CoordTrans.mapTo0To360Range((Earth.eclipticLongitudeJ2000(JD) + 180));
}

Sun.geometricEclipticLatitudeJ2000 = function(JD){
	return -Earth.eclipticLatitudeJ2000(JD);
}

Sun.eclipticRectangularCoordinatesJ2000 = function(JD){
	var longitude = this.geometricEclipticLongitudeJ2000(JD);
	longitude = CoordTrans.degToRad(longitude);
	var latitude = this.geometricEclipticLatitudeJ2000(JD);
	latitude = CoordTrans.degToRad(latitude);
	var R = Earth.radiusVector(JD);
	
	var value = new Coord3D();
	var coslatitude = Math.cos(latitude);
	value.X = R * coslatitude * Math.cos(longitude);
	value.Y = R * coslatitude * Math.sin(longitude);
	value.Z = R * Math.sin(latitude);

	return value;
}

Sun.geometricEclipticLongitude = function(JD)
{
	return CoordTrans.mapTo0To360Range(Earth.eclipticLongitude(JD) + 180);
}

Sun.geometricEclipticLatitude = function(JD)
{
  	return -Earth.eclipticLatitude(JD);
}

Sun.geometricFK5EclipticLongitude = function(JD)
{
	//Convert to the FK5 stystem
	var Longitude = this.geometricEclipticLongitude(JD);
	var Latitude = this.geometricEclipticLatitude(JD);
	Longitude += FK5.correctionInLongitude(Longitude, Latitude, JD);

	return Longitude;
}

Sun.geometricFK5EclipticLatitude = function(JD)
{
	//Convert to the FK5 stystem
	var Longitude = this.geometricEclipticLongitude(JD);
	var Latitude = this.geometricEclipticLatitude(JD);
	var SunLatCorrection = FK5.correctionInLatitude(Longitude, JD);
	Latitude += SunLatCorrection;

	return Latitude;
}

Sun.apparentEclipticLongitude = function(JD)
{
	var Longitude = this.geometricFK5EclipticLongitude(JD);

	//Apply the correction in longitude due to nutation
	Longitude += CoordTrans.DMSToDegrees(0, 0, Nutation.nutationInLongitude(JD));

	//Apply the correction in longitude due to aberration
	var R = Earth.radiusVector(JD);
	Longitude -= CoordTrans.DMSToDegrees(0, 0, 20.4898 / R);

	return Longitude;
}

Sun.apparentEclipticLatitude = function(JD)
{
	return this.geometricFK5EclipticLatitude(JD);
}

Sun.geometricFK5EclipticLongitude = function(JD)
{
	//Convert to the FK5 stystem
	var Longitude = this.geometricEclipticLongitude(JD);
	var Latitude = this.geometricEclipticLatitude(JD);
	Longitude += FK5.correctionInLongitude(Longitude, Latitude, JD);

	return Longitude;
}

Sun.geometricFK5EclipticLatitude = function(JD)
{
	//Convert to the FK5 stystem
	var Longitude = this.geometricEclipticLongitude(JD);
	var Latitude = this.geometricEclipticLatitude(JD);
	var SunLatCorrection = FK5.correctionInLatitude(Longitude, JD);
	Latitude += SunLatCorrection;

	return Latitude;
}