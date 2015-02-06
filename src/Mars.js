function Mars() {

	var staticFunctions = {};

	var L0MarsCoefficients = [
		{ A: 620347712, B: 0, C: 0},
		{ A: 18656368, B: 5.05037100, C: 3340.6124267},
		{ A: 1108217, B: 5.4009984, C: 6681.2248534},
		{ A: 91798, B: 5.75479, C: 10021.83728},
		{ A: 27745, B: 5.97050, C: 3.52312},
		{ A: 12316, B: 0.84956, C: 2810.92146},
		{ A: 10610, B: 2.93959, C: 2281.2305},
		{ A: 8927, B: 4.1570, C: 0.0173},
		{ A: 8716, B: 6.1101, C: 13362.4497},
		{ A: 7775, B: 3.3397, C: 5621.8429},
		{ A: 6798, B: 0.3646, C: 398.149},
		{ A: 4161, B: 0.2281, C: 2942.4634},
		{ A: 3575, B: 1.6619, C: 2544.3144},
		{ A: 3075, B: 0.8570, C: 191.4483},
		{ A: 2938, B: 6.0789, C: 0.0673},
		{ A: 2628, B: 0.6481, C: 3337.0893},
		{ A: 2580, B: 0.0300, C: 3344.1355},
		{ A: 2389, B: 5.0390, C: 796.298},
		{ A: 1799, B: 0.6563, C: 529.691},
		{ A: 1546, B: 2.9158, C: 1751.5395},
		{ A: 1528, B: 1.1498, C: 6151.5339},
		{ A: 1286, B: 3.0680, C: 2146.1654},
		{ A: 1264, B: 3.6228, C: 5092.152},
		{ A: 1025, B: 3.6933, C: 8962.4553},
		{ A: 892, B: 0.183, C: 16703.062},
		{ A: 859, B: 2.401, C: 2914.014},
		{ A: 833, B: 4.495, C: 3340.63},
		{ A: 833, B: 2.464, C: 3340.595},
		{ A: 749, B: 3.822, C: 155.42},
		{ A: 724, B: 0.675, C: 3738.761},
		{ A: 713, B: 3.663, C: 1059.382},
		{ A: 655, B: 0.489, C: 3127.313},
		{ A: 636, B: 2.922, C: 8432.764},
		{ A: 553, B: 4.475, C: 1748.016},
		{ A: 550, B: 3.810, C: 0.98},
		{ A: 472, B: 3.625, C: 1194.447},
		{ A: 426, B: 0.554, C: 6283.076},
		{ A: 415, B: 0.497, C: 213.299},
		{ A: 312, B: 0.999, C: 6677.702},
		{ A: 307, B: 0.381, C: 6684.748},
		{ A: 302, B: 4.486, C: 3532.061},
		{ A: 299, B: 2.783, C: 6254.627},
		{ A: 293, B: 4.221, C: 20.775},
		{ A: 284, B: 5.769, C: 3149.164},
		{ A: 281, B: 5.882, C: 1349.867},
		{ A: 274, B: 0.542, C: 3340.545},
		{ A: 274, B: 0.134, C: 3340.68},
		{ A: 239, B: 5.372, C: 4136.91},
		{ A: 236, B: 5.755, C: 3333.499},
		{ A: 231, B: 1.282, C: 3870.303},
		{ A: 221, B: 3.505, C: 382.897},
		{ A: 204, B: 2.821, C: 1221.849},
		{ A: 193, B: 3.357, C: 3.59},
		{ A: 189, B: 1.491, C: 9492.146},
		{ A: 179, B: 1.006, C: 951.718},
		{ A: 174, B: 2.414, C: 553.569},
		{ A: 172, B: 0.439, C: 5486.778},
		{ A: 160, B: 3.949, C: 4562.461},
		{ A: 144, B: 1.419, C: 135.065},
		{ A: 140, B: 3.326, C: 2700.715},
		{ A: 138, B: 4.301, C: 7.114},
		{ A: 131, B: 4.045, C: 12303.068},
		{ A: 128, B: 2.208, C: 1592.596},
		{ A: 128, B: 1.807, C: 5088.629},
		{ A: 117, B: 3.128, C: 7903.073},
		{ A: 113, B: 3.701, C: 1589.073},
		{ A: 110, B: 1.052, C: 242.729},
		{ A: 105, B: 0.785, C: 8827.39},
		{ A: 100, B: 3.243, C: 11773.377}
	];

	var L1MarsCoefficients = [
		{ A: 334085627474.0, B: 0, C: 0},
		{ A: 1458227, B: 3.6042605, C: 3340.6124267},
		{ A: 164901, B: 3.926313, C: 6681.224853},
		{ A: 19963, B: 4.26594, C: 10021.83728},
		{ A: 3452, B: 4.7321, C: 3.5231},
		{ A: 2485, B: 4.6128, C: 13362.4497},
		{ A: 842, B: 4.459, C: 2281.23},
		{ A: 538, B: 5.016, C: 398.149},
		{ A: 521, B: 4.994, C: 3344.136},
		{ A: 433, B: 2.561, C: 191.448},
		{ A: 430, B: 5.316, C: 155.42},
		{ A: 382, B: 3.539, C: 796.298},
		{ A: 314, B: 4.963, C: 16703.062},
		{ A: 283, B: 3.160, C: 2544.314},
		{ A: 206, B: 4.569, C: 2146.165},
		{ A: 169, B: 1.329, C: 3337.089},
		{ A: 158, B: 4.185, C: 1751.54},
		{ A: 134, B: 2.233, C: 0.98},
		{ A: 134, B: 5.974, C: 1748.016},
		{ A: 118, B: 6.024, C: 6151.534},
		{ A: 117, B: 2.213, C: 1059.382},
		{ A: 114, B: 2.129, C: 1194.447},
		{ A: 114, B: 5.428, C: 3738.761},
		{ A: 91, B: 1.10, C: 1349.87},
		{ A: 85, B: 3.91, C: 553.57},
		{ A: 83, B: 5.30, C: 6684.75},
		{ A: 81, B: 4.43, C: 529.69},
		{ A: 80, B: 2.25, C: 8962.46},
		{ A: 73, B: 2.50, C: 951.72},
		{ A: 73, B: 5.84, C: 242.73},
		{ A: 71, B: 3.86, C: 2914.01},
		{ A: 68, B: 5.02, C: 382.9},
		{ A: 65, B: 1.02, C: 3340.6},
		{ A: 65, B: 3.05, C: 3340.63},
		{ A: 62, B: 4.15, C: 3149.16},
		{ A: 57, B: 3.89, C: 4136.91},
		{ A: 48, B: 4.87, C: 213.3},
		{ A: 48, B: 1.18, C: 3333.5},
		{ A: 47, B: 1.31, C: 3185.19},
		{ A: 41, B: 0.71, C: 1592.6},
		{ A: 40, B: 2.73, C: 7.11},
		{ A: 40, B: 5.32, C: 20043.67},
		{ A: 33, B: 5.41, C: 6283.08},
		{ A: 28, B: 0.05, C: 9492.15},
		{ A: 27, B: 3.89, C: 1221.85},
		{ A: 27, B: 5.11, C: 2700.72}
	];

	var L2MarsCoefficients = [
		{ A: 58016, B: 2.04979, C: 3340.61243},
		{ A: 54188, B: 0, C: 0},
		{ A: 13908, B: 2.45742, C: 6681.22485},
		{ A: 2465, B: 2.8000, C: 10021.8373},
		{ A: 398, B: 3.141, C: 13362.45},
		{ A: 222, B: 3.194, C: 3.523},
		{ A: 121, B: 0.543, C: 155.42},
		{ A: 62, B: 3.49, C: 16703.06},
		{ A: 54, B: 3.54, C: 3344.14},
		{ A: 34, B: 6.00, C: 2281.23},
		{ A: 32, B: 4.14, C: 191.45},
		{ A: 30, B: 2.00, C: 796.3},
		{ A: 23, B: 4.33, C: 242.73},
		{ A: 22, B: 3.45, C: 398.15},
		{ A: 20, B: 5.42, C: 553.57},
		{ A: 16, B: 0.66, C: 0.98},
		{ A: 16, B: 6.11, C: 2146.17},
		{ A: 16, B: 1.22, C: 1748.02},
		{ A: 15, B: 6.10, C: 3185.19},
		{ A: 14, B: 4.02, C: 951.72},
		{ A: 14, B: 2.62, C: 1349.87},
		{ A: 13, B: 0.60, C: 1194.45},
		{ A: 12, B: 3.86, C: 6684.75},
		{ A: 11, B: 4.72, C: 2544.31},
		{ A: 10, B: 0.25, C: 382.9},
		{ A: 9, B: 0.68, C: 1059.38},
		{ A: 9, B: 3.83, C: 20043.67},
		{ A: 9, B: 3.88, C: 3738.76},
		{ A: 8, B: 5.46, C: 1751.54},
		{ A: 7, B: 2.58, C: 3149.16},
		{ A: 7, B: 2.38, C: 4136.91},
		{ A: 6, B: 5.48, C: 1592.6},
		{ A: 6, B: 2.34, C: 3097.88}
	];

	var L3MarsCoefficients = [
		{ A: 1482, B: 0.4443, C: 3340.6124},
		{ A: 662, B: 0.885, C: 6681.225},
		{ A: 188, B: 1.288, C: 10021.837},
		{ A: 41, B: 1.65, C: 13362.45},
		{ A: 26, B: 0, C: 0},
		{ A: 23, B: 2.05, C: 155.42},
		{ A: 10, B: 1.58, C: 3.52},
		{ A: 8, B: 2.00, C: 16703.06},
		{ A: 5, B: 2.82, C: 242.73},
		{ A: 4, B: 2.02, C: 3344.14},
		{ A: 3, B: 4.59, C: 3185.19},
		{ A: 3, B: 0.65, C: 553.57}
	];

	var L4MarsCoefficients = [
		{ A: 114, B: 3.1416, C: 0},
		{ A: 29, B: 5.64, C: 6681.22},
		{ A: 24, B: 5.14, C: 3340.61},
		{ A: 11, B: 6.03, C: 10021.84},
		{ A: 3, B: 0.13, C: 13362.45},
		{ A: 3, B: 3.56, C: 155.42},
		{ A: 1, B: 0.49, C: 16703.06},
		{ A: 1, B: 1.32, C: 242.73}
	];

	var L5MarsCoefficients = [
		{ A: 1, B: 3.14, C: 0},
		{ A: 1, B: 4.04, C: 6681.22}
	];

	var B0MarsCoefficients = [
		{ A: 3197135, B: 3.7683204, C: 3340.6124267},
		{ A: 298033, B: 4.106170, C: 6681.224853},
		{ A: 289105, B: 0, C: 0},
		{ A: 31366, B: 4.44651, C: 10021.83728},
		{ A: 3484, B: 4.7881, C: 13362.4497},
		{ A: 443, B: 5.026, C: 3344.136},
		{ A: 443, B: 5.652, C: 3337.089},
		{ A: 399, B: 5.131, C: 16703.062},
		{ A: 293, B: 3.793, C: 2281.23},
		{ A: 182, B: 6.136, C: 6151.534},
		{ A: 163, B: 4.264, C: 529.691},
		{ A: 160, B: 2.232, C: 1059.382},
		{ A: 149, B: 2.165, C: 5621.843},
		{ A: 143, B: 1.182, C: 3340.595},
		{ A: 143, B: 3.213, C: 3340.63},
		{ A: 139, B: 2.418, C: 8962.455}
	];

	var B1MarsCoefficients = [
		{ A: 350069, B: 5.368478, C: 3340.612427},
		{ A: 14116, B: 3.14159, C: 0},
		{ A: 9671, B: 5.4788, C: 6681.2249},
		{ A: 1472, B: 3.2021, C: 10021.8373},
		{ A: 426, B: 3.408, C: 13362.45},
		{ A: 102, B: 0.776, C: 3337.089},
		{ A: 79, B: 3.72, C: 16703.06},
		{ A: 33, B: 3.46, C: 5621.84},
		{ A: 26, B: 2.48, C: 2281.23}
	];

	var B2MarsCoefficients = [
		{ A: 16727, B: 0.60221, C: 3340.61243},
		{ A: 4987, B: 3.1416, C: 0},
		{ A: 302, B: 5.559, C: 6681.225},
		{ A: 26, B: 1.90, C: 13362.45},
		{ A: 21, B: 0.92, C: 10021.84},
		{ A: 12, B: 2.24, C: 3337.09},
		{ A: 8, B: 2.25, C: 16703.06}
	];

	var B3MarsCoefficients = [
		{ A: 607, B: 1.981, C: 3340.612},
		{ A: 43, B: 0, C: 0},
		{ A: 14, B: 1.80, C: 6681.22},
		{ A: 3, B: 3.45, C: 10021.84}
	];

	var B4MarsCoefficients = [
		{ A: 13, B: 0, C: 0},
		{ A: 11, B: 3.46, C: 3340.61},
		{ A: 1, B: 0.50, C: 6681.22}
	];

	var R0MarsCoefficients = [
		{ A: 153033488, B: 0, C: 0},
		{ A: 14184953, B: 3.47971284, C: 3340.6124267},
		{ A: 660776, B: 3.817834, C: 6681.224853},
		{ A: 46179, B: 4.15595, C: 10021.83728},
		{ A: 8110, B: 5.5596, C: 2810.9215},
		{ A: 7485, B: 1.7724, C: 5621.8429},
		{ A: 5523, B: 1.3644, C: 2281.2305},
		{ A: 3825, B: 4.4941, C: 13362.4497},
		{ A: 2484, B: 4.9255, C: 2942.4634},
		{ A: 2307, B: 0.0908, C: 2544.3144},
		{ A: 1999, B: 5.3606, C: 3337.0893},
		{ A: 1960, B: 4.7425, C: 3344.1355},
		{ A: 1167, B: 2.1126, C: 5092.152},
		{ A: 1103, B: 5.0091, C: 398.149},
		{ A: 992, B: 5.839, C: 6151.534},
		{ A: 899, B: 4.408, C: 529.691},
		{ A: 807, B: 2.102, C: 1059.382},
		{ A: 798, B: 3.448, C: 796.298},
		{ A: 741, B: 1.499, C: 2146.165},
		{ A: 726, B: 1.245, C: 8432.764},
		{ A: 692, B: 2.134, C: 8962.455},
		{ A: 633, B: 0.894, C: 3340.595},
		{ A: 633, B: 2.924, C: 3340.63},
		{ A: 630, B: 1.287, C: 1751.54},
		{ A: 574, B: 0.829, C: 2914.014},
		{ A: 526, B: 5.383, C: 3738.761},
		{ A: 473, B: 5.199, C: 3127.313},
		{ A: 348, B: 4.832, C: 16703.062},
		{ A: 284, B: 2.907, C: 3532.061},
		{ A: 280, B: 5.257, C: 6283.076},
		{ A: 276, B: 1.218, C: 6254.627},
		{ A: 275, B: 2.908, C: 1748.016},
		{ A: 270, B: 3.764, C: 5884.927},
		{ A: 239, B: 2.037, C: 1194.447},
		{ A: 234, B: 5.105, C: 5486.778},
		{ A: 228, B: 3.255, C: 6872.673},
		{ A: 223, B: 4.199, C: 3149.164},
		{ A: 219, B: 5.583, C: 191.448},
		{ A: 208, B: 5.255, C: 3340.545},
		{ A: 208, B: 4.846, C: 3340.68},
		{ A: 186, B: 5.699, C: 6677.702},
		{ A: 183, B: 5.081, C: 6684.748},
		{ A: 179, B: 4.184, C: 3333.499},
		{ A: 176, B: 5.953, C: 3870.303},
		{ A: 164, B: 3.799, C: 4136.91}
	];

	var R1MarsCoefficients = [
		{ A: 1107433, B: 2.0325052, C: 3340.6124267},
		{ A: 103176, B: 2.370718, C: 6681.224853},
		{ A: 12877, B: 0, C: 0},
		{ A: 10816, B: 2.70888, C: 10021.83728},
		{ A: 1195, B: 3.0470, C: 13362.4497},
		{ A: 439, B: 2.888, C: 2281.23},
		{ A: 396, B: 3.423, C: 3344.136},
		{ A: 183, B: 1.584, C: 2544.314},
		{ A: 136, B: 3.385, C: 16703.062},
		{ A: 128, B: 6.043, C: 3337.089},
		{ A: 128, B: 0.630, C: 1059.382},
		{ A: 127, B: 1.954, C: 796.298},
		{ A: 118, B: 2.998, C: 2146.165},
		{ A: 88, B: 3.42, C: 398.15},
		{ A: 83, B: 3.86, C: 3738.76},
		{ A: 76, B: 4.45, C: 6151.53},
		{ A: 72, B: 2.76, C: 529.69},
		{ A: 67, B: 2.55, C: 1751.54},
		{ A: 66, B: 4.41, C: 1748.02},
		{ A: 58, B: 0.54, C: 1194.45},
		{ A: 54, B: 0.68, C: 8962.46},
		{ A: 51, B: 3.73, C: 6684.75},
		{ A: 49, B: 5.73, C: 3340.6},
		{ A: 49, B: 1.48, C: 3340.63},
		{ A: 48, B: 2.58, C: 3149.16},
		{ A: 48, B: 2.29, C: 2914.01},
		{ A: 39, B: 2.32, C: 4136.91}
	];

	var R2MarsCoefficients = [
		{ A: 44242, B: 0.47931, C: 3340.61243},
		{ A: 8138, B: 0.8700, C: 6681.2249},
		{ A: 1275, B: 1.2259, C: 10021.8373},
		{ A: 187, B: 1.573, C: 13362.45},
		{ A: 52, B: 3.14, C: 0},
		{ A: 41, B: 1.97, C: 3344.14},
		{ A: 27, B: 1.92, C: 16703.06},
		{ A: 18, B: 4.43, C: 2281.23},
		{ A: 12, B: 4.53, C: 3185.19},
		{ A: 10, B: 5.39, C: 1059.38},
		{ A: 10, B: 0.42, C: 796.3}
	];

	var R3MarsCoefficients = [
		{ A: 1113, B: 5.1499, C: 3340.6124},
		{ A: 424, B: 5.613, C: 6681.225},
		{ A: 100, B: 5.997, C: 10021.837},
		{ A: 20, B: 0.08, C: 13362.45},
		{ A: 5, B: 3.14, C: 0},
		{ A: 3, B: 0.43, C: 16703.06}
	];

	var R4MarsCoefficients = [
		{ A: 20, B: 3.58, C: 3340.61},
		{ A: 16, B: 4.05, C: 6681.22},
		{ A: 6, B: 4.46, C: 10021.84},
		{ A: 2, B: 4.84, C: 13362.45}
	];

	staticFunctions.L0MarsCoefficients = function () { return L0MarsCoefficients; };
	staticFunctions.L1MarsCoefficients = function () { return L1MarsCoefficients; };
	staticFunctions.L2MarsCoefficients = function () { return L2MarsCoefficients; };
	staticFunctions.L3MarsCoefficients = function () { return L3MarsCoefficients; };
	staticFunctions.L4MarsCoefficients = function () { return L4MarsCoefficients; };
	staticFunctions.L5MarsCoefficients = function () { return L5MarsCoefficients; };

	staticFunctions.B0MarsCoefficients = function () { return B0MarsCoefficients; };
	staticFunctions.B1MarsCoefficients = function () { return B1MarsCoefficients; };
	staticFunctions.B2MarsCoefficients = function () { return B2MarsCoefficients; };
	staticFunctions.B3MarsCoefficients = function () { return B3MarsCoefficients; };
	staticFunctions.B4MarsCoefficients = function () { return B4MarsCoefficients; };

	staticFunctions.R0MarsCoefficients = function () { return R0MarsCoefficients; };
	staticFunctions.R1MarsCoefficients = function () { return R1MarsCoefficients; };
	staticFunctions.R2MarsCoefficients = function () { return R2MarsCoefficients; };
	staticFunctions.R3MarsCoefficients = function () { return R3MarsCoefficients; };
	staticFunctions.R4MarsCoefficients = function () { return R4MarsCoefficients; };

	return staticFunctions;
}

