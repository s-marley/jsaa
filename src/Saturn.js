function Saturn() {

	var staticFunctions = {};

	var L0SaturnCoefficients = [
		{ A: 87401354, B: 0, C: 0},
		{ A: 11107660, B: 3.96205090, C: 213.29909544},
		{ A: 1414151, B: 4.5858152, C: 7.113547},
		{ A: 398379, B: 0.521120, C: 206.185548},
		{ A: 350769, B: 3.303299, C: 426.598191},
		{ A: 206816, B: 0.246584, C: 103.092774},
		{ A: 79271, B: 3.84007, C: 220.41264},
		{ A: 23990, B: 4.66977, C: 110.20632},
		{ A: 16574, B: 0.43719, C: 419.48464},
		{ A: 15820, B: 0.93809, C: 632.78374},
		{ A: 15054, B: 2.71670, C: 639.89729},
		{ A: 14907, B: 5.76903, C: 316.39187},
		{ A: 14610, B: 1.56519, C: 3.93215},
		{ A: 13160, B: 4.44891, C: 14.22709},
		{ A: 13005, B: 5.98119, C: 11.0457},
		{ A: 10725, B: 3.12940, C: 202.2534},
		{ A: 6126, B: 1.7633, C: 277.035},
		{ A: 5863, B: 0.2366, C: 529.691},
		{ A: 5228, B: 4.2078, C: 3.1814},
		{ A: 5020, B: 3.1779, C: 433.7117},
		{ A: 4593, B: 0.6198, C: 199.072},
		{ A: 4006, B: 2.2448, C: 63.7359},
		{ A: 3874, B: 3.2228, C: 138.5175},
		{ A: 3269, B: 0.7749, C: 949.1756},
		{ A: 2954, B: 0.9828, C: 95.9792},
		{ A: 2461, B: 2.0316, C: 735.8765},
		{ A: 1758, B: 3.2658, C: 522.5774},
		{ A: 1640, B: 5.5050, C: 846.0828},
		{ A: 1581, B: 4.3727, C: 309.2783},
		{ A: 1391, B: 4.0233, C: 323.5054},
		{ A: 1124, B: 2.8373, C: 415.5525},
		{ A: 1087, B: 4.1834, C: 2.4477},
		{ A: 1017, B: 3.7170, C: 227.5262},
		{ A: 957, B: 0.507, C: 1265.567},
		{ A: 853, B: 3.421, C: 175.166},
		{ A: 849, B: 3.191, C: 209.367},
		{ A: 789, B: 5.007, C: 0.963},
		{ A: 749, B: 2.144, C: 853.196},
		{ A: 744, B: 5.253, C: 224.345},
		{ A: 687, B: 1.747, C: 1052.268},
		{ A: 654, B: 1.599, C: 0.048},
		{ A: 634, B: 2.299, C: 412.371},
		{ A: 625, B: 0.970, C: 210.118},
		{ A: 580, B: 3.093, C: 74.782},
		{ A: 546, B: 2.127, C: 350.332},
		{ A: 543, B: 1.518, C: 9.561},
		{ A: 530, B: 4.449, C: 117.32},
		{ A: 478, B: 2.965, C: 137.033},
		{ A: 474, B: 5.475, C: 742.99},
		{ A: 452, B: 1.044, C: 490.334},
		{ A: 449, B: 1.290, C: 127.472},
		{ A: 372, B: 2.278, C: 217.231},
		{ A: 355, B: 3.013, C: 838.969},
		{ A: 347, B: 1.539, C: 340.771},
		{ A: 343, B: 0.246, C: 0.521},
		{ A: 330, B: 0.247, C: 1581.959},
		{ A: 322, B: 0.961, C: 203.738},
		{ A: 322, B: 2.572, C: 647.011},
		{ A: 309, B: 3.495, C: 216.48},
		{ A: 287, B: 2.370, C: 351.817},
		{ A: 278, B: 0.400, C: 211.815},
		{ A: 249, B: 1.470, C: 1368.66},
		{ A: 227, B: 4.910, C: 12.53},
		{ A: 220, B: 4.204, C: 200.769},
		{ A: 209, B: 1.345, C: 625.67},
		{ A: 208, B: 0.483, C: 1162.475},
		{ A: 208, B: 1.283, C: 39.357},
		{ A: 204, B: 6.011, C: 265.989},
		{ A: 185, B: 3.503, C: 149.563},
		{ A: 184, B: 0.973, C: 4.193},
		{ A: 182, B: 5.491, C: 2.921},
		{ A: 174, B: 1.863, C: 0.751},
		{ A: 165, B: 0.440, C: 5.417},
		{ A: 149, B: 5.736, C: 52.69},
		{ A: 148, B: 1.535, C: 5.629},
		{ A: 146, B: 6.231, C: 195.14},
		{ A: 140, B: 4.295, C: 21.341},
		{ A: 131, B: 4.068, C: 10.295},
		{ A: 125, B: 6.277, C: 1898.351},
		{ A: 122, B: 1.976, C: 4.666},
		{ A: 118, B: 5.341, C: 554.07},
		{ A: 117, B: 2.679, C: 1155.361},
		{ A: 114, B: 5.594, C: 1059.382},
		{ A: 112, B: 1.105, C: 191.208},
		{ A: 110, B: 0.166, C: 1.484},
		{ A: 109, B: 3.438, C: 536.805},
		{ A: 107, B: 4.012, C: 956.289},
		{ A: 104, B: 2.192, C: 88.866},
		{ A: 103, B: 1.197, C: 1685.052},
		{ A: 101, B: 4.965, C: 269.921}
	];

	var L1SaturnCoefficients = [
		{ A: 21354295596.0, B: 0, C: 0},
		{ A: 1296855, B: 1.8282054, C: 213.2990954},
		{ A: 564348, B: 2.885001, C: 7.113547},
		{ A: 107679, B: 2.277699, C: 206.185548},
		{ A: 98323, B: 1.08070, C: 426.59819},
		{ A: 40255, B: 2.04128, C: 220.41264},
		{ A: 19942, B: 1.27955, C: 103.09277},
		{ A: 10512, B: 2.74880, C: 14.22709},
		{ A: 6939, B: 0.4049, C: 639.8973},
		{ A: 4803, B: 2.4419, C: 419.4846},
		{ A: 4056, B: 2.9217, C: 110.2063},
		{ A: 3769, B: 3.6497, C: 3.9322},
		{ A: 3385, B: 2.4169, C: 3.1814},
		{ A: 3302, B: 1.2626, C: 433.7117},
		{ A: 3071, B: 2.3274, C: 199.072},
		{ A: 1953, B: 3.5639, C: 11.0457},
		{ A: 1249, B: 2.6280, C: 95.9792},
		{ A: 922, B: 1.961, C: 227.526},
		{ A: 706, B: 4.417, C: 529.691},
		{ A: 650, B: 6.174, C: 202.253},
		{ A: 628, B: 6.111, C: 309.278},
		{ A: 487, B: 6.040, C: 853.196},
		{ A: 479, B: 4.988, C: 522.577},
		{ A: 468, B: 4.617, C: 63.736},
		{ A: 417, B: 2.117, C: 323.505},
		{ A: 408, B: 1.299, C: 209.367},
		{ A: 352, B: 2.317, C: 632.784},
		{ A: 344, B: 3.959, C: 412.371},
		{ A: 340, B: 3.634, C: 316.392},
		{ A: 336, B: 3.772, C: 735.877},
		{ A: 332, B: 2.861, C: 210.118},
		{ A: 289, B: 2.733, C: 117.32},
		{ A: 281, B: 5.744, C: 2.448},
		{ A: 266, B: 0.543, C: 647.011},
		{ A: 230, B: 1.644, C: 216.48},
		{ A: 192, B: 2.965, C: 224.345},
		{ A: 173, B: 4.077, C: 846.083},
		{ A: 167, B: 2.597, C: 21.341},
		{ A: 136, B: 2.286, C: 10.295},
		{ A: 131, B: 3.441, C: 742.99},
		{ A: 128, B: 4.095, C: 217.231},
		{ A: 109, B: 6.161, C: 415.552},
		{ A: 98, B: 4.73, C: 838.97},
		{ A: 94, B: 3.48, C: 1052.27},
		{ A: 92, B: 3.95, C: 88.87},
		{ A: 87, B: 1.22, C: 440.83},
		{ A: 83, B: 3.11, C: 625.67},
		{ A: 78, B: 6.24, C: 302.16},
		{ A: 67, B: 0.29, C: 4.67},
		{ A: 66, B: 5.65, C: 9.56},
		{ A: 62, B: 4.29, C: 127.47},
		{ A: 62, B: 1.83, C: 195.14},
		{ A: 58, B: 2.48, C: 191.96},
		{ A: 57, B: 5.02, C: 137.03},
		{ A: 55, B: 0.28, C: 74.78},
		{ A: 54, B: 5.13, C: 490.33},
		{ A: 51, B: 1.46, C: 536.8},
		{ A: 47, B: 1.18, C: 149.56},
		{ A: 47, B: 5.15, C: 515.46},
		{ A: 46, B: 2.23, C: 956.29},
		{ A: 44, B: 2.71, C: 5.42},
		{ A: 40, B: 0.41, C: 269.92},
		{ A: 40, B: 3.89, C: 728.76},
		{ A: 38, B: 0.65, C: 422.67},
		{ A: 38, B: 2.53, C: 12.53},
		{ A: 37, B: 3.78, C: 2.92},
		{ A: 35, B: 6.08, C: 5.63},
		{ A: 34, B: 3.21, C: 1368.66},
		{ A: 33, B: 4.64, C: 277.03},
		{ A: 33, B: 5.43, C: 1066.5},
		{ A: 33, B: 0.30, C: 351.82},
		{ A: 32, B: 4.39, C: 1155.36},
		{ A: 31, B: 2.43, C: 52.69},
		{ A: 30, B: 2.84, C: 203},
		{ A: 30, B: 6.19, C: 284.15},
		{ A: 30, B: 3.39, C: 1059.38},
		{ A: 29, B: 2.03, C: 330.62},
		{ A: 28, B: 2.74, C: 265.99},
		{ A: 26, B: 4.51, C: 340.77}
	];

	var L2SaturnCoefficients = [
		{ A: 116441, B: 1.179879, C: 7.113547},
		{ A: 91921, B: 0.07425, C: 213.2991},
		{ A: 90592, B: 0, C: 0},
		{ A: 15277, B: 4.06492, C: 206.18555},
		{ A: 10631, B: 0.25778, C: 220.41264},
		{ A: 10605, B: 5.40964, C: 426.59819},
		{ A: 4265, B: 1.0460, C: 14.2271},
		{ A: 1216, B: 2.9186, C: 103.0928},
		{ A: 1165, B: 4.6094, C: 639.8973},
		{ A: 1082, B: 5.6913, C: 433.7117},
		{ A: 1045, B: 4.0421, C: 199.072},
		{ A: 1020, B: 0.6337, C: 3.1814},
		{ A: 634, B: 4.388, C: 419.485},
		{ A: 549, B: 5.573, C: 3.932},
		{ A: 457, B: 1.268, C: 110.206},
		{ A: 425, B: 0.209, C: 227.526},
		{ A: 274, B: 4.288, C: 95.979},
		{ A: 162, B: 1.381, C: 11.046},
		{ A: 129, B: 1.566, C: 309.278},
		{ A: 117, B: 3.881, C: 853.196},
		{ A: 105, B: 4.900, C: 647.011},
		{ A: 101, B: 0.893, C: 21.341},
		{ A: 96, B: 2.91, C: 316.39},
		{ A: 95, B: 5.63, C: 412.37},
		{ A: 85, B: 5.73, C: 209.37},
		{ A: 83, B: 6.05, C: 216.48},
		{ A: 82, B: 1.02, C: 117.32},
		{ A: 75, B: 4.76, C: 210.12},
		{ A: 67, B: 0.46, C: 522.58},
		{ A: 66, B: 0.48, C: 10.29},
		{ A: 64, B: 0.35, C: 323.51},
		{ A: 61, B: 4.88, C: 632.78},
		{ A: 53, B: 2.75, C: 529.69},
		{ A: 46, B: 5.69, C: 440.83},
		{ A: 45, B: 1.67, C: 202.25},
		{ A: 42, B: 5.71, C: 88.87},
		{ A: 32, B: 0.07, C: 63.74},
		{ A: 32, B: 1.67, C: 302.16},
		{ A: 31, B: 4.16, C: 191.96},
		{ A: 27, B: 0.83, C: 224.34},
		{ A: 25, B: 5.66, C: 735.88},
		{ A: 20, B: 5.94, C: 217.23},
		{ A: 18, B: 4.90, C: 625.67},
		{ A: 17, B: 1.63, C: 742.99},
		{ A: 16, B: 0.58, C: 515.46},
		{ A: 14, B: 0.21, C: 838.97},
		{ A: 14, B: 3.76, C: 195.14},
		{ A: 12, B: 4.72, C: 203},
		{ A: 12, B: 0.13, C: 234.64},
		{ A: 12, B: 3.12, C: 846.08},
		{ A: 11, B: 5.92, C: 536.8},
		{ A: 11, B: 5.60, C: 728.76},
		{ A: 11, B: 3.20, C: 1066.5},
		{ A: 10, B: 4.99, C: 422.67},
		{ A: 10, B: 0.26, C: 330.62},
		{ A: 10, B: 4.15, C: 860.31},
		{ A: 9, B: 0.46, C: 956.29},
		{ A: 8, B: 2.14, C: 269.92},
		{ A: 8, B: 5.25, C: 429.78},
		{ A: 8, B: 4.03, C: 9.56},
		{ A: 7, B: 5.40, C: 1052.27},
		{ A: 6, B: 4.46, C: 284.15},
		{ A: 6, B: 5.93, C: 405.26}
	];

	var L3SaturnCoefficients = [
		{ A: 16039, B: 5.73945, C: 7.11355},
		{ A: 4250, B: 4.5854, C: 213.2991},
		{ A: 1907, B: 4.7608, C: 220.4126},
		{ A: 1466, B: 5.9133, C: 206.1855},
		{ A: 1162, B: 5.6197, C: 14.2271},
		{ A: 1067, B: 3.6082, C: 426.5982},
		{ A: 239, B: 3.861, C: 433.712},
		{ A: 237, B: 5.768, C: 199.072},
		{ A: 166, B: 5.116, C: 3.181},
		{ A: 151, B: 2.736, C: 639.897},
		{ A: 131, B: 4.743, C: 227.526},
		{ A: 63, B: 0.23, C: 419.48},
		{ A: 62, B: 4.74, C: 103.09},
		{ A: 40, B: 5.47, C: 21.34},
		{ A: 40, B: 5.96, C: 95.98},
		{ A: 39, B: 5.83, C: 110.21},
		{ A: 28, B: 3.01, C: 647.01},
		{ A: 25, B: 0.99, C: 3.93},
		{ A: 19, B: 1.92, C: 853.2},
		{ A: 18, B: 4.97, C: 10.29},
		{ A: 18, B: 1.03, C: 412.37},
		{ A: 18, B: 4.20, C: 216.48},
		{ A: 18, B: 3.32, C: 309.28},
		{ A: 16, B: 3.90, C: 440.83},
		{ A: 16, B: 5.62, C: 117.32},
		{ A: 13, B: 1.18, C: 88.87},
		{ A: 11, B: 5.58, C: 11.05},
		{ A: 11, B: 5.93, C: 191.96},
		{ A: 10, B: 3.95, C: 209.37},
		{ A: 9, B: 3.39, C: 302.16},
		{ A: 8, B: 4.88, C: 323.51},
		{ A: 7, B: 0.38, C: 632.78},
		{ A: 6, B: 2.25, C: 522.58},
		{ A: 6, B: 1.06, C: 210.12},
		{ A: 5, B: 4.64, C: 234.64},
		{ A: 4, B: 3.14, C: 0},
		{ A: 4, B: 2.31, C: 515.46},
		{ A: 3, B: 2.20, C: 860.31},
		{ A: 3, B: 0.59, C: 529.69},
		{ A: 3, B: 4.93, C: 224.34},
		{ A: 3, B: 0.42, C: 625.67},
		{ A: 2, B: 4.77, C: 330.62},
		{ A: 2, B: 3.35, C: 429.78},
		{ A: 2, B: 3.20, C: 202.25},
		{ A: 2, B: 1.19, C: 1066.5},
		{ A: 2, B: 1.35, C: 405.26},
		{ A: 2, B: 4.16, C: 223.59},
		{ A: 2, B: 3.07, C: 654.12}
	];

	var L4SaturnCoefficients = [
		{ A: 1662, B: 3.9983, C: 7.1135},
		{ A: 257, B: 2.984, C: 220.413},
		{ A: 236, B: 3.902, C: 14.227},
		{ A: 149, B: 2.741, C: 213.299},
		{ A: 114, B: 3.142, C: 0},
		{ A: 110, B: 1.515, C: 206.186},
		{ A: 68, B: 1.72, C: 426.6},
		{ A: 40, B: 2.05, C: 433.71},
		{ A: 38, B: 1.24, C: 199.07},
		{ A: 31, B: 3.01, C: 227.53},
		{ A: 15, B: 0.83, C: 639.9},
		{ A: 9, B: 3.71, C: 21.34},
		{ A: 6, B: 2.42, C: 419.48},
		{ A: 6, B: 1.16, C: 647.01},
		{ A: 4, B: 1.45, C: 95.98},
		{ A: 4, B: 2.12, C: 440.83},
		{ A: 3, B: 4.09, C: 110.21},
		{ A: 3, B: 2.77, C: 412.37},
		{ A: 3, B: 3.01, C: 88.87},
		{ A: 3, B: 0.00, C: 853.2},
		{ A: 3, B: 0.39, C: 103.09},
		{ A: 2, B: 3.78, C: 117.32},
		{ A: 2, B: 2.83, C: 234.64},
		{ A: 2, B: 5.08, C: 309.28},
		{ A: 2, B: 2.24, C: 216.48},
		{ A: 2, B: 5.19, C: 302.16},
		{ A: 1, B: 1.55, C: 191.96}
	];

	var L5SaturnCoefficients = [
		{ A: 124, B: 2.259, C: 7.114},
		{ A: 34, B: 2.16, C: 14.23},
		{ A: 28, B: 1.20, C: 220.41},
		{ A: 6, B: 1.22, C: 227.53},
		{ A: 5, B: 0.24, C: 433.71},
		{ A: 4, B: 6.23, C: 426.6},
		{ A: 3, B: 2.97, C: 199.07},
		{ A: 3, B: 4.29, C: 206.19},
		{ A: 2, B: 6.25, C: 213.3},
		{ A: 1, B: 5.28, C: 639.9},
		{ A: 1, B: 0.24, C: 440.83},
		{ A: 1, B: 3.14, C: 0}
	];

	var B0SaturnCoefficients = [
		{ A: 4330678, B: 3.6028443, C: 213.2990954},
		{ A: 240348, B: 2.852385, C: 426.598191},
		{ A: 84746, B: 0, C: 0},
		{ A: 34116, B: 0.57297, C: 206.18555},
		{ A: 30863, B: 3.48442, C: 220.41264},
		{ A: 14734, B: 2.11847, C: 639.89729},
		{ A: 9917, B: 5.7900, C: 419.4846},
		{ A: 6994, B: 4.7360, C: 7.1135},
		{ A: 4808, B: 5.4331, C: 316.3919},
		{ A: 4788, B: 4.9651, C: 110.2063},
		{ A: 3432, B: 2.7326, C: 433.7117},
		{ A: 1506, B: 6.0130, C: 103.0928},
		{ A: 1060, B: 5.6310, C: 529.691},
		{ A: 969, B: 5.204, C: 632.784},
		{ A: 942, B: 1.396, C: 853.196},
		{ A: 708, B: 3.803, C: 323.505},
		{ A: 552, B: 5.131, C: 202.253},
		{ A: 400, B: 3.359, C: 227.526},
		{ A: 319, B: 3.626, C: 209.367},
		{ A: 316, B: 1.997, C: 647.011},
		{ A: 314, B: 0.465, C: 217.231},
		{ A: 284, B: 4.886, C: 224.345},
		{ A: 236, B: 2.139, C: 11.046},
		{ A: 215, B: 5.950, C: 846.083},
		{ A: 209, B: 2.120, C: 415.552},
		{ A: 207, B: 0.730, C: 199.072},
		{ A: 179, B: 2.954, C: 63.736},
		{ A: 141, B: 0.644, C: 490.334},
		{ A: 139, B: 4.595, C: 14.227},
		{ A: 139, B: 1.998, C: 735.877},
		{ A: 135, B: 5.245, C: 742.99},
		{ A: 122, B: 3.115, C: 522.577},
		{ A: 116, B: 3.109, C: 216.48},
		{ A: 114, B: 0.963, C: 210.118}
	];

	var B1SaturnCoefficients = [
		{ A: 397555, B: 5.332900, C: 213.299095},
		{ A: 49479, B: 3.14159, C: 0},
		{ A: 18572, B: 6.09919, C: 426.59819},
		{ A: 14801, B: 2.30586, C: 206.18555},
		{ A: 9644, B: 1.6967, C: 220.4126},
		{ A: 3757, B: 1.2543, C: 419.4846},
		{ A: 2717, B: 5.9117, C: 639.8973},
		{ A: 1455, B: 0.8516, C: 433.7117},
		{ A: 1291, B: 2.9177, C: 7.1135},
		{ A: 853, B: 0.436, C: 316.392},
		{ A: 298, B: 0.919, C: 632.784},
		{ A: 292, B: 5.316, C: 853.196},
		{ A: 284, B: 1.619, C: 227.526},
		{ A: 275, B: 3.889, C: 103.093},
		{ A: 172, B: 0.052, C: 647.011},
		{ A: 166, B: 2.444, C: 199.072},
		{ A: 158, B: 5.209, C: 110.206},
		{ A: 128, B: 1.207, C: 529.691},
		{ A: 110, B: 2.457, C: 217.231},
		{ A: 82, B: 2.76, C: 210.12},
		{ A: 81, B: 2.86, C: 14.23},
		{ A: 69, B: 1.66, C: 202.25},
		{ A: 65, B: 1.26, C: 216.48},
		{ A: 61, B: 1.25, C: 209.37},
		{ A: 59, B: 1.82, C: 323.51},
		{ A: 46, B: 0.82, C: 440.83},
		{ A: 36, B: 1.82, C: 224.34},
		{ A: 34, B: 2.84, C: 117.32},
		{ A: 33, B: 1.31, C: 412.37},
		{ A: 32, B: 1.19, C: 846.08},
		{ A: 27, B: 4.65, C: 1066.5},
		{ A: 27, B: 4.44, C: 11.05}
	];

	var B2SaturnCoefficients = [
		{ A: 20630, B: 0.50482, C: 213.2991},
		{ A: 3720, B: 3.9983, C: 206.1855},
		{ A: 1627, B: 6.1819, C: 220.4126},
		{ A: 1346, B: 0, C: 0},
		{ A: 706, B: 3.039, C: 419.485},
		{ A: 365, B: 5.099, C: 426.598},
		{ A: 330, B: 5.279, C: 433.712},
		{ A: 219, B: 3.828, C: 639.897},
		{ A: 139, B: 1.043, C: 7.114},
		{ A: 104, B: 6.157, C: 227.526},
		{ A: 93, B: 1.98, C: 316.39},
		{ A: 71, B: 4.15, C: 199.07},
		{ A: 52, B: 2.88, C: 632.78},
		{ A: 49, B: 4.43, C: 647.01},
		{ A: 41, B: 3.16, C: 853.2},
		{ A: 29, B: 4.53, C: 210.12},
		{ A: 24, B: 1.12, C: 14.23},
		{ A: 21, B: 4.35, C: 217.23},
		{ A: 20, B: 5.31, C: 440.83},
		{ A: 18, B: 0.85, C: 110.21},
		{ A: 17, B: 5.68, C: 216.48},
		{ A: 16, B: 4.26, C: 103.09},
		{ A: 14, B: 3.00, C: 412.37},
		{ A: 12, B: 2.53, C: 529.69},
		{ A: 8, B: 3.32, C: 202.25},
		{ A: 7, B: 5.56, C: 209.37},
		{ A: 7, B: 0.29, C: 323.51},
		{ A: 6, B: 1.16, C: 117.32},
		{ A: 6, B: 3.61, C: 860.31}
	];

	var B3SaturnCoefficients = [
		{ A: 666, B: 1.990, C: 213.299},
		{ A: 632, B: 5.698, C: 206.186},
		{ A: 398, B: 0, C: 0},
		{ A: 188, B: 4.338, C: 220.413},
		{ A: 92, B: 4.84, C: 419.48},
		{ A: 52, B: 3.42, C: 433.71},
		{ A: 42, B: 2.38, C: 426.6},
		{ A: 26, B: 4.40, C: 227.53},
		{ A: 21, B: 5.85, C: 199.07},
		{ A: 18, B: 1.99, C: 639.9},
		{ A: 11, B: 5.37, C: 7.11},
		{ A: 10, B: 2.55, C: 647.01},
		{ A: 7, B: 3.46, C: 316.39},
		{ A: 6, B: 4.80, C: 632.78},
		{ A: 6, B: 0.02, C: 210.12},
		{ A: 6, B: 3.52, C: 440.83},
		{ A: 5, B: 5.64, C: 14.23},
		{ A: 5, B: 1.22, C: 853.2},
		{ A: 4, B: 4.71, C: 412.37},
		{ A: 3, B: 0.63, C: 103.09},
		{ A: 2, B: 3.72, C: 216.48}
	];

	var B4SaturnCoefficients = [
		{ A: 80, B: 1.12, C: 206.19},
		{ A: 32, B: 3.12, C: 213.3},
		{ A: 17, B: 2.48, C: 220.41},
		{ A: 12, B: 3.14, C: 0},
		{ A: 9, B: 0.38, C: 419.48},
		{ A: 6, B: 1.56, C: 433.71},
		{ A: 5, B: 2.63, C: 227.53},
		{ A: 5, B: 1.28, C: 199.07},
		{ A: 1, B: 1.43, C: 426.6},
		{ A: 1, B: 0.67, C: 647.01},
		{ A: 1, B: 1.72, C: 440.83},
		{ A: 1, B: 6.18, C: 639.9}
	];

	var B5SaturnCoefficients = [
		{ A: 8, B: 2.82, C: 206.19},
		{ A: 1, B: 0.51, C: 220.41}
	];

	var R0SaturnCoefficients = [
		{ A: 955758136, B: 0, C: 0},
		{ A: 52921382, B: 2.39226220, C: 213.29909544},
		{ A: 1873680, B: 5.2354961, C: 206.1855484},
		{ A: 1464664, B: 1.6476305, C: 426.5981909},
		{ A: 821891, B: 5.935200, C: 316.39187},
		{ A: 547507, B: 5.015326, C: 103.092774},
		{ A: 371684, B: 2.271148, C: 220.412642},
		{ A: 361778, B: 3.139043, C: 7.113547},
		{ A: 140618, B: 5.704067, C: 632.783739},
		{ A: 108975, B: 3.293136, C: 110.206321},
		{ A: 69007, B: 5.94100, C: 419.48464},
		{ A: 61053, B: 0.94038, C: 639.89729},
		{ A: 48913, B: 1.55733, C: 202.2534},
		{ A: 34144, B: 0.19519, C: 277.03499},
		{ A: 32402, B: 5.47085, C: 949.17561},
		{ A: 20937, B: 0.46349, C: 735.87651},
		{ A: 20839, B: 1.52103, C: 433.71174},
		{ A: 20747, B: 5.33256, C: 199.072},
		{ A: 15298, B: 3.05944, C: 529.69097},
		{ A: 14296, B: 2.60434, C: 323.50542},
		{ A: 12884, B: 1.64892, C: 138.5175},
		{ A: 11993, B: 5.98051, C: 846.08283},
		{ A: 11380, B: 1.73106, C: 522.57742},
		{ A: 9796, B: 5.2048, C: 1265.5675},
		{ A: 7753, B: 5.8519, C: 95.9792},
		{ A: 6771, B: 3.0043, C: 14.2271},
		{ A: 6466, B: 0.1773, C: 1052.2684},
		{ A: 5850, B: 1.4552, C: 415.5525},
		{ A: 5307, B: 0.5974, C: 63.7359},
		{ A: 4696, B: 2.1492, C: 227.5262},
		{ A: 4044, B: 1.6401, C: 209.3669},
		{ A: 3688, B: 0.7802, C: 412.3711},
		{ A: 3461, B: 1.8509, C: 175.1661},
		{ A: 3420, B: 4.9455, C: 1581.9593},
		{ A: 3401, B: 0.5539, C: 350.3321},
		{ A: 3376, B: 3.6953, C: 224.3448},
		{ A: 2976, B: 5.6847, C: 210.1177},
		{ A: 2885, B: 1.3876, C: 838.9693},
		{ A: 2881, B: 0.1796, C: 853.1964},
		{ A: 2508, B: 3.5385, C: 742.9901},
		{ A: 2448, B: 6.1841, C: 1368.6603},
		{ A: 2406, B: 2.9656, C: 117.3199},
		{ A: 2174, B: 0.0151, C: 340.7709},
		{ A: 2024, B: 5.0541, C: 11.0457}
	];

	var R1SaturnCoefficients = [
		{ A: 6182981, B: 0.2584352, C: 213.2990954},
		{ A: 506578, B: 0.711147, C: 206.185548},
		{ A: 341394, B: 5.796358, C: 426.598191},
		{ A: 188491, B: 0.472157, C: 220.412642},
		{ A: 186262, B: 3.141593, C: 0},
		{ A: 143891, B: 1.407449, C: 7.113547},
		{ A: 49621, B: 6.01744, C: 103.09277},
		{ A: 20928, B: 5.09246, C: 639.89729},
		{ A: 19953, B: 1.17560, C: 419.48464},
		{ A: 18840, B: 1.60820, C: 110.20632},
		{ A: 13877, B: 0.75886, C: 199.072},
		{ A: 12893, B: 5.94330, C: 433.71174},
		{ A: 5397, B: 1.2885, C: 14.2271},
		{ A: 4869, B: 0.8679, C: 323.5054},
		{ A: 4247, B: 0.3930, C: 227.5262},
		{ A: 3252, B: 1.2585, C: 95.9792},
		{ A: 3081, B: 3.4366, C: 522.5774},
		{ A: 2909, B: 4.6068, C: 202.2534},
		{ A: 2856, B: 2.1673, C: 735.8765},
		{ A: 1988, B: 2.4505, C: 412.3711},
		{ A: 1941, B: 6.0239, C: 209.3669},
		{ A: 1581, B: 1.2919, C: 210.1177},
		{ A: 1340, B: 4.3080, C: 853.1964},
		{ A: 1316, B: 1.2530, C: 117.3199},
		{ A: 1203, B: 1.8665, C: 316.3919},
		{ A: 1091, B: 0.0753, C: 216.4805},
		{ A: 966, B: 0.480, C: 632.784},
		{ A: 954, B: 5.152, C: 647.011},
		{ A: 898, B: 0.983, C: 529.691},
		{ A: 882, B: 1.885, C: 1052.268},
		{ A: 874, B: 1.402, C: 224.345},
		{ A: 785, B: 3.064, C: 838.969},
		{ A: 740, B: 1.382, C: 625.67},
		{ A: 658, B: 4.144, C: 309.278},
		{ A: 650, B: 1.725, C: 742.99},
		{ A: 613, B: 3.033, C: 63.736},
		{ A: 599, B: 2.549, C: 217.231},
		{ A: 503, B: 2.130, C: 3.932}
	];

	var R2SaturnCoefficients = [
		{ A: 436902, B: 4.786717, C: 213.299095},
		{ A: 71923, B: 2.50070, C: 206.18555},
		{ A: 49767, B: 4.97168, C: 220.41264},
		{ A: 43221, B: 3.86940, C: 426.59819},
		{ A: 29646, B: 5.96310, C: 7.11355},
		{ A: 4721, B: 2.4753, C: 199.072},
		{ A: 4142, B: 4.1067, C: 433.7117},
		{ A: 3789, B: 3.0977, C: 639.8973},
		{ A: 2964, B: 1.3721, C: 103.0928},
		{ A: 2556, B: 2.8507, C: 419.4846},
		{ A: 2327, B: 0, C: 0},
		{ A: 2208, B: 6.2759, C: 110.2063},
		{ A: 2188, B: 5.8555, C: 14.2271},
		{ A: 1957, B: 4.9245, C: 227.5262},
		{ A: 924, B: 5.464, C: 323.505},
		{ A: 706, B: 2.971, C: 95.979},
		{ A: 546, B: 4.129, C: 412.371},
		{ A: 431, B: 5.178, C: 522.577},
		{ A: 405, B: 4.173, C: 209.367},
		{ A: 391, B: 4.481, C: 216.48},
		{ A: 374, B: 5.834, C: 117.32},
		{ A: 361, B: 3.277, C: 647.011},
		{ A: 356, B: 3.192, C: 210.118},
		{ A: 326, B: 2.269, C: 853.196},
		{ A: 207, B: 4.022, C: 735.877},
		{ A: 204, B: 0.088, C: 202.253},
		{ A: 180, B: 3.597, C: 632.784},
		{ A: 178, B: 4.097, C: 440.825},
		{ A: 154, B: 3.135, C: 625.67},
		{ A: 148, B: 0.136, C: 302.165},
		{ A: 133, B: 2.594, C: 191.958},
		{ A: 132, B: 5.933, C: 309.278}
	];

	var R3SaturnCoefficients = [
		{ A: 20315, B: 3.02187, C: 213.2991},
		{ A: 8924, B: 3.1914, C: 220.4126},
		{ A: 6909, B: 4.3517, C: 206.1855},
		{ A: 4087, B: 4.2241, C: 7.1135},
		{ A: 3879, B: 2.0106, C: 426.5982},
		{ A: 1071, B: 4.2036, C: 199.072},
		{ A: 907, B: 2.283, C: 433.712},
		{ A: 606, B: 3.175, C: 227.526},
		{ A: 597, B: 4.135, C: 14.227},
		{ A: 483, B: 1.173, C: 639.897},
		{ A: 393, B: 0, C: 0},
		{ A: 229, B: 4.698, C: 419.485},
		{ A: 188, B: 4.590, C: 110.206},
		{ A: 150, B: 3.202, C: 103.093},
		{ A: 121, B: 3.768, C: 323.505},
		{ A: 102, B: 4.710, C: 95.979},
		{ A: 101, B: 5.819, C: 412.371},
		{ A: 93, B: 1.44, C: 647.01},
		{ A: 84, B: 2.63, C: 216.48},
		{ A: 73, B: 4.15, C: 117.32},
		{ A: 62, B: 2.31, C: 440.83},
		{ A: 55, B: 0.31, C: 853.2},
		{ A: 50, B: 2.39, C: 209.37},
		{ A: 45, B: 4.37, C: 191.96},
		{ A: 41, B: 0.69, C: 522.58},
		{ A: 40, B: 1.84, C: 302.16},
		{ A: 38, B: 5.94, C: 88.87},
		{ A: 32, B: 4.01, C: 21.34}
	];

	var R4SaturnCoefficients = [
		{ A: 1202, B: 1.4150, C: 220.4126},
		{ A: 708, B: 1.162, C: 213.299},
		{ A: 516, B: 6.240, C: 206.186},
		{ A: 427, B: 2.469, C: 7.114},
		{ A: 268, B: 0.187, C: 426.598},
		{ A: 170, B: 5.959, C: 199.072},
		{ A: 150, B: 0.480, C: 433.712},
		{ A: 145, B: 1.442, C: 227.526},
		{ A: 121, B: 2.405, C: 14.227},
		{ A: 47, B: 5.57, C: 639.9},
		{ A: 19, B: 5.86, C: 647.01},
		{ A: 17, B: 0.53, C: 440.83},
		{ A: 16, B: 2.90, C: 110.21},
		{ A: 15, B: 0.30, C: 419.48},
		{ A: 14, B: 1.30, C: 412.37},
		{ A: 13, B: 2.09, C: 323.51},
		{ A: 11, B: 0.22, C: 95.98},
		{ A: 11, B: 2.46, C: 117.32},
		{ A: 10, B: 3.14, C: 0},
		{ A: 9, B: 1.56, C: 88.87},
		{ A: 9, B: 2.28, C: 21.34},
		{ A: 9, B: 0.68, C: 216.48},
		{ A: 8, B: 1.27, C: 234.64}
	];

	var R5SaturnCoefficients = [
		{ A: 129, B: 5.913, C: 220.413},
		{ A: 32, B: 0.69, C: 7.11},
		{ A: 27, B: 5.91, C: 227.53},
		{ A: 20, B: 4.95, C: 433.71},
		{ A: 20, B: 0.67, C: 14.23},
		{ A: 14, B: 2.67, C: 206.19},
		{ A: 14, B: 1.46, C: 199.07},
		{ A: 13, B: 4.59, C: 426.6},
		{ A: 7, B: 4.63, C: 213.3},
		{ A: 5, B: 3.61, C: 639.9},
		{ A: 4, B: 4.90, C: 440.83},
		{ A: 3, B: 4.07, C: 647.01},
		{ A: 3, B: 4.66, C: 191.96},
		{ A: 3, B: 0.49, C: 323.51},
		{ A: 3, B: 3.18, C: 419.48},
		{ A: 2, B: 3.70, C: 88.87},
		{ A: 2, B: 3.32, C: 95.98},
		{ A: 2, B: 0.56, C: 117.32}
	];

	staticFunctions.L0SaturnCoefficients = function () { return L0SaturnCoefficients; };
	staticFunctions.L1SaturnCoefficients = function () { return L1SaturnCoefficients; };
	staticFunctions.L2SaturnCoefficients = function () { return L2SaturnCoefficients; };
	staticFunctions.L3SaturnCoefficients = function () { return L3SaturnCoefficients; };
	staticFunctions.L4SaturnCoefficients = function () { return L4SaturnCoefficients; };
	staticFunctions.L5SaturnCoefficients = function () { return L5SaturnCoefficients; };

	staticFunctions.B0SaturnCoefficients = function () { return B0SaturnCoefficients; };
	staticFunctions.B1SaturnCoefficients = function () { return B1SaturnCoefficients; };
	staticFunctions.B2SaturnCoefficients = function () { return B2SaturnCoefficients; };
	staticFunctions.B3SaturnCoefficients = function () { return B3SaturnCoefficients; };
	staticFunctions.B4SaturnCoefficients = function () { return B4SaturnCoefficients; };
	staticFunctions.B5SaturnCoefficients = function () { return B5SaturnCoefficients; };

	staticFunctions.R0SaturnCoefficients = function () { return R0SaturnCoefficients; };
	staticFunctions.R1SaturnCoefficients = function () { return R1SaturnCoefficients; };
	staticFunctions.R2SaturnCoefficients = function () { return R2SaturnCoefficients; };
	staticFunctions.R3SaturnCoefficients = function () { return R3SaturnCoefficients; };
	staticFunctions.R4SaturnCoefficients = function () { return R4SaturnCoefficients; };
	staticFunctions.R5SaturnCoefficients = function () { return R5SaturnCoefficients; };

	return staticFunctions;
}

