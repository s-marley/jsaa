function Uranus() {

	var staticFunctions = {};

	var L0UranusCoefficients = [
		{ A: 548129294, B: 0, C: 0},
		{ A: 9260408, B: 0.8910642, C: 74.7815986},
		{ A: 1504248, B: 3.6271926, C: 1.4844727},
		{ A: 365982, B: 1.899622, C: 73.297126},
		{ A: 272328, B: 3.358237, C: 149.563197},
		{ A: 70328, B: 5.39254, C: 63.7359},
		{ A: 68893, B: 6.09292, C: 76.26607},
		{ A: 61999, B: 2.26952, C: 2.96895},
		{ A: 61951, B: 2.85099, C: 11.0457},
		{ A: 26469, B: 3.14152, C: 71.81265},
		{ A: 25711, B: 6.11380, C: 454.90937},
		{ A: 21079, B: 4.36059, C: 148.07872},
		{ A: 17819, B: 1.74437, C: 36.64856},
		{ A: 14613, B: 4.73732, C: 3.93215},
		{ A: 11163, B: 5.82682, C: 224.3448},
		{ A: 10998, B: 0.48865, C: 138.5175},
		{ A: 9527, B: 2.9552, C: 35.1641},
		{ A: 7546, B: 5.2363, C: 109.9457},
		{ A: 4220, B: 3.2333, C: 70.8494},
		{ A: 4052, B: 2.2775, C: 151.0477},
		{ A: 3490, B: 5.4831, C: 146.5943},
		{ A: 3355, B: 1.0655, C: 4.4534},
		{ A: 3144, B: 4.7520, C: 77.7505},
		{ A: 2927, B: 4.6290, C: 9.5612},
		{ A: 2922, B: 5.3524, C: 85.8273},
		{ A: 2273, B: 4.3660, C: 70.3282},
		{ A: 2149, B: 0.6075, C: 38.133},
		{ A: 2051, B: 1.5177, C: 0.1119},
		{ A: 1992, B: 4.9244, C: 277.035},
		{ A: 1667, B: 3.6274, C: 380.1278},
		{ A: 1533, B: 2.5859, C: 52.6902},
		{ A: 1376, B: 2.0428, C: 65.2204},
		{ A: 1372, B: 4.1964, C: 111.4302},
		{ A: 1284, B: 3.1135, C: 202.2534},
		{ A: 1282, B: 0.5427, C: 222.8603},
		{ A: 1244, B: 0.9161, C: 2.4477},
		{ A: 1221, B: 0.1990, C: 108.4612},
		{ A: 1151, B: 4.1790, C: 33.6796},
		{ A: 1150, B: 0.9334, C: 3.1814},
		{ A: 1090, B: 1.7750, C: 12.5302},
		{ A: 1072, B: 0.2356, C: 62.2514},
		{ A: 946, B: 1.192, C: 127.472},
		{ A: 708, B: 5.183, C: 213.299},
		{ A: 653, B: 0.966, C: 78.714},
		{ A: 628, B: 0.182, C: 984.6},
		{ A: 607, B: 5.432, C: 529.691},
		{ A: 559, B: 3.358, C: 0.521},
		{ A: 524, B: 2.013, C: 299.126},
		{ A: 483, B: 2.106, C: 0.963},
		{ A: 471, B: 1.407, C: 184.727},
		{ A: 467, B: 0.415, C: 145.11},
		{ A: 434, B: 5.521, C: 183.243},
		{ A: 405, B: 5.987, C: 8.077},
		{ A: 399, B: 0.338, C: 415.552},
		{ A: 396, B: 5.870, C: 351.817},
		{ A: 379, B: 2.350, C: 56.622},
		{ A: 310, B: 5.833, C: 145.631},
		{ A: 300, B: 5.644, C: 22.091},
		{ A: 294, B: 5.839, C: 39.618},
		{ A: 252, B: 1.637, C: 221.376},
		{ A: 249, B: 4.746, C: 225.829},
		{ A: 239, B: 2.350, C: 137.033},
		{ A: 224, B: 0.516, C: 84.343},
		{ A: 223, B: 2.843, C: 0.261},
		{ A: 220, B: 1.922, C: 67.668},
		{ A: 217, B: 6.142, C: 5.938},
		{ A: 216, B: 4.778, C: 340.771},
		{ A: 208, B: 5.580, C: 68.844},
		{ A: 202, B: 1.297, C: 0.048},
		{ A: 199, B: 0.956, C: 152.532},
		{ A: 194, B: 1.888, C: 456.394},
		{ A: 193, B: 0.916, C: 453.425},
		{ A: 187, B: 1.319, C: 0.16},
		{ A: 182, B: 3.536, C: 79.235},
		{ A: 173, B: 1.539, C: 160.609},
		{ A: 172, B: 5.680, C: 219.891},
		{ A: 170, B: 3.677, C: 5.417},
		{ A: 169, B: 5.879, C: 18.159},
		{ A: 165, B: 1.424, C: 106.977},
		{ A: 163, B: 3.050, C: 112.915},
		{ A: 158, B: 0.738, C: 54.175},
		{ A: 147, B: 1.263, C: 59.804},
		{ A: 143, B: 1.300, C: 35.425},
		{ A: 139, B: 5.386, C: 32.195},
		{ A: 139, B: 4.260, C: 909.819},
		{ A: 124, B: 1.374, C: 7.114},
		{ A: 110, B: 2.027, C: 554.07},
		{ A: 109, B: 5.706, C: 77.963},
		{ A: 104, B: 5.028, C: 0.751},
		{ A: 104, B: 1.458, C: 24.379},
		{ A: 103, B: 0.681, C: 14.978}
	];

	var L1UranusCoefficients = [
		{ A: 7502543122.0, B: 0, C: 0},
		{ A: 154458, B: 5.242017, C: 74.781599},
		{ A: 24456, B: 1.71256, C: 1.48447},
		{ A: 9258, B: 0.4284, C: 11.0457},
		{ A: 8266, B: 1.5022, C: 63.7359},
		{ A: 7842, B: 1.3198, C: 149.5632},
		{ A: 3899, B: 0.4648, C: 3.9322},
		{ A: 2284, B: 4.1737, C: 76.2661},
		{ A: 1927, B: 0.5301, C: 2.9689},
		{ A: 1233, B: 1.5863, C: 70.8494},
		{ A: 791, B: 5.436, C: 3.181},
		{ A: 767, B: 1.996, C: 73.297},
		{ A: 482, B: 2.984, C: 85.827},
		{ A: 450, B: 4.138, C: 138.517},
		{ A: 446, B: 3.723, C: 224.345},
		{ A: 427, B: 4.731, C: 71.813},
		{ A: 354, B: 2.583, C: 148.079},
		{ A: 348, B: 2.454, C: 9.561},
		{ A: 317, B: 5.579, C: 52.69},
		{ A: 206, B: 2.363, C: 2.448},
		{ A: 189, B: 4.202, C: 56.622},
		{ A: 184, B: 0.284, C: 151.048},
		{ A: 180, B: 5.684, C: 12.53},
		{ A: 171, B: 3.001, C: 78.714},
		{ A: 158, B: 2.909, C: 0.963},
		{ A: 155, B: 5.591, C: 4.453},
		{ A: 154, B: 4.652, C: 35.164},
		{ A: 152, B: 2.942, C: 77.751},
		{ A: 143, B: 2.590, C: 62.251},
		{ A: 121, B: 4.148, C: 127.472},
		{ A: 116, B: 3.732, C: 65.22},
		{ A: 102, B: 4.188, C: 145.631},
		{ A: 102, B: 6.034, C: 0.112},
		{ A: 88, B: 3.99, C: 18.16},
		{ A: 88, B: 6.16, C: 202.25},
		{ A: 81, B: 2.64, C: 22.09},
		{ A: 72, B: 6.05, C: 70.33},
		{ A: 69, B: 4.05, C: 77.96},
		{ A: 59, B: 3.70, C: 67.67},
		{ A: 47, B: 3.54, C: 351.82},
		{ A: 44, B: 5.91, C: 7.11},
		{ A: 43, B: 5.72, C: 5.42},
		{ A: 39, B: 4.92, C: 222.86},
		{ A: 36, B: 5.90, C: 33.68},
		{ A: 36, B: 3.29, C: 8.08},
		{ A: 36, B: 3.33, C: 71.6},
		{ A: 35, B: 5.08, C: 38.13},
		{ A: 31, B: 5.62, C: 984.6},
		{ A: 31, B: 5.50, C: 59.8},
		{ A: 31, B: 5.46, C: 160.61},
		{ A: 30, B: 1.66, C: 447.8},
		{ A: 29, B: 1.15, C: 462.02},
		{ A: 29, B: 4.52, C: 84.34},
		{ A: 27, B: 5.54, C: 131.4},
		{ A: 27, B: 6.15, C: 299.13},
		{ A: 26, B: 4.99, C: 137.03},
		{ A: 25, B: 5.74, C: 380.13}
	];

	var L2UranusCoefficients = [
		{ A: 53033, B: 0, C: 0},
		{ A: 2358, B: 2.2601, C: 74.7816},
		{ A: 769, B: 4.526, C: 11.046},
		{ A: 552, B: 3.258, C: 63.736},
		{ A: 542, B: 2.276, C: 3.932},
		{ A: 529, B: 4.923, C: 1.484},
		{ A: 258, B: 3.691, C: 3.181},
		{ A: 239, B: 5.858, C: 149.563},
		{ A: 182, B: 6.218, C: 70.849},
		{ A: 54, B: 1.44, C: 76.27},
		{ A: 49, B: 6.03, C: 56.62},
		{ A: 45, B: 3.91, C: 2.45},
		{ A: 45, B: 0.81, C: 85.83},
		{ A: 38, B: 1.78, C: 52.69},
		{ A: 37, B: 4.46, C: 2.97},
		{ A: 33, B: 0.86, C: 9.56},
		{ A: 29, B: 5.10, C: 73.3},
		{ A: 24, B: 2.11, C: 18.16},
		{ A: 22, B: 5.99, C: 138.52},
		{ A: 22, B: 4.82, C: 78.71},
		{ A: 21, B: 2.40, C: 77.96},
		{ A: 21, B: 2.17, C: 224.34},
		{ A: 17, B: 2.54, C: 145.63},
		{ A: 17, B: 3.47, C: 12.53},
		{ A: 12, B: 0.02, C: 22.09},
		{ A: 11, B: 0.08, C: 127.47},
		{ A: 10, B: 5.16, C: 71.6},
		{ A: 10, B: 4.46, C: 62.25},
		{ A: 9, B: 4.26, C: 7.11},
		{ A: 8, B: 5.50, C: 67.67},
		{ A: 7, B: 1.25, C: 5.42},
		{ A: 6, B: 3.36, C: 447.8},
		{ A: 6, B: 5.45, C: 65.22},
		{ A: 6, B: 4.52, C: 151.05},
		{ A: 6, B: 5.73, C: 462.02}
	];

	var L3UranusCoefficients = [
		{ A: 121, B: 0.024, C: 74.782},
		{ A: 68, B: 4.12, C: 3.93},
		{ A: 53, B: 2.39, C: 11.05},
		{ A: 46, B: 0, C: 0},
		{ A: 45, B: 2.04, C: 3.18},
		{ A: 44, B: 2.96, C: 1.48},
		{ A: 25, B: 4.89, C: 63.74},
		{ A: 21, B: 4.55, C: 70.85},
		{ A: 20, B: 2.31, C: 149.56},
		{ A: 9, B: 1.58, C: 56.62},
		{ A: 4, B: 0.23, C: 18.16},
		{ A: 4, B: 5.39, C: 76.27},
		{ A: 4, B: 0.95, C: 77.96},
		{ A: 3, B: 4.98, C: 85.83},
		{ A: 3, B: 4.13, C: 52.69},
		{ A: 3, B: 0.37, C: 78.71},
		{ A: 2, B: 0.86, C: 145.63},
		{ A: 2, B: 5.66, C: 9.56}
	];

	var L4UranusCoefficients = [
		{ A: 114, B: 3.142, C: 0},
		{ A: 6, B: 4.58, C: 74.78},
		{ A: 3, B: 0.35, C: 11.05},
		{ A: 1, B: 3.42, C: 56.62}
	];

	var B0UranusCoefficients = [
		{ A: 1346278, B: 2.6187781, C: 74.7815986},
		{ A: 62341, B: 5.08111, C: 149.5632},
		{ A: 61601, B: 3.14159, C: 0},
		{ A: 9964, B: 1.6160, C: 76.2661},
		{ A: 9926, B: 0.5763, C: 73.2971},
		{ A: 3259, B: 1.2612, C: 224.3448},
		{ A: 2972, B: 2.2437, C: 1.4845},
		{ A: 2010, B: 6.0555, C: 148.0787},
		{ A: 1522, B: 0.2796, C: 63.7359},
		{ A: 924, B: 4.038, C: 151.048},
		{ A: 761, B: 6.140, C: 71.813},
		{ A: 522, B: 3.321, C: 138.517},
		{ A: 463, B: 0.743, C: 85.827},
		{ A: 437, B: 3.381, C: 529.691},
		{ A: 435, B: 0.341, C: 77.751},
		{ A: 431, B: 3.554, C: 213.299},
		{ A: 420, B: 5.213, C: 11.046},
		{ A: 245, B: 0.788, C: 2.969},
		{ A: 233, B: 2.257, C: 222.86},
		{ A: 216, B: 1.591, C: 38.133},
		{ A: 180, B: 3.725, C: 299.126},
		{ A: 175, B: 1.236, C: 146.594},
		{ A: 174, B: 1.937, C: 380.128},
		{ A: 160, B: 5.336, C: 111.43},
		{ A: 144, B: 5.962, C: 35.164},
		{ A: 116, B: 5.739, C: 70.849},
		{ A: 106, B: 0.941, C: 70.328},
		{ A: 102, B: 2.619, C: 78.714}
	];

	var B1UranusCoefficients = [
		{ A: 206366, B: 4.123943, C: 74.781599},
		{ A: 8563, B: 0.3382, C: 149.5632},
		{ A: 1726, B: 2.1219, C: 73.2971},
		{ A: 1374, B: 0, C: 0},
		{ A: 1369, B: 3.0686, C: 76.2661},
		{ A: 451, B: 3.777, C: 1.484},
		{ A: 400, B: 2.848, C: 224.345},
		{ A: 307, B: 1.255, C: 148.079},
		{ A: 154, B: 3.786, C: 63.736},
		{ A: 112, B: 5.573, C: 151.048},
		{ A: 111, B: 5.329, C: 138.517},
		{ A: 83, B: 3.59, C: 71.81},
		{ A: 56, B: 3.40, C: 85.83},
		{ A: 54, B: 1.70, C: 77.75},
		{ A: 42, B: 1.21, C: 11.05},
		{ A: 41, B: 4.45, C: 78.71},
		{ A: 32, B: 3.77, C: 222.86},
		{ A: 30, B: 2.56, C: 2.97},
		{ A: 27, B: 5.34, C: 213.3},
		{ A: 26, B: 0.42, C: 380.13}
	];

	var B2UranusCoefficients = [
		{ A: 9212, B: 5.8004, C: 74.7816},
		{ A: 557, B: 0, C: 0},
		{ A: 286, B: 2.177, C: 149.563},
		{ A: 95, B: 3.84, C: 73.3},
		{ A: 45, B: 4.88, C: 76.27},
		{ A: 20, B: 5.46, C: 1.48},
		{ A: 15, B: 0.88, C: 138.52},
		{ A: 14, B: 2.85, C: 148.08},
		{ A: 14, B: 5.07, C: 63.74},
		{ A: 10, B: 5.00, C: 224.34},
		{ A: 8, B: 6.27, C: 78.71}
	];

	var B3UranusCoefficients = [
		{ A: 268, B: 1.251, C: 74.782},
		{ A: 11, B: 3.14, C: 0},
		{ A: 6, B: 4.01, C: 149.56},
		{ A: 3, B: 5.78, C: 73.3}
	];

	var B4UranusCoefficients = [
		{ A: 6, B: 2.85, C: 74.78}
	];

	var R0UranusCoefficients = [
		{ A: 1921264848, B: 0, C: 0},
		{ A: 88784984, B: 5.60377527, C: 74.78159857},
		{ A: 3440836, B: 0.3283610, C: 73.2971259},
		{ A: 2055653, B: 1.7829517, C: 149.5631971},
		{ A: 649322, B: 4.522473, C: 76.266071},
		{ A: 602248, B: 3.860038, C: 63.735898},
		{ A: 496404, B: 1.401399, C: 454.909367},
		{ A: 338526, B: 1.580027, C: 138.517497},
		{ A: 243508, B: 1.570866, C: 71.812653},
		{ A: 190522, B: 1.998094, C: 1.484473},
		{ A: 161858, B: 2.791379, C: 148.078724},
		{ A: 143706, B: 1.383686, C: 11.0457},
		{ A: 93192, B: 0.17437, C: 36.64856},
		{ A: 89806, B: 3.66105, C: 109.94569},
		{ A: 71424, B: 4.24509, C: 224.3448},
		{ A: 46677, B: 1.39977, C: 35.16409},
		{ A: 39026, B: 3.36235, C: 277.03499},
		{ A: 39010, B: 1.66971, C: 70.84945},
		{ A: 36755, B: 3.88649, C: 146.59425},
		{ A: 30349, B: 0.70100, C: 151.04767},
		{ A: 29156, B: 3.18056, C: 77.75054},
		{ A: 25786, B: 3.78538, C: 85.8273},
		{ A: 25620, B: 5.25656, C: 380.12777},
		{ A: 22637, B: 0.72519, C: 529.69097},
		{ A: 20473, B: 2.79640, C: 70.32818},
		{ A: 20472, B: 1.55589, C: 202.2534},
		{ A: 17901, B: 0.55455, C: 2.96895},
		{ A: 15503, B: 5.35405, C: 38.13304},
		{ A: 14702, B: 4.90434, C: 108.46122},
		{ A: 12897, B: 2.62154, C: 111.43016},
		{ A: 12328, B: 5.96039, C: 127.4718},
		{ A: 11959, B: 1.75044, C: 984.60033},
		{ A: 11853, B: 0.99343, C: 52.6902},
		{ A: 11696, B: 3.29826, C: 3.93215},
		{ A: 11495, B: 0.43774, C: 65.22037},
		{ A: 10793, B: 1.42105, C: 213.2991},
		{ A: 9111, B: 4.9964, C: 62.2514},
		{ A: 8421, B: 5.2535, C: 222.8603},
		{ A: 8402, B: 5.0388, C: 415.5525},
		{ A: 7449, B: 0.7949, C: 351.8166},
		{ A: 7329, B: 3.9728, C: 183.2428},
		{ A: 6046, B: 5.6796, C: 78.7138},
		{ A: 5524, B: 3.1150, C: 9.5612},
		{ A: 5445, B: 5.1058, C: 145.1098},
		{ A: 5238, B: 2.6296, C: 33.6796},
		{ A: 4079, B: 3.2206, C: 340.7709},
		{ A: 3919, B: 4.2502, C: 39.6175},
		{ A: 3802, B: 6.1099, C: 184.7273},
		{ A: 3781, B: 3.4584, C: 456.3938},
		{ A: 3687, B: 2.4872, C: 453.4249},
		{ A: 3102, B: 4.1403, C: 219.8914},
		{ A: 2963, B: 0.8298, C: 56.6224},
		{ A: 2942, B: 0.4239, C: 299.1264},
		{ A: 2940, B: 2.1464, C: 137.033},
		{ A: 2938, B: 3.6766, C: 140.002},
		{ A: 2865, B: 0.3100, C: 12.5302},
		{ A: 2538, B: 4.8546, C: 131.4039},
		{ A: 2364, B: 0.4425, C: 554.07},
		{ A: 2183, B: 2.9404, C: 305.3462}
	];

	var R1UranusCoefficients = [
		{ A: 1479896, B: 3.6720571, C: 74.7815986},
		{ A: 71212, B: 6.22601, C: 63.7359},
		{ A: 68627, B: 6.13411, C: 149.5632},
		{ A: 24060, B: 3.14159, C: 0},
		{ A: 21468, B: 2.60177, C: 76.26607},
		{ A: 20857, B: 5.24625, C: 11.0457},
		{ A: 11405, B: 0.01848, C: 70.84945},
		{ A: 7497, B: 0.4236, C: 73.2971},
		{ A: 4244, B: 1.4169, C: 85.8273},
		{ A: 3927, B: 3.1551, C: 71.8127},
		{ A: 3578, B: 2.3116, C: 224.3448},
		{ A: 3506, B: 2.5835, C: 138.5175},
		{ A: 3229, B: 5.2550, C: 3.9322},
		{ A: 3060, B: 0.1532, C: 1.4845},
		{ A: 2564, B: 0.9808, C: 148.0787},
		{ A: 2429, B: 3.9944, C: 52.6902},
		{ A: 1645, B: 2.6535, C: 127.4718},
		{ A: 1584, B: 1.4305, C: 78.7138},
		{ A: 1508, B: 5.0600, C: 151.0477},
		{ A: 1490, B: 2.6756, C: 56.6224},
		{ A: 1413, B: 4.5746, C: 202.2534},
		{ A: 1403, B: 1.3699, C: 77.7505},
		{ A: 1228, B: 1.0470, C: 62.2514},
		{ A: 1033, B: 0.2646, C: 131.4039},
		{ A: 992, B: 2.172, C: 65.22},
		{ A: 862, B: 5.055, C: 351.817},
		{ A: 744, B: 3.076, C: 35.164},
		{ A: 687, B: 2.499, C: 77.963},
		{ A: 647, B: 4.473, C: 70.328},
		{ A: 624, B: 0.863, C: 9.561},
		{ A: 604, B: 0.907, C: 984.6},
		{ A: 575, B: 3.231, C: 447.796},
		{ A: 562, B: 2.718, C: 462.023},
		{ A: 530, B: 5.917, C: 213.299},
		{ A: 528, B: 5.151, C: 2.969}
	];

	var R2UranusCoefficients = [
		{ A: 22440, B: 0.69953, C: 74.7816},
		{ A: 4727, B: 1.6990, C: 63.7359},
		{ A: 1682, B: 4.6483, C: 70.8494},
		{ A: 1650, B: 3.0966, C: 11.0457},
		{ A: 1434, B: 3.5212, C: 149.5632},
		{ A: 770, B: 0, C: 0},
		{ A: 500, B: 6.172, C: 76.266},
		{ A: 461, B: 0.767, C: 3.932},
		{ A: 390, B: 4.496, C: 56.622},
		{ A: 390, B: 5.527, C: 85.827},
		{ A: 292, B: 0.204, C: 52.69},
		{ A: 287, B: 3.534, C: 73.297},
		{ A: 273, B: 3.847, C: 138.517},
		{ A: 220, B: 1.964, C: 131.404},
		{ A: 216, B: 0.848, C: 77.963},
		{ A: 205, B: 3.248, C: 78.714},
		{ A: 149, B: 4.898, C: 127.472},
		{ A: 129, B: 2.081, C: 3.181}
	];

	var R3UranusCoefficients = [
		{ A: 1164, B: 4.7345, C: 74.7816},
		{ A: 212, B: 3.343, C: 63.736},
		{ A: 196, B: 2.980, C: 70.849},
		{ A: 105, B: 0.958, C: 11.046},
		{ A: 73, B: 1.00, C: 149.56},
		{ A: 72, B: 0.03, C: 56.62},
		{ A: 55, B: 2.59, C: 3.93},
		{ A: 36, B: 5.65, C: 77.96},
		{ A: 34, B: 3.82, C: 76.27},
		{ A: 32, B: 3.60, C: 131.4}
	];

	var R4UranusCoefficients = [
		{ A: 53, B: 3.01, C: 74.78},
		{ A: 10, B: 1.91, C: 56.62}
	];

	staticFunctions.L0UranusCoefficients = function () { return L0UranusCoefficients; };
	staticFunctions.L1UranusCoefficients = function () { return L1UranusCoefficients; };
	staticFunctions.L2UranusCoefficients = function () { return L2UranusCoefficients; };
	staticFunctions.L3UranusCoefficients = function () { return L3UranusCoefficients; };
	staticFunctions.L4UranusCoefficients = function () { return L4UranusCoefficients; };

	staticFunctions.B0UranusCoefficients = function () { return B0UranusCoefficients; };
	staticFunctions.B1UranusCoefficients = function () { return B1UranusCoefficients; };
	staticFunctions.B2UranusCoefficients = function () { return B2UranusCoefficients; };
	staticFunctions.B3UranusCoefficients = function () { return B3UranusCoefficients; };
	staticFunctions.B4UranusCoefficients = function () { return B4UranusCoefficients; };

	staticFunctions.R0UranusCoefficients = function () { return R0UranusCoefficients; };
	staticFunctions.R1UranusCoefficients = function () { return R1UranusCoefficients; };
	staticFunctions.R2UranusCoefficients = function () { return R2UranusCoefficients; };
	staticFunctions.R3UranusCoefficients = function () { return R3UranusCoefficients; };
	staticFunctions.R4UranusCoefficients = function () { return R4UranusCoefficients; };

	return staticFunctions;
}