Mars.eclipticLongitude = function(JD) {
	var m = new Mars;
	var L0MarsCoefficients = m.L0MarsCoefficients();
	var L1MarsCoefficients = m.L1MarsCoefficients();
	var L2MarsCoefficients = m.L2MarsCoefficients();
	var L3MarsCoefficients = m.L3MarsCoefficients();
	var L4MarsCoefficients = m.L4MarsCoefficients();
	var L5MarsCoefficients = m.L5MarsCoefficients();
	
	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;
	var rho5 = rho4*rho;

	//Calculate L0
	var nL0Coefficients = L0MarsCoefficients.length;
	var L0 = 0;
	var i;
	for (i=0; i<nL0Coefficients; i++)
	L0 += L0MarsCoefficients[i].A * Math.cos(L0MarsCoefficients[i].B + L0MarsCoefficients[i].C*rho);

	//Calculate L1
	var nL1Coefficients = L1MarsCoefficients.length;
	var L1 = 0;
	for (i=0; i<nL1Coefficients; i++)
	L1 += L1MarsCoefficients[i].A * Math.cos(L1MarsCoefficients[i].B + L1MarsCoefficients[i].C*rho);

	//Calculate L2
	var nL2Coefficients = L2MarsCoefficients.length;
	var L2 = 0;
	for (i=0; i<nL2Coefficients; i++)
	L2 += L2MarsCoefficients[i].A * Math.cos(L2MarsCoefficients[i].B + L2MarsCoefficients[i].C*rho);

	//Calculate L3
	var nL3Coefficients = L3MarsCoefficients.length;
	var L3 = 0;
	for (i=0; i<nL3Coefficients; i++)
	L3 += L3MarsCoefficients[i].A * Math.cos(L3MarsCoefficients[i].B + L3MarsCoefficients[i].C*rho);

	//Calculate L4
	var nL4Coefficients = L4MarsCoefficients.length;
	var L4 = 0;
	for (i=0; i<nL4Coefficients; i++)
	L4 += L4MarsCoefficients[i].A * Math.cos(L4MarsCoefficients[i].B + L4MarsCoefficients[i].C*rho);

	//Calculate L5
	var nL5Coefficients = L5MarsCoefficients.length;
	var L5 = 0;
	for (i=0; i<nL5Coefficients; i++)
	L5 += L5MarsCoefficients[i].A * Math.cos(L5MarsCoefficients[i].B + L5MarsCoefficients[i].C*rho);

	var value = (L0 + L1*rho + L2*rhosquared + L3*rhocubed + L4*rho4 + L5*rho5) / 100000000;

	//convert results back to degrees
	value = CoordTrans.mapTo0To360Range(CoordTrans.radToDeg(value));
	return value;
}

