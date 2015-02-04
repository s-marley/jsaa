function Nutation() {

	var staticFunctions = {};

	var NutationCoefficients = [
		{ D: 0, M: 0, Mprime: 0, F: 0, omega: 1, sincoeff1: -171996, sincoeff2: -174.2, coscoeff1: 92025, coscoeff2: 8.9},
		{ D: -2, M: 0, Mprime: 0, F: 2, omega: 2, sincoeff1: -13187, sincoeff2: -1.6, coscoeff1: 5736, coscoeff2: -3.1},
		{ D: 0, M: 0, Mprime: 0, F: 2, omega: 2, sincoeff1: -2274, sincoeff2: -0.2, coscoeff1: 977, coscoeff2: -0.5},
		{ D: 0, M: 0, Mprime: 0, F: 0, omega: 2, sincoeff1: 2062, sincoeff2: 0.2, coscoeff1: -895, coscoeff2: 0.5},
		{ D: 0, M: 1, Mprime: 0, F: 0, omega: 0, sincoeff1: 1426, sincoeff2: -3.4, coscoeff1: 54, coscoeff2: -0.1},
		{ D: 0, M: 0, Mprime: 1, F: 0, omega: 0, sincoeff1: 712, sincoeff2: 0.1, coscoeff1: -7, coscoeff2: 0},
		{ D: -2, M: 1, Mprime: 0, F: 2, omega: 2, sincoeff1: -517, sincoeff2: 1.2, coscoeff1: 224, coscoeff2: -0.6},
		{ D: 0, M: 0, Mprime: 0, F: 2, omega: 1, sincoeff1: -386, sincoeff2: -0.4, coscoeff1: 200, coscoeff2: 0},
		{ D: 0, M: 0, Mprime: 1, F: 2, omega: 2, sincoeff1: -301, sincoeff2: 0, coscoeff1: 129, coscoeff2: -0.1},
		{ D: -2, M: -1, Mprime: 0, F: 2, omega: 2, sincoeff1: 217, sincoeff2: -0.5, coscoeff1: -95, coscoeff2: 0.3},
		{ D: -2, M: 0, Mprime: 1, F: 0, omega: 0, sincoeff1: -158, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: -2, M: 0, Mprime: 0, F: 2, omega: 1, sincoeff1: 129, sincoeff2: 0.1, coscoeff1: -70, coscoeff2: 0},
		{ D: 0, M: 0, Mprime: -1, F: 2, omega: 2, sincoeff1: 123, sincoeff2: 0, coscoeff1: -53, coscoeff2: 0},
		{ D: 2, M: 0, Mprime: 0, F: 0, omega: 0, sincoeff1: 63, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: 0, M: 0, Mprime: 1, F: 0, omega: 1, sincoeff1: 63, sincoeff2: 0.1, coscoeff1: -33, coscoeff2: 0},
		{ D: 2, M: 0, Mprime: -1, F: 2, omega: 2, sincoeff1: -59, sincoeff2: 0, coscoeff1: 26, coscoeff2: 0},
		{ D: 0, M: 0, Mprime: -1, F: 0, omega: 1, sincoeff1: -58, sincoeff2: -0.1, coscoeff1: 32, coscoeff2: 0},
		{ D: 0, M: 0, Mprime: 1, F: 2, omega: 1, sincoeff1: -51, sincoeff2: 0, coscoeff1: 27, coscoeff2: 0},
		{ D: -2, M: 0, Mprime: 2, F: 0, omega: 0, sincoeff1: 48, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: 0, M: 0, Mprime: -2, F: 2, omega: 1, sincoeff1: 46, sincoeff2: 0, coscoeff1: -24, coscoeff2: 0},
		{ D: 2, M: 0, Mprime: 0, F: 2, omega: 2, sincoeff1: -38, sincoeff2: 0, coscoeff1: 16, coscoeff2: 0},
		{ D: 0, M: 0, Mprime: 2, F: 2, omega: 2, sincoeff1: -31, sincoeff2: 0, coscoeff1: 13, coscoeff2: 0},
		{ D: 0, M: 0, Mprime: 2, F: 0, omega: 0, sincoeff1: 29, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: -2, M: 0, Mprime: 1, F: 2, omega: 2, sincoeff1: 29, sincoeff2: 0, coscoeff1: -12, coscoeff2: 0},
		{ D: 0, M: 0, Mprime: 0, F: 2, omega: 0, sincoeff1: 26, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: -2, M: 0, Mprime: 0, F: 2, omega: 0, sincoeff1: -22, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: 0, M: 0, Mprime: -1, F: 2, omega: 1, sincoeff1: 21, sincoeff2: 0, coscoeff1: -10, coscoeff2: 0},
		{ D: 0, M: 2, Mprime: 0, F: 0, omega: 0, sincoeff1: 17, sincoeff2: -0.1, coscoeff1: 0, coscoeff2: 0},
		{ D: 2, M: 0, Mprime: -1, F: 0, omega: 1, sincoeff1: 16, sincoeff2: 0, coscoeff1: -8, coscoeff2: 0},
		{ D: -2, M: 2, Mprime: 0, F: 2, omega: 2, sincoeff1: -16, sincoeff2: 0.1, coscoeff1: 7, coscoeff2: 0},
		{ D: 0, M: 1, Mprime: 0, F: 0, omega: 1, sincoeff1: -15, sincoeff2: 0, coscoeff1: 9, coscoeff2: 0},
		{ D: -2, M: 0, Mprime: 1, F: 0, omega: 1, sincoeff1: -13, sincoeff2: 0, coscoeff1: 7, coscoeff2: 0},
		{ D: 0, M: -1, Mprime: 0, F: 0, omega: 1, sincoeff1: -12, sincoeff2: 0, coscoeff1: 6, coscoeff2: 0},
		{ D: 0, M: 0, Mprime: 2, F: -2, omega: 0, sincoeff1: 11, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: 2, M: 0, Mprime: -1, F: 2, omega: 1, sincoeff1: -10, sincoeff2: 0, coscoeff1: 5, coscoeff2: 0},
		{ D: 2, M: 0, Mprime: 1, F: 2, omega: 2, sincoeff1: -8, sincoeff2: 0, coscoeff1: 3, coscoeff2: 0},
		{ D: 0, M: 1, Mprime: 0, F: 2, omega: 2, sincoeff1: 7, sincoeff2: 0, coscoeff1: -3, coscoeff2: 0},
		{ D: -2, M: 1, Mprime: 1, F: 0, omega: 0, sincoeff1: -7, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: 0, M: -1, Mprime: 0, F: 2, omega: 2, sincoeff1: -7, sincoeff2: 0, coscoeff1: 3, coscoeff2: 0},
		{ D: 2, M: 0, Mprime: 0, F: 2, omega: 1, sincoeff1: -7, sincoeff2: 0, coscoeff1: 3, coscoeff2: 0},
		{ D: 2, M: 0, Mprime: 1, F: 0, omega: 0, sincoeff1: 6, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: -2, M: 0, Mprime: 2, F: 2, omega: 2, sincoeff1: 6, sincoeff2: 0, coscoeff1: -3, coscoeff2: 0},
		{ D: -2, M: 0, Mprime: 1, F: 2, omega: 1, sincoeff1: 6, sincoeff2: 0, coscoeff1: -3, coscoeff2: 0},
		{ D: 2, M: 0, Mprime: -2, F: 0, omega: 1, sincoeff1: -6, sincoeff2: 0, coscoeff1: 3, coscoeff2: 0},
		{ D: 2, M: 0, Mprime: 0, F: 0, omega: 1, sincoeff1: -6, sincoeff2: 0, coscoeff1: 3, coscoeff2: 0},
		{ D: 0, M: -1, Mprime: 1, F: 0, omega: 0, sincoeff1: 5, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: -2, M: -1, Mprime: 0, F: 2, omega: 1, sincoeff1: -5, sincoeff2: 0, coscoeff1: 3, coscoeff2: 0},
		{ D: -2, M: 0, Mprime: 0, F: 0, omega: 1, sincoeff1: -5, sincoeff2: 0, coscoeff1: 3, coscoeff2: 0},
		{ D: 0, M: 0, Mprime: 2, F: 2, omega: 1, sincoeff1: -5, sincoeff2: 0, coscoeff1: 3, coscoeff2: 0},
		{ D: -2, M: 0, Mprime: 2, F: 0, omega: 1, sincoeff1: 4, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: -2, M: 1, Mprime: 0, F: 2, omega: 1, sincoeff1: 4, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: 0, M: 0, Mprime: 1, F: -2, omega: 0, sincoeff1: 4, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: -1, M: 0, Mprime: 1, F: 0, omega: 0, sincoeff1: -4, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: -2, M: 1, Mprime: 0, F: 0, omega: 0, sincoeff1: -4, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: 1, M: 0, Mprime: 0, F: 0, omega: 0, sincoeff1: -4, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: 0, M: 0, Mprime: 1, F: 2, omega: 0, sincoeff1: 3, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: 0, M: 0, Mprime: -2, F: 2, omega: 2, sincoeff1: -3, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: -1, M: -1, Mprime: 1, F: 0, omega: 0, sincoeff1: -3, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: 0, M: 1, Mprime: 1, F: 0, omega: 0, sincoeff1: -3, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: 0, M: -1, Mprime: 1, F: 2, omega: 2, sincoeff1: -3, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: 2, M: -1, Mprime: -1, F: 2, omega: 2, sincoeff1: -3, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: 0, M: 0, Mprime: 3, F: 2, omega: 2, sincoeff1: -3, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
		{ D: 2, M: -1, Mprime: 0, F: 2, omega: 2, sincoeff1: -3, sincoeff2: 0, coscoeff1: 0, coscoeff2: 0},
	];

	staticFunctions.NutationCoefficients = function () { return NutationCoefficients; };

	return staticFunctions;
}

Nutation.nutationInLongitude = function(JD)
{
	var n = new Nutation;
	var NutationCoefficients = n.NutationCoefficients();

	var T = (JD - 2451545) / 36525;
	var Tsquared = T*T;
	var Tcubed = Tsquared*T;

	var D = 297.85036 + 445267.111480*T - 0.0019142*Tsquared + Tcubed / 189474;
	D = CoordTrans.mapTo0To360Range(D);

	var M = 357.52772 + 35999.050340*T - 0.0001603*Tsquared - Tcubed / 300000;
	M = CoordTrans.mapTo0To360Range(M);

	var Mprime = 134.96298 + 477198.867398*T + 0.0086972*Tsquared + Tcubed / 56250;
	Mprime = CoordTrans.mapTo0To360Range(Mprime);

	var F = 93.27191 + 483202.017538*T - 0.0036825*Tsquared + Tcubed / 327270;
	F = CoordTrans.mapTo0To360Range(F);

	var omega = 125.04452 - 1934.136261*T + 0.0020708*Tsquared + Tcubed / 450000;
	omega = CoordTrans.mapTo0To360Range(omega);

	var nCoefficients = NutationCoefficients.length;
	var value = 0;
	for (var i=0; i<nCoefficients; i++)
	{
		var argument = NutationCoefficients[i].D * D + NutationCoefficients[i].M * M + 
		                  NutationCoefficients[i].Mprime * Mprime + NutationCoefficients[i].F * F + 
		                  NutationCoefficients[i].omega * omega;
		var radargument = CoordTrans.degToRad(argument);
		value += (NutationCoefficients[i].sincoeff1 + NutationCoefficients[i].sincoeff2 * T) * Math.sin(radargument) * 0.0001; 
	}

	return value;
}

Nutation.nutationInObliquity = function(JD)
{
	var n = new Nutation;
	var NutationCoefficients = n.NutationCoefficients();

	var T = (JD - 2451545) / 36525;
	var Tsquared = T*T;
	var Tcubed = Tsquared*T;

	var D = 297.85036 + 445267.111480*T - 0.0019142*Tsquared + Tcubed / 189474;
	D = CoordTrans.mapTo0To360Range(D);

	var M = 357.52772 + 35999.050340*T - 0.0001603*Tsquared - Tcubed / 300000;
	M = CoordTrans.mapTo0To360Range(M);

	var Mprime = 134.96298 + 477198.867398*T + 0.0086972*Tsquared + Tcubed / 56250;
	Mprime = CoordTrans.mapTo0To360Range(Mprime);

	var F = 93.27191 + 483202.017538*T - 0.0036825*Tsquared + Tcubed / 327270;
	F = CoordTrans.mapTo0To360Range(F);

	var omega = 125.04452 - 1934.136261*T + 0.0020708*Tsquared + Tcubed / 450000;
	omega = CoordTrans.mapTo0To360Range(omega);

	var nCoefficients = NutationCoefficients.length;
	var value = 0;
	for (var i=0; i<nCoefficients; i++)
	{
		var argument = NutationCoefficients[i].D * D + NutationCoefficients[i].M * M + 
		                  NutationCoefficients[i].Mprime * Mprime + NutationCoefficients[i].F * F + 
		                  NutationCoefficients[i].omega * omega;
		var radargument = CoordTrans.degToRad(argument);
		value += (NutationCoefficients[i].coscoeff1 + NutationCoefficients[i].coscoeff2 * T) * Math.cos(radargument) * 0.0001; 
	}

	return value;
}

Nutation.meanObliquityOfEcliptic = function(JD)
{
	var U = (JD - 2451545) / 3652500;
	var Usquared = U*U;
	var Ucubed = Usquared*U;
	var U4 = Ucubed*U;
	var U5 = U4*U;
	var U6= U5*U;
	var U7 = U6*U;
	var U8 = U7*U;
	var U9 = U8*U;
	var U10 = U9*U;


	return CoordTrans.DMSToDegrees(23, 26, 21.448) - CoordTrans.DMSToDegrees(0, 0, 4680.93) * U
	                                                               - CoordTrans.DMSToDegrees(0, 0, 1.55) * Usquared
	                                                               + CoordTrans.DMSToDegrees(0, 0, 1999.25) * Ucubed
	                                                               - CoordTrans.DMSToDegrees(0, 0, 51.38) * U4
	                                                               - CoordTrans.DMSToDegrees(0, 0, 249.67) * U5
	                                                               - CoordTrans.DMSToDegrees(0, 0, 39.05) * U6 
	                                                               + CoordTrans.DMSToDegrees(0, 0, 7.12) * U7
	                                                               + CoordTrans.DMSToDegrees(0, 0, 27.87) * U8
	                                                               + CoordTrans.DMSToDegrees(0, 0, 5.79) * U9
	                                                               + CoordTrans.DMSToDegrees(0, 0, 2.45) * U10;
}

Nutation.trueObliquityOfEcliptic = function(JD)
{
	return this.meanObliquityOfEcliptic(JD) + CoordTrans.DMSToDegrees(0, 0, this.nutationInObliquity(JD));
}

Nutation.nutationInRightAscension = function(Alpha, Delta, Obliquity, NutationInLongitude, NutationInObliquity)
{
	//Convert to radians
	Alpha = CoordTrans.hoursToRadians(Alpha);
	Delta = CoordTrans.degToRad(Delta);
	Obliquity = CoordTrans.degToRad(Obliquity);

	return (Math.cos(Obliquity) + Math.sin(Obliquity) * Math.sin(Alpha) * Math.tan(Delta)) * NutationInLongitude - Math.cos(Alpha)*Math.tan(Delta)*NutationInObliquity; 
}

Nutation.nutationInDeclination = function(Alpha, Obliquity, NutationInLongitude, NutationInObliquity)
{
	//Convert to radians
	Alpha = CoordTrans.hoursToRadians(Alpha);
	Obliquity = CoordTrans.degToRad(Obliquity);

	return Math.sin(Obliquity) * Math.cos(Alpha) * NutationInLongitude + Math.sin(Alpha)*NutationInObliquity; 
}
