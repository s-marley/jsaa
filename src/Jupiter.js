function Jupiter ()  {

	var staticFunctions = {};

	var L0JupiterCoefficients = [
		{ A: 59954691, B: 0, C: 0 },
		{ A: 9695899, B: 5.0619179, C: 529.6909651 },
		{ A: 573610, B: 1.444062, C: 7.113547 },
		{ A: 306389, B: 5.417347, C: 1059.38193 },
		{ A: 97178, B: 4.14265, C: 632.78374 },
		{ A: 72903, B: 3.64043, C: 522.57742 },
		{ A: 64264, B: 3.41145, C: 103.09277 },
		{ A: 39806, B: 2.29377, C: 419.48464 },
		{ A: 38858, B: 1.27232, C: 316.39187 },
		{ A: 27965, B: 1.78455, C: 536.80451 },
		{ A: 13590, B: 5.77481, C: 1589.0729 },
		{ A: 8769, B: 3.6300, C: 949.1756 },
		{ A: 8246, B: 3.5823, C: 206.1855 },
		{ A: 7368, B: 5.0810, C: 735.8765 },
		{ A: 6263, B: 0.0250, C: 213.2991 },
		{ A: 6114, B: 4.5132, C: 1162.4747 },
		{ A: 5305, B: 4.1863, C: 1052.2684 },
		{ A: 5305, B: 1.3067, C: 14.2271 },
		{ A: 4905, B: 1.3208, C: 110.2063 },
		{ A: 4647, B: 4.6996, C: 3.9322 },
		{ A: 3045, B: 4.3168, C: 426.5982 },
		{ A: 2610, B: 1.5667, C: 846.0828 },
		{ A: 2028, B: 1.0638, C: 3.1814 },
		{ A: 1921, B: 0.9717, C: 639.8973 },
		{ A: 1765, B: 2.1415, C: 1066.4955 },
		{ A: 1723, B: 3.8804, C: 1265.5675 },
		{ A: 1633, B: 3.5820, C: 515.4639 },
		{ A: 1432, B: 4.2968, C: 625.6702 },
		{ A: 973, B: 4.098, C: 95.979 },
		{ A: 884, B: 2.437, C: 412.371 },
		{ A: 733, B: 6.085, C: 838.969 },
		{ A: 731, B: 3.806, C: 1581.959 },
		{ A: 709, B: 1.293, C: 742.99 },
		{ A: 692, B: 6.134, C: 2118.764 },
		{ A: 614, B: 4.109, C: 1478.867 },
		{ A: 582, B: 4.540, C: 309.278 },
		{ A: 495, B: 3.756, C: 323.505 },
		{ A: 441, B: 2.958, C: 454.909 },
		{ A: 417, B: 1.036, C: 2.448 },
		{ A: 390, B: 4.897, C: 1692.166 },
		{ A: 376, B: 4.703, C: 1368.66 },
		{ A: 341, B: 5.715, C: 533.623 },
		{ A: 330, B: 4.740, C: 0.048 },
		{ A: 262, B: 1.877, C: 0.963 },
		{ A: 261, B: 0.820, C: 380.128 },
		{ A: 257, B: 3.724, C: 199.072 },
		{ A: 244, B: 5.220, C: 728.763 },
		{ A: 235, B: 1.227, C: 909.819 },
		{ A: 220, B: 1.651, C: 543.918 },
		{ A: 207, B: 1.855, C: 525.759 },
		{ A: 202, B: 1.807, C: 1375.774 },
		{ A: 197, B: 5.293, C: 1155.361 },
		{ A: 175, B: 3.730, C: 942.062 },
		{ A: 175, B: 3.226, C: 1898.351 },
		{ A: 175, B: 5.910, C: 956.289 },
		{ A: 158, B: 4.365, C: 1795.258 },
		{ A: 151, B: 3.906, C: 74.782 },
		{ A: 149, B: 4.377, C: 1685.052 },
		{ A: 141, B: 3.136, C: 491.558 },
		{ A: 138, B: 1.318, C: 1169.588 },
		{ A: 131, B: 4.169, C: 1045.155 },
		{ A: 117, B: 2.500, C: 1596.186 },
		{ A: 117, B: 3.389, C: 0.521 },
		{ A: 106, B: 4.554, C: 526.51 }
	];

	var L1JupiterCoefficients = [
		{ A: 52993480757.0, B: 0, C: 0 },
		{ A: 489741, B: 4.220667, C: 529.690965 },
		{ A: 228919, B: 6.026475, C: 7.113547 },
		{ A: 27655, B: 4.57266, C: 1059.38193 },
		{ A: 20721, B: 5.45939, C: 522.57742 },
		{ A: 12106, B: 0.16986, C: 536.80451 },
		{ A: 6068, B: 4.4242, C: 103.0928 },
		{ A: 5434, B: 3.9848, C: 419.4846 },
		{ A: 4238, B: 5.8901, C: 14.2271 },
		{ A: 2212, B: 5.2677, C: 206.1855 },
		{ A: 1746, B: 4.9267, C: 1589.0729 },
		{ A: 1296, B: 5.5513, C: 3.1814 },
		{ A: 1173, B: 5.8565, C: 1052.2684 },
		{ A: 1163, B: 0.5145, C: 3.9322 },
		{ A: 1099, B: 5.3070, C: 515.4639 },
		{ A: 1007, B: 0.4648, C: 735.8765 },
		{ A: 1004, B: 3.1504, C: 426.5982 },
		{ A: 848, B: 5.758, C: 110.206 },
		{ A: 827, B: 4.803, C: 213.299 },
		{ A: 816, B: 0.586, C: 1066.495 },
		{ A: 725, B: 5.518, C: 639.897 },
		{ A: 568, B: 5.989, C: 625.67 },
		{ A: 474, B: 4.132, C: 412.371 },
		{ A: 413, B: 5.737, C: 95.979 },
		{ A: 345, B: 4.242, C: 632.784 },
		{ A: 336, B: 3.732, C: 1162.475 },
		{ A: 234, B: 4.035, C: 949.176 },
		{ A: 234, B: 6.243, C: 309.278 },
		{ A: 199, B: 1.505, C: 838.969 },
		{ A: 195, B: 2.219, C: 323.505 },
		{ A: 187, B: 6.086, C: 742.99 },
		{ A: 184, B: 6.280, C: 543.918 },
		{ A: 171, B: 5.417, C: 199.072 },
		{ A: 131, B: 0.626, C: 728.763 },
		{ A: 115, B: 0.680, C: 846.083 },
		{ A: 115, B: 5.286, C: 2118.764 },
		{ A: 108, B: 4.493, C: 956.289 },
		{ A: 80, B: 5.82, C: 1045.15 },
		{ A: 72, B: 5.34, C: 942.06 },
		{ A: 70, B: 5.97, C: 532.87 },
		{ A: 67, B: 5.73, C: 21.34 },
		{ A: 66, B: 0.13, C: 526.51 },
		{ A: 65, B: 6.09, C: 1581.96 },
		{ A: 59, B: 0.59, C: 1155.36 },
		{ A: 58, B: 0.99, C: 1596.19 },
		{ A: 57, B: 5.97, C: 1169.59 },
		{ A: 57, B: 1.41, C: 533.62 },
		{ A: 55, B: 5.43, C: 10.29 },
		{ A: 52, B: 5.73, C: 117.32 },
		{ A: 52, B: 0.23, C: 1368.66 },
		{ A: 50, B: 6.08, C: 525.76 },
		{ A: 47, B: 3.63, C: 1478.87 },
		{ A: 47, B: 0.51, C: 1265.57 },
		{ A: 40, B: 4.16, C: 1692.17 },
		{ A: 34, B: 0.10, C: 302.16 },
		{ A: 33, B: 5.04, C: 220.41 },
		{ A: 32, B: 5.37, C: 508.35 },
		{ A: 29, B: 5.42, C: 1272.68 },
		{ A: 29, B: 3.36, C: 4.67 },
		{ A: 29, B: 0.76, C: 88.87 },
		{ A: 25, B: 1.61, C: 831.86 }
	];

	var L2JupiterCoefficients = [
		{ A: 47234, B: 4.32148, C: 7.11355 },
		{ A: 38966, B: 0, C: 0 },
		{ A: 30629, B: 2.93021, C: 529.69097 },
		{ A: 3189, B: 1.0550, C: 522.5774 },
		{ A: 2729, B: 4.8455, C: 536.8045 },
		{ A: 2723, B: 3.4141, C: 1059.3819 },
		{ A: 1721, B: 4.1873, C: 14.2271 },
		{ A: 383, B: 5.768, C: 419.485 },
		{ A: 378, B: 0.760, C: 515.464 },
		{ A: 367, B: 6.055, C: 103.093 },
		{ A: 337, B: 3.786, C: 3.181 },
		{ A: 308, B: 0.694, C: 206.186 },
		{ A: 218, B: 3.814, C: 1589.073 },
		{ A: 199, B: 5.340, C: 1066.495 },
		{ A: 197, B: 2.484, C: 3.932 },
		{ A: 156, B: 1.406, C: 1052.268 },
		{ A: 146, B: 3.814, C: 639.897 },
		{ A: 142, B: 1.634, C: 426.598 },
		{ A: 130, B: 5.837, C: 412.371 },
		{ A: 117, B: 1.414, C: 625.67 },
		{ A: 97, B: 4.03, C: 110.21 },
		{ A: 91, B: 1.11, C: 95.98 },
		{ A: 87, B: 2.52, C: 632.78 },
		{ A: 79, B: 4.64, C: 543.92 },
		{ A: 72, B: 2.22, C: 735.88 },
		{ A: 58, B: 0.83, C: 199.07 },
		{ A: 57, B: 3.12, C: 213.3 },
		{ A: 49, B: 1.67, C: 309.28 },
		{ A: 40, B: 4.02, C: 21.34 },
		{ A: 40, B: 0.62, C: 323.51 },
		{ A: 36, B: 2.33, C: 728.76 },
		{ A: 29, B: 3.61, C: 10.29 },
		{ A: 28, B: 3.24, C: 838.97 },
		{ A: 26, B: 4.50, C: 742.99 },
		{ A: 26, B: 2.51, C: 1162.47 },
		{ A: 25, B: 1.22, C: 1045.15 },
		{ A: 24, B: 3.01, C: 956.29 },
		{ A: 19, B: 4.29, C: 532.87 },
		{ A: 18, B: 0.81, C: 508.35 },
		{ A: 17, B: 4.20, C: 2118.76 },
		{ A: 17, B: 1.83, C: 526.51 },
		{ A: 15, B: 5.81, C: 1596.19 },
		{ A: 15, B: 0.68, C: 942.06 },
		{ A: 15, B: 4.00, C: 117.32 },
		{ A: 14, B: 5.95, C: 316.39 },
		{ A: 14, B: 1.80, C: 302.16 },
		{ A: 13, B: 2.52, C: 88.87 },
		{ A: 13, B: 4.37, C: 1169.59 },
		{ A: 11, B: 4.44, C: 525.76 },
		{ A: 10, B: 1.72, C: 1581.96 },
		{ A: 9, B: 2.18, C: 1155.36 },
		{ A: 9, B: 3.29, C: 220.41 },
		{ A: 9, B: 3.32, C: 831.86 },
		{ A: 8, B: 5.76, C: 846.08 },
		{ A: 8, B: 2.71, C: 533.62 },
		{ A: 7, B: 2.18, C: 1265.57 },
		{ A: 6, B: 0.50, C: 949.18 }
	];

	var L3JupiterCoefficients = [
		{ A: 6502, B: 2.5986, C: 7.1135 },
		{ A: 1357, B: 1.3464, C: 529.691 },
		{ A: 471, B: 2.475, C: 14.227 },
		{ A: 417, B: 3.245, C: 536.805 },
		{ A: 353, B: 2.974, C: 522.577 },
		{ A: 155, B: 2.076, C: 1059.382 },
		{ A: 87, B: 2.51, C: 515.46 },
		{ A: 44, B: 0, C: 0 },
		{ A: 34, B: 3.83, C: 1066.5 },
		{ A: 28, B: 2.45, C: 206.19 },
		{ A: 24, B: 1.28, C: 412.37 },
		{ A: 23, B: 2.98, C: 543.92 },
		{ A: 20, B: 2.10, C: 639.9 },
		{ A: 20, B: 1.40, C: 419.48 },
		{ A: 19, B: 1.59, C: 103.09 },
		{ A: 17, B: 2.30, C: 21.34 },
		{ A: 17, B: 2.60, C: 1589.07 },
		{ A: 16, B: 3.15, C: 625.67 },
		{ A: 16, B: 3.36, C: 1052.27 },
		{ A: 13, B: 2.76, C: 95.98 },
		{ A: 13, B: 2.54, C: 199.07 },
		{ A: 13, B: 6.27, C: 426.6 },
		{ A: 9, B: 1.76, C: 10.29 },
		{ A: 9, B: 2.27, C: 110.21 },
		{ A: 7, B: 3.43, C: 309.28 },
		{ A: 7, B: 4.04, C: 728.76 },
		{ A: 6, B: 2.52, C: 508.35 },
		{ A: 5, B: 2.91, C: 1045.15 },
		{ A: 5, B: 5.25, C: 323.51 },
		{ A: 4, B: 4.30, C: 88.87 },
		{ A: 4, B: 3.52, C: 302.16 },
		{ A: 4, B: 4.09, C: 735.88 },
		{ A: 3, B: 1.43, C: 956.29 },
		{ A: 3, B: 4.36, C: 1596.19 },
		{ A: 3, B: 1.25, C: 213.3 },
		{ A: 3, B: 5.02, C: 838.97 },
		{ A: 3, B: 2.24, C: 117.32 },
		{ A: 2, B: 2.90, C: 742.99 },
		{ A: 2, B: 2.36, C: 942.06 }
	];

	var L4JupiterCoefficients = [
		{ A: 669, B: 0.853, C: 7.114 },
		{ A: 114, B: 3.142, C: 0 },
		{ A: 100, B: 0.743, C: 14.227 },
		{ A: 50, B: 1.65, C: 536.8 },
		{ A: 44, B: 5.82, C: 529.69 },
		{ A: 32, B: 4.86, C: 522.58 },
		{ A: 15, B: 4.29, C: 515.46 },
		{ A: 9, B: 0.71, C: 1059.38 },
		{ A: 5, B: 1.30, C: 543.92 },
		{ A: 4, B: 2.32, C: 1066.5 },
		{ A: 4, B: 0.48, C: 21.34 },
		{ A: 3, B: 3.00, C: 412.37 },
		{ A: 2, B: 0.40, C: 639.9 },
		{ A: 2, B: 4.26, C: 199.07 },
		{ A: 2, B: 4.91, C: 625.67 },
		{ A: 2, B: 4.26, C: 206.19 },
		{ A: 1, B: 5.26, C: 1052.27 },
		{ A: 1, B: 4.72, C: 95.98 },
		{ A: 1, B: 1.29, C: 1589.07 }
	];

	var L5JupiterCoefficients = [
		{ A: 50, B: 5.26, C: 7.11 },
		{ A: 16, B: 5.25, C: 14.23 },
		{ A: 4, B: 0.01, C: 536.8 },
		{ A: 2, B: 1.10, C: 522.58 },
		{ A: 1, B: 3.14, C: 0 }
	];

	var B0JupiterCoefficients = [
		{ A: 2268616, B: 3.5585261, C: 529.6909651 },
		{ A: 110090, B: 0, C: 0 },
		{ A: 109972, B: 3.908093, C: 1059.38193 },
		{ A: 8101, B: 3.6051, C: 522.5774 },
		{ A: 6438, B: 0.3063, C: 536.8045 },
		{ A: 6044, B: 4.2588, C: 1589.0729 },
		{ A: 1107, B: 2.9853, C: 1162.4747 },
		{ A: 944, B: 1.675, C: 426.598 },
		{ A: 942, B: 2.936, C: 1052.268 },
		{ A: 894, B: 1.754, C: 7.114 },
		{ A: 836, B: 5.179, C: 103.093 },
		{ A: 767, B: 2.155, C: 632.784 },
		{ A: 684, B: 3.678, C: 213.299 },
		{ A: 629, B: 0.643, C: 1066.495 },
		{ A: 559, B: 0.014, C: 846.083 },
		{ A: 532, B: 2.703, C: 110.206 },
		{ A: 464, B: 1.173, C: 949.176 },
		{ A: 431, B: 2.608, C: 419.485 },
		{ A: 351, B: 4.611, C: 2118.764 },
		{ A: 132, B: 4.778, C: 742.99 },
		{ A: 123, B: 3.350, C: 1692.166 },
		{ A: 116, B: 1.387, C: 323.505 },
		{ A: 115, B: 5.049, C: 316.392 },
		{ A: 104, B: 3.701, C: 515.464 },
		{ A: 103, B: 2.319, C: 1478.867 },
		{ A: 102, B: 3.153, C: 1581.959 }
	];

	var B1JupiterCoefficients = [
		{ A: 177352, B: 5.701665, C: 529.690965 },
		{ A: 3230, B: 5.7794, C: 1059.3819 },
		{ A: 3081, B: 5.4746, C: 522.5774 },
		{ A: 2212, B: 4.7348, C: 536.8045 },
		{ A: 1694, B: 3.1416, C: 0 },
		{ A: 346, B: 4.746, C: 1052.268 },
		{ A: 234, B: 5.189, C: 1066.495 },
		{ A: 196, B: 6.186, C: 7.114 },
		{ A: 150, B: 3.927, C: 1589.073 },
		{ A: 114, B: 3.439, C: 632.784 },
		{ A: 97, B: 2.91, C: 949.18 },
		{ A: 82, B: 5.08, C: 1162.47 },
		{ A: 77, B: 2.51, C: 103.09 },
		{ A: 77, B: 0.61, C: 419.48 },
		{ A: 74, B: 5.50, C: 515.46 },
		{ A: 61, B: 5.45, C: 213.3 },
		{ A: 50, B: 3.95, C: 735.88 },
		{ A: 46, B: 0.54, C: 110.21 },
		{ A: 45, B: 1.90, C: 846.08 },
		{ A: 37, B: 4.70, C: 543.92 },
		{ A: 36, B: 6.11, C: 316.39 },
		{ A: 32, B: 4.92, C: 1581.96 }
	];

	var B2JupiterCoefficients = [
		{ A: 8094, B: 1.4632, C: 529.691 },
		{ A: 813, B: 3.1416, C: 0 },
		{ A: 742, B: 0.957, C: 522.577 },
		{ A: 399, B: 2.899, C: 536.805 },
		{ A: 342, B: 1.447, C: 1059.382 },
		{ A: 74, B: 0.41, C: 1052.27 },
		{ A: 46, B: 3.48, C: 1066.5 },
		{ A: 30, B: 1.93, C: 1589.07 },
		{ A: 29, B: 0.99, C: 515.46 },
		{ A: 23, B: 4.27, C: 7.11 },
		{ A: 14, B: 2.92, C: 543.92 },
		{ A: 12, B: 5.22, C: 632.78 },
		{ A: 11, B: 4.88, C: 949.18 },
		{ A: 6, B: 6.21, C: 1045.15 }
	];

	var B3JupiterCoefficients = [
		{ A: 252, B: 3.381, C: 529.691 },
		{ A: 122, B: 2.733, C: 522.577 },
		{ A: 49, B: 1.04, C: 536.8 },
		{ A: 11, B: 2.31, C: 1052.27 },
		{ A: 8, B: 2.77, C: 515.46 },
		{ A: 7, B: 4.25, C: 1059.38 },
		{ A: 6, B: 1.78, C: 1066.5 },
		{ A: 4, B: 1.13, C: 543.92 },
		{ A: 3, B: 3.14, C: 0 }
	];

	var B4JupiterCoefficients = [
		{ A: 15, B: 4.53, C: 522.58 },
		{ A: 5, B: 4.47, C: 529.69 },
		{ A: 4, B: 5.44, C: 536.8 },
		{ A: 3, B: 0, C: 0 },
		{ A: 2, B: 4.52, C: 515.46 },
		{ A: 1, B: 4.20, C: 1052.27 }
	];

	var B5JupiterCoefficients = [
		{ A: 1, B: 0.09, C: 522.58 }
	];

	var R0JupiterCoefficients = [
		{ A: 520887429, B: 0, C: 0 },
		{ A: 25209327, B: 3.49108640, C: 529.69096509 },
		{ A: 610600, B: 3.841154, C: 1059.38193 },
		{ A: 282029, B: 2.574199, C: 632.783739 },
		{ A: 187647, B: 2.075904, C: 522.577418 },
		{ A: 86793, B: 0.71001, C: 419.48464 },
		{ A: 72063, B: 0.21466, C: 536.80451 },
		{ A: 65517, B: 5.97996, C: 316.39187 },
		{ A: 30135, B: 2.16132, C: 949.17561 },
		{ A: 29135, B: 1.67759, C: 103.09277 },
		{ A: 23947, B: 0.27458, C: 7.11355 },
		{ A: 23453, B: 3.54023, C: 735.87651 },
		{ A: 22284, B: 4.19363, C: 1589.0729 },
		{ A: 13033, B: 2.96043, C: 1162.4747 },
		{ A: 12749, B: 2.71550, C: 1052.26838 },
		{ A: 9703, B: 1.9067, C: 206.1855 },
		{ A: 9161, B: 4.4135, C: 213.2991 },
		{ A: 7895, B: 2.4791, C: 426.5982 },
		{ A: 7058, B: 2.1818, C: 1265.5675 },
		{ A: 6138, B: 6.2642, C: 846.0828 },
		{ A: 5477, B: 5.6573, C: 639.8973 },
		{ A: 4170, B: 2.0161, C: 515.4639 },
		{ A: 4137, B: 2.7222, C: 625.6702 },
		{ A: 3503, B: 0.5653, C: 1066.4955 },
		{ A: 2617, B: 2.0099, C: 1581.9593 },
		{ A: 2500, B: 4.5518, C: 838.9693 },
		{ A: 2128, B: 6.1275, C: 742.9901 },
		{ A: 1912, B: 0.8562, C: 412.3711 },
		{ A: 1611, B: 3.0887, C: 1368.6603 },
		{ A: 1479, B: 2.6803, C: 1478.8666 },
		{ A: 1231, B: 1.8904, C: 323.5054 },
		{ A: 1217, B: 1.8017, C: 110.2063 },
		{ A: 1015, B: 1.3867, C: 454.9094 },
		{ A: 999, B: 2.872, C: 309.278 },
		{ A: 961, B: 4.549, C: 2118.764 },
		{ A: 886, B: 4.148, C: 533.623 },
		{ A: 821, B: 1.593, C: 1898.351 },
		{ A: 812, B: 5.941, C: 909.819 },
		{ A: 777, B: 3.677, C: 728.763 },
		{ A: 727, B: 3.988, C: 1155.361 },
		{ A: 655, B: 2.791, C: 1685.052 },
		{ A: 654, B: 3.382, C: 1692.166 },
		{ A: 621, B: 4.823, C: 956.289 },
		{ A: 615, B: 2.276, C: 942.062 },
		{ A: 562, B: 0.081, C: 543.918 },
		{ A: 542, B: 0.284, C: 525.759 }
	];

	var R1JupiterCoefficients = [
		{ A: 1271802, B: 2.6493751, C: 529.6909651 }, 
		{ A: 61662, B: 3.00076, C: 1059.38193 },
		{ A: 53444, B: 3.89718, C: 522.57742 },
		{ A: 41390, B: 0, C: 0 },
		{ A: 31185, B: 4.88277, C: 536.80451 },
		{ A: 11847, B: 2.41330, C: 419.48464 },
		{ A: 9166, B: 4.7598, C: 7.1135 },
		{ A: 3404, B: 3.3469, C: 1589.0729 },
		{ A: 3203, B: 5.2108, C: 735.8765 },
		{ A: 3176, B: 2.7930, C: 103.0928 },
		{ A: 2806, B: 3.7422, C: 515.4639 },
		{ A: 2677, B: 4.3305, C: 1052.2684 },
		{ A: 2600, B: 3.6344, C: 206.1855 },
		{ A: 2412, B: 1.4695, C: 426.5982 },
		{ A: 2101, B: 3.9276, C: 639.8973 },
		{ A: 1646, B: 5.3095, C: 1066.4955 },
		{ A: 1641, B: 4.4163, C: 625.6702 },
		{ A: 1050, B: 3.1611, C: 213.2991 },
		{ A: 1025, B: 2.5543, C: 412.3711 },
		{ A: 806, B: 2.678, C: 632.784 },
		{ A: 741, B: 2.171, C: 1162.475 },
		{ A: 677, B: 6.250, C: 838.969 },
		{ A: 567, B: 4.577, C: 742.99 },
		{ A: 485, B: 2.469, C: 949.176 },
		{ A: 469, B: 4.710, C: 543.918 },
		{ A: 445, B: 0.403, C: 323.505 },
		{ A: 416, B: 5.368, C: 728.763 },
		{ A: 402, B: 4.605, C: 309.278 },
		{ A: 347, B: 4.681, C: 14.227 },
		{ A: 338, B: 3.168, C: 956.289 },
		{ A: 261, B: 5.343, C: 846.083 },
		{ A: 247, B: 3.923, C: 942.062 },
		{ A: 220, B: 4.842, C: 1368.66 },
		{ A: 203, B: 5.600, C: 1155.361 },
		{ A: 200, B: 4.439, C: 1045.155 },
		{ A: 197, B: 3.706, C: 2118.764 },
		{ A: 196, B: 3.759, C: 199.072 },
		{ A: 184, B: 4.265, C: 95.979 },
		{ A: 180, B: 4.402, C: 532.872 },
		{ A: 170, B: 4.846, C: 526.51 },
		{ A: 146, B: 6.130, C: 533.623 },
		{ A: 133, B: 1.322, C: 110.206 },
		{ A: 132, B: 4.512, C: 525.759 }
	];

	var R2JupiterCoefficients = [
		{ A: 79645, B: 1.35866, C: 529.69097 },
		{ A: 8252, B: 5.7777, C: 522.5774 },
		{ A: 7030, B: 3.2748, C: 536.8045 },
		{ A: 5314, B: 1.8384, C: 1059.3819 },
		{ A: 1861, B: 2.9768, C: 7.1135 },
		{ A: 964, B: 5.480, C: 515.464 },
		{ A: 836, B: 4.199, C: 419.485 },
		{ A: 498, B: 3.142, C: 0 },
		{ A: 427, B: 2.228, C: 639.897 },
		{ A: 406, B: 3.783, C: 1066.495 },
		{ A: 377, B: 2.242, C: 1589.073 },
		{ A: 363, B: 5.368, C: 206.186 },
		{ A: 342, B: 6.099, C: 1052.268 },
		{ A: 339, B: 6.127, C: 625.67 },
		{ A: 333, B: 0.003, C: 426.598 },
		{ A: 280, B: 4.262, C: 412.371 },
		{ A: 257, B: 0.963, C: 632.784 },
		{ A: 230, B: 0.705, C: 735.877 },
		{ A: 201, B: 3.069, C: 543.918 },
		{ A: 200, B: 4.429, C: 103.093 },
		{ A: 139, B: 2.932, C: 14.227 },
		{ A: 114, B: 0.787, C: 728.763 },
		{ A: 95, B: 1.70, C: 838.97 },
		{ A: 86, B: 5.14, C: 323.51 },
		{ A: 83, B: 0.06, C: 309.28 },
		{ A: 80, B: 2.98, C: 742.99 },
		{ A: 75, B: 1.60, C: 956.29 },
		{ A: 70, B: 1.51, C: 213.3 },
		{ A: 67, B: 5.47, C: 199.07 },
		{ A: 62, B: 6.10, C: 1045.15 },
		{ A: 56, B: 0.96, C: 1162.47 },
		{ A: 52, B: 5.58, C: 942.06 },
		{ A: 50, B: 2.72, C: 532.87 },
		{ A: 45, B: 5.52, C: 508.35 },
		{ A: 44, B: 0.27, C: 526.51 },
		{ A: 40, B: 5.95, C: 95.98 }
	];

	var R3JupiterCoefficients = [
		{ A: 3519, B: 6.0580, C: 529.691 },
		{ A: 1073, B: 1.6732, C: 536.8045 },
		{ A: 916, B: 1.413, C: 522.577 },
		{ A: 342, B: 0.523, C: 1059.382 },
		{ A: 255, B: 1.196, C: 7.114 },
		{ A: 222, B: 0.952, C: 515.464 },
		{ A: 90, B: 3.14, C: 0 },
		{ A: 69, B: 2.27, C: 1066.5 },
		{ A: 58, B: 1.41, C: 543.92 },
		{ A: 58, B: 0.53, C: 639.9 },
		{ A: 51, B: 5.98, C: 412.37 },
		{ A: 47, B: 1.58, C: 625.67 },
		{ A: 43, B: 6.12, C: 419.48 },
		{ A: 37, B: 1.18, C: 14.23 },
		{ A: 34, B: 1.67, C: 1052.27 },
		{ A: 34, B: 0.85, C: 206.19 },
		{ A: 31, B: 1.04, C: 1589.07 },
		{ A: 30, B: 4.63, C: 426.6 },
		{ A: 21, B: 2.50, C: 728.76 },
		{ A: 15, B: 0.89, C: 199.07 },
		{ A: 14, B: 0.96, C: 508.35 },
		{ A: 13, B: 1.50, C: 1045.15 },
		{ A: 12, B: 2.61, C: 735.88 },
		{ A: 12, B: 3.56, C: 323.51 },
		{ A: 11, B: 1.79, C: 309.28 },
		{ A: 11, B: 6.28, C: 956.29 },
		{ A: 10, B: 6.26, C: 103.09 },
		{ A: 9, B: 3.45, C: 838.97 }
	];

	var R4JupiterCoefficients = [
		{ A: 129, B: 0.084, C: 536.805 },
		{ A: 113, B: 4.249, C: 529.691 },
		{ A: 83, B: 3.30, C: 522.58 },
		{ A: 38, B: 2.73, C: 515.46 },
		{ A: 27, B: 5.69, C: 7.11 },
		{ A: 18, B: 5.40, C: 1059.38 },
		{ A: 13, B: 6.02, C: 543.92 },
		{ A: 9, B: 0.77, C: 1066.5 },
		{ A: 8, B: 5.68, C: 14.23 },
		{ A: 7, B: 1.43, C: 412.37 },
		{ A: 6, B: 5.12, C: 639.9 },
		{ A: 5, B: 3.34, C: 625.67 },
		{ A: 3, B: 3.40, C: 1052.27 },
		{ A: 3, B: 4.16, C: 728.76 },
		{ A: 3, B: 2.90, C: 426.6 }
	];

	var R5JupiterCoefficients = [
		{ A: 11, B: 4.75, C: 536.8 },
		{ A: 4, B: 5.92, C: 522.58 },
		{ A: 2, B: 5.57, C: 515.46 },
		{ A: 2, B: 4.30, C: 543.92 },
		{ A: 2, B: 3.69, C: 7.11 },
		{ A: 2, B: 4.13, C: 1059.38 },
		{ A: 2, B: 5.49, C: 1066.5 }
	];

	staticFunctions.L0JupiterCoefficients = function () { return L0JupiterCoefficients; };
	staticFunctions.L1JupiterCoefficients = function () { return L1JupiterCoefficients; };
	staticFunctions.L2JupiterCoefficients = function () { return L2JupiterCoefficients;	};
	staticFunctions.L3JupiterCoefficients = function () { return L3JupiterCoefficients; };
	staticFunctions.L4JupiterCoefficients = function () { return L4JupiterCoefficients;	};
	staticFunctions.L5JupiterCoefficients = function () { return L5JupiterCoefficients;	};

	staticFunctions.B0JupiterCoefficients = function () { return B0JupiterCoefficients; };
	staticFunctions.B1JupiterCoefficients = function () { return B1JupiterCoefficients; };
	staticFunctions.B2JupiterCoefficients = function () { return B2JupiterCoefficients;	};
	staticFunctions.B3JupiterCoefficients = function () { return B3JupiterCoefficients; };
	staticFunctions.B4JupiterCoefficients = function () { return B4JupiterCoefficients;	};
	staticFunctions.B5JupiterCoefficients = function () { return B5JupiterCoefficients;	};

	staticFunctions.R0JupiterCoefficients = function () { return R0JupiterCoefficients; };
	staticFunctions.R1JupiterCoefficients = function () { return R1JupiterCoefficients; };
	staticFunctions.R2JupiterCoefficients = function () { return R2JupiterCoefficients;	};
	staticFunctions.R3JupiterCoefficients = function () { return R3JupiterCoefficients; };
	staticFunctions.R4JupiterCoefficients = function () { return R4JupiterCoefficients;	};
	staticFunctions.R5JupiterCoefficients = function () { return R5JupiterCoefficients;	};

	return staticFunctions;
}

