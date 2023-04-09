function setup() {
	noLoop()

	rectanglesLayer = createGraphics(CANVAS.WIDTH, CANVAS.HEIGHT)
	rectanglesLayer.rectMode(CENTER)
}

function draw() {
	createCanvas(CANVAS.WIDTH, CANVAS.HEIGHT)
	background(BACKGROUND_COLOR)

	topLeft = createVector(CANVAS.MARGINS_POSITION.LEFT+SQUARE_SIZE/2, CANVAS.MARGINS_POSITION.TOP+SQUARE_SIZE/2)
	positionsGrid = Grid2D.fromOnePoint(topLeft, N_SQUARES_V, N_SQUARES_H, SQUARE_SIZE, SQUARE_SIZE)

	for (let vIndex = 0; vIndex < positionsGrid.points.length; vIndex++) {
		const hpoints = positionsGrid.points[vIndex]
		for (let hIndex = 0; hIndex < hpoints.length; hIndex++) {
			const position = hpoints[hIndex]
			rectanglesLayer.push()
				rectanglesLayer.translate(position)
				rectanglesLayer.rect(0, 0, SQUARE_SIZE, SQUARE_SIZE)
			rectanglesLayer.pop()
		}
	}
	
	image(rectanglesLayer, 0, 0)
	
	// positionsGrid.debug()
}
