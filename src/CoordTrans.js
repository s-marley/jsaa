var jsaa = jsaa || {};

function coordTrans() {

}
	
coordTrans.degToRad = function(degrees){
	return degrees * 0.017453292519943295769236907684886;
}

coordTrans.radToDeg = function(radians){
	return radians * 57.295779513082320876798154814105;
}

coordTrans.mapTo0To360Range = function(degrees)
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