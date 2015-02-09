function Earth() {

	var staticFunctions = {};

	var L0EarthCoefficients = [
		{ A: 175347046, B: 0, C: 0 },
		{ A: 3341656, B: 4.6692568, C: 6283.07585 },
		{ A: 34894, B: 4.62610, C: 12566.1517 },
		{ A: 3497, B: 2.7441, C: 5753.3849 },
		{ A: 3418, B: 2.8289, C: 3.5231 },
		{ A: 3136, B: 3.6277, C: 77713.7715 },
		{ A: 2676, B: 4.4181, C: 7860.4194 },
		{ A: 2343, B: 6.1352, C: 3930.2097 },
		{ A: 1324, B: 0.7425, C: 11506.7698 },
		{ A: 1273, B: 2.0371, C: 529.691 },
		{ A: 1199, B: 1.1096, C: 1577.3435 },
		{ A: 990, B: 5.233, C: 5884.927 },
		{ A: 902, B: 2.045, C: 26.298 },
		{ A: 857, B: 3.508, C: 398.149 },
		{ A: 780, B: 1.179, C: 5223.694 },
		{ A: 753, B: 2.533, C: 5507.553 },
		{ A: 505, B: 4.583, C: 18849.228 },
		{ A: 492, B: 4.205, C: 775.523 },
		{ A: 357, B: 2.920, C: 0.067 },
		{ A: 317, B: 5.849, C: 11790.629 },
		{ A: 284, B: 1.899, C: 796.298 },
		{ A: 271, B: 0.315, C: 10977.079 },
		{ A: 243, B: 0.345, C: 5486.778 },
		{ A: 206, B: 4.806, C: 2544.314 },
		{ A: 205, B: 1.869, C: 5573.143 },
		{ A: 202, B: 2.458, C: 6069.777 },
		{ A: 156, B: 0.833, C: 213.299 },
		{ A: 132, B: 3.411, C: 2942.463 },
		{ A: 126, B: 1.083, C: 20.775 },
		{ A: 115, B: 0.645, C: 0.98 },
		{ A: 103, B: 0.636, C: 4694.003 },
		{ A: 102, B: 0.976, C: 15720.839 },
		{ A: 102, B: 4.267, C: 7.114 },
		{ A: 99, B: 6.21, C: 2146.17 },
		{ A: 98, B: 0.68, C: 155.42 },
		{ A: 86, B: 5.98, C: 161000.69 },
		{ A: 85, B: 1.30, C: 6275.96 },
		{ A: 85, B: 3.67, C: 71430.7 },
		{ A: 80, B: 1.81, C: 17260.15 },
		{ A: 79, B: 3.04, C: 12036.46 },
		{ A: 75, B: 1.76, C: 5088.63 },
		{ A: 74, B: 3.50, C: 3154.69 },
		{ A: 74, B: 4.68, C: 801.82 },
		{ A: 70, B: 0.83, C: 9437.76 },
		{ A: 62, B: 3.98, C: 8827.39 },
		{ A: 61, B: 1.82, C: 7084.9 },
		{ A: 57, B: 2.78, C: 6286.6 },
		{ A: 56, B: 4.39, C: 14143.5 },
		{ A: 56, B: 3.47, C: 6279.55 },
		{ A: 52, B: 0.19, C: 12139.55 },
		{ A: 52, B: 1.33, C: 1748.02 },
		{ A: 51, B: 0.28, C: 5856.48 },
		{ A: 49, B: 0.49, C: 1194.45 },
		{ A: 41, B: 5.37, C: 8429.24 },
		{ A: 41, B: 2.40, C: 19651.05 },
		{ A: 39, B: 6.17, C: 10447.39 },
		{ A: 37, B: 6.04, C: 10213.29 },
		{ A: 37, B: 2.57, C: 1059.38 },
		{ A: 36, B: 1.71, C: 2352.87 },
		{ A: 36, B: 1.78, C: 6812.77 },
		{ A: 33, B: 0.59, C: 17789.85 },
		{ A: 30, B: 0.44, C: 83996.85 },
		{ A: 30, B: 2.74, C: 1349.87 },
		{ A: 25, B: 3.16, C: 4690.48 }
	];

	var L1EarthCoefficients = [
		{ A: 628331966747.0, B: 0, C: 0 },
		{ A: 206059, B: 2.678235, C: 6283.07585 },
		{ A: 4303, B: 2.6351, C: 12566.1517 },
		{ A: 425, B: 1.590, C: 3.523 },
		{ A: 119, B: 5.796, C: 26.298 },
		{ A: 109, B: 2.966, C: 1577.344 },
		{ A: 93, B: 2.59, C: 18849.23 },
		{ A: 72, B: 1.14, C: 529.69 },
		{ A: 68, B: 1.87, C: 398.15 },
		{ A: 67, B: 4.41, C: 5507.55 },
		{ A: 59, B: 2.89, C: 5223.69 },
		{ A: 56, B: 2.17, C: 155.42 },
		{ A: 45, B: 0.40, C: 796.3 },
		{ A: 36, B: 0.47, C: 775.52 },
		{ A: 29, B: 2.65, C: 7.11 },
		{ A: 21, B: 5.34, C: 0.98 },
		{ A: 19, B: 1.85, C: 5486.78 },
		{ A: 19, B: 4.97, C: 213.3 },
		{ A: 17, B: 2.99, C: 6275.96 },
		{ A: 16, B: 0.03, C: 2544.31 },
		{ A: 16, B: 1.43, C: 2146.17 },
		{ A: 15, B: 1.21, C: 10977.08 },
		{ A: 12, B: 2.83, C: 1748.02 },
		{ A: 12, B: 3.26, C: 5088.63 },
		{ A: 12, B: 5.27, C: 1194.45 },
		{ A: 12, B: 2.08, C: 4694 },
		{ A: 11, B: 0.77, C: 553.57 },
		{ A: 10, B: 1.30, C: 6286.6 },
		{ A: 10, B: 4.24, C: 1349.87 },
		{ A: 9, B: 2.70, C: 242.73 },
		{ A: 9, B: 5.64, C: 951.72 },
		{ A: 8, B: 5.30, C: 2352.87 },
		{ A: 6, B: 2.65, C: 9437.76 },
		{ A: 6, B: 4.67, C: 4690.48 }
	];

	var L2EarthCoefficients = [
		{ A: 52919, B: 0, C: 0 },
		{ A: 8720, B: 1.0721, C: 6283.0758 },
		{ A: 309, B: 0.867, C: 12566.152 },
		{ A: 27, B: 0.05, C: 3.52 },
		{ A: 16, B: 5.19, C: 26.3 },
		{ A: 16, B: 3.68, C: 155.42 },
		{ A: 10, B: 0.76, C: 18849.23 },
		{ A: 9, B: 2.06, C: 77713.77 },
		{ A: 7, B: 0.83, C: 775.52 },
		{ A: 5, B: 4.66, C: 1577.34 },
		{ A: 4, B: 1.03, C: 7.11 },
		{ A: 4, B: 3.44, C: 5573.14 },
		{ A: 3, B: 5.14, C: 796.3 },
		{ A: 3, B: 6.05, C: 5507.55 },
		{ A: 3, B: 1.19, C: 242.73 },
		{ A: 3, B: 6.12, C: 529.69 },
		{ A: 3, B: 0.31, C: 398.15 },
		{ A: 3, B: 2.28, C: 553.57 },
		{ A: 2, B: 4.38, C: 5223.69 },
		{ A: 2, B: 3.75, C: 0.98 }
	];

	var L3EarthCoefficients = [
		{ A: 289, B: 5.844, C: 6283.076 },
		{ A: 35, B: 0, C: 0 },
		{ A: 17, B: 5.49, C: 12566.15 },
		{ A: 3, B: 5.20, C: 155.42 },
		{ A: 1, B: 4.72, C: 3.52 },
		{ A: 1, B: 5.30, C: 18849.23 },
		{ A: 1, B: 5.97, C: 242.73 }
	];

	var L4EarthCoefficients = [
		{ A: 114, B: 3.142, C: 0 },
		{ A: 8, B: 4.13, C: 6283.08 },
		{ A: 1, B: 3.84, C: 12566.15 }
	];

	var L5EarthCoefficients = [
		{ A: 1, B: 3.14, C: 0 },
	];

	var B0EarthCoefficients = [
		{ A: 280, B: 3.199, C: 84334.662 },
		{ A: 102, B: 5.422, C: 5507.553 },
		{ A: 80, B: 3.88, C: 5223.69}, 
		{ A: 44, B: 3.70, C: 2352.87 },
		{ A: 32, B: 4.00, C: 1577.34 }
	];

	var B1EarthCoefficients = [
		{ A: 9, B: 3.90, C: 5507.55 },
		{ A: 6, B: 1.73, C: 5223.69} 
	];

	var R0EarthCoefficients = [
		{ A: 100013989, B: 0, C: 0 },
		{ A: 1670700, B: 3.0984635, C: 6283.07585 },
		{ A: 13956, B: 3.05525, C: 12566.1517 },
		{ A: 3084, B: 5.1985, C: 77713.7715 },
		{ A: 1628, B: 1.1739, C: 5753.3849 },
		{ A: 1576, B: 2.8469, C: 7860.4194 },
		{ A: 925, B: 5.453, C: 11506.77 },
		{ A: 542, B: 4.564, C: 3930.21 },
		{ A: 472, B: 3.661, C: 5884.927 },
		{ A: 346, B: 0.964, C: 5507.553 },
		{ A: 329, B: 5.900, C: 5223.694 },
		{ A: 307, B: 0.299, C: 5573.143 },
		{ A: 243, B: 4.273, C: 11790.629 },
		{ A: 212, B: 5.847, C: 1577.344 },
		{ A: 186, B: 5.022, C: 10977.079 },
		{ A: 175, B: 3.012, C: 18849.228 },
		{ A: 110, B: 5.055, C: 5486.778 },
		{ A: 98, B: 0.89, C: 6069.78 },
		{ A: 86, B: 5.69, C: 15720.84 },
		{ A: 86, B: 1.27, C: 161000.69}, 
		{ A: 65, B: 0.27, C: 17260.15 },
		{ A: 63, B: 0.92, C: 529.69 },
		{ A: 57, B: 2.01, C: 83996.85 },
		{ A: 56, B: 5.24, C: 71430.7 },
		{ A: 49, B: 3.25, C: 2544.31 },
		{ A: 47, B: 2.58, C: 775.52 },
		{ A: 45, B: 5.54, C: 9437.76 },
		{ A: 43, B: 6.01, C: 6275.96 },
		{ A: 39, B: 5.36, C: 4694 },
		{ A: 38, B: 2.39, C: 8827.39 },
		{ A: 37, B: 0.83, C: 19651.05 },
		{ A: 37, B: 4.90, C: 12139.55 },
		{ A: 36, B: 1.67, C: 12036.46 },
		{ A: 35, B: 1.84, C: 2942.46 },
		{ A: 33, B: 0.24, C: 7084.9 },
		{ A: 32, B: 0.18, C: 5088.63 },
		{ A: 32, B: 1.78, C: 398.15 },
		{ A: 28, B: 1.21, C: 6286.6 },
		{ A: 28, B: 1.90, C: 6279.55 },
		{ A: 26, B: 4.59, C: 10447.39 }
	];

	var R1EarthCoefficients = [
		{ A: 103019, B: 1.107490, C: 6283.07585 },
		{ A: 1721, B: 1.0644, C: 12566.1517 },
		{ A: 702, B: 3.142, C: 0 },
		{ A: 32, B: 1.02, C: 18849.23 },
		{ A: 31, B: 2.84, C: 5507.55 },
		{ A: 25, B: 1.32, C: 5223.69 },
		{ A: 18, B: 1.42, C: 1577.34 },
		{ A: 10, B: 5.91, C: 10977.08 },
		{ A: 9, B: 1.42, C: 6275.96 },
		{ A: 9, B: 0.27, C: 5486.78 }
	];

	var R2EarthCoefficients = [
		{ A: 4359, B: 5.7846, C: 6283.0758 },
		{ A: 124, B: 5.579, C: 12566.152 },
		{ A: 12, B: 3.14, C: 0 },
		{ A: 9, B: 3.63, C: 77713.77 },
		{ A: 6, B: 1.87, C: 5573.14 },
		{ A: 3, B: 5.47, C: 18849.23 }
	];

	var R3EarthCoefficients = [
		{ A: 145, B: 4.273, C: 6283.076 },
		{ A: 7, B: 3.92, C: 12566.15 }
	];

	var R4EarthCoefficients = [
		{ A: 4, B: 2.56, C: 6283.08 }
	];

	var L1EarthCoefficientsJ2000 = [
		{ A: 628307584999.0, B: 0, C: 0 },
		{ A: 206059, B: 2.678235, C: 6283.07585 },
		{ A: 4303, B: 2.6351, C: 12566.1517 },
		{ A: 425, B: 1.590, C: 3.523 },
		{ A: 119, B: 5.796, C: 26.298 },
		{ A: 109, B: 2.966, C: 1577.344 },
		{ A: 93, B: 2.59, C: 18849.23 },
		{ A: 72, B: 1.14, C: 529.69 },
		{ A: 68, B: 1.87, C: 398.15 },
		{ A: 67, B: 4.41, C: 5507.55 },
		{ A: 59, B: 2.89, C: 5223.69 },
		{ A: 56, B: 2.17, C: 155.42 },
		{ A: 45, B: 0.40, C: 796.3 },
		{ A: 36, B: 0.47, C: 775.52 },
		{ A: 29, B: 2.65, C: 7.11 },
		{ A: 21, B: 5.43, C: 0.98 },
		{ A: 19, B: 1.85, C: 5486.78 },
		{ A: 19, B: 4.97, C: 213.3 },
		{ A: 17, B: 2.99, C: 6275.96 },
		{ A: 16, B: 0.03, C: 2544.31 },
		{ A: 16, B: 1.43, C: 2146.17 },
		{ A: 15, B: 1.21, C: 10977.08 },
		{ A: 12, B: 2.83, C: 1748.02 },
		{ A: 12, B: 3.26, C: 5088.63 },
		{ A: 12, B: 5.27, C: 1194.45 },
		{ A: 12, B: 2.08, C: 4694 },
		{ A: 11, B: 0.77, C: 553.57 },
		{ A: 10, B: 1.30, C: 6286.6 },
		{ A: 10, B: 4.24, C: 1349.87 },
		{ A: 9, B: 2.70, C: 242.73 },
		{ A: 9, B: 5.64, C: 951.72 },
		{ A: 8, B: 5.30, C: 2352.87 },
		{ A: 6, B: 2.65, C: 9437.76 },
		{ A: 6, B: 4.67, C: 4690.48 }
	];

	var L2EarthCoefficientsJ2000 = [
		{ A: 8722, B: 1.0725, C: 6283.0758 },
		{ A: 991, B: 3.1416, C: 0 },
		{ A: 295, B: 0.437, C: 12566.152 },
		{ A: 27, B: 0.05, C: 3.52 },
		{ A: 16, B: 5.19, C: 26.3 },
		{ A: 16, B: 3.69, C: 155.42 },
		{ A: 9, B: 0.30, C: 18849.23 },
		{ A: 9, B: 2.06, C: 77713.77 },
		{ A: 7, B: 0.83, C: 775.52 },
		{ A: 5, B: 4.66, C: 1577.34 },
		{ A: 4, B: 1.03, C: 7.11 },
		{ A: 4, B: 3.44, C: 5573.14 },
		{ A: 3, B: 5.14, C: 796.3 },
		{ A: 3, B: 6.05, C: 5507.55 },
		{ A: 3, B: 1.19, C: 242.73 },
		{ A: 3, B: 6.12, C: 529.69 },
		{ A: 3, B: 0.30, C: 398.15 },
		{ A: 3, B: 2.28, C: 553.57 },
		{ A: 2, B: 4.38, C: 5223.69 },
		{ A: 2, B: 3.75, C: 0.98 }
	];

	var L3EarthCoefficientsJ2000 = [
		{ A: 289, B: 5.842, C: 6283.076 },
		{ A: 21, B: 6.05, C: 12566.15 },
		{ A: 3, B: 5.20, C: 155.42 },
		{ A: 3, B: 3.14, C: 0 },
		{ A: 1, B: 4.72, C: 3.52 },
		{ A: 1, B: 5.97, C: 242.73 },
		{ A: 1, B: 5.54, C: 18849.23 }
	];

	var L4EarthCoefficientsJ2000 = [
		{ A: 8, B: 4.14, C: 6283.08 },
		{ A: 1, B: 3.28, C: 12566.15 }
	];

	var B1EarthCoefficientsJ2000 = [
		{ A: 227778, B: 3.413766, C: 6283.07585 },
		{ A: 3806, B: 3.3706, C: 12566.1517 },
		{ A: 3620, B: 0, C: 0 },
		{ A: 72, B: 3.33, C: 18849.23 },
		{ A: 8, B: 3.89, C: 5507.55 },
		{ A: 8, B: 1.79, C: 5223.69 },
		{ A: 6, B: 5.20, C: 2352.87 }
	];

	var B2EarthCoefficientsJ2000 = [
		{ A: 9721, B: 5.1519, C: 6283.07585 },
		{ A: 233, B: 3.1416, C: 0 },
		{ A: 134, B: 0.644, C: 12566.152 },
		{ A: 7, B: 1.07, C: 18849.23 }
	];

	var B3EarthCoefficientsJ2000 = [
		{ A: 276, B: 0.595, C: 6283.076 },
		{ A: 17, B: 3.14, C: 0 },
		{ A: 4, B: 0.12, C: 12566.15 }
	];

	var B4EarthCoefficientsJ2000 = [
		{ A: 6, B: 2.27, C: 6283.08 },
		{ A: 1, B: 0, C: 0 }
	];

	staticFunctions.L0EarthCoefficients = function () { return L0EarthCoefficients; };
	staticFunctions.L1EarthCoefficients = function () { return L1EarthCoefficients; };
	staticFunctions.L2EarthCoefficients = function () { return L2EarthCoefficients;	};
	staticFunctions.L3EarthCoefficients = function () {	return L3EarthCoefficients; };
	staticFunctions.L4EarthCoefficients = function () {	return L4EarthCoefficients;	};
	staticFunctions.L5EarthCoefficients = function () {	return L5EarthCoefficients;	};

	staticFunctions.B0EarthCoefficients = function () { return B0EarthCoefficients; };
	staticFunctions.B1EarthCoefficients = function () { return B1EarthCoefficients; };

	staticFunctions.R0EarthCoefficients = function () { return R0EarthCoefficients; };
	staticFunctions.R1EarthCoefficients = function () { return R1EarthCoefficients; };
	staticFunctions.R2EarthCoefficients = function () { return R2EarthCoefficients;	};
	staticFunctions.R3EarthCoefficients = function () {	return R3EarthCoefficients; };
	staticFunctions.R4EarthCoefficients = function () {	return R4EarthCoefficients; };

	staticFunctions.L1EarthCoefficientsJ2000 = function () { return L1EarthCoefficientsJ2000; };
	staticFunctions.L2EarthCoefficientsJ2000 = function () { return L2EarthCoefficientsJ2000; };
	staticFunctions.L3EarthCoefficientsJ2000 = function () { return L3EarthCoefficientsJ2000; };
	staticFunctions.L4EarthCoefficientsJ2000 = function () { return L4EarthCoefficientsJ2000; };

	staticFunctions.B1EarthCoefficientsJ2000 = function () { return B1EarthCoefficientsJ2000; };
	staticFunctions.B2EarthCoefficientsJ2000 = function () { return B2EarthCoefficientsJ2000; };
	staticFunctions.B3EarthCoefficientsJ2000 = function () { return B3EarthCoefficientsJ2000; };
	staticFunctions.B4EarthCoefficientsJ2000 = function () { return B4EarthCoefficientsJ2000; };


	return staticFunctions;
}