Mars.eclipticLatitude = function(JD) {
	var m = new Mars;
	var B0MarsCoefficients = m.B0MarsCoefficients();
	var B1MarsCoefficients = m.B1MarsCoefficients();
	var B2MarsCoefficients = m.B2MarsCoefficients();
	var B3MarsCoefficients = m.B3MarsCoefficients();
	var B4MarsCoefficients = m.B4MarsCoefficients();

	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;

	//Calculate B0
	var nB0Coefficients = B0MarsCoefficients.length;
	var B0 = 0;
	var i;
	for (i=0; i<nB0Coefficients; i++)
	B0 += B0MarsCoefficients[i].A * Math.cos(B0MarsCoefficients[i].B + B0MarsCoefficients[i].C*rho);

	//Calculate B1
	var nB1Coefficients = B1MarsCoefficients.length;
	var B1 = 0;
	for (i=0; i<nB1Coefficients; i++)
	B1 += B1MarsCoefficients[i].A * Math.cos(B1MarsCoefficients[i].B + B1MarsCoefficients[i].C*rho);

	//Calculate B2
	var nB2Coefficients = B2MarsCoefficients.length;
	var B2 = 0;
	for (i=0; i<nB2Coefficients; i++)
	B2 += B2MarsCoefficients[i].A * Math.cos(B2MarsCoefficients[i].B + B2MarsCoefficients[i].C*rho);

	//Calculate B3
	var nB3Coefficients = B3MarsCoefficients.length;
	var B3 = 0;
	for (i=0; i<nB3Coefficients; i++)
	B3 += B3MarsCoefficients[i].A * Math.cos(B3MarsCoefficients[i].B + B3MarsCoefficients[i].C*rho);

	//Calculate B4
	var nB4Coefficients = B4MarsCoefficients.length;
	var B4 = 0;
	for (i=0; i<nB4Coefficients; i++)
	B4 += B4MarsCoefficients[i].A * Math.cos(B4MarsCoefficients[i].B + B4MarsCoefficients[i].C*rho);

	var value = (B0 + B1*rho + B2*rhosquared + B3*rhocubed + B4*rho4) / 100000000;

	//convert results back to degrees
	value = CoordTrans.radToDeg(value);
	return value;
}

