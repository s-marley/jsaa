function Mercury(){

	var staticFunctions = {};

	var L0MercuryCoefficients = [
		{ A: 440250710, B: 0, C: 0 },
		{ A: 40989415, B: 1.48302034, C: 26087.90314157 },
		{ A: 5046294, B: 4.4778549, C: 52175.8062831 },
		{ A: 855347, B: 1.165203, C: 78263.709425 },
		{ A: 165590, B: 4.119692, C: 104351.612566 },
		{ A: 34562, B: 0.77931, C: 130439.51571 },
		{ A: 7583, B: 3.7135, C: 156527.4188 },
		{ A: 3560, B: 1.5120, C: 1109.3786 },
		{ A: 1803, B: 4.1033, C: 5661.332 },
		{ A: 1726, B: 0.3583, C: 182615.322 },
		{ A: 1590, B: 2.9951, C: 25028.5212 },
		{ A: 1365, B: 4.5992, C: 27197.2817 },
		{ A: 1017, B: 0.8803, C: 31749.2352 },
		{ A: 714, B: 1.541, C: 24978.525 },
		{ A: 644, B: 5.303, C: 21535.95 },
		{ A: 451, B: 6.050, C: 51116.424 },
		{ A: 404, B: 3.282, C: 208703.225 },
		{ A: 352, B: 5.242, C: 20426.571 },
		{ A: 345, B: 2.792, C: 15874.618 },
		{ A: 343, B: 5.765, C: 955.6 },
		{ A: 339, B: 5.863, C: 25558.212 },
		{ A: 325, B: 1.337, C: 53285.185 },
		{ A: 273, B: 2.495, C: 529.691 },
		{ A: 264, B: 3.917, C: 57837.138 },
		{ A: 260, B: 0.987, C: 4551.953 },
		{ A: 239, B: 0.113, C: 1059.382 },
		{ A: 235, B: 0.267, C: 11322.664 },
		{ A: 217, B: 0.660, C: 13521.751 },
		{ A: 209, B: 2.092, C: 47623.853 },
		{ A: 183, B: 2.629, C: 27043.503 },
		{ A: 182, B: 2.434, C: 25661.305 },
		{ A: 176, B: 4.536, C: 51066.428 },
		{ A: 173, B: 2.452, C: 24498.83 },
		{ A: 142, B: 3.360, C: 37410.567 },
		{ A: 138, B: 0.291, C: 10213.286 },
		{ A: 125, B: 3.721, C: 39609.655 },
		{ A: 118, B: 2.781, C: 77204.327 },
		{ A: 106, B: 4.206, C: 19804.827 }
	];

	var L1MercuryCoefficients = [
		{ A: 2608814706223.0, B: 0, C: 0 },
		{ A: 1126008, B: 6.2170397, C: 26087.9031416 },
		{ A: 303471, B: 3.055655, C: 52175.806283 },
		{ A: 80538, B: 6.10455, C: 78263.70942 },
		{ A: 21245, B: 2.83532, C: 104351.61257 },
		{ A: 5592, B: 5.8268, C: 130439.5157 },
		{ A: 1472, B: 2.5185, C: 156527.4188 },
		{ A: 388, B: 5.480, C: 182615.322 },
		{ A: 352, B: 3.052, C: 1109.379 },
		{ A: 103, B: 2.149, C: 208703.225 },
		{ A: 94, B: 6.12, C: 27197.28 },
		{ A: 91, B: 0.00, C: 24978.52 },
		{ A: 52, B: 5.62, C: 5661.33 },
		{ A: 44, B: 4.57, C: 25028.52 },
		{ A: 28, B: 3.04, C: 51066.43 },
		{ A: 27, B: 5.09, C: 234791.13 }
	];

	var L2MercuryCoefficients = [
		{ A: 53050, B: 0, C: 0 },
		{ A: 16904, B: 4.69072, C: 26087.90314 },
		{ A: 7397, B: 1.3474, C: 52175.8063 },
		{ A: 3018, B: 4.4564, C: 78263.7094 },
		{ A: 1107, B: 1.2623, C: 104351.6126 },
		{ A: 378, B: 4.320, C: 130439.516 },
		{ A: 123, B: 1.069, C: 156527.419 },
		{ A: 39, B: 4.08, C: 182615.32 },
		{ A: 15, B: 4.63, C: 1109.38 },
		{ A: 12, B: 0.79, C: 208703.23 }
	];

	var L3MercuryCoefficients = [
		{ A: 188, B: 0.035, C: 52175.806 },
		{ A: 142, B: 3.125, C: 26087.903 },
		{ A: 97, B: 3.00, C: 78263.71 },
		{ A: 44, B: 6.02, C: 104351.61 },
		{ A: 35, B: 0, C: 0 },
		{ A: 18, B: 2.78, C: 130439.52 },
		{ A: 7, B: 5.82, C: 156527.42 },
		{ A: 3, B: 2.57, C: 182615.32 }
	];

	var L4MercuryCoefficients = [
		{ A: 114, B: 3.1416, C: 0 },
		{ A: 3, B: 2.03, C: 26087.9 },
		{ A: 2, B: 1.42, C: 78263.71 },
		{ A: 2, B: 4.50, C: 52175.81 },
		{ A: 1, B: 4.50, C: 104351.61 },
		{ A: 1, B: 1.27, C: 130439.52 }
	];

	var L5MercuryCoefficients = [
		{ A: 1, B: 3.14, C: 0 }
	];

	var B0MercuryCoefficients = [
		{ A: 11737529, B: 1.98357499, C: 26087.90314157 },
		{ A: 2388077, B: 5.0373896, C: 52175.8062831 },
		{ A: 1222840, B: 3.1415927, C: 0 },
		{ A: 543252, B: 1.796444, C: 78263.709425 },
		{ A: 129779, B: 4.832325, C: 104351.612566 },
		{ A: 31867, B: 1.58088, C: 130439.51571 },
		{ A: 7963, B: 4.6097, C: 156527.4188 },
		{ A: 2014, B: 1.3532, C: 182615.322 },
		{ A: 514, B: 4.378, C: 208703.225 },
		{ A: 209, B: 2.020, C: 24978.525 },
		{ A: 208, B: 4.918, C: 27197.282 },
		{ A: 132, B: 1.119, C: 234791.128 },
		{ A: 121, B: 1.813, C: 53285.185 },
		{ A: 100, B: 5.657, C: 20426.571 }
	];

	var B1MercuryCoefficients = [
		{ A: 429151, B: 3.501698, C: 26087.903142 },
		{ A: 146234, B: 3.141593, C: 0 },
		{ A: 22675, B: 0.01515, C: 52175.80628 },
		{ A: 10895, B: 0.48540, C: 78263.70942 },
		{ A: 6353, B: 3.4294, C: 104351.6126 },
		{ A: 2496, B: 0.1605, C: 130439.5157 },
		{ A: 860, B: 3.185, C: 156527.419 },
		{ A: 278, B: 6.210, C: 182615.322 },
		{ A: 86, B: 2.95, C: 208703.23 },
		{ A: 28, B: 0.29, C: 27197.28 },
		{ A: 26, B: 5.98, C: 234791.13 }
	];

	var B2MercuryCoefficients = [
		{ A: 11831, B: 4.79066, C: 26087.90314 },
		{ A: 1914, B: 0, C: 0 },
		{ A: 1045, B: 1.2122, C: 52175.8063 },
		{ A: 266, B: 4.434, C: 78263.709 },
		{ A: 170, B: 1.623, C: 104351.613 },
		{ A: 96, B: 4.80, C: 130439.52 },
		{ A: 45, B: 1.61, C: 156527.42 },
		{ A: 18, B: 4.67, C: 182615.32 },
		{ A: 7, B: 1.43, C: 208703.23 }
	];

	var B3MercuryCoefficients = [
		{ A: 235, B: 0.354, C: 26087.903 },
		{ A: 161, B: 0, C: 0 },
		{ A: 19, B: 4.36, C: 52175.81 },
		{ A: 6, B: 2.51, C: 78263.71 },
		{ A: 5, B: 6.14, C: 104351.61 },
		{ A: 3, B: 3.12, C: 130439.52 },
		{ A: 2, B: 6.27, C: 156527.42 }
	];

	var B4MercuryCoefficients = [
		{ A: 4, B: 1.75, C: 26087.9 },
		{ A: 1, B: 3.14, C: 0 }
	];

	var R0MercuryCoefficients = [
		{ A: 39528272, B: 0, C: 0 },
		{ A: 7834132, B: 6.1923372, C: 26087.9031416 },
		{ A: 795526, B: 2.959897, C: 52175.806283 },
		{ A: 121282, B: 6.010642, C: 78263.709425 },
		{ A: 21922, B: 2.77820, C: 104351.61257 },
		{ A: 4354, B: 5.8289, C: 130439.5157 },
		{ A: 918, B: 2.597, C: 156527.419 },
		{ A: 290, B: 1.424, C: 25028.521 },
		{ A: 260, B: 3.028, C: 27197.282 },
		{ A: 202, B: 5.647, C: 182615.322 },
		{ A: 201, B: 5.592, C: 31749.235 },
		{ A: 142, B: 6.253, C: 24978.525 },
		{ A: 100, B: 3.734, C: 21535.95 }
	];

	var R1MercuryCoefficients = [
		{ A: 217348, B: 4.656172, C: 26087.903142 },
		{ A: 44142, B: 1.42386, C: 52175.80628 },
		{ A: 10094, B: 4.47466, C: 78263.70942 },
		{ A: 2433, B: 1.2423, C: 104351.6126 },
		{ A: 1624, B: 0, C: 0 },
		{ A: 604, B: 4.293, C: 130439.516 },
		{ A: 153, B: 1.061, C: 156527.419 },
		{ A: 39, B: 4.11, C: 182615.32 }
	];

	var R2MercuryCoefficients = [
		{ A: 3118, B: 3.0823, C: 26087.9031 },
		{ A: 1245, B: 6.1518, C: 52175.8063 },
		{ A: 425, B: 2.926, C: 78263.709 },
		{ A: 136, B: 5.980, C: 104351.613 },
		{ A: 42, B: 2.75, C: 130439.52 },
		{ A: 22, B: 3.14, C: 0 },
		{ A: 13, B: 5.80, C: 156527.42 }
	];

	var R3MercuryCoefficients = [
		{ A: 33, B: 1.68, C: 26087.9 },
		{ A: 24, B: 4.63, C: 52175.81 },
		{ A: 12, B: 1.39, C: 78263.71 },
		{ A: 5, B: 4.44, C: 104351.61 },
		{ A: 2, B: 1.21, C: 130439.52 }
	];

	staticFunctions.L0MercuryCoefficients = function () { return L0MercuryCoefficients; };
	staticFunctions.L1MercuryCoefficients = function () { return L1MercuryCoefficients; };
	staticFunctions.L2MercuryCoefficients = function () { return L2MercuryCoefficients;	};
	staticFunctions.L3MercuryCoefficients = function () { return L3MercuryCoefficients; };
	staticFunctions.L4MercuryCoefficients = function () { return L4MercuryCoefficients;	};
	staticFunctions.L5MercuryCoefficients = function () { return L5MercuryCoefficients;	};

	staticFunctions.B0MercuryCoefficients = function () { return B0MercuryCoefficients; };
	staticFunctions.B1MercuryCoefficients = function () { return B1MercuryCoefficients; };
	staticFunctions.B2MercuryCoefficients = function () { return B2MercuryCoefficients;	};
	staticFunctions.B3MercuryCoefficients = function () { return B3MercuryCoefficients; };
	staticFunctions.B4MercuryCoefficients = function () { return B4MercuryCoefficients;	};

	staticFunctions.R0MercuryCoefficients = function () { return R0MercuryCoefficients; };
	staticFunctions.R1MercuryCoefficients = function () { return R1MercuryCoefficients; };
	staticFunctions.R2MercuryCoefficients = function () { return R2MercuryCoefficients;	};
	staticFunctions.R3MercuryCoefficients = function () { return R3MercuryCoefficients; };

	return staticFunctions;
}

