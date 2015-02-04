///// CoordTrans /////

test("Degrees to radians",function(assert){
   assert.close(coordTrans.degToRad(173),3.01941961,0.00000001,"173 deg returned 3.01941961 rad");
});

test("Map 0 To 360",function(){
    equal(coordTrans.mapTo0To360Range(560),200,"560 deg returned to 200 deg");
 });

test("Ecliptical to Equatorial",function(assert){
	var result = coordTrans.ecliptic2Equatorial(139.686111,4.875278,23.441884);
	assert.close(result.X,9.58155113,0.0000001,"When lambda = 139.686111 deg, beta = 4.875278 deg and epsilon = 23.441884 deg, RA = 9.58155113 hours");
	assert.close(result.Y,19.537268,0.000001,"When lambda = 139.686111 deg, beta = 4.875278 deg and epsilon = 23.441884 deg, dec = 19.537268 degrees");
});

///// Pluto /////

test("Pluto Ecliptic Longitude",function(assert){
   assert.close(Pluto.eclipticLongitude(2448908.5),232.74071,0.00001,"A JD of 2448908.5 returned 232.74071 deg");
});

test("Pluto Ecliptic Latitude",function(assert){
   assert.close(Pluto.eclipticLatitude(2448908.5),14.58782,0.00001,"A JD of 2448908.5 returned 14.58782 deg");
});

test("Pluto Radius Vector",function(assert){
   assert.close(Pluto.radiusVector(2448908.5),29.711111,0.000001,"A JD of 2448908.5 returned 29.711111 AU");
});

///// Earth /////

test("Earth Ecliptic Longitude J2000",function(assert){
	assert.close(Earth.eclipticLongitudeJ2000(2448908.5),20.008209,0.000001,"A JD of 2448908.5 returned 20.008209 deg")
});

test("Earth Ecliptic Latitude J2000",function(assert){
	assert.close(Earth.eclipticLatitudeJ2000(2448908.5),0.000221,0.000001,"A JD of 2448908.5 returned 0.000221 deg")
});

test("Earth Ecliptic Longitude",function(assert){
	assert.close(Earth.eclipticLongitude(2448908.5),19.907372,0.000001,"A JD of 244908.5 returned 19.907372 deg")
});

test("Earth Ecliptic Latitude",function(assert){
	assert.close(Earth.eclipticLatitude(2448908.5),-0.000179,0.000001,"A JD of 244908.5 returned -0.000179 deg")
});

test("Earth Radius Vector",function(assert){
	assert.close(Earth.radiusVector(2448908.5),0.99760775,0.00000001,"A JD of 2448908.5 returned 0.99760775 AU")
});

///// Sun /////

test("Sun Geometric Ecliptic Longitude J2000",function(assert){
	assert.close(Sun.geometricEclipticLongitudeJ2000(2448908.5),200.008208,0.000001,"A JD of 2448908.5 returned 200.008208 deg")
});

test("Sun Geometric Ecliptic Latitude J2000",function(assert){
	assert.close(Sun.geometricEclipticLatitudeJ2000(2448908.5),-0.00022101,0.00000001,"A JD of 2448908.5 returned -0.00022101 deg")
});

test("Sun Geometric Ecliptic Longitude",function(assert){
	assert.close(Sun.geometricEclipticLongitude(2448908.5),199.907372,0.000001,"A JD of 2448908.5 returned 199.907372 deg")
});

test("Sun Geometric Ecliptic Latitude",function(assert){
	assert.close(Sun.geometricEclipticLatitude(2448908.5),0.000179,0.000001,"A JD of 2448908.5 returned 0.000179 deg")
});

test("Sun Ecliptic Rectangular Coordinates J2000",function(assert){
	var result = Sun.eclipticRectangularCoordinatesJ2000(2448908.5);
	assert.close(result.X,-0.93739575,0.00000001,"A JD of 2448908.5 returned Coord.X of -0.93739575")
	assert.close(result.Y,-0.34133625,0.00000001,"A JD of 2448908.5 returned Coord.X of -0.34133625")
	assert.close(result.Z,-0.00000385,0.00000001,"A JD of 2448908.5 returned Coord.X of 0.00000385")
});


///// Jupiter /////

test("Jupiter Ecliptic Longitude",function(assert){
	assert.close(Jupiter.eclipticLongitude(2448972.5),181.882168,0.0001,"A JD of 2448972.5 returned 181.882168 deg")
});

test("Jupiter Ecliptic Latitude",function(assert){
	assert.close(Jupiter.eclipticLatitude(2448972.5),1.290464,0.0001,"A JD of 2448972.5 returned 1.290464 deg")
});

test("Jupiter Radius Vector",function(assert){
	assert.close(Jupiter.radiusVector(2448972.5),5.44642320,0.0001,"A JD of 2448972.5 returned 5.44642320 AU")
});

///// Mercury /////