Mars.radiusVector = function(JD) {
	var m = new Mars;
	var R0MarsCoefficients = m.R0MarsCoefficients();
	var R1MarsCoefficients = m.R1MarsCoefficients();
	var R2MarsCoefficients = m.R2MarsCoefficients();
	var R3MarsCoefficients = m.R3MarsCoefficients();
	var R4MarsCoefficients = m.R4MarsCoefficients();

	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;

	//Calculate R0
	var nR0Coefficients = R0MarsCoefficients.length;
	var R0 = 0;
	var i;
	for (i=0; i<nR0Coefficients; i++)
	R0 += R0MarsCoefficients[i].A * Math.cos(R0MarsCoefficients[i].B + R0MarsCoefficients[i].C*rho);

	//Calculate R1
	var nR1Coefficients = R1MarsCoefficients.length;
	var R1 = 0;
	for (i=0; i<nR1Coefficients; i++)
	R1 += R1MarsCoefficients[i].A * Math.cos(R1MarsCoefficients[i].B + R1MarsCoefficients[i].C*rho);

	//Calculate R2
	var nR2Coefficients = R2MarsCoefficients.length;
	var R2 = 0;
	for (i=0; i<nR2Coefficients; i++)
	R2 += R2MarsCoefficients[i].A * Math.cos(R2MarsCoefficients[i].B + R2MarsCoefficients[i].C*rho);

	//Calculate R3
	var nR3Coefficients = R3MarsCoefficients.length;
	var R3 = 0;
	for (i=0; i<nR3Coefficients; i++)
	R3 += R3MarsCoefficients[i].A * Math.cos(R3MarsCoefficients[i].B + R3MarsCoefficients[i].C*rho);

	//Calculate R4
	var nR4Coefficients = R4MarsCoefficients.length;
	var R4 = 0;
	for (i=0; i<nR4Coefficients; i++)
	R4 += R4MarsCoefficients[i].A * Math.cos(R4MarsCoefficients[i].B + R4MarsCoefficients[i].C*rho);

	return (R0 + R1*rho + R2*rhosquared + R3*rhocubed + R4*rho4) / 100000000;
}