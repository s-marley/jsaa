function Aberration (){

	var staticFunctions = {};

	var AberrationCoefficients = [
		{ L2: 0, L3: 1, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: -1719914, xsint: -2, xcos: -25, xcost: 0, ysin: 25, ysint: -13, ycos: 1578089, ycost: 156, zsin: 10, zsint: 32, zcos: 684185, zcost: -358},
		{ L2: 0, L3: 2, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 6434, xsint: 141, xcos: 28007, xcost: -107, ysin: 25697, ysint: -95, ycos: -5904, ycost: -130, zsin: 11141, zsint: -48, zcos: -2559, zcost: -55},
		{ L2: 0, L3: 0, L4: 0, L5: 1, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 715, xsint: 0, xcos: 0, xcost: 0, ysin: 6, ysint: 0, ycos: -657, ycost: 0, zsin: -15, zsint: 0, zcos: -282, zcost: 0},
		{ L2: 0, L3: 0, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 1, D: 0, Mdash: 0, F: 0, xsin: 715, xsint: 0, xcos: 0, xcost: 0, ysin: 0, ysint: 0, ycos: -656, ycost: 0, zsin: 0, zsint: 0, zcos: -285, zcost: 0},
		{ L2: 0, L3: 3, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 486, xsint: -5, xcos: -236, xcost: -4, ysin: -216, ysint: -4, ycos: -446, ycost: 5, zsin: -94, zsint: 0, zcos: -193, zcost: 0},
		{ L2: 0, L3: 0, L4: 0, L5: 0, L6: 1, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 159, xsint: 0, xcos: 0, xcost: 0, ysin: 2, ysint: 0, ycos: -147, ycost: 0, zsin: -6, zsint: 0, zcos: -61, zcost: 0},
		{ L2: 0, L3: 0, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 1, xsin: 0, xsint: 0, xcos: 0, xcost: 0, ysin: 0, ysint: 0, ycos: 26, ycost: 0, zsin: 0, zsint: 0, zcos: -59, zcost: 0},
		{ L2: 0, L3: 0, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 1, D: 0, Mdash: 1, F: 0, xsin: 39, xsint: 0, xcos: 0, xcost: 0, ysin: 0, ysint: 0, ycos: -36, ycost: 0, zsin: 0, zsint: 0, zcos: -16, zcost: 0},
		{ L2: 0, L3: 0, L4: 0, L5: 2, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 33, xsint: 0, xcos: -10, xcost: 0, ysin: -9, ysint: 0, ycos: -30, ycost: 0, zsin: -5, zsint: 0, zcos: -13, zcost: 0},
		{ L2: 0, L3: 2, L4: 0, L5: -1, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 31, xsint: 0, xcos: 1, xcost: 0, ysin: 1, ysint: 0, ycos: -28, ycost: 0, zsin: 0, zsint: 0, zcos: -12, zcost: 0},
		{ L2: 0, L3: 3, L4: -8, L5: 3, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 8, xsint: 0, xcos: -28, xcost: 0, ysin: 25, ysint: 0, ycos: 8, ycost: 0, zsin: 11, zsint: 0, zcos: 3, zcost: 0},
		{ L2: 0, L3: 5, L4: -8, L5: 3, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 8, xsint: 0, xcos: -28, xcost: 0, ysin: -25, ysint: 0, ycos: -8, ycost: 0, zsin: -11, zsint: 0, zcos: -3, zcost: 0},
		{ L2: 2, L3: -1, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 21, xsint: 0, xcos: 0, xcost: 0, ysin: 0, ysint: 0, ycos: -19, ycost: 0, zsin: 0, zsint: 0, zcos: -8, zcost: 0},
		{ L2: 1, L3: 0, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: -19, xsint: 0, xcos: 0, xcost: 0, ysin: 0, ysint: 0, ycos: 17, ycost: 0, zsin: 0, zsint: 0, zcos: 8, zcost: 0},
		{ L2: 0, L3: 0, L4: 0, L5: 0, L6: 0, L7: 1, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 17, xsint: 0, xcos: 0, xcost: 0, ysin: 0, ysint: 0, ycos: -16, ycost: 0, zsin: 0, zsint: 0, zcos: -7, zcost: 0},
		{ L2: 0, L3: 1, L4: 0, L5: -2, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 16, xsint: 0, xcos: 0, xcost: 0, ysin: 0, ysint: 0, ycos: 15, ycost: 0, zsin: 1, zsint: 0, zcos: 7, zcost: 0},
		{ L2: 0, L3: 0, L4: 0, L5: 0, L6: 0, L7: 0, L8: 1, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 16, xsint: 0, xcos: 0, xcost: 0, ysin: 1, ysint: 0, ycos: -15, ycost: 0, zsin: -3, zsint: 0, zcos: -6, zcost: 0},
		{ L2: 0, L3: 1, L4: 0, L5: 1, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 11, xsint: 0, xcos: -1, xcost: 0, ysin: -1, ysint: 0, ycos: -10, ycost: 0, zsin: -1, zsint: 0, zcos: -5, zcost: 0},
		{ L2: 2, L3: -2, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 0, xsint: 0, xcos: -11, xcost: 0, ysin: -10, ysint: 0, ycos: 0, ycost: 0, zsin: -4, zsint: 0, zcos: 0, zcost: 0},
		{ L2: 0, L3: 1, L4: 0, L5: -1, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: -11, xsint: 0, xcos: -2, xcost: 0, ysin: -2, ysint: 0, ycos: 9, ycost: 0, zsin: -1, zsint: 0, zcos: 4, zcost: 0},
		{ L2: 0, L3: 4, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: -7, xsint: 0, xcos: -8, xcost: 0, ysin: -8, ysint: 0, ycos: 6, ycost: 0, zsin: -3, zsint: 0, zcos: 3, zcost: 0},
		{ L2: 0, L3: 3, L4: 0, L5: -2, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: -10, xsint: 0, xcos: 0, xcost: 0, ysin: 0, ysint: 0, ycos: 9, ycost: 0, zsin: 0, zsint: 0, zcos: 4, zcost: 0},
		{ L2: 1, L3: -2, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: -9, xsint: 0, xcos: 0, xcost: 0, ysin: 0, ysint: 0, ycos: -9, ycost: 0, zsin: 0, zsint: 0, zcos: -4, zcost: 0},
		{ L2: 2, L3: -3, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: -9, xsint: 0, xcos: 0, xcost: 0, ysin: 0, ysint: 0, ycos: -8, ycost: 0, zsin: 0, zsint: 0, zcos: -4, zcost: 0},
		{ L2: 0, L3: 0, L4: 0, L5: 0, L6: 2, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 0, xsint: 0, xcos: -9, xcost: 0, ysin: -8, ysint: 0, ycos: 0, ycost: 0, zsin: -3, zsint: 0, zcos: 0, zcost: 0},
		{ L2: 2, L3: -4, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 0, xsint: 0, xcos: -9, xcost: 0, ysin: 8, ysint: 0, ycos: 0, ycost: 0, zsin: 3, zsint: 0, zcos: 0, zcost: 0},
		{ L2: 0, L3: 3, L4: -2, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 8, xsint: 0, xcos: 0, xcost: 0, ysin: 0, ysint: 0, ycos: -8, ycost: 0, zsin: 0, zsint: 0, zcos: -3, zcost: 0},
		{ L2: 0, L3: 0, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 1, D: 2, Mdash: -1, F: 0, xsin: 8, xsint: 0, xcos: 0, xcost: 0, ysin: 0, ysint: 0, ycos: -7, ycost: 0, zsin: 0, zsint: 0, zcos: -3, zcost: 0},
		{ L2: 8, L3: -12, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: -4, xsint: 0, xcos: -7, xcost: 0, ysin: -6, ysint: 0, ycos: 4, ycost: 0, zsin: -3, zsint: 0, zcos: 2, zcost: 0},
		{ L2: 8, L3: -14, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: -4, xsint: 0, xcos: -7, xcost: 0, ysin: 6, ysint: 0, ycos: -4, ycost: 0, zsin: 3, zsint: 0, zcos: -2, zcost: 0},
		{ L2: 0, L3: 0, L4: 2, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: -6, xsint: 0, xcos: -5, xcost: 0, ysin: -4, ysint: 0, ycos: 5, ycost: 0, zsin: -2, zsint: 0, zcos: 2, zcost: 0},
		{ L2: 3, L3: -4, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: -1, xsint: 0, xcos: -1, xcost: 0, ysin: -2, ysint: 0, ycos: -7, ycost: 0, zsin: 1, zsint: 0, zcos: -4, zcost: 0},
		{ L2: 0, L3: 2, L4: 0, L5: -2, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 4, xsint: 0, xcos: -6, xcost: 0, ysin: -5, ysint: 0, ycos: -4, ycost: 0, zsin: -2, zsint: 0, zcos: -2, zcost: 0},
		{ L2: 3, L3: -3, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 0, xsint: 0, xcos: -7, xcost: 0, ysin: -6, ysint: 0, ycos: 0, ycost: 0, zsin: -3, zsint: 0, zcos: 0, zcost: 0},
		{ L2: 0, L3: 2, L4: -2, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 0, D: 0, Mdash: 0, F: 0, xsin: 5, xsint: 0, xcos: -5, xcost: 0, ysin: -4, ysint: 0, ycos: -5, ycost: 0, zsin: -2, zsint: 0, zcos: -2, zcost: 0},
		{ L2: 0, L3: 0, L4: 0, L5: 0, L6: 0, L7: 0, L8: 0, Ldash: 1, D: -2, Mdash: 0, F: 0, xsin: 5, xsint: 0, xcos: 0, xcost: 0, ysin: 0, ysint: 0, ycos: -5, ycost: 0, zsin: 0, zsint: 0, zcos: -2, zcost: 0}
	];

	staticFunctions.AberrationCoefficients = function () { return AberrationCoefficients; };

	return staticFunctions;
}

