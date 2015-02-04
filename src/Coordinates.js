function Coord3D(X, Y, Z) {
	if (arguments.length === 0) {
		this.X = this.Y = this.Z = 0;
	}
	else {
		X = this.X;
		Y = this.Y;
		Z = this.Z;
	}
}

function Coord2D(X, Y) {
	if (arguments.length === 0) {
		this.X = this.Y = 0;
	}
	else {
		X = this.X;
		Y = this.Y;
	}
}