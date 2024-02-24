const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //game play
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        //comp options

        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener("click", function() {
                console.log("hi")
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                //picking image
                playerHand.src = `./images/${this.textContent}.png`;
                computerHand.src = `./images/${computerChoice}.png`;

                compareHand(this.textContent,computerChoice);
            });
        });

        const compareHand = (playerChoice, computerChoice) => {

            const winner = document.querySelector('.winner');

            if(playerChoice === computerChoice){
                winner.textContent = 'You have tied';
                return;
            }

            //rock case

            if(playerChoice === 'rock'){
                if(computerChoice === 'scissors'){
                    winner.textContent = "Congratulations, You won!!!";
                    pScore++;
                    updateScore();
                    return;
                }
                else {
                    winner.textContent = "Computer Wins";
                    cScore++;
                    updateScore();
                    return;
                }
            }

            //paper case
            if(playerChoice === 'paper'){
                if(computerChoice === 'rock'){
                    winner.textContent = "Congratulations, You won!!!";
                    pScore++;
                    updateScore();
                    return;
                }
                else {
                    winner.textContent = "Computer Wins";
                    cScore++;
                    updateScore();
                    return;
                }
            }

            //scissors case

            if(playerChoice === 'scissors'){
                if(computerChoice === 'paper'){
                    winner.textContent = "Congratulations, You won!!!";
                    pScore++;
                    updateScore();
                    return;
                }
                else {
                    winner.textContent = "Computer Wins";
                    cScore++;
                    updateScore();
                    return;
                }
            }

        }

        const updateScore = () => {
            const playerScore = document.querySelector(".player-score p");
            const computerScore = document.querySelector(".computer-score p");
            playerScore.textContent = pScore;
            computerScore.textContent = cScore;
        }
        
    }

    startGame();
    playMatch();
}

game();
