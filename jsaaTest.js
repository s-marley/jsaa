///// CoordTrans.js /////

test("Degrees to radians",function(assert){
   assert.close(coordTrans.degToRad(173),3.01941961,0.000001,"173deg returned 3.01941961 to within 0.000001");
});

test("Map 0 To 360",function(){
    equal(coordTrans.mapTo0To360Range(560),200,"560 degrees mapped to 200 degrees");
 });

///// Pluto.js /////

test("Pluto Ecliptic Longitude",function(assert){
   pluto = new Pluto;
   assert.close(pluto.eclipticLongitude(2448908.5),232.74071,0.00001,"A JD of 2448908.5 returned 232.74071deg to within 0.00001deg");
});

test("Pluto Ecliptic Latitude",function(assert){
   pluto = new Pluto;
   assert.close(pluto.eclipticLatitude(2448908.5),14.58782,0.00001,"A JD of 2448908.5 returned 14.58782deg to within 0.00001deg");
});

test("Pluto Radius Vector",function(assert){
   pluto = new Pluto;
   assert.close(pluto.radiusVector(2448908.5),29.711111,0.00001,"A JD of 2448908.5 returned 29.711111AU to within 0.00001AU");
});

///// Earth.js /////

test("Earth Ecliptic Longitude J2000",function(assert){
	earth = new Earth;
	assert.close(earth.eclipticLongitudeJ2000(2448908.5),20.008209,0.00001,"A JD of 2448908.5 returned 19.907372deg to the nearest 0.00001deg")
});

test("Earth Ecliptic Latitude J2000",function(assert){
	earth = new Earth;
	assert.close(earth.eclipticLatitudeJ2000(2448908.5),0.000221,0.00001,"A JD of 2448908.5 returned -0.000179deg to the nearest 0.00001deg")
});

test("Earth Radius Vector",function(assert){
	earth = new Earth;
	assert.close(earth.radiusVector(2448908.5),0.99760775,0.00001,"A JD of 2448908.5 returned 0.99760775AU to the nearest 0.00001AU")
});

///// Sun.js /////

test("Sun Geometric Ecliptic Longitude J2000",function(assert){
	sun = new Sun;
	assert.close(sun.geometricEclipticLongitudeJ2000(2448908.5),200.008208,0.00001,"A JD of 2448908.5 returned 19.907372deg to the nearest 0.00001deg")
});

test("Sun Geometric Ecliptic Latitude J2000",function(assert){
	sun = new Sun;
	assert.close(sun.geometricEclipticLatitudeJ2000(2448908.5),-0.00022101,0.00001,"A JD of 2448908.5 returned 19.907372deg to the nearest 0.00001deg")
});

test("Sun Geometric Ecliptic Latitude J2000",function(assert){
	sun = new Sun;
	var result = sun.eclipticRectangularCoordinatesJ2000(2448908.5);
	assert.close(result.X,-0.93739575,0.00001,"A JD of 2448908.5 returned -0.93739575 to the nearest 0.00001")
	assert.close(result.Y,-0.34133625,0.00001,"A JD of 2448908.5 returned -0.34133625 to the nearest 0.00001")
	assert.close(result.Z,0.00000385,0.00001,"A JD of 2448908.5 returned 0.00000385 to the nearest 0.00001")
});