Jupiter.eclipticLongitude = function(JD) {
	var j = new Jupiter;
	var L0JupiterCoefficients = j.L0JupiterCoefficients();
	var L1JupiterCoefficients = j.L1JupiterCoefficients();
	var L2JupiterCoefficients = j.L2JupiterCoefficients();
	var L3JupiterCoefficients = j.L3JupiterCoefficients();
	var L4JupiterCoefficients = j.L4JupiterCoefficients();
	var L5JupiterCoefficients = j.L5JupiterCoefficients();

	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;
	var rho5 = rho4*rho;

	//Calculate L0
	var nL0Coefficients = L0JupiterCoefficients.length;
	var L0 = 0;
	var i;
	for (i=0; i<nL0Coefficients; i++)
	L0 += L0JupiterCoefficients[i].A * Math.cos(L0JupiterCoefficients[i].B + L0JupiterCoefficients[i].C*rho);

	//Calculate L1
	var nL1Coefficients = L1JupiterCoefficients.length;
	var L1 = 0;
	for (i=0; i<nL1Coefficients; i++)
	L1 += L1JupiterCoefficients[i].A * Math.cos(L1JupiterCoefficients[i].B + L1JupiterCoefficients[i].C*rho);

	//Calculate L2
	var nL2Coefficients = L2JupiterCoefficients.length;
	var L2 = 0;
	for (i=0; i<nL2Coefficients; i++)
	L2 += L2JupiterCoefficients[i].A * Math.cos(L2JupiterCoefficients[i].B + L2JupiterCoefficients[i].C*rho);

	//Calculate L3
	var nL3Coefficients = L3JupiterCoefficients.length;
	var L3 = 0;
	for (i=0; i<nL3Coefficients; i++)
	L3 += L3JupiterCoefficients[i].A * Math.cos(L3JupiterCoefficients[i].B + L3JupiterCoefficients[i].C*rho);

	//Calculate L4
	var nL4Coefficients = L4JupiterCoefficients.length;
	var L4 = 0;
	for (i=0; i<nL4Coefficients; i++)
	L4 += L4JupiterCoefficients[i].A * Math.cos(L4JupiterCoefficients[i].B + L4JupiterCoefficients[i].C*rho);

	//Calculate L5
	var nL5Coefficients = L5JupiterCoefficients.length;
	var L5 = 0;
	for (i=0; i<nL5Coefficients; i++)
	L5 += L5JupiterCoefficients[i].A * Math.cos(L5JupiterCoefficients[i].B + L5JupiterCoefficients[i].C*rho);

	var value = (L0 + L1*rho + L2*rhosquared + L3*rhocubed + L4*rho4 + L5*rho5) / 100000000;

	//convert results back to degrees
	value = coordTrans.mapTo0To360Range(coordTrans.radToDeg(value));
	return value;
},