Mercury.eclipticLongitude = function(JD) {
	var m = new Mercury;
	var L0MercuryCoefficients = m.L0MercuryCoefficients();
	var L1MercuryCoefficients = m.L1MercuryCoefficients();
	var L2MercuryCoefficients = m.L2MercuryCoefficients();
	var L3MercuryCoefficients = m.L3MercuryCoefficients();
	var L4MercuryCoefficients = m.L4MercuryCoefficients();
	var L5MercuryCoefficients = m.L5MercuryCoefficients();


	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;
	var rho5 = rho4*rho;

	//Calculate L0
	var nL0Coefficients = L0MercuryCoefficients.length;
	var L0 = 0;
	var i;
	for (i=0; i<nL0Coefficients; i++)
	L0 += L0MercuryCoefficients[i].A * Math.cos(L0MercuryCoefficients[i].B + L0MercuryCoefficients[i].C*rho);

	//Calculate L1
	var nL1Coefficients = L1MercuryCoefficients.length;
	var L1 = 0;
	for (i=0; i<nL1Coefficients; i++)
	L1 += L1MercuryCoefficients[i].A * Math.cos(L1MercuryCoefficients[i].B + L1MercuryCoefficients[i].C*rho);

	//Calculate L2
	var nL2Coefficients = L2MercuryCoefficients.length;
	var L2 = 0;
	for (i=0; i<nL2Coefficients; i++)
	L2 += L2MercuryCoefficients[i].A * Math.cos(L2MercuryCoefficients[i].B + L2MercuryCoefficients[i].C*rho);

	//Calculate L3
	var nL3Coefficients = L3MercuryCoefficients.length;
	var L3 = 0;
	for (i=0; i<nL3Coefficients; i++)
	L3 += L3MercuryCoefficients[i].A * Math.cos(L3MercuryCoefficients[i].B + L3MercuryCoefficients[i].C*rho);

	//Calculate L4
	var nL4Coefficients = L4MercuryCoefficients.length;
	var L4 = 0;
	for (i=0; i<nL4Coefficients; i++)
	L4 += L4MercuryCoefficients[i].A * Math.cos(L4MercuryCoefficients[i].B + L4MercuryCoefficients[i].C*rho);

	//Calculate L5
	var nL5Coefficients = L5MercuryCoefficients.length;
	var L5 = 0;
	for (i=0; i<nL5Coefficients; i++)
	L5 += L5MercuryCoefficients[i].A * Math.cos(L5MercuryCoefficients[i].B + L5MercuryCoefficients[i].C*rho);

	var value = (L0 + L1*rho + L2*rhosquared + L3*rhocubed + L4*rho4 + L5*rho5) / 100000000;

	//convert results back to degrees
	value = CoordTrans.mapTo0To360Range(CoordTrans.radToDeg(value));
	return value;
}

