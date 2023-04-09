function setup() {
	noLoop()

	rectanglesLayer = createGraphics(CANVAS.WIDTH, CANVAS.HEIGHT)
	rectanglesLayer.rectMode(CENTER)
	rectanglesLayer.angleMode(DEGREES)
	rectanglesLayer.noFill()
}

function draw() {
	createCanvas(CANVAS.WIDTH, CANVAS.HEIGHT)
	background(BACKGROUND_COLOR)

	topLeft = createVector(CANVAS.MARGINS_POSITION.LEFT+SQUARE_SIZE/2, CANVAS.MARGINS_POSITION.TOP+SQUARE_SIZE/2)
	positionsGrid = Grid2D.fromOnePoint(topLeft, N_SQUARES_V, N_SQUARES_H, SQUARE_SIZE, SQUARE_SIZE)

	for (let vIndex = 0; vIndex < positionsGrid.points.length; vIndex++) {
		const hpoints = positionsGrid.points[vIndex]

		maxRotation = map(vIndex, 0, positionsGrid.points.length, 0, MAX_ROTATION)
		maxTranslation = map(vIndex, 0, positionsGrid.points.length, 0, MAX_TRANSLATION)

		for (let hIndex = 0; hIndex < hpoints.length; hIndex++) {
			const position = hpoints[hIndex]

			rectanglesLayer.push()
				rotation = random(-maxRotation, maxRotation)
				translationMagnitude = random(maxTranslation)
				translationVector = p5.Vector.random2D().mult(translationMagnitude)

				rectanglesLayer.translate(position.add(translationVector))
				rectanglesLayer.rotate(rotation)
				rectanglesLayer.rect(0, 0, SQUARE_SIZE, SQUARE_SIZE)
			rectanglesLayer.pop()
		}
	}
	image(rectanglesLayer, 0, 0)
}