Jupiter.eclipticLatitude = function(JD) {
	var j = new Jupiter;
	var B0JupiterCoefficients = j.B0JupiterCoefficients();
	var B1JupiterCoefficients = j.B1JupiterCoefficients();
	var B2JupiterCoefficients = j.B2JupiterCoefficients();
	var B3JupiterCoefficients = j.B3JupiterCoefficients();
	var B4JupiterCoefficients = j.B4JupiterCoefficients();
	var B5JupiterCoefficients = j.B5JupiterCoefficients();

	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;
	var rho5 = rho4*rho;

	//Calculate B0
	var nB0Coefficients = B0JupiterCoefficients.length;
	var B0 = 0;
	var i;
	for (i=0; i<nB0Coefficients; i++)
	B0 += B0JupiterCoefficients[i].A * Math.cos(B0JupiterCoefficients[i].B + B0JupiterCoefficients[i].C*rho);

	//Calculate B1
	var nB1Coefficients = B1JupiterCoefficients.length;
	var B1 = 0;
	for (i=0; i<nB1Coefficients; i++)
	B1 += B1JupiterCoefficients[i].A * Math.cos(B1JupiterCoefficients[i].B + B1JupiterCoefficients[i].C*rho);

	//Calculate B2
	var nB2Coefficients = B2JupiterCoefficients.length;
	var B2 = 0;
	for (i=0; i<nB2Coefficients; i++)
	B2 += B2JupiterCoefficients[i].A * Math.cos(B2JupiterCoefficients[i].B + B2JupiterCoefficients[i].C*rho);

	//Calculate B3
	var nB3Coefficients = B3JupiterCoefficients.length;
	var B3 = 0;
	for (i=0; i<nB3Coefficients; i++)
	B3 += B3JupiterCoefficients[i].A * Math.cos(B3JupiterCoefficients[i].B + B3JupiterCoefficients[i].C*rho);

	//Calculate B4
	var nB4Coefficients = B4JupiterCoefficients.length;
	var B4 = 0;
	for (i=0; i<nB4Coefficients; i++)
	B4 += B4JupiterCoefficients[i].A * Math.cos(B4JupiterCoefficients[i].B + B4JupiterCoefficients[i].C*rho);

	//Calculate B5
	var nB5Coefficients = B5JupiterCoefficients.length;
	var B5 = 0;
	for (i=0; i<nB5Coefficients; i++)
	B5 += B5JupiterCoefficients[i].A * Math.cos(B5JupiterCoefficients[i].B + B5JupiterCoefficients[i].C*rho);

	var value = (B0 + B1*rho + B2*rhosquared + B3*rhocubed + B4*rho4 + B5*rho5) / 100000000;

	//convert results back to degrees
	value = coordTrans.radToDeg(value);
	return value;
},

