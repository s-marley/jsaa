# jsaa
### A JavaScript implementation of astronomical algorithms
This is my attempt to reproduce a number of the astronomical algorithms written in [Jean Meuss' book](http://www.willbell.com/math/mc1.htm) of the same name. It is heavily based on AA+ code written in C++ by [PJ Naughter](http://www.naughter.com/aa.html) and I am currently using it for a planisphere project. It is helping me to learn a bit of JavaScript and practise TDD using [QUnit](http://qunitjs.com/).

#### Things that currently work
* The positions of all major planets plus the Sun and Pluto
* The orbital elements for all major planets
* The positions of the Galilean moons
* Aberration, nutation and FK5 conversions
* The position, phase and illuminated fraction of the Moon

#### How to use these files
The files are currently seperate so you will need to decide which to include for a specific calculation. At some point I am planning on combining and minifying these files into a useable library. For now, see [jsaaTest.js](https://github.com/s-marley/jsaa/blob/master/jsaaTest.js) and [jsaaTest.html](https://github.com/s-marley/jsaa/blob/master/jsaaTest.html) for some implementations.

#### Future plans
I am adding algorithms as I need them. If there are any calculations that you would like to see in this library feel free to message me and I will try my best to include them.