Aberration.earthVelocity = function(JD)
{
	var a = new Aberration;
	var AberrationCoefficients = a.AberrationCoefficients();

	var T = (JD - 2451545) / 36525;
	var L2 = 3.1761467 + 1021.3285546 * T;
	var L3 = 1.7534703 + 628.3075849 * T;
	var L4 = 6.2034809 + 334.0612431 * T;
	var L5 = 0.5995465 + 52.9690965 * T;
	var L6 = 0.8740168 + 21.3299095 * T;
	var L7 = 5.4812939 + 7.4781599 * T;
	var L8 = 5.3118863 + 3.8133036 * T;
	var Ldash = 3.8103444 + 8399.6847337 * T;
	var D = 5.1984667 + 7771.3771486 * T;
	var Mdash = 2.3555559 + 8328.6914289 * T;
	var F = 1.6279052 + 8433.4661601 * T;

	var velocity = new Coord3D();

	var nAberrationCoefficients = AberrationCoefficients.length;
	for (var i=0; i<nAberrationCoefficients; i++)
	{
		var Argument = 	AberrationCoefficients[i].L2*L2 + AberrationCoefficients[i].L3*L3 + 
						AberrationCoefficients[i].L4*L4 + AberrationCoefficients[i].L5*L5 + 
						AberrationCoefficients[i].L6*L6 + AberrationCoefficients[i].L7*L7 +  
						AberrationCoefficients[i].L8*L8 + AberrationCoefficients[i].Ldash*Ldash + 
						AberrationCoefficients[i].D*D + AberrationCoefficients[i].Mdash*Mdash + 
						AberrationCoefficients[i].F*F;
		velocity.X += (AberrationCoefficients[i].xsin + AberrationCoefficients[i].xsint * T) * Math.sin(Argument);
		velocity.X += (AberrationCoefficients[i].xcos + AberrationCoefficients[i].xcost * T) * Math.cos(Argument);

		velocity.Y += (AberrationCoefficients[i].ysin + AberrationCoefficients[i].ysint * T) * Math.sin(Argument);
		velocity.Y += (AberrationCoefficients[i].ycos + AberrationCoefficients[i].ycost * T) * Math.cos(Argument);

		velocity.Z += (AberrationCoefficients[i].zsin + AberrationCoefficients[i].zsint * T) * Math.sin(Argument);
		velocity.Z += (AberrationCoefficients[i].zcos + AberrationCoefficients[i].zcost * T) * Math.cos(Argument);
	}

	return velocity;
}