Saturn.eclipticLongitude = function(JD) {
	var s = new Saturn;
	var L0SaturnCoefficients = s.L0SaturnCoefficients();
	var L1SaturnCoefficients = s.L1SaturnCoefficients();
	var L2SaturnCoefficients = s.L2SaturnCoefficients();
	var L3SaturnCoefficients = s.L3SaturnCoefficients();
	var L4SaturnCoefficients = s.L4SaturnCoefficients();
	var L5SaturnCoefficients = s.L5SaturnCoefficients();

	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;
	var rho5 = rho4*rho;

	//Calculate L0
	var nL0Coefficients = L0SaturnCoefficients.length;
	var L0 = 0;
	var i;
	for (i=0; i<nL0Coefficients; i++)
	L0 += L0SaturnCoefficients[i].A * Math.cos(L0SaturnCoefficients[i].B + L0SaturnCoefficients[i].C*rho);

	//Calculate L1
	var nL1Coefficients = L1SaturnCoefficients.length;
	var L1 = 0;
	for (i=0; i<nL1Coefficients; i++)
	L1 += L1SaturnCoefficients[i].A * Math.cos(L1SaturnCoefficients[i].B + L1SaturnCoefficients[i].C*rho);

	//Calculate L2
	var nL2Coefficients = L2SaturnCoefficients.length;
	var L2 = 0;
	for (i=0; i<nL2Coefficients; i++)
	L2 += L2SaturnCoefficients[i].A * Math.cos(L2SaturnCoefficients[i].B + L2SaturnCoefficients[i].C*rho);

	//Calculate L3
	var nL3Coefficients = L3SaturnCoefficients.length;
	var L3 = 0;
	for (i=0; i<nL3Coefficients; i++)
	L3 += L3SaturnCoefficients[i].A * Math.cos(L3SaturnCoefficients[i].B + L3SaturnCoefficients[i].C*rho);

	//Calculate L4
	var nL4Coefficients = L4SaturnCoefficients.length;
	var L4 = 0;
	for (i=0; i<nL4Coefficients; i++)
	L4 += L4SaturnCoefficients[i].A * Math.cos(L4SaturnCoefficients[i].B + L4SaturnCoefficients[i].C*rho);

	//Calculate L5
	var nL5Coefficients = L5SaturnCoefficients.length;
	var L5 = 0;
	for (i=0; i<nL5Coefficients; i++)
	L5 += L5SaturnCoefficients[i].A * Math.cos(L5SaturnCoefficients[i].B + L5SaturnCoefficients[i].C*rho);

	var value = (L0 + L1*rho + L2*rhosquared + L3*rhocubed + L4*rho4 + L5*rho5) / 100000000;

	//convert results back to degrees
	value = CoordTrans.mapTo0To360Range(CoordTrans.radToDeg(value));
	return value;
}

