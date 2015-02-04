function Venus2() {

	var staticFunctions = {};

	var L0VenusCoefficients = [
		{ A: 317614667, B: 0, C: 0 },
		{ A: 1353968, B: 5.5931332, C: 10213.2855462 },
		{ A: 89892, B: 5.30650, C: 20426.57109 },
		{ A: 5477, B: 4.4163, C: 7860.4194 },
		{ A: 3456, B: 2.6996, C: 11790.6291 },
		{ A: 2372, B: 2.9938, C: 3930.2097 },
		{ A: 1664, B: 4.2502, C: 1577.3435 },
		{ A: 1438, B: 4.1575, C: 9683.5946 },
		{ A: 1317, B: 5.1867, C: 26.2983 },
		{ A: 1201, B: 6.1536, C: 30639.8566 },
		{ A: 769, B: 0.816, C: 9437.763 },
		{ A: 761, B: 1.950, C: 529.691 },
		{ A: 708, B: 1.065, C: 775.523 },
		{ A: 585, B: 3.998, C: 191.448 },
		{ A: 500, B: 4.123, C: 15720.839 },
		{ A: 429, B: 3.586, C: 19367.189 },
		{ A: 327, B: 5.677, C: 5507.553 },
		{ A: 326, B: 4.591, C: 10404.734 },
		{ A: 232, B: 3.163, C: 9153.904 },
		{ A: 180, B: 4.653, C: 1109.379 },
		{ A: 155, B: 5.570, C: 19651.048 },
		{ A: 128, B: 4.226, C: 20.775 },
		{ A: 128, B: 0.962, C: 5661.332 },
		{ A: 106, B: 1.537, C: 801.821 }
	];

	var L1VenusCoefficients = [
		{ A: 1021352943053.0, B: 0, C: 0 },
		{ A: 95708, B: 2.46424, C: 10213.28555 },
		{ A: 14445, B: 0.51625, C: 20426.57109 },
		{ A: 213, B: 1.795, C: 30639.857 },
		{ A: 174, B: 2.655, C: 26.298 },
		{ A: 152, B: 6.106, C: 1577.344 },
		{ A: 82, B: 5.70, C: 191.45 },
		{ A: 70, B: 2.68, C: 9437.76 },
		{ A: 52, B: 3.60, C: 775.52 },
		{ A: 38, B: 1.03, C: 529.69 },
		{ A: 30, B: 1.25, C: 5507.55 },
		{ A: 25, B: 6.11, C: 10404.73 }
	];

	var L2VenusCoefficients = [
		{ A: 54127, B: 0, C: 0 },
		{ A: 3891, B: 0.3451, C: 10213.2855 },
		{ A: 1338, B: 2.0201, C: 20426.5711 },
		{ A: 24, B: 2.05, C: 26.3 },
		{ A: 19, B: 3.54, C: 30639.86 },
		{ A: 10, B: 3.97, C: 775.52 },
		{ A: 7, B: 1.52, C: 1577.34 },
		{ A: 6, B: 1.00, C: 191.45 }
	];

	var L3VenusCoefficients = [
		{ A: 136, B: 4.804, C: 10213.286 },
		{ A: 78, B: 3.67, C: 20426.57}, 
		{ A: 26, B: 0, C: 0 }
	];

	var L4VenusCoefficients = [
		{ A: 114, B: 3.1416, C: 0 },
		{ A: 3, B: 5.21, C: 20426.57 },
		{ A: 2, B: 2.51, C: 10213.29 }
	];

	var L5VenusCoefficients = [
		{ A: 1, B: 3.14, C: 0 }
	];

	staticFunctions.L0VenusCoefficients = function () {
		return L0VenusCoefficients;
	};
	staticFunctions.L1VenusCoefficients = function () {
		return L1VenusCoefficients;
	};
	staticFunctions.L2VenusCoefficients = function () {
		return L2VenusCoefficients;
	};
	staticFunctions.L3VenusCoefficients = function () {
		return L3VenusCoefficients;
	};
	staticFunctions.L4VenusCoefficients = function () {
		return L4VenusCoefficients;
	};
	staticFunctions.L5VenusCoefficients = function () {
		return L5VenusCoefficients;
	};

	return staticFunctions;
}

Venus2.eclipticLongitude = function(JD) {
	v = new Venus2;
	var L0VenusCoefficients = v.L0VenusCoefficients();
	var L1VenusCoefficients = v.L1VenusCoefficients();
	var L2VenusCoefficients = v.L2VenusCoefficients();
	var L3VenusCoefficients = v.L3VenusCoefficients();
	var L4VenusCoefficients = v.L4VenusCoefficients();
	var L5VenusCoefficients = v.L5VenusCoefficients();


	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;
	var rho5 = rho4*rho;

	//Calculate L0
	var nL0Coefficients = L0VenusCoefficients.length;
	var L0 = 0;
	var i;
	for (i=0; i<nL0Coefficients; i++)
	L0 += L0VenusCoefficients[i].A * Math.cos(L0VenusCoefficients[i].B + L0VenusCoefficients[i].C*rho);

	//Calculate L1
	var nL1Coefficients = L1VenusCoefficients.length;
	var L1 = 0;
	for (i=0; i<nL1Coefficients; i++)
	L1 += L1VenusCoefficients[i].A * Math.cos(L1VenusCoefficients[i].B + L1VenusCoefficients[i].C*rho);

	//Calculate L2
	var nL2Coefficients = L2VenusCoefficients.length;
	var L2 = 0;
	for (i=0; i<nL2Coefficients; i++)
	L2 += L2VenusCoefficients[i].A * Math.cos(L2VenusCoefficients[i].B + L2VenusCoefficients[i].C*rho);

	//Calculate L3
	var nL3Coefficients = L3VenusCoefficients.length;
	var L3 = 0;
	for (i=0; i<nL3Coefficients; i++)
	L3 += L3VenusCoefficients[i].A * Math.cos(L3VenusCoefficients[i].B + L3VenusCoefficients[i].C*rho);

	//Calculate L4
	var nL4Coefficients = L4VenusCoefficients.length;
	var L4 = 0;
	for (i=0; i<nL4Coefficients; i++)
	L4 += L4VenusCoefficients[i].A * Math.cos(L4VenusCoefficients[i].B + L4VenusCoefficients[i].C*rho);

	//Calculate L5
	var nL5Coefficients = L5VenusCoefficients.length;
	var L5 = 0;
	for (i=0; i<nL5Coefficients; i++)
	L5 += L5VenusCoefficients[i].A * Math.cos(L5VenusCoefficients[i].B + L5VenusCoefficients[i].C*rho);

	var value = (L0 + L1*rho + L2*rhosquared + L3*rhocubed + L4*rho4 + L5*rho5) / 100000000;

	//convert results back to degrees
	value = CoordTrans.mapTo0To360Range(CoordTrans.radToDeg(value));
	return value;
}