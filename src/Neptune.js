function Neptune() {

	var staticFunctions = {};

	var L0NeptuneCoefficients = [
		{ A: 531188633, B: 0, C: 0},
		{ A: 1798476, B: 2.9010127, C: 38.1330356},
		{ A: 1019728, B: 0.4858092, C: 1.4844727},
		{ A: 124532, B: 4.830081, C: 36.648563},
		{ A: 42064, B: 5.41055, C: 2.96895},
		{ A: 37715, B: 6.09222, C: 35.16409},
		{ A: 33785, B: 1.24489, C: 76.26607},
		{ A: 16483, B: 0.00008, C: 491.55793},
		{ A: 9199, B: 4.9375, C: 39.6175},
		{ A: 8994, B: 0.2746, C: 175.1661},
		{ A: 4216, B: 1.9871, C: 73.2971},
		{ A: 3365, B: 1.0359, C: 33.6796},
		{ A: 2285, B: 4.2061, C: 4.4534},
		{ A: 1434, B: 2.7834, C: 74.7816},
		{ A: 900, B: 2.076, C: 109.946},
		{ A: 745, B: 3.190, C: 71.813},
		{ A: 506, B: 5.748, C: 114.399},
		{ A: 400, B: 0.350, C: 1021.249},
		{ A: 345, B: 3.462, C: 41.102},
		{ A: 340, B: 3.304, C: 77.751},
		{ A: 323, B: 2.248, C: 32.195},
		{ A: 306, B: 0.497, C: 0.521},
		{ A: 287, B: 4.505, C: 0.048},
		{ A: 282, B: 2.246, C: 146.594},
		{ A: 267, B: 4.889, C: 0.963},
		{ A: 252, B: 5.782, C: 388.465},
		{ A: 245, B: 1.247, C: 9.561},
		{ A: 233, B: 2.505, C: 137.033},
		{ A: 227, B: 1.797, C: 453.425},
		{ A: 170, B: 3.324, C: 108.461},
		{ A: 151, B: 2.192, C: 33.94},
		{ A: 150, B: 2.997, C: 5.938},
		{ A: 148, B: 0.859, C: 111.43},
		{ A: 119, B: 3.677, C: 2.448},
		{ A: 109, B: 2.416, C: 183.243},
		{ A: 103, B: 0.041, C: 0.261},
		{ A: 103, B: 4.404, C: 70.328},
		{ A: 102, B: 5.705, C: 0.112}
	];

	var L1NeptuneCoefficients = [
		{ A: 3837687717.0, B: 0, C: 0},
		{ A: 16604, B: 4.86319, C: 1.48447},
		{ A: 15807, B: 2.27923, C: 38.13304},
		{ A: 3335, B: 3.6820, C: 76.2661},
		{ A: 1306, B: 3.6732, C: 2.9689},
		{ A: 605, B: 1.505, C: 35.164},
		{ A: 179, B: 3.453, C: 39.618},
		{ A: 107, B: 2.451, C: 4.453},
		{ A: 106, B: 2.755, C: 33.68},
		{ A: 73, B: 5.49, C: 36.65},
		{ A: 57, B: 1.86, C: 114.4},
		{ A: 57, B: 5.22, C: 0.52},
		{ A: 35, B: 4.52, C: 74.78},
		{ A: 32, B: 5.90, C: 77.75},
		{ A: 30, B: 3.67, C: 388.47},
		{ A: 29, B: 5.17, C: 9.56},
		{ A: 29, B: 5.17, C: 2.45},
		{ A: 26, B: 5.25, C: 168.05}
	];

	var L2NeptuneCoefficients = [
		{ A: 53893, B: 0, C: 0},
		{ A: 296, B: 1.855, C: 1.484},
		{ A: 281, B: 1.191, C: 38.133},
		{ A: 270, B: 5.721, C: 76.266},
		{ A: 23, B: 1.21, C: 2.97},
		{ A: 9, B: 4.43, C: 35.16},
		{ A: 7, B: 0.54, C: 2.45}
	];

	var L3NeptuneCoefficients = [
		{ A: 31, B: 0, C: 0},
		{ A: 15, B: 1.35, C: 76.27},
		{ A: 12, B: 6.04, C: 1.48},
		{ A: 12, B: 6.11, C: 38.13}
	];

	var L4NeptuneCoefficients = [
		{ A: 114, B: 3.142, C: 0}
	];

	var B0NeptuneCoefficients = [
		{ A: 3088623, B: 1.4410437, C: 38.1330356},
		{ A: 27780, B: 5.91272, C: 76.26607},
		{ A: 27624, B: 0, C: 0},
		{ A: 15448, B: 3.50877, C: 39.61751},
		{ A: 15355, B: 2.52124, C: 36.64856},
		{ A: 2000, B: 1.5100, C: 74.7816},
		{ A: 1968, B: 4.3778, C: 1.4845},
		{ A: 1015, B: 3.2156, C: 35.1641},
		{ A: 606, B: 2.802, C: 73.297},
		{ A: 595, B: 2.129, C: 41.102},
		{ A: 589, B: 3.187, C: 2.969},
		{ A: 402, B: 4.169, C: 114.399},
		{ A: 280, B: 1.682, C: 77.751},
		{ A: 262, B: 3.767, C: 213.299},
		{ A: 254, B: 3.271, C: 453.425},
		{ A: 206, B: 4.257, C: 529.691},
		{ A: 140, B: 3.530, C: 137.033}
	];

	var B1NeptuneCoefficients = [
		{ A: 227279, B: 3.807931, C: 38.133036},
		{ A: 1803, B: 1.9758, C: 76.2661},
		{ A: 1433, B: 3.1416, C: 0},
		{ A: 1386, B: 4.8256, C: 36.6486},
		{ A: 1073, B: 6.0805, C: 39.6175},
		{ A: 148, B: 3.858, C: 74.782},
		{ A: 136, B: 0.478, C: 1.484},
		{ A: 70, B: 6.19, C: 35.16},
		{ A: 52, B: 5.05, C: 73.3},
		{ A: 43, B: 0.31, C: 114.4},
		{ A: 37, B: 4.89, C: 41.1},
		{ A: 37, B: 5.76, C: 2.97},
		{ A: 26, B: 5.22, C: 213.3}
	];

	var B2NeptuneCoefficients = [
		{ A: 9691, B: 5.5712, C: 38.133},
		{ A: 79, B: 3.63, C: 76.27},
		{ A: 72, B: 0.45, C: 36.65},
		{ A: 59, B: 3.14, C: 0},
		{ A: 30, B: 1.61, C: 39.62},
		{ A: 6, B: 5.61, C: 74.78}
	];

	var B3NeptuneCoefficients = [
		{ A: 273, B: 1.017, C: 38.133},
		{ A: 2, B: 0, C: 0},
		{ A: 2, B: 2.37, C: 36.65},
		{ A: 2, B: 5.33, C: 76.27}
	];

	var B4NeptuneCoefficients = [
		{ A: 6, B: 2.67, C: 38.13}
	];

	var R0NeptuneCoefficients = [
		{ A: 3007013206.0, B: 0, C: 0},
		{ A: 27062259, B: 1.32999459, C: 38.13303564},
		{ A: 1691764, B: 3.2518614, C: 36.6485629},
		{ A: 807831, B: 5.185928, C: 1.484473},
		{ A: 537761, B: 4.521139, C: 35.16409},
		{ A: 495726, B: 1.571057, C: 491.557929},
		{ A: 274572, B: 1.845523, C: 175.16606},
		{ A: 135134, B: 3.372206, C: 39.617508},
		{ A: 121802, B: 5.797544, C: 76.266071},
		{ A: 100895, B: 0.377027, C: 73.297126},
		{ A: 69792, B: 3.79617, C: 2.96895},
		{ A: 46688, B: 5.74938, C: 33.67962},
		{ A: 24594, B: 0.50802, C: 109.94569},
		{ A: 16939, B: 1.59422, C: 71.81265},
		{ A: 14230, B: 1.07786, C: 74.7816},
		{ A: 12012, B: 1.92062, C: 1021.24889},
		{ A: 8395, B: 0.6782, C: 146.5943},
		{ A: 7572, B: 1.0715, C: 388.4652},
		{ A: 5721, B: 2.5906, C: 4.4534},
		{ A: 4840, B: 1.9069, C: 41.102},
		{ A: 4483, B: 2.9057, C: 529.691},
		{ A: 4421, B: 1.7499, C: 108.4612},
		{ A: 4354, B: 0.6799, C: 32.1951},
		{ A: 4270, B: 3.4134, C: 453.4249},
		{ A: 3381, B: 0.8481, C: 183.2428},
		{ A: 2881, B: 1.9860, C: 137.033},
		{ A: 2879, B: 3.6742, C: 350.3321},
		{ A: 2636, B: 3.0976, C: 213.2991},
		{ A: 2530, B: 5.7984, C: 490.0735},
		{ A: 2523, B: 0.4863, C: 493.0424},
		{ A: 2306, B: 2.8096, C: 70.3282},
		{ A: 2087, B: 0.6186, C: 33.9402}
	];

	var R1NeptuneCoefficients = [
		{ A: 236339, B: 0.704980, C: 38.133036},
		{ A: 13220, B: 3.32015, C: 1.48447},
		{ A: 8622, B: 6.2163, C: 35.1641},
		{ A: 2702, B: 1.8814, C: 39.6175},
		{ A: 2155, B: 2.0943, C: 2.9689},
		{ A: 2153, B: 5.1687, C: 76.2661},
		{ A: 1603, B: 0, C: 0},
		{ A: 1464, B: 1.1842, C: 33.6796},
		{ A: 1136, B: 3.9189, C: 36.6486},
		{ A: 898, B: 5.241, C: 388.465},
		{ A: 790, B: 0.533, C: 168.053},
		{ A: 760, B: 0.021, C: 182.28},
		{ A: 607, B: 1.077, C: 1021.249},
		{ A: 572, B: 3.401, C: 484.444},
		{ A: 561, B: 2.887, C: 498.671}
	];

	var R2NeptuneCoefficients = [
		{ A: 4247, B: 5.8991, C: 38.133},
		{ A: 218, B: 0.346, C: 1.484},
		{ A: 163, B: 2.239, C: 168.053},
		{ A: 156, B: 4.594, C: 182.28},
		{ A: 127, B: 2.848, C: 35.164}
	];

	var R3NeptuneCoefficients = [
		{ A: 166, B: 4.552, C: 38.133}
	];

	staticFunctions.L0NeptuneCoefficients = function () { return L0NeptuneCoefficients; };
	staticFunctions.L1NeptuneCoefficients = function () { return L1NeptuneCoefficients; };
	staticFunctions.L2NeptuneCoefficients = function () { return L2NeptuneCoefficients; };
	staticFunctions.L3NeptuneCoefficients = function () { return L3NeptuneCoefficients; };
	staticFunctions.L4NeptuneCoefficients = function () { return L4NeptuneCoefficients; };

	staticFunctions.B0NeptuneCoefficients = function () { return B0NeptuneCoefficients; };
	staticFunctions.B1NeptuneCoefficients = function () { return B1NeptuneCoefficients; };
	staticFunctions.B2NeptuneCoefficients = function () { return B2NeptuneCoefficients; };
	staticFunctions.B3NeptuneCoefficients = function () { return B3NeptuneCoefficients; };
	staticFunctions.B4NeptuneCoefficients = function () { return B4NeptuneCoefficients; };

	staticFunctions.R0NeptuneCoefficients = function () { return R0NeptuneCoefficients; };
	staticFunctions.R1NeptuneCoefficients = function () { return R1NeptuneCoefficients; };
	staticFunctions.R2NeptuneCoefficients = function () { return R2NeptuneCoefficients; };
	staticFunctions.R3NeptuneCoefficients = function () { return R3NeptuneCoefficients; };

	return staticFunctions;
}