Uranus.eclipticLongitude = function(JD) {
	var u = new Uranus;
	var L0UranusCoefficients = u.L0UranusCoefficients();
	var L1UranusCoefficients = u.L1UranusCoefficients();
	var L2UranusCoefficients = u.L2UranusCoefficients();
	var L3UranusCoefficients = u.L3UranusCoefficients();
	var L4UranusCoefficients = u.L4UranusCoefficients();
	
	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;

	//Calculate L0
	var nL0Coefficients = L0UranusCoefficients.length;
	var L0 = 0;
	var i;
	for (i=0; i<nL0Coefficients; i++)
	L0 += L0UranusCoefficients[i].A * Math.cos(L0UranusCoefficients[i].B + L0UranusCoefficients[i].C*rho);

	//Calculate L1
	var nL1Coefficients = L1UranusCoefficients.length;
	var L1 = 0;
	for (i=0; i<nL1Coefficients; i++)
	L1 += L1UranusCoefficients[i].A * Math.cos(L1UranusCoefficients[i].B + L1UranusCoefficients[i].C*rho);

	//Calculate L2
	var nL2Coefficients = L2UranusCoefficients.length;
	var L2 = 0;
	for (i=0; i<nL2Coefficients; i++)
	L2 += L2UranusCoefficients[i].A * Math.cos(L2UranusCoefficients[i].B + L2UranusCoefficients[i].C*rho);

	//Calculate L3
	var nL3Coefficients = L3UranusCoefficients.length;
	var L3 = 0;
	for (i=0; i<nL3Coefficients; i++)
	L3 += L3UranusCoefficients[i].A * Math.cos(L3UranusCoefficients[i].B + L3UranusCoefficients[i].C*rho);

	//Calculate L4
	var nL4Coefficients = L4UranusCoefficients.length;
	var L4 = 0;
	for (i=0; i<nL4Coefficients; i++)
	L4 += L4UranusCoefficients[i].A * Math.cos(L4UranusCoefficients[i].B + L4UranusCoefficients[i].C*rho);

	var value = (L0 + L1*rho + L2*rhosquared + L3*rhocubed + L4*rho4) / 100000000;

	//convert results back to degrees
	value = CoordTrans.mapTo0To360Range(CoordTrans.radToDeg(value));
	return value;

}