Earth.eclipticLongitudeJ2000 = function(JD){

	var e = new Earth;
	var L0EarthCoefficients = e.L0EarthCoefficients();
	var L1EarthCoefficientsJ2000 = e.L1EarthCoefficientsJ2000();
	var L2EarthCoefficientsJ2000 = e.L2EarthCoefficientsJ2000();
	var L3EarthCoefficientsJ2000 = e.L3EarthCoefficientsJ2000();
	var L4EarthCoefficientsJ2000 = e.L4EarthCoefficientsJ2000();

	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;

	//Calculate L0
	var nL0Coefficients = L0EarthCoefficients.length;
	var L0 = 0;
	var i;
	for (i=0; i<nL0Coefficients; i++)
	L0 += L0EarthCoefficients[i].A * Math.cos(L0EarthCoefficients[i].B + L0EarthCoefficients[i].C*rho);

	//Calculate L1
	var nL1Coefficients = L1EarthCoefficientsJ2000.length
	var L1 = 0;
	for (i=0; i<nL1Coefficients; i++)
	L1 += L1EarthCoefficientsJ2000[i].A * Math.cos(L1EarthCoefficientsJ2000[i].B + L1EarthCoefficientsJ2000[i].C*rho);

	//Calculate L2
	var nL2Coefficients = L2EarthCoefficientsJ2000.length;
	var L2 = 0;
	for (i=0; i<nL2Coefficients; i++)
	L2 += L2EarthCoefficientsJ2000[i].A * Math.cos(L2EarthCoefficientsJ2000[i].B + L2EarthCoefficientsJ2000[i].C*rho);

	//Calculate L3
	var nL3Coefficients = L3EarthCoefficientsJ2000.length;
	var L3 = 0;
	for (i=0; i<nL3Coefficients; i++)
	L3 += L3EarthCoefficientsJ2000[i].A * Math.cos(L3EarthCoefficientsJ2000[i].B + L3EarthCoefficientsJ2000[i].C*rho);

	//Calculate L4
	var nL4Coefficients = L4EarthCoefficientsJ2000.length;
	var L4 = 0;
	for (i=0; i<nL4Coefficients; i++)
	L4 += L4EarthCoefficientsJ2000[i].A * Math.cos(L4EarthCoefficientsJ2000[i].B + L4EarthCoefficientsJ2000[i].C*rho);

	var value = (L0 + L1*rho + L2*rhosquared + L3*rhocubed + L4*rho4) / 100000000;

	//convert results back to degrees
	value = CoordTrans.mapTo0To360Range(CoordTrans.radToDeg(value));
	return value;
}