Neptune.eclipticLongitude = function(JD) {
	var n = new Neptune;
	var L0NeptuneCoefficients = n.L0NeptuneCoefficients();
	var L1NeptuneCoefficients = n.L1NeptuneCoefficients();
	var L2NeptuneCoefficients = n.L2NeptuneCoefficients();
	var L3NeptuneCoefficients = n.L3NeptuneCoefficients();
	var L4NeptuneCoefficients = n.L4NeptuneCoefficients();

	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;

	//Calculate L0
	var nL0Coefficients = L0NeptuneCoefficients.length;
	var L0 = 0;
	var i;
	for (i=0; i<nL0Coefficients; i++)
	L0 += L0NeptuneCoefficients[i].A * Math.cos(L0NeptuneCoefficients[i].B + L0NeptuneCoefficients[i].C*rho);

	//Calculate L1
	var nL1Coefficients = L1NeptuneCoefficients.length;
	var L1 = 0;
	for (i=0; i<nL1Coefficients; i++)
	L1 += L1NeptuneCoefficients[i].A * Math.cos(L1NeptuneCoefficients[i].B + L1NeptuneCoefficients[i].C*rho);

	//Calculate L2
	var nL2Coefficients = L2NeptuneCoefficients.length;
	var L2 = 0;
	for (i=0; i<nL2Coefficients; i++)
	L2 += L2NeptuneCoefficients[i].A * Math.cos(L2NeptuneCoefficients[i].B + L2NeptuneCoefficients[i].C*rho);

	//Calculate L3
	var nL3Coefficients = L3NeptuneCoefficients.length;
	var L3 = 0;
	for (i=0; i<nL3Coefficients; i++)
	L3 += L3NeptuneCoefficients[i].A * Math.cos(L3NeptuneCoefficients[i].B + L3NeptuneCoefficients[i].C*rho);

	//Calculate L4
	var nL4Coefficients = L4NeptuneCoefficients.length;
	var L4 = 0;
	for (i=0; i<nL4Coefficients; i++)
	L4 += L4NeptuneCoefficients[i].A * Math.cos(L4NeptuneCoefficients[i].B + L4NeptuneCoefficients[i].C*rho);


	var value = (L0 + L1*rho + L2*rhosquared + L3*rhocubed + L4*rho4) / 100000000;

	//convert results back to degrees
	value = CoordTrans.mapTo0To360Range(CoordTrans.radToDeg(value));
	return value;
}

