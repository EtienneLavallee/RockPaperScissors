let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissors");

function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function victory(userChoice, computerChoice) {
	const buttonClicked = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = `${capitalize(userChoice)} beats ${computerChoice}. You are victorious!`;
	buttonClicked.classList.add('green-glow');
	setTimeout(() => buttonClicked.classList.remove('green-glow'), 600);
}

function defeat(userChoice, computerChoice) {
	const buttonClicked = document.getElementById(userChoice);
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${capitalize(userChoice)} loses to ${computerChoice}. You are defeated.`;
	buttonClicked.classList.add('red-glow');
	setTimeout(() => buttonClicked.classList.remove('red-glow'), 600);
}

function draw(userChoice, computerChoice) {
	const buttonClicked = document.getElementById(userChoice);
	result_p.innerHTML = `${capitalize(userChoice)} VS ${computerChoice}. It is a draw.`;
	buttonClicked.classList.add('gray-glow');
	setTimeout(() => buttonClicked.classList.remove('gray-glow'), 600);
}

function capitalize(word) {
	var firstLetter = word.charAt(0).toUpperCase();
	return firstLetter + word.slice(1);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	console.log("you clicked: " + userChoice);
	console.log("the computer picked: " + computerChoice);
	switch (userChoice + computerChoice){
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			draw(userChoice, computerChoice);
			break;
		case "rockpaper":
		case "paperscissors":
		case "scissorsrock":
			defeat(userChoice, computerChoice);
			break;
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			victory(userChoice, computerChoice);
			break;
	};
}

function main() {
	rock_div.addEventListener('click', function() {
		game("rock");
	})

	paper_div.addEventListener('click', function() {
		game("paper");
	})
	
	scissor_div.addEventListener('click', function() {
		game("scissors");
	})
}

main();