Earth.eclipticLatitudeJ2000 = function(JD){
	var e = new Earth;
	var B0EarthCoefficients = e.B0EarthCoefficients();
	var B1EarthCoefficientsJ2000 = e.B1EarthCoefficientsJ2000();
	var B2EarthCoefficientsJ2000 = e.B2EarthCoefficientsJ2000();
	var B3EarthCoefficientsJ2000 = e.B3EarthCoefficientsJ2000();
	var B4EarthCoefficientsJ2000 = e.B4EarthCoefficientsJ2000();

	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;

	//Calculate B0
	var nB0Coefficients = B0EarthCoefficients.length;
	var B0 = 0;
	var i;
	for (i=0; i<nB0Coefficients; i++)
	B0 += B0EarthCoefficients[i].A * Math.cos(B0EarthCoefficients[i].B + B0EarthCoefficients[i].C*rho);

	//Calculate B1
	var nB1Coefficients = B1EarthCoefficientsJ2000.length;
	var B1 = 0;
	for (i=0; i<nB1Coefficients; i++)
	B1 += B1EarthCoefficientsJ2000[i].A * Math.cos(B1EarthCoefficientsJ2000[i].B + B1EarthCoefficientsJ2000[i].C*rho);

	//Calculate B2
	var nB2Coefficients = B2EarthCoefficientsJ2000.length;
	var B2 = 0;
	for (i=0; i<nB2Coefficients; i++)
	B2 += B2EarthCoefficientsJ2000[i].A * Math.cos(B2EarthCoefficientsJ2000[i].B + B2EarthCoefficientsJ2000[i].C*rho);

	//Calculate B3
	var nB3Coefficients = B3EarthCoefficientsJ2000.length;
	var B3 = 0;
	for (i=0; i<nB3Coefficients; i++)
	B3 += B3EarthCoefficientsJ2000[i].A * Math.cos(B3EarthCoefficientsJ2000[i].B + B3EarthCoefficientsJ2000[i].C*rho);

	//Calculate B4
	var nB4Coefficients = B4EarthCoefficientsJ2000.length;
	var B4 = 0;
	for (i=0; i<nB4Coefficients; i++)
	B4 += B4EarthCoefficientsJ2000[i].A * Math.cos(B4EarthCoefficientsJ2000[i].B + B4EarthCoefficientsJ2000[i].C*rho);

	var value = (B0 + B1*rho + B2*rhosquared + B3*rhocubed + B4*rho4) / 100000000;

	//convert results back to degrees
	value = CoordTrans.radToDeg(value);
	return value;
}

