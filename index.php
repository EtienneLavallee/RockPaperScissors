<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Rock Paper Scissors Game</title>
		<link rel="stylesheet" href="styles.css">
	</head>
	
	<body>
		<header>
			<h1>Rock Paper Scissors</h1>
		</header>
		
		<div class="score-board">
			<div id="user-label" class="badge">user</div>
			<div id="computer-label" class="badge">comp</div>
			<span id="user-score">0</span>:<span id="computer-score">0</span>
		</div>
		
		<div class="result">
			<p>Choose your weapon.</p>
		</div>
		
		<div class="choices">
			<div id="rock" class="choice">
				<img src="images/rock.png" alt="">
			</div>
			<div id="paper" class="choice">
				<img src="images/paper.png" alt="">
			</div>
			<div id="scissors" class="choice">
				<img src="images/scissors.png" alt="">
			</div>
		</div>
		
		<p id="action-message">Make your move</p>
		<p id="origin">You're coming from:</p>
		<p>
		<?php
			echo $_SERVER["HTTP_REFERER"];
		?>
		</p>
		<p><a href="http://35.237.19.27">home</a></p>
	</body>
</html>