Neptune.eclipticLatitude = function(JD) {
	var n = new Neptune;
	var B0NeptuneCoefficients = n.B0NeptuneCoefficients();
	var B1NeptuneCoefficients = n.B1NeptuneCoefficients();
	var B2NeptuneCoefficients = n.B2NeptuneCoefficients();
	var B3NeptuneCoefficients = n.B3NeptuneCoefficients();
	var B4NeptuneCoefficients = n.B4NeptuneCoefficients();

	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;

	//Calculate B0
	var nB0Coefficients = B0NeptuneCoefficients.length;
	var B0 = 0;
	var i;
	for (i=0; i<nB0Coefficients; i++)
	B0 += B0NeptuneCoefficients[i].A * Math.cos(B0NeptuneCoefficients[i].B + B0NeptuneCoefficients[i].C*rho);

	//Calculate B1
	var nB1Coefficients = B1NeptuneCoefficients.length;
	var B1 = 0;
	for (i=0; i<nB1Coefficients; i++)
	B1 += B1NeptuneCoefficients[i].A * Math.cos(B1NeptuneCoefficients[i].B + B1NeptuneCoefficients[i].C*rho);

	//Calculate B2
	var nB2Coefficients = B2NeptuneCoefficients.length;
	var B2 = 0;
	for (i=0; i<nB2Coefficients; i++)
	B2 += B2NeptuneCoefficients[i].A * Math.cos(B2NeptuneCoefficients[i].B + B2NeptuneCoefficients[i].C*rho);

	//Calculate B3
	var nB3Coefficients = B3NeptuneCoefficients.length;
	var B3 = 0;
	for (i=0; i<nB3Coefficients; i++)
	B3 += B3NeptuneCoefficients[i].A * Math.cos(B3NeptuneCoefficients[i].B + B3NeptuneCoefficients[i].C*rho);

	//Calculate B4
	var nB4Coefficients = B4NeptuneCoefficients.length;
	var B4 = 0;
	for (i=0; i<nB4Coefficients; i++)
	B4 += B4NeptuneCoefficients[i].A * Math.cos(B4NeptuneCoefficients[i].B + B4NeptuneCoefficients[i].C*rho);

	var value = (B0 + B1*rho + B2*rhosquared + B3*rhocubed + B4*rho4) / 100000000;

	//convert results back to degrees
	value = CoordTrans.radToDeg(value);
	return value;
}