Earth.eclipticLongitude = function(JD) {
    var e = new Earth;
	var L0EarthCoefficients = e.L0EarthCoefficients();
	var L1EarthCoefficients = e.L1EarthCoefficients();
	var L2EarthCoefficients = e.L2EarthCoefficients();
	var L3EarthCoefficients = e.L3EarthCoefficients();
	var L4EarthCoefficients = e.L4EarthCoefficients();
	var L5EarthCoefficients = e.L5EarthCoefficients();

    var rho = (JD - 2451545) / 365250;
    var rhosquared = rho*rho;
    var rhocubed = rhosquared*rho;
    var rho4 = rhocubed*rho;
    var rho5 = rho4*rho;

    //Calculate L0
    var nL0Coefficients = L0EarthCoefficients.length
    var L0 = 0;
    var i;
    for (i=0; i<nL0Coefficients; i++)
      L0 += L0EarthCoefficients[i].A * Math.cos(L0EarthCoefficients[i].B + L0EarthCoefficients[i].C*rho);

    //Calculate L1
    var nL1Coefficients = L1EarthCoefficients.length
    var L1 = 0;
    for (i=0; i<nL1Coefficients; i++)
      L1 += L1EarthCoefficients[i].A * Math.cos(L1EarthCoefficients[i].B + L1EarthCoefficients[i].C*rho);

    //Calculate L2
    var nL2Coefficients = L2EarthCoefficients.length
    var L2 = 0;
    for (i=0; i<nL2Coefficients; i++)
      L2 += L2EarthCoefficients[i].A * Math.cos(L2EarthCoefficients[i].B + L2EarthCoefficients[i].C*rho);

    //Calculate L3
    var nL3Coefficients = L3EarthCoefficients.length
    var L3 = 0;
    for (i=0; i<nL3Coefficients; i++)
      L3 += L3EarthCoefficients[i].A * Math.cos(L3EarthCoefficients[i].B + L3EarthCoefficients[i].C*rho);

    //Calculate L4
    var nL4Coefficients = L4EarthCoefficients.length
    var L4 = 0;
    for (i=0; i<nL4Coefficients; i++)
      L4 += L4EarthCoefficients[i].A * Math.cos(L4EarthCoefficients[i].B + L4EarthCoefficients[i].C*rho);

    //Calculate L5
    var nL5Coefficients = L5EarthCoefficients.length
    var L5 = 0;
    for (i=0; i<nL5Coefficients; i++)
      L5 += L5EarthCoefficients[i].A * Math.cos(L5EarthCoefficients[i].B + L5EarthCoefficients[i].C*rho);

    var value = (L0 + L1*rho + L2*rhosquared + L3*rhocubed + L4*rho4 + L5*rho5) / 100000000;

    //convert results back to degrees
    value = CoordTrans.mapTo0To360Range(CoordTrans.radToDeg(value));
    return value;
}