Uranus.eclipticLatitude = function(JD) {
	var u = new Uranus;
	var B0UranusCoefficients = u.B0UranusCoefficients();
	var B1UranusCoefficients = u.B1UranusCoefficients();
	var B2UranusCoefficients = u.B2UranusCoefficients();
	var B3UranusCoefficients = u.B3UranusCoefficients();
	var B4UranusCoefficients = u.B4UranusCoefficients();

	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;

	//Calculate B0
	var nB0Coefficients = B0UranusCoefficients.length;
	var B0 = 0;
	var i;
	for (i=0; i<nB0Coefficients; i++)
	B0 += B0UranusCoefficients[i].A * Math.cos(B0UranusCoefficients[i].B + B0UranusCoefficients[i].C*rho);

	//Calculate B1
	var nB1Coefficients = B1UranusCoefficients.length;
	var B1 = 0;
	for (i=0; i<nB1Coefficients; i++)
	B1 += B1UranusCoefficients[i].A * Math.cos(B1UranusCoefficients[i].B + B1UranusCoefficients[i].C*rho);

	//Calculate B2
	var nB2Coefficients = B2UranusCoefficients.length;
	var B2 = 0;
	for (i=0; i<nB2Coefficients; i++)
	B2 += B2UranusCoefficients[i].A * Math.cos(B2UranusCoefficients[i].B + B2UranusCoefficients[i].C*rho);

	//Calculate B3
	var nB3Coefficients = B3UranusCoefficients.length;
	var B3 = 0;
	for (i=0; i<nB3Coefficients; i++)
	B3 += B3UranusCoefficients[i].A * Math.cos(B3UranusCoefficients[i].B + B3UranusCoefficients[i].C*rho);

	//Calculate B4
	var nB4Coefficients = B4UranusCoefficients.length;
	var B4 = 0;
	for (i=0; i<nB4Coefficients; i++)
	B4 += B4UranusCoefficients[i].A * Math.cos(B4UranusCoefficients[i].B + B4UranusCoefficients[i].C*rho);

	var value = (B0 + B1*rho + B2*rhosquared + B3*rhocubed + B4*rho4) / 100000000;

	//convert results back to degrees
	value = CoordTrans.radToDeg(value);
	return value;

}