// Results are currently unknown, need some other calculation to compare it to!
/*
test("Mercury Ecliptic Longitude",function(assert){
	assert.close(Mercury.eclipticLongitude(2488976.5),26.11428,0.0001,"A JD of 2488976.5 returned 181.882168deg to the nearest 0.0001deg")
});

test("Mercury Ecliptic Latitude",function(assert){
	assert.close(Mercury.eclipticLatitude(2488976.5),-2.62070,0.0001,"A JD of 2488976.5 returned 1.290464deg to the nearest 0.0001deg")
});

test("Mercury Radius Vector",function(assert){
	assert.close(Mercury.radiusVector(2488976.5),0.724603,0.0001,"A JD of 2488976.5 returned 5.44642320AU to the nearest 0.0001AU")
});
*/

///// Venus /////

test("Venus Ecliptic Longitude",function(assert){
	assert.close(Venus.eclipticLongitude(2448976.5),26.11428,0.00001,"A JD of 2488976.5 returned 26.11428")
});

test("Venus Ecliptic Latitude",function(assert){
	assert.close(Venus.eclipticLatitude(2448976.5),-2.62070,0.00001,"A JD of 2488976.5 returned -2.62070")
});

test("Venus Radius Vector",function(assert){
	assert.close(Venus.radiusVector(2448976.5),0.724603,0.00001,"A JD of 2488976.5 returned 0.724603 AU")
});

///// Elliptical /////

test("Light travel time",function(assert){
	assert.close(Elliptical.distanceToLightTime(0.910845),0.0052606,0.0000001,"A distance of 0.910845 AU returned 0.0052606 days")
});

test("Venus position",function(assert){
	var result = Elliptical.planetCalculate(2448976.5, 'VENUS');
	assert.close(result.ApparentGeocentricLatitude,-2.08487,0.0001,"At JD = 2448976.5, Venus has an apparent geocentric latitude of -2.08487 deg");
	assert.close(result.ApparentGeocentricLongitude,313.08151,0.0001,"At JD = 2448976.5, Venus has an apparent geocentric longitude of 313.08151 deg");
	assert.close(result.ApparentGeocentricDistance,0.910947,0.0001,"At JD = 2448976.5, Venus has an apparent geocentirc distance of 0.910947 AU");
	assert.close(result.ApparentLightTime,0.0052612,0.0001,"At JD = 2448976.5, Venus has a light time of 0.0052612 days");
	assert.close(result.ApparentGeocentricRA,21.078194,0.0001,"At JD = 2448976.5, Venus has an RA of 21.078194 hours");
	assert.close(result.ApparentGeocentricDeclination,-18.88802,0.0001,"At JD = 2448976.5, Venus has an dec of -18.88802 deg");

});

///// Aberration /////

test("Aberration of Earths velocity",function(assert){
	var result = Aberration.earthVelocity(2462088.69);
	assert.close(result.X,-1363700,1,"A JD of 2462088.69 gives velocity.X of -1363700 10E-8 AU per day");
	assert.close(result.Y,990286,1,"A JD of 2462088.69 gives velocity.Y of 990286 10E-8 AU per day");
	assert.close(result.Z,429285,1,"A JD of 2462088.69 gives velocity.Z of 429285 10E-8 AU per day");
});

test("Equatorial Aberration",function(assert){
	var result = Aberration.equatorialAberration(2.73693742,49.2277489,2462088.69);
	assert.close(result.X,0.00055482,0.00000001,"A JD of 2462088.69 gives aberration.X = 0.00055482 hours");
	assert.close(result.Y,0.0018749,0.0000001,"A JD of 2462088.69 gives aberration.Y = 0.0018749 deg");
});

test("Ecliptic Aberration",function(assert){
	var result = Aberration.eclipticAberration(313.08102,-2.08474,2448976.5);
	assert.close(result.X,-0.00413,0.00001,"A JD of 2448976.5 gives aberration.X = -0.00413 deg");
	assert.close(result.Y,-0.00015,0.00001,"A JD of 2448976.5 gives aberration.Y = -0.00015 deg");
});

///// FK5 /////

test("FK5 Correction in longitude",function(assert){
	assert.close(FK5.correctionInLongitude(313.07687,-2.08489,2448976.5),-0.00003,0.00001,"A JD of 2488976.5 returned -0.00003 deg")
});

test("FK5 Correction in latitude",function(assert){
	assert.close(FK5.correctionInLatitude(313.07687,2448976.5),0.00002,0.00001,"A JD of 2488976.5 returned 0.00002 deg")
});

///// Nutation /////

test("True obliquity of ecliptic",function(assert){
	assert.close(Nutation.trueObliquityOfEcliptic(2448976.5),23.439669,0.000001,"A JD of 2488976.5 returned 23.439669 arc sec")
});

test("Nutation in Longitude",function(assert){
	assert.close(Nutation.nutationInLongitude(2448976.5),16.749,0.001,"A JD of 2488976.5 returned 16.749 arc sec")
});