Saturn.eclipticLatitude = function(JD) {
	var s = new Saturn;
	var B0SaturnCoefficients = s.B0SaturnCoefficients();
	var B1SaturnCoefficients = s.B1SaturnCoefficients();
	var B2SaturnCoefficients = s.B2SaturnCoefficients();
	var B3SaturnCoefficients = s.B3SaturnCoefficients();
	var B4SaturnCoefficients = s.B4SaturnCoefficients();
	var B5SaturnCoefficients = s.B5SaturnCoefficients();

	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;
	var rho5 = rho4*rho;

	//Calculate B0
	var nB0Coefficients = B0SaturnCoefficients.length;
	var B0 = 0;
	var i;
	for (i=0; i<nB0Coefficients; i++)
	B0 += B0SaturnCoefficients[i].A * Math.cos(B0SaturnCoefficients[i].B + B0SaturnCoefficients[i].C*rho);

	//Calculate B1
	var nB1Coefficients = B1SaturnCoefficients.length;
	var B1 = 0;
	for (i=0; i<nB1Coefficients; i++)
	B1 += B1SaturnCoefficients[i].A * Math.cos(B1SaturnCoefficients[i].B + B1SaturnCoefficients[i].C*rho);

	//Calculate B2
	var nB2Coefficients = B2SaturnCoefficients.length;
	var B2 = 0;
	for (i=0; i<nB2Coefficients; i++)
	B2 += B2SaturnCoefficients[i].A * Math.cos(B2SaturnCoefficients[i].B + B2SaturnCoefficients[i].C*rho);

	//Calculate B3
	var nB3Coefficients = B3SaturnCoefficients.length;
	var B3 = 0;
	for (i=0; i<nB3Coefficients; i++)
	B3 += B3SaturnCoefficients[i].A * Math.cos(B3SaturnCoefficients[i].B + B3SaturnCoefficients[i].C*rho);

	//Calculate B4
	var nB4Coefficients = B4SaturnCoefficients.length;
	var B4 = 0;
	for (i=0; i<nB4Coefficients; i++)
	B4 += B4SaturnCoefficients[i].A * Math.cos(B4SaturnCoefficients[i].B + B4SaturnCoefficients[i].C*rho);

	//Calculate B5
	var nB5Coefficients = B5SaturnCoefficients.length;
	var B5 = 0;
	for (i=0; i<nB5Coefficients; i++)
	B5 += B5SaturnCoefficients[i].A * Math.cos(B5SaturnCoefficients[i].B + B5SaturnCoefficients[i].C*rho);

	var value = (B0 + B1*rho + B2*rhosquared + B3*rhocubed + B4*rho4 + B5*rho5) / 100000000;

	//convert results back to degrees
	value = CoordTrans.radToDeg(value);
	return value;
}

