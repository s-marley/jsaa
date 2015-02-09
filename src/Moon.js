function Moon() {

	var staticFunctions = {};

	var MoonCoefficients1 = [
		{ D: 0, M: 0, Mdash: 1, F: 0},
		{ D: 2, M: 0, Mdash: -1, F: 0},
		{ D: 2, M: 0, Mdash: 0, F: 0},
		{ D: 0, M: 0, Mdash: 2, F: 0},
		{ D: 0, M: 1, Mdash: 0, F: 0},
		{ D: 0, M: 0, Mdash: 0, F: 2},
		{ D: 2, M: 0, Mdash: -2, F: 0},
		{ D: 2, M: -1, Mdash: -1, F: 0},
		{ D: 2, M: 0, Mdash: 1, F: 0},
		{ D: 2, M: -1, Mdash: 0, F: 0},
		{ D: 0, M: 1, Mdash: -1, F: 0},
		{ D: 1, M: 0, Mdash: 0, F: 0},
		{ D: 0, M: 1, Mdash: 1, F: 0},
		{ D: 2, M: 0, Mdash: 0, F: -2},
		{ D: 0, M: 0, Mdash: 1, F: 2},
		{ D: 0, M: 0, Mdash: 1, F: -2},
		{ D: 4, M: 0, Mdash: -1, F: 0},
		{ D: 0, M: 0, Mdash: 3, F: 0},
		{ D: 4, M: 0, Mdash: -2, F: 0},
		{ D: 2, M: 1, Mdash: -1, F: 0},
		{ D: 2, M: 1, Mdash: 0, F: 0},
		{ D: 1, M: 0, Mdash: -1, F: 0},
		{ D: 1, M: 1, Mdash: 0, F: 0},
		{ D: 2, M: -1, Mdash: 1, F: 0},
		{ D: 2, M: 0, Mdash: 2, F: 0},
		{ D: 4, M: 0, Mdash: 0, F: 0},
		{ D: 2, M: 0, Mdash: -3, F: 0},
		{ D: 0, M: 1, Mdash: -2, F: 0},
		{ D: 2, M: 0, Mdash: -1, F: 2},
		{ D: 2, M: -1, Mdash: -2, F: 0},
		{ D: 1, M: 0, Mdash: 1, F: 0},
		{ D: 2, M: -2, Mdash: 0, F: 0},
		{ D: 0, M: 1, Mdash: 2, F: 0},
		{ D: 0, M: 2, Mdash: 0, F: 0},
		{ D: 2, M: -2, Mdash: -1, F: 0},
		{ D: 2, M: 0, Mdash: 1, F: -2},
		{ D: 2, M: 0, Mdash: 0, F: 2},
		{ D: 4, M: -1, Mdash: -1, F: 0},
		{ D: 0, M: 0, Mdash: 2, F: 2},
		{ D: 3, M: 0, Mdash: -1, F: 0},
		{ D: 2, M: 1, Mdash: 1, F: 0},
		{ D: 4, M: -1, Mdash: -2, F: 0},
		{ D: 0, M: 2, Mdash: -1, F: 0},
		{ D: 2, M: 2, Mdash: -1, F: 0},
		{ D: 2, M: 1, Mdash: -2, F: 0},
		{ D: 2, M: -1, Mdash: 0, F: -2},
		{ D: 4, M: 0, Mdash: 1, F: 0},
		{ D: 0, M: 0, Mdash: 4, F: 0},
		{ D: 4, M: -1, Mdash: 0, F: 0},
		{ D: 1, M: 0, Mdash: -2, F: 0},
		{ D: 2, M: 1, Mdash: 0, F: -2},
		{ D: 0, M: 0, Mdash: 2, F: -2},
		{ D: 1, M: 1, Mdash: 1, F: 0},
		{ D: 3, M: 0, Mdash: -2, F: 0},
		{ D: 4, M: 0, Mdash: -3, F: 0},
		{ D: 2, M: -1, Mdash: 2, F: 0},
		{ D: 0, M: 2, Mdash: 1, F: 0},
		{ D: 1, M: 1, Mdash: -1, F: 0},
		{ D: 2, M: 0, Mdash: 3, F: 0},
		{ D: 2, M: 0, Mdash: -1, F: -2}
	];

	var MoonCoefficients2 = [
		{ A: 6288774, B: -20905355},
		{ A: 1274027, B: -3699111},
		{ A: 658314, B: -2955968},
		{ A: 213618, B: -569925},
		{ A: -185116, B: 48888},
		{ A: -114332, B: -3149},
		{ A: 58793, B: 246158},
		{ A: 57066, B: -152138},
		{ A: 53322, B: -170733},
		{ A: 45758, B: -204586},
		{ A: -40923, B: -129620},
		{ A: -34720, B: 108743},
		{ A: -30383, B: 104755},
		{ A: 15327, B: 10321},
		{ A: -12528, B: 0},
		{ A: 10980, B: 79661},
		{ A: 10675, B: -34782},
		{ A: 10034, B: -23210},
		{ A: 8548, B: -21636},
		{ A: -7888, B: 24208},
		{ A: -6766, B: 30824},
		{ A: -5163, B: -8379},
		{ A: 4987, B: -16675},
		{ A: 4036, B: -12831},
		{ A: 3994, B: -10445},
		{ A: 3861, B: -11650},
		{ A: 3665, B: 14403},
		{ A: -2689, B: -7003},
		{ A: -2602, B: 0},
		{ A: 2390, B: 10056},
		{ A: -2348, B: 6322},
		{ A: 2236, B: -9884},
		{ A: -2120, B: 5751},
		{ A: -2069, B: 0},
		{ A: 2048, B: -4950},
		{ A: -1773, B: 4130},
		{ A: -1595, B: 0},
		{ A: 1215, B: -3958},
		{ A: -1110, B: 0},
		{ A: -892, B: 3258},
		{ A: -810, B: 2616},
		{ A: 759, B: -1897},
		{ A: -713, B: -2117},
		{ A: -700, B: 2354},
		{ A: 691, B: 0},
		{ A: 596, B: 0},
		{ A: 549, B: -1423},
		{ A: 537, B: -1117},
		{ A: 520, B: -1571},
		{ A: -487, B: -1739},
		{ A: -399, B: 0},
		{ A: -381, B: -4421},
		{ A: 351, B: 0},
		{ A: -340, B: 0},
		{ A: 330, B: 0},
		{ A: 327, B: 0},
		{ A: -323, B: 1165},
		{ A: 299, B: 0},
		{ A: 294, B: 0},
		{ A: 0, B: 8752}
	];

	var MoonCoefficients3 = [
		{ D: 0, M: 0, Mdash: 0, F: 1},
		{ D: 0, M: 0, Mdash: 1, F: 1},
		{ D: 0, M: 0, Mdash: 1, F: -1},
		{ D: 2, M: 0, Mdash: 0, F: -1},
		{ D: 2, M: 0, Mdash: -1, F: 1},
		{ D: 2, M: 0, Mdash: -1, F: -1},
		{ D: 2, M: 0, Mdash: 0, F: 1},
		{ D: 0, M: 0, Mdash: 2, F: 1},
		{ D: 2, M: 0, Mdash: 1, F: -1},
		{ D: 0, M: 0, Mdash: 2, F: -1},
		{ D: 2, M: -1, Mdash: 0, F: -1},
		{ D: 2, M: 0, Mdash: -2, F: -1},
		{ D: 2, M: 0, Mdash: 1, F: 1},
		{ D: 2, M: 1, Mdash: 0, F: -1},
		{ D: 2, M: -1, Mdash: -1, F: 1},
		{ D: 2, M: -1, Mdash: 0, F: 1},
		{ D: 2, M: -1, Mdash: -1, F: -1},
		{ D: 0, M: 1, Mdash: -1, F: -1},
		{ D: 4, M: 0, Mdash: -1, F: -1},
		{ D: 0, M: 1, Mdash: 0, F: 1},
		{ D: 0, M: 0, Mdash: 0, F: 3},
		{ D: 0, M: 1, Mdash: -1, F: 1},
		{ D: 1, M: 0, Mdash: 0, F: 1},
		{ D: 0, M: 1, Mdash: 1, F: 1},
		{ D: 0, M: 1, Mdash: 1, F: -1},
		{ D: 0, M: 1, Mdash: 0, F: -1},
		{ D: 1, M: 0, Mdash: 0, F: -1},
		{ D: 0, M: 0, Mdash: 3, F: 1},
		{ D: 4, M: 0, Mdash: 0, F: -1},
		{ D: 4, M: 0, Mdash: -1, F: 1},
		{ D: 0, M: 0, Mdash: 1, F: -3},
		{ D: 4, M: 0, Mdash: -2, F: 1},
		{ D: 2, M: 0, Mdash: 0, F: -3},
		{ D: 2, M: 0, Mdash: 2, F: -1},
		{ D: 2, M: -1, Mdash: 1, F: -1},
		{ D: 2, M: 0, Mdash: -2, F: 1},
		{ D: 0, M: 0, Mdash: 3, F: -1},
		{ D: 2, M: 0, Mdash: 2, F: 1},
		{ D: 2, M: 0, Mdash: -3, F: -1},
		{ D: 2, M: 1, Mdash: -1, F: 1},
		{ D: 2, M: 1, Mdash: 0, F: 1},
		{ D: 4, M: 0, Mdash: 0, F: 1},
		{ D: 2, M: -1, Mdash: 1, F: 1},
		{ D: 2, M: -2, Mdash: 0, F: -1},
		{ D: 0, M: 0, Mdash: 1, F: 3},
		{ D: 2, M: 1, Mdash: 1, F: -1},
		{ D: 1, M: 1, Mdash: 0, F: -1},
		{ D: 1, M: 1, Mdash: 0, F: 1},
		{ D: 0, M: 1, Mdash: -2, F: -1},
		{ D: 2, M: 1, Mdash: -1, F: -1},
		{ D: 1, M: 0, Mdash: 1, F: 1},
		{ D: 2, M: -1, Mdash: -2, F: -1},
		{ D: 0, M: 1, Mdash: 2, F: 1},
		{ D: 4, M: 0, Mdash: -2, F: -1},
		{ D: 4, M: -1, Mdash: -1, F: -1},
		{ D: 1, M: 0, Mdash: 1, F: -1},
		{ D: 4, M: 0, Mdash: 1, F: -1},
		{ D: 1, M: 0, Mdash: -1, F: -1},
		{ D: 4, M: -1, Mdash: 0, F: -1},
		{ D: 2, M: -2, Mdash: 0, F: 1},
	];
	
	var MoonCoefficients4 = [
		5128122,     
		280602,      
		277693,      
		173237,      
		55413,       
		46271,
		32573,       
		17198,       
		9266,        
		8822, 
		8216, 
		4324,        
		4200,        
		-3359,       
		2463, 
		2211, 
		2065,        
		-1870,       
		1828, 
		-1794,
		-1749,
		-1565,       
		-1491,
		-1475,       
		-1410,       
		-1344,
		-1335,       
		1107,
		1021,        
		833,         
		777,  
		671,  
		607,  
		596,  
		491,  
		-451,  
		439,  
		422,  
		421,  
		-366,  
		-351,  
		331,  
		315,  
		302,  
		-283,  
		-229,  
		223,  
		223,  
		-220,  
		-220,  
		-185,  
		181,  
		-177,  
		176,  
		166,  
		-164,  
		132,  
		-119,  
		115,  
		107, 
	];

	staticFunctions.MoonCoefficients1 = function () { return MoonCoefficients1; };
	staticFunctions.MoonCoefficients2 = function () { return MoonCoefficients2; };
	staticFunctions.MoonCoefficients3 = function () { return MoonCoefficients3; };
	staticFunctions.MoonCoefficients4 = function () { return MoonCoefficients4; };

	return staticFunctions;
}

