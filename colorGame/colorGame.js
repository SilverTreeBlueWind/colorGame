var numColors = 6;
var colors = []
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modes = document.querySelectorAll(".mode");

init();

function init() {
	reset();
	initModes();
	initSquares();
}

function initModes() {
	for (var i = 0; i < modes.length; ++i) {
		// add listener to mode buttons
		modes[i].addEventListener("click", function() {
			modes[0].classList.remove("selected");
			modes[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numColors = 3 : numColors = 6;
			reset();
		});
	}
}

function initSquares() {
	for (var i = 0; i < colors.length; ++i) {
		squares[i].style.backgroundColor = colors[i];

		// add listener to squares
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			// compare color of clicked square to picked color
			if (pickedColor === clickedColor) {
				message.textContent = "Correct!";
				changeColor(pickedColor);
				h1.style.backgroundColor = pickedColor;
				resetBtn.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
		});
	};
}


resetBtn.addEventListener("click", function() {
	reset();
});


function reset() {
	// generate random colors
	colors = generateRandomColors(numColors);
	pickedColor = pickColor();
	// update page
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	resetBtn.textContent = "New Colors";
	message.textContent = "";

	for (var i = 0; i < squares.length; ++i) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

function changeColor(color) {
	for (var i = 0; i < squares.length; ++i) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var index = Math.floor(Math.random() * colors.length);
	return colors[index];
}

function generateRandomColors(num) {
	var arr = [];

	for (var i = 0; i < num; ++i) {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		arr.push("rgb(" + r + ", " + g + ", " + b + ")");
	}

	return arr;
}