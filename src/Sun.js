function Sun () {

}

Sun.prototype = {

	constructor: Sun,

	geometricEclipticLongitudeJ2000: function(JD){
		var earth = new Earth;
		return coordTrans.mapTo0To360Range((earth.eclipticLongitudeJ2000(JD) + 180));
	},

	geometricEclipticLatitudeJ2000: function(JD){
		var earth = new Earth;
		return -earth.eclipticLatitudeJ2000(JD);
	},

	eclipticRectangularCoordinatesJ2000: function(JD){
		var longitude = this.geometricEclipticLongitudeJ2000(JD);
		longitude = coordTrans.degToRad(longitude);
		var latitude = this.geometricEclipticLatitudeJ2000(JD);
		latitude = coordTrans.degToRad(latitude);
		var earth = new Earth;
		var R = earth.radiusVector(JD);
		
		var value = new Coord3D();
		var coslatitude = Math.cos(latitude);
		value.X = R * coslatitude * Math.cos(longitude);
		value.Y = R * coslatitude * Math.sin(longitude);
		value.Z = R * Math.sin(latitude);

		return value;
	}
}