Moon.meanLongitude = function(JD)
{
	var T = (JD - 2451545) / 36525;
	var Tsquared = T*T;
	var Tcubed = Tsquared*T;
	var T4 = Tcubed*T;
	return CoordTrans.mapTo0To360Range(218.3164477 + 481267.88123421*T - 0.0015786*Tsquared + Tcubed/538841 - T4/65194000);
}

Moon.meanElongation = function(JD)
{
	var T = (JD - 2451545) / 36525;
	var Tsquared = T*T;
	var Tcubed = Tsquared*T;
	var T4 = Tcubed*T;
	return CoordTrans.mapTo0To360Range(297.8501921 + 445267.1114034*T - 0.0018819*Tsquared + Tcubed/545868 - T4/113065000);
}

Moon.meanAnomaly = function(JD)
{
	var T = (JD - 2451545) / 36525;
	var Tsquared = T*T;
	var Tcubed = Tsquared*T;
	var T4 = Tcubed*T;
	return CoordTrans.mapTo0To360Range(134.9633964 + 477198.8675055*T + 0.0087414*Tsquared + Tcubed/69699 - T4/14712000); 
}

Moon.argumentOfLatitude = function(JD)
{
	var T = (JD - 2451545) / 36525;
	var Tsquared = T*T;
	var Tcubed = Tsquared*T;
	var T4 = Tcubed*T;
	return CoordTrans.mapTo0To360Range(93.2720950 + 483202.0175233*T - 0.0036539*Tsquared - Tcubed/3526000 + T4/863310000);
}