Jupiter.radiusVector = function(JD) {
	var j = new Jupiter;
	var R0JupiterCoefficients = j.R0JupiterCoefficients();
	var R1JupiterCoefficients = j.R1JupiterCoefficients();
	var R2JupiterCoefficients = j.R2JupiterCoefficients();
	var R3JupiterCoefficients = j.R3JupiterCoefficients();
	var R4JupiterCoefficients = j.R4JupiterCoefficients();
	var R5JupiterCoefficients = j.R5JupiterCoefficients();

	var rho = (JD - 2451545) / 365250;
	var rhosquared = rho*rho;
	var rhocubed = rhosquared*rho;
	var rho4 = rhocubed*rho;
	var rho5 = rho4*rho;

	//Calculate R0
	var nR0Coefficients = R0JupiterCoefficients.length;
	var R0 = 0;
	var i;
	for (i=0; i<nR0Coefficients; i++)
	R0 += R0JupiterCoefficients[i].A * Math.cos(R0JupiterCoefficients[i].B + R0JupiterCoefficients[i].C*rho);

	//Calculate R1
	var nR1Coefficients = R1JupiterCoefficients.length;
	var R1 = 0;
	for (i=0; i<nR1Coefficients; i++)
	R1 += R1JupiterCoefficients[i].A * Math.cos(R1JupiterCoefficients[i].B + R1JupiterCoefficients[i].C*rho);

	//Calculate R2
	var nR2Coefficients = R2JupiterCoefficients.length;
	var R2 = 0;
	for (i=0; i<nR2Coefficients; i++)
	R2 += R2JupiterCoefficients[i].A * Math.cos(R2JupiterCoefficients[i].B + R2JupiterCoefficients[i].C*rho);

	//Calculate R3
	var nR3Coefficients = R3JupiterCoefficients.length;
	var R3 = 0;
	for (i=0; i<nR3Coefficients; i++)
	R3 += R3JupiterCoefficients[i].A * Math.cos(R3JupiterCoefficients[i].B + R3JupiterCoefficients[i].C*rho);

	//Calculate R4
	var nR4Coefficients = R4JupiterCoefficients.length;
	var R4 = 0;
	for (i=0; i<nR4Coefficients; i++)
	R4 += R4JupiterCoefficients[i].A * Math.cos(R4JupiterCoefficients[i].B + R4JupiterCoefficients[i].C*rho);

	//Calculate R5
	var nR5Coefficients = R5JupiterCoefficients.length;
	var R5 = 0;
	for (i=0; i<nR5Coefficients; i++)
	R5 += R5JupiterCoefficients[i].A * Math.cos(R5JupiterCoefficients[i].B + R5JupiterCoefficients[i].C*rho);

	return (R0 + R1*rho + R2*rhosquared + R3*rhocubed + R4*rho4 + R5*rho5) / 100000000;
}