Earth.eclipticLatitude = function(JD){
	var e = new Earth;
	var B0EarthCoefficients = e.B0EarthCoefficients();
	var B1EarthCoefficients = e.B1EarthCoefficients();

	var rho = (JD - 2451545) / 365250;

	//Calculate B0
	var nB0Coefficients = B0EarthCoefficients.length
	var B0 = 0;
	var i;
	for (i=0; i<nB0Coefficients; i++)
	B0 += B0EarthCoefficients[i].A * Math.cos(B0EarthCoefficients[i].B + B0EarthCoefficients[i].C*rho);

	//Calculate B1
	var nB1Coefficients = B1EarthCoefficients.length
	var B1 = 0;
	for (i=0; i<nB1Coefficients; i++)
	B1 += B1EarthCoefficients[i].A * Math.cos(B1EarthCoefficients[i].B + B1EarthCoefficients[i].C*rho);

	//Note for Earth there are no B2, B3 or B4 coefficients to calculate

	var value = (B0 + B1*rho) / 100000000;

	//convert results back to degrees
	value = CoordTrans.radToDeg(value);
	return value;
}

Earth.radiusVector = function(JD){
	var e = new Earth;
	var R0EarthCoefficients = e.R0EarthCoefficients();
	var R1EarthCoefficients = e.R1EarthCoefficients();
	var R2EarthCoefficients = e.R2EarthCoefficients();
	var R3EarthCoefficients = e.R3EarthCoefficients();
	var R4EarthCoefficients = e.R4EarthCoefficients();

	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;

	//Calculate R0
	var nR0Coefficients = R0EarthCoefficients.length;
	var R0 = 0;
	var i;
	for (i=0; i<nR0Coefficients; i++)
	R0 += R0EarthCoefficients[i].A * Math.cos(R0EarthCoefficients[i].B + R0EarthCoefficients[i].C*rho);

	//Calculate R1
	var nR1Coefficients = R1EarthCoefficients.length;
	var R1 = 0;
	for (i=0; i<nR1Coefficients; i++)
	R1 += R1EarthCoefficients[i].A * Math.cos(R1EarthCoefficients[i].B + R1EarthCoefficients[i].C*rho);

	//Calculate R2
	var nR2Coefficients = R2EarthCoefficients.length;
	var R2 = 0;
	for (i=0; i<nR2Coefficients; i++)
	R2 += R2EarthCoefficients[i].A * Math.cos(R2EarthCoefficients[i].B + R2EarthCoefficients[i].C*rho);

	//Calculate R3
	var nR3Coefficients = R3EarthCoefficients.length;
	var R3 = 0;
	for (i=0; i<nR3Coefficients; i++)
	R3 += R3EarthCoefficients[i].A * Math.cos(R3EarthCoefficients[i].B + R3EarthCoefficients[i].C*rho);

	//Calculate R4
	var nR4Coefficients = R4EarthCoefficients.length;
	var R4 = 0;
	for (i=0; i<nR4Coefficients; i++)
	R4 += R4EarthCoefficients[i].A * Math.cos(R4EarthCoefficients[i].B + R4EarthCoefficients[i].C*rho);

	return (R0 + R1*rho + R2*rhosquared + R3*rhocubed + R4*rho4) / 100000000;
}

Earth.sunMeanAnomaly = function(JD)
{
	var T = (JD - 2451545) / 36525;
	var Tsquared = T*T;
	var Tcubed = Tsquared*T;
	return CoordTrans.mapTo0To360Range(357.5291092 + 35999.0502909*T - 0.0001536*Tsquared + Tcubed/24490000);
}

Earth.eccentricity = function(JD)
{
	var T = (JD - 2451545) / 36525;
	var Tsquared = T*T;
	return 1 - 0.002516*T - 0.0000074*Tsquared;
}