Moon.eclipticLongitude = function(JD)
{
	var m = new Moon;
	var MoonCoefficients1 = m.MoonCoefficients1();
	var MoonCoefficients2 = m.MoonCoefficients2();

	var Ldash = this.meanLongitude(JD);
	var LdashDegrees = Ldash;
	Ldash = CoordTrans.degToRad(Ldash);
	var D = this.meanElongation(JD);
	D = CoordTrans.degToRad(D);
	var M = Earth.sunMeanAnomaly(JD);
	M = CoordTrans.degToRad(M);
	var Mdash = this.meanAnomaly(JD);
	Mdash = CoordTrans.degToRad(Mdash);
	var F = this.argumentOfLatitude(JD);
	F = CoordTrans.degToRad(F);

	var E = Earth.eccentricity(JD);
	var Esquared = E*E;
	var T = (JD - 2451545) / 36525;

	var A1 = CoordTrans.mapTo0To360Range(119.75 + 131.849*T);
	A1 = CoordTrans.degToRad(A1);
	var A2 = CoordTrans.mapTo0To360Range(53.09 + 479264.290*T);
	A2 = CoordTrans.degToRad(A2);

	var nLCoefficients = MoonCoefficients1.length;

	var SigmaL = 0;
	for (var i=0; i<nLCoefficients; i++)
	{
		var ThisSigma = MoonCoefficients2[i].A * Math.sin(MoonCoefficients1[i].D*D + MoonCoefficients1[i].M*M +
		                                                  MoonCoefficients1[i].Mdash*Mdash + MoonCoefficients1[i].F*F);

		if ((MoonCoefficients1[i].M == 1) || (MoonCoefficients1[i].M == -1))
		  ThisSigma *= E;
		else if ((MoonCoefficients1[i].M == 2) || (MoonCoefficients1[i].M == -2))
		  ThisSigma *= Esquared;

		SigmaL += ThisSigma;
	}

	//Finally the additive terms
	SigmaL += 3958*Math.sin(A1);
	SigmaL += 1962*Math.sin(Ldash - F);
	SigmaL += 318*Math.sin(A2);

	//And finally apply the nutation in longitude
	var NutationInLong = Nutation.nutationInLongitude(JD);

	return CoordTrans.mapTo0To360Range(LdashDegrees + SigmaL/1000000 + NutationInLong/3600);
}

