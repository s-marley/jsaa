function Pluto() {
	
	var staticFunctions = {};

	var argumentCoefficients = 
	[	
		{ J: 0, S: 0, P: 1 },
		{ J: 0, S: 0, P: 2 },
		{ J: 0, S: 0, P: 3 },
		{ J: 0, S: 0, P: 4 },
		{ J: 0, S: 0, P: 5 },
		{ J: 0, S: 0, P: 6 },
		{ J: 0, S: 1, P: -1 },
		{ J: 0, S: 1, P: 0 },
		{ J: 0, S: 1, P: 1 },
		{ J: 0, S: 1, P: 2 },
		{ J: 0, S: 1, P: 3 },
		{ J: 0, S: 2, P: -2 },
		{ J: 0, S: 2, P: -1 },
		{ J: 0, S: 2, P: 0 },
		{ J: 1, S: -1, P: 0 },
		{ J: 1, S: -1, P: 1 },
		{ J: 1, S: 0, P: -3 },
		{ J: 1, S: 0, P: -2 },
		{ J: 1, S: 0, P: -1 },
		{ J: 1, S: 0, P: 0 },
		{ J: 1, S: 0, P: 1 },
		{ J: 1, S: 0, P: 2 },
		{ J: 1, S: 0, P: 3 },
		{ J: 1, S: 0, P: 4 },
		{ J: 1, S: 1, P: -3 },
		{ J: 1, S: 1, P: -2 },
		{ J: 1, S: 1, P: -1 },
		{ J: 1, S: 1, P: 0 },
		{ J: 1, S: 1, P: 1 },
		{ J: 1, S: 1, P: 3 },
		{ J: 2, S: 0, P: -6 },
		{ J: 2, S: 0, P: -5 },
		{ J: 2, S: 0, P: -4 },
		{ J: 2, S: 0, P: -3 },
		{ J: 2, S: 0, P: -2 },
		{ J: 2, S: 0, P: -1 },
		{ J: 2, S: 0, P: 0 },
		{ J: 2, S: 0, P: 1 },
		{ J: 2, S: 0, P: 2 },
		{ J: 2, S: 0, P: 3 },
		{ J: 3, S: 0, P: -2 },
		{ J: 3, S: 0, P: -1 },
		{ J: 3, S: 0, P: 0 }
	];

	
	var longitudeCoefficients = 
	[
		{ A: -19799805, B: 19850055 },
		{ A: 897144, B: -4954829 },
		{ A: 611149, B: 1211027 },
		{ A: -341243, B: -189585 },
		{ A: 129287, B: -34992 },
		{ A: -38164, B: 30893 },
		{ A: 20442, B: -9987 },
		{ A: -4063, B: -5071 },
		{ A: -6016, B: -3336 },
		{ A: -3956, B: 3039 },
		{ A: -667, B: 3572 },
		{ A: 1276, B: 501 },
		{ A: 1152, B: -917 },
		{ A: 630, B: -1277 },
		{ A: 2571, B: -459 },
		{ A: 899, B: -1449 },
		{ A: -1016, B: 1043 },
		{ A: -2343, B: -1012 },
		{ A: 7042, B: 788 },
		{ A: 1199, B: -338 },
		{ A: 418, B: -67 },
		{ A: 120, B: -274 },
		{ A: -60, B: -159 },
		{ A: -82, B: -29 },
		{ A: -36, B: -29 },
		{ A: -40, B: 7 },
		{ A: -14, B: 22 },
		{ A: 4, B: 13 },
		{ A: 5, B: 2 },
		{ A: -1, B: 0 },
		{ A: 2, B: 0 },
		{ A: -4, B: 5 },
		{ A: 4, B: -7 },
		{ A: 14, B: 24 },
		{ A: -49, B: -34 },
		{ A: 163, B: -48 },
		{ A: 9, B: -24 },
		{ A: -4, B: 1 },
		{ A: -3, B: 1 },
		{ A: 1, B: 3 },
		{ A: -3, B: -1 },
		{ A: 5, B: -3 },
		{ A: 0, B: 0 }
	];

	var latitudeCoefficients =
	[
		{ A: -5452852, B: -14974862 },
		{ A: 3527812, B: 1672790 },
		{ A: -1050748, B: 327647 },
		{ A: 178690, B: -292153 },
		{ A: 18650, B: 100340 },
		{ A: -30697, B: -25823 },
		{ A: 4878, B: 11248 },
		{ A: 226, B: -64 },
		{ A: 2030, B: -836 },
		{ A: 69, B: -604 },
		{ A: -247, B: -567 },
		{ A: -57, B: 1 },
		{ A: -122, B: 175 },
		{ A: -49, B: -164 },
		{ A: -197, B: 199 },
		{ A: -25, B: 217 },
		{ A: 589, B: -248 },
		{ A: -269, B: 711 },
		{ A: 185, B: 193 },
		{ A: 315, B: 807 },
		{ A: -130, B: -43 },
		{ A: 5, B: 3 },
		{ A: 2, B: 17 },
		{ A: 2, B: 5 },
		{ A: 2, B: 3 },
		{ A: 3, B: 1 },
		{ A: 2, B: -1 },
		{ A: 1, B: -1 },
		{ A: 0, B: -1 },
		{ A: 0, B: 0 },
		{ A: 0, B: -2 },
		{ A: 2, B: 2 },
		{ A: -7, B: 0 },
		{ A: 10, B: -8 },
		{ A: -3, B: 20 },
		{ A: 6, B: 5 },
		{ A: 14, B: 17 },
		{ A: -2, B: 0 },
		{ A: 0, B: 0 },
		{ A: 0, B: 0 },
		{ A: 0, B: 1 },
		{ A: 0, B: 0 },
		{ A: 1, B: 0 },
	];

	var radiusCoefficients =
	[
		{ A: 66865439, B: 68951812 },
		{ A: -11827535, B: -332538 },
		{ A: 1593179, B: -1438890 },
		{ A: -18444, B: 483220 },
		{ A: -65977, B: -85431 },
		{ A: 31174, B: -6032 },
		{ A: -5794, B: 22161 },
		{ A: 4601, B: 4032 },
		{ A: -1729, B: 234 },
		{ A: -415, B: 702 },
		{ A: 239, B: 723 },
		{ A: 67, B: -67 },
		{ A: 1034, B: -451 },
		{ A: -129, B: 504 },
		{ A: 480, B: -231 },
		{ A: 2, B: -441 },
		{ A: -3359, B: 265 },
		{ A: 7856, B: -7832 },
		{ A: 36, B: 45763 },
		{ A: 8663, B: 8547 },
		{ A: -809, B: -769 },
		{ A: 263, B: -144 },
		{ A: -126, B: 32 },
		{ A: -35, B: -16 },
		{ A: -19, B: -4 },
		{ A: -15, B: 8 },
		{ A: -4, B: 12 },
		{ A: 5, B: 6 },
		{ A: 3, B: 1 },
		{ A: 6, B: -2 },
		{ A: 2, B: 2 },
		{ A: -2, B: -2 },
		{ A: 14, B: 13 },
		{ A: -63, B: 13 },
		{ A: 136, B: -236 },
		{ A: 273, B: 1065 },
		{ A: 251, B: 149 },
		{ A: -25, B: -9 },
		{ A: 9, B: -2 },
		{ A: -8, B: 7 },
		{ A: 2, B: -10 },
		{ A: 19, B: 35 },
		{ A: 10, B: 3 },
	];

	staticFunctions.argumentCoefficients = function () { return argumentCoefficients; };
	staticFunctions.longitudeCoefficients = function () { return longitudeCoefficients; };
	staticFunctions.latitudeCoefficients = function () { return latitudeCoefficients; };
	staticFunctions.radiusCoefficients = function () {	return radiusCoefficients; };

	return staticFunctions;
}