Uranus.radiusVector = function(JD) {
	var u = new Uranus;
	var R0UranusCoefficients = u.R0UranusCoefficients();
	var R1UranusCoefficients = u.R1UranusCoefficients();
	var R2UranusCoefficients = u.R2UranusCoefficients();
	var R3UranusCoefficients = u.R3UranusCoefficients();
	var R4UranusCoefficients = u.R4UranusCoefficients();

	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;

	//Calculate R0
	var nR0Coefficients = R0UranusCoefficients.length;
	var R0 = 0;
	var i;
	for (i=0; i<nR0Coefficients; i++)
	R0 += R0UranusCoefficients[i].A * Math.cos(R0UranusCoefficients[i].B + R0UranusCoefficients[i].C*rho);

	//Calculate R1
	var nR1Coefficients = R1UranusCoefficients.length;
	var R1 = 0;
	for (i=0; i<nR1Coefficients; i++)
	R1 += R1UranusCoefficients[i].A * Math.cos(R1UranusCoefficients[i].B + R1UranusCoefficients[i].C*rho);

	//Calculate R2
	var nR2Coefficients = R2UranusCoefficients.length;
	var R2 = 0;
	for (i=0; i<nR2Coefficients; i++)
	R2 += R2UranusCoefficients[i].A * Math.cos(R2UranusCoefficients[i].B + R2UranusCoefficients[i].C*rho);

	//Calculate R3
	var nR3Coefficients = R3UranusCoefficients.length;
	var R3 = 0;
	for (i=0; i<nR3Coefficients; i++)
	R3 += R3UranusCoefficients[i].A * Math.cos(R3UranusCoefficients[i].B + R3UranusCoefficients[i].C*rho);

	//Calculate R4
	var nR4Coefficients = R4UranusCoefficients.length;
	var R4 = 0;
	for (i=0; i<nR4Coefficients; i++)
	R4 += R4UranusCoefficients[i].A * Math.cos(R4UranusCoefficients[i].B + R4UranusCoefficients[i].C*rho);

	return (R0 + R1*rho + R2*rhosquared + R3*rhocubed + R4*rho4) / 100000000;
}