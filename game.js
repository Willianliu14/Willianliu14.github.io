var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = 10;
var resultText = document.getElementById("result");

function checkGuess() {
	    var guess = document.getElementById("guess").value;
	
	if (guesses > 0) {
		if (guess == randomNumber) {
			resultText.innerHTML = "你赢了！";
			restartGame();
		} else if (guess < randomNumber) {
			resultText.innerHTML = "你猜低了。";
			guesses--;
		} else {
			resultText.innerHTML = "你猜高了。";
			guesses--;
		}
		
		if (guesses == 0) {
			resultText.innerHTML += " 游戏结束。";
			restartGame();
		} else {
			resultText.innerHTML += " 还剩 " + guesses + " 次机会。";
		}
	} else {
		resultText.innerHTML = "游戏已经结束，请刷新页面重新开始。";
	}
}

function restartGame() {
	randomNumber = Math.floor(Math.random() * 100) + 1;
	guesses = 10;
	document.getElementById("guess").value = "";
}