Moon.radiusVector = function(JD)
{
	var m = new Moon;
	var MoonCoefficients1 = m.MoonCoefficients1();
	var MoonCoefficients2 = m.MoonCoefficients2();

	var D = this.meanElongation(JD);
	D = CoordTrans.degToRad(D);
	var M = Earth.sunMeanAnomaly(JD);
	M = CoordTrans.degToRad(M);
	var Mdash = this.meanAnomaly(JD);
	Mdash = CoordTrans.degToRad(Mdash);
	var F = this.argumentOfLatitude(JD);
	F = CoordTrans.degToRad(F);
	var E = Earth.eccentricity(JD);

	var nRCoefficients = MoonCoefficients1.length;

	var SigmaR = 0;
	for (var i=0; i<nRCoefficients; i++)
	{
		var ThisSigma = MoonCoefficients2[i].B * Math.cos((MoonCoefficients1[i].D*D + MoonCoefficients1[i].M*M +
		                                                  MoonCoefficients1[i].Mdash*Mdash + MoonCoefficients1[i].F*F));
		if (MoonCoefficients1[i].M)
		  ThisSigma *= E;

		SigmaR += ThisSigma;
	}

	return 385000.56 + SigmaR/1000;
}

Moon.eclipticLatitude = function(JD)
{
	var m = new Moon;
	var MoonCoefficients3 = m.MoonCoefficients3();
	var MoonCoefficients4 = m.MoonCoefficients4();

	var Ldash = this.meanLongitude(JD);
	Ldash = CoordTrans.degToRad(Ldash);
	var D = this.meanElongation(JD);
	D = CoordTrans.degToRad(D);
	var M = Earth.sunMeanAnomaly(JD);
	M = CoordTrans.degToRad(M);
	var Mdash = this.meanAnomaly(JD);
	Mdash = CoordTrans.degToRad(Mdash);
	var F = this.argumentOfLatitude(JD);
	F = CoordTrans.degToRad(F);

	var E = Earth.eccentricity(JD);
	var T = (JD - 2451545) / 36525;

	var A1 = CoordTrans.mapTo0To360Range(119.75 + 131.849*T);
	A1 = CoordTrans.degToRad(A1);
	var A3 = CoordTrans.mapTo0To360Range(313.45 + 481266.484*T);
	A3 = CoordTrans.degToRad(A3);

	var nBCoefficients = MoonCoefficients3.length;

	var SigmaB = 0;
	for (var i=0; i<nBCoefficients; i++)
	{
		var ThisSigma = MoonCoefficients4[i] * Math.sin(MoonCoefficients3[i].D*D + MoonCoefficients3[i].M*M + 
		                                                MoonCoefficients3[i].Mdash*Mdash + MoonCoefficients3[i].F*F);

		if (MoonCoefficients3[i].M)
		  ThisSigma *= E;

		SigmaB += ThisSigma;
	}

	//Finally the additive terms
	SigmaB -= 2235*Math.sin(Ldash);
	SigmaB += 382*Math.sin(A3);
	SigmaB += 175*Math.sin(A1 - F);
	SigmaB += 175*Math.sin(A1 + F);
	SigmaB += 127*Math.sin(Ldash - Mdash);
	SigmaB -= 115*Math.sin(Ldash + Mdash);

	return SigmaB/1000000;
}