Saturn.radiusVector = function(JD) {
	var s = new Saturn;
	var R0SaturnCoefficients = s.R0SaturnCoefficients();
	var R1SaturnCoefficients = s.R1SaturnCoefficients();
	var R2SaturnCoefficients = s.R2SaturnCoefficients();
	var R3SaturnCoefficients = s.R3SaturnCoefficients();
	var R4SaturnCoefficients = s.R4SaturnCoefficients();
	var R5SaturnCoefficients = s.R5SaturnCoefficients();

	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;
	var rho5 = rho4*rho;

	//Calculate R0
	var nR0Coefficients = R0SaturnCoefficients.length;
	var R0 = 0;
	var i;
	for (i=0; i<nR0Coefficients; i++)
	R0 += R0SaturnCoefficients[i].A * Math.cos(R0SaturnCoefficients[i].B + R0SaturnCoefficients[i].C*rho);

	//Calculate R1
	var nR1Coefficients = R1SaturnCoefficients.length;
	var R1 = 0;
	for (i=0; i<nR1Coefficients; i++)
	R1 += R1SaturnCoefficients[i].A * Math.cos(R1SaturnCoefficients[i].B + R1SaturnCoefficients[i].C*rho);

	//Calculate R2
	var nR2Coefficients = R2SaturnCoefficients.length;
	var R2 = 0;
	for (i=0; i<nR2Coefficients; i++)
	R2 += R2SaturnCoefficients[i].A * Math.cos(R2SaturnCoefficients[i].B + R2SaturnCoefficients[i].C*rho);

	//Calculate R3
	var nR3Coefficients = R3SaturnCoefficients.length;
	var R3 = 0;
	for (i=0; i<nR3Coefficients; i++)
	R3 += R3SaturnCoefficients[i].A * Math.cos(R3SaturnCoefficients[i].B + R3SaturnCoefficients[i].C*rho);

	//Calculate R4
	var nR4Coefficients = R4SaturnCoefficients.length;
	var R4 = 0;
	for (i=0; i<nR4Coefficients; i++)
	R4 += R4SaturnCoefficients[i].A * Math.cos(R4SaturnCoefficients[i].B + R4SaturnCoefficients[i].C*rho);

	//Calculate R5
	var nR5Coefficients = R5SaturnCoefficients.length;
	var R5 = 0;
	for (i=0; i<nR5Coefficients; i++)
	R5 += R5SaturnCoefficients[i].A * Math.cos(R5SaturnCoefficients[i].B + R5SaturnCoefficients[i].C*rho);

	return (R0 + R1*rho + R2*rhosquared + R3*rhocubed + R4*rho4 + R5*rho5) / 100000000;
}