Neptune.radiusVector = function(JD) {
	var n = new Neptune;
	var R0NeptuneCoefficients = n.R0NeptuneCoefficients();
	var R1NeptuneCoefficients = n.R1NeptuneCoefficients();
	var R2NeptuneCoefficients = n.R2NeptuneCoefficients();
	var R3NeptuneCoefficients = n.R3NeptuneCoefficients();

	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;

	//Calculate R0
	var nR0Coefficients = R0NeptuneCoefficients.length;
	var R0 = 0;
	var i;
	for (i=0; i<nR0Coefficients; i++)
	R0 += R0NeptuneCoefficients[i].A * Math.cos(R0NeptuneCoefficients[i].B + R0NeptuneCoefficients[i].C*rho);

	//Calculate R1
	var nR1Coefficients = R1NeptuneCoefficients.length;
	var R1 = 0;
	for (i=0; i<nR1Coefficients; i++)
	R1 += R1NeptuneCoefficients[i].A * Math.cos(R1NeptuneCoefficients[i].B + R1NeptuneCoefficients[i].C*rho);

	//Calculate R2
	var nR2Coefficients = R2NeptuneCoefficients.length;
	var R2 = 0;
	for (i=0; i<nR2Coefficients; i++)
	R2 += R2NeptuneCoefficients[i].A * Math.cos(R2NeptuneCoefficients[i].B + R2NeptuneCoefficients[i].C*rho);

	//Calculate R3
	var nR3Coefficients = R3NeptuneCoefficients.length;
	var R3 = 0;
	for (i=0; i<nR3Coefficients; i++)
	R3 += R3NeptuneCoefficients[i].A * Math.cos(R3NeptuneCoefficients[i].B + R3NeptuneCoefficients[i].C*rho);


	return (R0 + R1*rho + R2*rhosquared + R3*rhocubed) / 100000000;
}