Moon.radiusVectorToHorizontalParallax = function(RadiusVector)
{
	return CoordTrans.radToDeg(Math.asin(6378.14 / RadiusVector));
}

Moon.horizontalParallaxToRadiusVector = function(Parallax)
{
	return 6378.14 / Math.sin(CoordTrans.degToRad(Parallax));
}

Moon.meanLongitudeAscendingNode = function(JD)
{
	var T = (JD - 2451545) / 36525;
	var Tsquared = T*T;
	var Tcubed = Tsquared*T;
	var T4 = Tcubed*T;
	return CoordTrans.mapTo0To360Range(125.0445479 - 1934.1362891*T + 0.0020754*Tsquared + Tcubed/467441 - T4/60616000);
}

Moon.meanLongitudePerigee = function(JD)
{
	var T = (JD - 2451545) / 36525;
	var Tsquared = T*T;
	var Tcubed = Tsquared*T;
	var T4 = Tcubed*T;
	return CoordTrans.mapTo0To360Range(83.3532465 + 4069.0137287*T - 0.0103200*Tsquared - Tcubed/80053 + T4/18999000);
}

Moon.trueLongitudeAscendingNode = function(JD)
{
	var TrueAscendingNode = this.meanLongitudeAscendingNode(JD);

	var D = this.meanElongation(JD);
	D = CoordTrans.degToRad(D);
	var M = Earth.sunMeanAnomaly(JD);
	M = CoordTrans.degToRad(M);
	var Mdash = this.MeanAnomaly(JD);
	Mdash = CoordTrans.degToRad(Mdash);
	var F = this.ArgumentOfLatitude(JD);
	F = CoordTrans.degToRad(F);

	//Add the principal additive terms
	TrueAscendingNode -= 1.4979*Math.sin(2*(D - F));
	TrueAscendingNode -= 0.1500*Math.sin(M);
	TrueAscendingNode -= 0.1226*Math.sin(2*D);
	TrueAscendingNode += 0.1176*Math.sin(2*F);
	TrueAscendingNode -= 0.0801*Math.sin(2*(Mdash-F));

	return CoordTrans.mapTo0To360Range(TrueAscendingNode);
}