Aberration.equatorialAberration = function(Alpha, Delta, JD)
{
	//Convert to radians
	Alpha = coordTrans.degToRad(Alpha*15);
	Delta = coordTrans.degToRad(Delta);

	var cosAlpha = Math.cos(Alpha);
	var sinAlpha = Math.sin(Alpha);
	var cosDelta = Math.cos(Delta);
	var sinDelta = Math.sin(Delta);

	var velocity = this.earthVelocity(JD);

	//What is the return value
	var aberration = new Coord2D();
	aberration.X = coordTrans.radiansToHours((velocity.Y * cosAlpha - velocity.X * sinAlpha) / ( 17314463350.0 * cosDelta));
	aberration.Y = coordTrans.radToDeg(- (((velocity.X * cosAlpha + velocity.Y * sinAlpha) * sinDelta - velocity.Z * cosDelta) / 17314463350.0));

	return aberration;
}

Aberration.eclipticAberration = function(Lambda, Beta, JD)
{

	var T = (JD - 2451545) / 36525;
	var Tsquared = T*T;
	var e = 0.016708634 - 0.000042037*T - 0.0000001267*Tsquared;
	var pi = 102.93735 + 1.71946*T + 0.00046*Tsquared;
	var k = 20.49552;
	var SunLongitude = Sun.geometricEclipticLongitude(JD);

	//Convert to radians
	pi = coordTrans.degToRad(pi);
	Lambda = coordTrans.degToRad(Lambda);
	Beta = coordTrans.degToRad(Beta);
	SunLongitude = coordTrans.degToRad(SunLongitude);
	var aberration = new Coord2D();
	aberration.X = (-k*Math.cos(SunLongitude - Lambda) + e*k*Math.cos(pi - Lambda)) / Math.cos(Beta) / 3600;
	aberration.Y = -k*Math.sin(Beta)*(Math.sin(SunLongitude - Lambda) - e*Math.sin(pi - Lambda)) / 3600;

	return aberration;
}