Pluto.eclipticLongitude = function(JD){
	
	var p = new Pluto;
	var argumentCoefficients = p.argumentCoefficients();
	var longitudeCoefficients = p.longitudeCoefficients();

	var T = (JD - 2451545) / 36525;
	var J = 34.35 + 3034.9057*T;
	var S = 50.08 + 1222.1138*T;
	var P = 238.96 + 144.9600*T;

	var L = 0;
	var numCoefficients = argumentCoefficients.length;
	for (var i=0; i<numCoefficients; i++)
	{
		var alpha = argumentCoefficients[i].J * J + argumentCoefficients[i].S * S + argumentCoefficients[i].P * P;
		alpha = CoordTrans.degToRad(alpha);
		L += ((longitudeCoefficients[i].A * Math.sin(alpha)) + (longitudeCoefficients[i].B * Math.cos(alpha)));
	}

	L = L / 1000000;
	L += (238.958116 + 144.96*T);
	L = CoordTrans.mapTo0To360Range(L);

	return L;
},

Pluto.eclipticLatitude = function(JD){
	
	var p = new Pluto;
	var argumentCoefficients = p.argumentCoefficients();
	var latitudeCoefficients = p.latitudeCoefficients();

	var T = (JD - 2451545) / 36525;
	var J = 34.35 + 3034.9057*T;
	var S = 50.08 + 1222.1138*T;
	var P = 238.96 + 144.9600*T;

	var B = 0;
	var numCoefficients = argumentCoefficients.length;
	for (var i=0; i<numCoefficients; i++)
	{
		var alpha = argumentCoefficients[i].J * J + argumentCoefficients[i].S * S + argumentCoefficients[i].P * P;
		alpha = CoordTrans.degToRad(alpha);
		B += ((latitudeCoefficients[i].A * Math.sin(alpha)) + (latitudeCoefficients[i].B * Math.cos(alpha)));
	}
	B = B / 1000000;
	B += -3.908239;

	return B;
},

Pluto.radiusVector = function(JD){
	
	var p = new Pluto;
	var argumentCoefficients = p.argumentCoefficients();
	var radiusCoefficients = p.radiusCoefficients();

	var T = (JD - 2451545) / 36525;
	var J = 34.35 + 3034.9057*T;
	var S = 50.08 + 1222.1138*T;
	var P = 238.96 + 144.9600*T;

	//Calculate Radius
	var R = 0;
	var numCoefficients = argumentCoefficients.length;
	for (var i=0; i<numCoefficients; i++)
	{
		var alpha = argumentCoefficients[i].J * J + argumentCoefficients[i].S * S + argumentCoefficients[i].P * P;
		alpha = CoordTrans.degToRad(alpha);
		R += ((radiusCoefficients[i].A * Math.sin(alpha)) + (radiusCoefficients[i].B * Math.cos(alpha)));
	}
	R = R / 10000000;
	R += 40.7241346;

	return R;
}
