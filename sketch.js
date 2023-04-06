function setup() {
	noLoop()
}

function draw() {
	createCanvas(CANVAS.WIDTH, CANVAS.HEIGHT)
	background(BACKGROUND_COLOR)

	topLeft = createVector(CANVAS.MARGINS.LEFT, CANVAS.MARGINS.TOP)
	bottomRight = createVector(CANVAS.MARGINS.RIGHT, CANVAS.MARGINS.BOTTOM)

	grid = Grid2D.fromTwoVertices(topLeft, bottomRight, 10, 10)
	grid.debug()
	print(grid.xStep)
	print(grid.yStep)
}
