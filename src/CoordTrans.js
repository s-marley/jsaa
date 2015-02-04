function CoordTrans() {};
	
CoordTrans.degToRad = function(degrees){
	return degrees * 0.017453292519943295769236907684886;
}

CoordTrans.radToDeg = function(radians){
	return radians * 57.295779513082320876798154814105;
}

CoordTrans.mapTo0To360Range = function(degrees)
  	{
	    var value = degrees;
	    while (value < 0) {
	    	value += 360;
	    }
	    while (value > 360) {
	    	value -= 360;
	    }
	return value;
}

CoordTrans.ecliptic2Equatorial = function(Lambda, Beta, Epsilon)
{
  Lambda = this.degToRad(Lambda);
  Beta = this.degToRad(Beta);
  Epsilon = this.degToRad(Epsilon);

  var Equatorial = new Coord2D();
  
  Equatorial.X = this.radiansToHours(Math.atan2(Math.sin(Lambda)*Math.cos(Epsilon) - Math.tan(Beta)*Math.sin(Epsilon), Math.cos(Lambda)));
  if (Equatorial.X < 0) Equatorial.X += 24;
  Equatorial.Y = this.radToDeg(Math.asin(Math.sin(Beta)*Math.cos(Epsilon) + Math.cos(Beta)*Math.sin(Epsilon)*Math.sin(Lambda)));
  
  return Equatorial;
}

CoordTrans.radiansToHours = function(Radians)
{
	return Radians * 3.8197186342054880584532103209403;
}

CoordTrans.hoursToRadians = function(Hours)
{
  return Hours * 0.26179938779914943653855361527329;
}

CoordTrans.DMSToDegrees = function(Degrees, Minutes, Seconds, bPositive)
{
  bPositive = (typeof x === 'undefined') ? true : x;

  if (bPositive)
    return Degrees + Minutes/60 + Seconds/3600;
  else
    return -Degrees - Minutes/60 - Seconds/3600;
}

