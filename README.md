﻿# Willianliu14.github.io
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
	<script src="game.js"></script>
</body>
</html>