Mercury.eclipticLatitude = function(JD) {
	var m = new Mercury;
	var B0MercuryCoefficients = m.B0MercuryCoefficients();
	var B1MercuryCoefficients = m.B1MercuryCoefficients();
	var B2MercuryCoefficients = m.B2MercuryCoefficients();
	var B3MercuryCoefficients = m.B3MercuryCoefficients();
	var B4MercuryCoefficients = m.B4MercuryCoefficients();

	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;

	//Calculate B0
	var nB0Coefficients = B0MercuryCoefficients.length;
	var B0 = 0;
	var i;
	for (i=0; i<nB0Coefficients; i++)
	B0 += B0MercuryCoefficients[i].A * Math.cos(B0MercuryCoefficients[i].B + B0MercuryCoefficients[i].C*rho);

	//Calculate B1
	var nB1Coefficients = B1MercuryCoefficients.length;
	var B1 = 0;
	for (i=0; i<nB1Coefficients; i++)
	B1 += B1MercuryCoefficients[i].A * Math.cos(B1MercuryCoefficients[i].B + B1MercuryCoefficients[i].C*rho);

	//Calculate B2
	var nB2Coefficients = B2MercuryCoefficients.length;
	var B2 = 0;
	for (i=0; i<nB2Coefficients; i++)
	B2 += B2MercuryCoefficients[i].A * Math.cos(B2MercuryCoefficients[i].B + B2MercuryCoefficients[i].C*rho);

	//Calculate B3
	var nB3Coefficients = B3MercuryCoefficients.length;
	var B3 = 0;
	for (i=0; i<nB3Coefficients; i++)
	B3 += B3MercuryCoefficients[i].A * Math.cos(B3MercuryCoefficients[i].B + B3MercuryCoefficients[i].C*rho);

	//Calculate B4
	var nB4Coefficients = B4MercuryCoefficients.length;
	var B4 = 0;
	for (i=0; i<nB4Coefficients; i++)
	B4 += B4MercuryCoefficients[i].A * Math.cos(B4MercuryCoefficients[i].B + B4MercuryCoefficients[i].C*rho);

	var value = (B0 + B1*rho + B2*rhosquared + B3*rhocubed + B4*rho4) / 100000000;

	//convert results back to degrees
	value = CoordTrans.radToDeg(value);
	return value;
}

