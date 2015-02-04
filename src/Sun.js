function Sun () {}

Sun.geometricEclipticLongitudeJ2000 = function(JD){
	return coordTrans.mapTo0To360Range((Earth.eclipticLongitudeJ2000(JD) + 180));
}

Sun.geometricEclipticLatitudeJ2000 = function(JD){
	return -Earth.eclipticLatitudeJ2000(JD);
}

Sun.eclipticRectangularCoordinatesJ2000 = function(JD){
	var longitude = this.geometricEclipticLongitudeJ2000(JD);
	longitude = coordTrans.degToRad(longitude);
	var latitude = this.geometricEclipticLatitudeJ2000(JD);
	latitude = coordTrans.degToRad(latitude);
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
  return coordTrans.mapTo0To360Range(Earth.eclipticLongitude(JD) + 180);
}

Sun.geometricEclipticLatitude = function(JD)
{
  return -Earth.eclipticLatitude(JD);
}
