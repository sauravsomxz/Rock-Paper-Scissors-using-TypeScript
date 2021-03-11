const message:any = document.querySelector('.message');
        const score:any = document.querySelector('.score');
        const buttons:any = document.querySelectorAll('button');
        const winnerScores:any = [0,0];
        
        //add event listeners to buttons
        for ( let i:number = 0 ; i < buttons.length ; i++){
            buttons[i].addEventListener('click', playGame);
        }

        function playGame(e:any){
            //setup player's selection
            let playerSelection = e.target.innerText;
            //setup a random number to select for computer
            //selects a number between 0 and 1 (1 not-inclusive)
            let computerSelection:any  = Math.random();

            //if computerSelection is less than .34, computer selects Rock
            if (computerSelection < .34){
                computerSelection = 'Rock';
            } else if (computerSelection <= .67){
                computerSelection = 'Paper';
            } else {
                computerSelection = 'Scissors';
            }
            
            //setup a function to compare winners and return result
            let result = checkWinner(playerSelection, computerSelection);

            //output scores to the DOM
            if (result === 'Player'){
                result += ' wins!';
                //update score
                winnerScores[0]++;
            }

            if (result === 'Computer'){
                result += ' wins!';
                winnerScores[1]++;
            }

            if (result === 'Draw'){
                result += '. It\'s a tie!'
            }