Mercury.radiusVector = function(JD) {
	var m = new Mercury;
	var R0MercuryCoefficients = m.R0MercuryCoefficients();
	var R1MercuryCoefficients = m.R1MercuryCoefficients();
	var R2MercuryCoefficients = m.R2MercuryCoefficients();
	var R3MercuryCoefficients = m.R3MercuryCoefficients();

	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;

	//Calculate R0
	var nR0Coefficients = R0MercuryCoefficients.length;
	var R0 = 0;
	var i;
	for (i=0; i<nR0Coefficients; i++)
	R0 += R0MercuryCoefficients[i].A * Math.cos(R0MercuryCoefficients[i].B + R0MercuryCoefficients[i].C*rho);

	//Calculate R1
	var nR1Coefficients = R1MercuryCoefficients.length;
	var R1 = 0;
	for (i=0; i<nR1Coefficients; i++)
	R1 += R1MercuryCoefficients[i].A * Math.cos(R1MercuryCoefficients[i].B + R1MercuryCoefficients[i].C*rho);

	//Calculate R2
	var nR2Coefficients = R2MercuryCoefficients.length;
	var R2 = 0;
	for (i=0; i<nR2Coefficients; i++)
	R2 += R2MercuryCoefficients[i].A * Math.cos(R2MercuryCoefficients[i].B + R2MercuryCoefficients[i].C*rho);

	//Calculate R3
	var nR3Coefficients = R3MercuryCoefficients.length;
	var R3 = 0;
	for (i=0; i<nR3Coefficients; i++)
	R3 += R3MercuryCoefficients[i].A * Math.cos(R3MercuryCoefficients[i].B + R3MercuryCoefficients[i].C*rho);

	return (R0 + R1*rho + R2*rhosquared + R3*rhocubed) / 100000000;
}