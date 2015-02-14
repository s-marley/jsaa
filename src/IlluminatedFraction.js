function IlluminatedFraction() {}

IlluminatedFraction.phaseAngleA = function ( r, R, Delta)
{
  //Return the result
  return CoordTrans.mapTo0To360Range(CoordTrans.radToDeg(Math.acos((r*r + Delta*Delta - R*R) / (2*r*Delta))));
}

IlluminatedFraction.phaseAngleB = function ( R, R0, B, L, L0, Delta)
{
  //Convert from degrees to radians
  B = CoordTrans.degToRad(B);
  L = CoordTrans.degToRad(L);
  L0 = CoordTrans.degToRad(L0);

  //Return the result
  return CoordTrans.mapTo0To360Range(CoordTrans.radToDeg(Math.acos((R - R0*Math.cos(B)*Math.cos(L - L0))/Delta)));
}

IlluminatedFraction.phaseAngleRectangular = function ( x, y, z, B, L, Delta)
{
  //Convert from degrees to radians
  B = CoordTrans.degToRad(B);
  L = CoordTrans.degToRad(L);
  var cosB = Math.cos(B);

  //Return the result
  return CoordTrans.mapTo0To360Range(CoordTrans.radToDeg(Math.acos( (x*cosB*Math.cos(L) + y*cosB*Math.sin(L) + z*Math.sin(B)) / Delta) ));
}

IlluminatedFraction.illuminatedFractionA = function ( PhaseAngle)
{
  //Convert from degrees to radians
  PhaseAngle = CoordTrans.degToRad(PhaseAngle);

  //Return the result
  return (1 + Math.cos(PhaseAngle)) / 2;
}

IlluminatedFraction.illuminatedFractionB = function ( r, R, Delta)
{
  return (((r+Delta)*(r+Delta) - R*R) / (4*r*Delta));
}

IlluminatedFraction.mercuryMagnitudeMuller = function ( r, Delta, i)
{
  var I_50 = i - 50;
  return 1.16 + 5*CoordTrans.log10(r*Delta) + 0.02838*I_50 + 0.0001023*I_50*I_50;
}

IlluminatedFraction.venusMagnitudeMuller = function ( r, Delta, i)
{
  return -4.00 + 5*CoordTrans.log10(r*Delta) + 0.01322*i + 0.0000004247*i*i*i;
}

IlluminatedFraction.marsMagnitudeMuller = function ( r, Delta, i)
{
  return -1.3 + 5*CoordTrans.log10(r*Delta) + 0.01486*i;
}

IlluminatedFraction.jupiterMagnitudeMuller = function ( r, Delta)
{
  return -8.93 + 5*CoordTrans.log10(r*Delta);
}

IlluminatedFraction.saturnMagnitudeMuller = function ( r, Delta, DeltaU, B)
{
  //Convert from degrees to radians
  B = CoordTrans.degToRad(B);
  var sinB = Math.sin(B);

  return -8.68 + 5*CoordTrans.log10(r*Delta) + 0.044*Math.abs(DeltaU) - 2.60*Math.sin(Math.abs(B)) + 1.25*sinB*sinB; 
}

IlluminatedFraction.uranusMagnitudeMuller = function ( r, Delta)
{
  return -6.85 + 5*CoordTrans.log10(r*Delta);
}

IlluminatedFraction.neptuneMagnitudeMuller = function ( r, Delta)
{
  return -7.05 + 5*CoordTrans.log10(r*Delta);
}

IlluminatedFraction.mercuryMagnitudeAA = function ( r, Delta, i)
{
  var i2 = i*i;
  var i3 = i2*i;

  return -0.42 + 5*CoordTrans.log10(r*Delta) + 0.0380*i - 0.000273*i2 + 0.000002*i3;
}

IlluminatedFraction.venusMagnitudeAA = function ( r, Delta, i)
{
  var i2 = i*i;
  var i3 = i2*i;

  return -4.40 + 5*CoordTrans.log10(r*Delta) + 0.0009*i + 0.000239*i2 - 0.00000065*i3; Math.log
}

IlluminatedFraction.marsMagnitudeAA = function ( r, Delta, i)
{
  return -1.52 + 5*CoordTrans.log10(r*Delta) + 0.016*i;
}

IlluminatedFraction.jupiterMagnitudeAA = function ( r, Delta, i)
{
  return -9.40 + 5*CoordTrans.log10(r*Delta) + 0.005*i;
}

IlluminatedFraction.saturnMagnitudeAA = function ( r, Delta, DeltaU, B)
{
  //Convert from degrees to radians
  B = CoordTrans.degToRad(B);
  var sinB = Math.sin(B);

  return -8.88 + 5*CoordTrans.log10(r*Delta) + 0.044*Math.abs(DeltaU) - 2.60*Math.sin(Math.abs(B)) + 1.25*sinB*sinB; 
}

IlluminatedFraction.uranusMagnitudeAA = function ( r, Delta)
{
  return -7.19 + 5*CoordTrans.log10(r*Delta);
}

IlluminatedFraction.neptuneMagnitudeAA = function ( r, Delta)
{
  return -6.87 + 5*CoordTrans.log10(r*Delta);
}

IlluminatedFraction.plutoMagnitudeAA = function ( r, Delta)
{
  return -1.00 + 5*CoordTrans.log10(r*Delta);
}
