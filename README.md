# Willianliu14.github.io
<!DOCTYPE html>
<html>
<head>
	<title>猜数字游戏</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style>
		body {
			font-family: Arial, sans-serif;
			text-align: center;
		}
		h1 {
			margin-top: 50px;
		}
	</style>
</head>
<body>
	<h1>猜数字游戏</h1>
	<p>请在 10 次机会内猜出 1 到 100 之间的随机数。</p>
	<input type="text" id="guess" placeholder="输入你的猜测">
	<button onclick="checkGuess()">猜一下</button>
	<p id="result"></p>
	<script>
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

	</script>
</body>
</html>
