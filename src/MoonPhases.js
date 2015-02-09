function MoonPhases() {};

MoonPhases.k = function(Year)
{
	return 12.3685*(Year - 2000);
}

MoonPhases.meanPhase = function(k)
{
	//convert from K to T
	var T = k/1236.85;
	var T2 = T*T;
	var T3 = T2*T;
	var T4 = T3*T;

	return 2451550.09766 + 29.530588861*k + 0.00015437*T2 - 0.000000150*T3 + 0.00000000073*T4;
}

MoonPhases.truePhase = function(k)
{
	//What will be the return value
	var JD = this.meanPhase(k);

	//convert from K to T
	var T = k/1236.85;
	var T2 = T*T;
	var T3 = T2*T;
	var T4 = T3*T;

	var E = 1 - 0.002516*T - 0.0000074*T2;
	var E2 = E*E;

	var M = CoordTrans.mapTo0To360Range(2.5534 + 29.10535670*k - 0.0000014*T2 - 0.00000011*T3);
	M = CoordTrans.degToRad(M);
	var Mdash = CoordTrans.mapTo0To360Range(201.5643 + 385.81693528*k + 0.0107582*T2 + 0.00001238*T3 - 0.000000058*T4); 
	Mdash = CoordTrans.degToRad(Mdash);
	var F = CoordTrans.mapTo0To360Range(160.7108 + 390.67050284*k - 0.0016118*T2 - 0.00000227*T3 + 0.000000011*T4);
	F = CoordTrans.degToRad(F);
	var omega = CoordTrans.mapTo0To360Range(124.7746 - 1.56375588*k + 0.0020672*T2 + 0.00000215*T3);
	omega = CoordTrans.degToRad(omega);
	var A1 = CoordTrans.mapTo0To360Range(299.77 + 0.107408*k - 0.009173*T2);
	A1 = CoordTrans.degToRad(A1);
	var A2 = CoordTrans.mapTo0To360Range(251.88 + 0.016321*k);
	A2 = CoordTrans.degToRad(A2);
	var A3 = CoordTrans.mapTo0To360Range(251.83 + 26.651886*k);
	A3 = CoordTrans.degToRad(A3);
	var A4 = CoordTrans.mapTo0To360Range(349.42 + 36.412478*k);
	A4 = CoordTrans.degToRad(A4);
	var A5 = CoordTrans.mapTo0To360Range(84.66 + 18.206239*k);
	A5 = CoordTrans.degToRad(A5);
	var A6 = CoordTrans.mapTo0To360Range(141.74 + 53.303771*k);
	A6 = CoordTrans.degToRad(A6);
	var A7 = CoordTrans.mapTo0To360Range(207.14 + 2.453732*k);
	A7 = CoordTrans.degToRad(A7);
	var A8 = CoordTrans.mapTo0To360Range(154.84 + 7.306860*k);
	A8 = CoordTrans.degToRad(A8);
	var A9 = CoordTrans.mapTo0To360Range(34.52 + 27.261239*k);
	A9 = CoordTrans.degToRad(A9);
	var A10 = CoordTrans.mapTo0To360Range(207.19 + 0.121824*k);
	A10 = CoordTrans.degToRad(A10);
	var A11 = CoordTrans.mapTo0To360Range(291.34 + 1.844379*k);
	A11 = CoordTrans.degToRad(A11);
	var A12 = CoordTrans.mapTo0To360Range(161.72 + 24.198154*k);
	A12 = CoordTrans.degToRad(A12);
	var A13 = CoordTrans.mapTo0To360Range(239.56 + 25.513099*k);
	A13 = CoordTrans.degToRad(A13);
	var A14 = CoordTrans.mapTo0To360Range(331.55 + 3.592518*k);
	A14 = CoordTrans.degToRad(A14);

	//convert to radians
	var kint;
	//var kfrac = modf(k, &kint);
	var kfrac = (k % 1).toFixed(4);
	if (kfrac < 0)
	  kfrac = 1 + kfrac;
	if (kfrac == 0) //New Moon
	{
		var DeltaJD = -0.40720*Math.sin(Mdash) +
		    0.17241*E*Math.sin(M) +
		    0.01608*Math.sin(2*Mdash) +
		    0.01039*Math.sin(2*F) +
		    0.00739*E*Math.sin(Mdash - M) +
		    -0.00514*E*Math.sin(Mdash + M) +
		    0.00208*E2*Math.sin(2*M) +
		    -0.00111*Math.sin(Mdash - 2*F) +
		    -0.00057*Math.sin(Mdash + 2*F) +
		    0.00056*E*Math.sin(2*Mdash + M) +
		    -0.00042*Math.sin(3*Mdash) +
		    0.00042*E*Math.sin(M + 2*F) +
		    0.00038*E*Math.sin(M - 2*F) +
		    -0.00024*E*Math.sin(2*Mdash - M) +
		    -0.00017*Math.sin(omega) +
		    -0.00007*Math.sin(Mdash + 2*M) +
		    0.00004*Math.sin(2*Mdash - 2*F) +
		    0.00004*Math.sin(3*M) +
		    0.00003*Math.sin(Mdash + M - 2*F) +
		    0.00003*Math.sin(2*Mdash + 2*F) +
		    -0.00003*Math.sin(Mdash + M + 2*F) +
		    0.00003*Math.sin(Mdash - M + 2*F) +
		    -0.00002*Math.sin(Mdash - M - 2*F) +
		    -0.00002*Math.sin(3*Mdash + M) +
		    0.00002*Math.sin(4*Mdash);
		JD += DeltaJD;
	}

	else if ((kfrac == 0.25) || (kfrac == 0.75)) //First Quarter or Last Quarter
	{
		var DeltaJD = -0.62801*Math.sin(Mdash) +
		    0.17172*E*Math.sin(M) +
		    -0.01183*E*Math.sin(Mdash + M) +
		    0.00862*Math.sin(2*Mdash) +
		    0.00804*Math.sin(2*F) +
		    0.00454*E*Math.sin(Mdash - M) +
		    0.00204*E2*Math.sin(2*M) +
		    -0.00180*Math.sin(Mdash - 2*F) +
		    -0.00070*Math.sin(Mdash + 2*F) +
		    -0.00040*Math.sin(3*Mdash) +
		    -0.00034*E*Math.sin(2*Mdash - M) +
		    0.00032*E*Math.sin(M + 2*F) +
		    0.00032*E*Math.sin(M - 2*F) +
		    -0.00028*E2*Math.sin(Mdash + 2*M) +
		    0.00027*E*Math.sin(2*Mdash + M) +
		    -0.00017*Math.sin(omega) +
		    -0.00005*Math.sin(Mdash - M - 2*F) +
		    0.00004*Math.sin(2*Mdash + 2*F) +
		    -0.00004*Math.sin(Mdash + M + 2*F) +
		    0.00004*Math.sin(Mdash - 2*M) +
		    0.00003*Math.sin(Mdash + M - 2*F) +
		    0.00003*Math.sin(3*M) +
		    0.00002*Math.sin(2*Mdash - 2*F) +
		    0.00002*Math.sin(Mdash - M + 2*F) +
		    -0.00002*Math.sin(3*Mdash + M);
		JD += DeltaJD;
	        
		var W = 0.00306 - 0.00038*E*Math.cos(M) + 0.00026*Math.cos(Mdash) - 0.00002*Math.cos(Mdash - M) + 0.00002*Math.cos(Mdash + M) + 0.00002*Math.cos(2*F);
		if (kfrac == 0.25) //First quarter
			JD += W;
		else
			JD -= W;          
	}

	else if (kfrac == 0.5) //Full Moon
	{
		var DeltaJD = -0.40614*Math.sin(Mdash) +
		    0.17302*E*Math.sin(M) +
		    0.01614*Math.sin(2*Mdash) +
		    0.01043*Math.sin(2*F) +
		    0.00734*E*Math.sin(Mdash - M) +
		    -0.00514*E*Math.sin(Mdash + M) +
		    0.00209*E2*Math.sin(2*M) +
		    -0.00111*Math.sin(Mdash - 2*F) +
		    -0.00057*Math.sin(Mdash + 2*F) +
		    0.00056*E*Math.sin(2*Mdash + M) +
		    -0.00042*Math.sin(3*Mdash) +
		    0.00042*E*Math.sin(M + 2*F) +
		    0.00038*E*Math.sin(M - 2*F) +
		    -0.00024*E*Math.sin(2*Mdash - M) +
		    -0.00017*Math.sin(omega) +
		    -0.00007*Math.sin(Mdash + 2*M) +
		    0.00004*Math.sin(2*Mdash - 2*F) +
		    0.00004*Math.sin(3*M) +
		    0.00003*Math.sin(Mdash + M - 2*F) +
		    0.00003*Math.sin(2*Mdash + 2*F) +
		    -0.00003*Math.sin(Mdash + M + 2*F) +
		    0.00003*Math.sin(Mdash - M + 2*F) +
		    -0.00002*Math.sin(Mdash - M - 2*F) +
		    -0.00002*Math.sin(3*Mdash + M) +
		    0.00002*Math.sin(4*Mdash);
		JD += DeltaJD;
	}

	//Additional corrections for all phases
	var DeltaJD2 = 0.000325*Math.sin(A1) +
	      0.000165*Math.sin(A2) +
	      0.000164*Math.sin(A3) +
	      0.000126*Math.sin(A4) +
	      0.000110*Math.sin(A5) +
	      0.000062*Math.sin(A6) +
	      0.000060*Math.sin(A7) +
	      0.000056*Math.sin(A8) +
	      0.000047*Math.sin(A9) +
	      0.000042*Math.sin(A10) +
	      0.000040*Math.sin(A11) +
	      0.000037*Math.sin(A12) +
	      0.000035*Math.sin(A13) +
	      0.000023*Math.sin(A14);
	JD += DeltaJD2;

	return JD;
}