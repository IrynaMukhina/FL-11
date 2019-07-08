const TWO = 2;
let gameData = {
	maxRandomNum: 8,
	gameAttempts: 3,
	maxPrize: 100,
	currentPrize: 100,
	totalPrize: 0
}
  
let startGame = confirm('Do you want to play a game?');
if (startGame) {
	while (gameData.gameAttempts >= 1) {
		let randomNum = Math.floor(Math.random() * (gameData.maxRandomNum + 1));
		let userNum = prompt(
`Please enter a number from 0 to ${gameData.maxRandomNum}
Attempts left: ${gameData.gameAttempts}
Total prize: ${gameData.totalPrize}$
Possible prize on current attempt: ${gameData.currentPrize}$`);
		if (!userNum) {
			alert('You did not become a millionaire, but can.');
			break;
		}
		if (parseFloat(userNum) === randomNum) {
			gameData.totalPrize += gameData.currentPrize;
			gameData.gameAttempts = 3;
			gameData.maxRandomNum += 4;
			gameData.currentPrize *= 2;
			alert(`Congratulation, you won! Your prize is: ${gameData.totalPrize}$.`);
			let wantContinue = confirm(`Do you want to continue?`);
			if (wantContinue) {
				gameData.maxPrize *= 2;
				gameData.currentPrize = gameData.maxPrize;
			} else {
				alert(`Thank you for your participation. Your prize is: ${gameData.totalPrize}$`);
				let playAgain = confirm('Do you wants to play again?');
				if (playAgain) {
					gameData.gameAttempts = 3;
					gameData.maxRandomNum = 8;
					gameData.maxPrize = 100;
					gameData.currentPrize = 100;
					gameData.totalPrize = 0;
				}
			}
		} else {
			gameData.gameAttempts--;
			gameData.currentPrize = Math.floor(gameData.currentPrize/TWO);
			if (gameData.gameAttempts === 0) {
				alert(`Thank you for a game. Your prize is: ${gameData.totalPrize}`);
				let playAgain = confirm('Do you wants to play again?');
				if (playAgain) {
					gameData.gameAttempts = 3;
					gameData.maxRandomNum = 8;
					gameData.maxPrize = 100;
					gameData.currentPrize = 100;
					gameData.totalPrize = 0;
				}
			}
		}
	}
} else {
	alert('You did not become a millionaire, but can.');
}