let scores = JSON.parse(localStorage.getItem('scores')) || {
            wins: 0,
            losses: 0,
            ties: 0
        }

        updateScoreElement();

        // if (!scores){
        //     scores = {
        //         wins: 0,
        //         losses: 0,
        //         ties: 0
        //     }
        // }

        // function making the computer pick a move
        function pickComputerMove() {
            let computerMove = '';
            const randomNumber = Math.random();
            if (randomNumber > 0 && randomNumber < 1 / 3) {
                computerMove = 'rock';
            } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
                computerMove = 'paper';
            } else if (randomNumber > 2 / 3) {
                computerMove = 'scissors';
            }

            return computerMove;

            
        }
        // funtion playing our move
        function playGame(playerMove) {
            const computerMove = pickComputerMove();
            

            let result = ''
            if (playerMove === 'scissors'){
                if (computerMove === 'rock') {
                    result = 'How could you let a computer win dickhead';
                    
                } else if (computerMove === 'paper') {
                    result = 'You Won';

                } else {
                    result = 'Tie';

                }
            } else if (playerMove === 'paper') {
                if (computerMove === 'rock') {
                    result = 'You Won';

                } else if (computerMove === 'paper') {
                    result = 'Tie';

                } else {
                    result = 'How could you let a computer win dickhead';

                }
            } else if (playerMove === 'rock') {
                if (computerMove === 'rock') {
                    result = 'Tie';

                } else if (computerMove === 'paper') {
                    result = 'How could you let a computer win dickhead';

                } else {
                    result = 'You Won';

                }
            };
            
            
            

            
            

            
            
            
            

            if (result === 'How could you let a computer win dickhead') {
                scores.losses += 1;
            } else if (result === 'You Won') {
                scores.wins += 1;
            } else if (result === 'Tie') {
                scores.ties += 1;
            }

            localStorage.setItem('scores', JSON.stringify(scores));

            updateScoreElement();

            document.querySelector('.js-moves').innerHTML = `You
        <img src="./${playerMove}-emoji.png" alt="" class="move-icon">
        Computer
        <img src="./${computerMove}-emoji.png" alt="" class="move-icon">`
            document.querySelector('.js-result').innerHTML = result;

//             alert(`${result} 
// wins: ${scores.wins}, losses: ${scores.losses}, ties: ${scores.ties}`);

        }

        function updateScoreElement(){
            document.querySelector('.js-score')
                .innerHTML = `wins: ${scores.wins}, losses: ${scores.losses}, ties: ${scores.ties}`
        }

        const autoGame = document.querySelector('.js-auto-play')

        autoGame.addEventListener('click', function(){
            
            
                autoPlay()
                if (this.innerHTML === 'Auto Play'){
                    this.innerHTML = 'Stop Auto Play'
                } else {
                    this.innerHTML = 'Auto Play'
                }
                
            
        });

        let isAutoPlaying = false;

        let intervalId;
        function autoPlay(){
            if (isAutoPlaying === false){
                intervalId = setInterval(()=>{
                const playerMove = pickComputerMove()
                playGame(playerMove)
            }, 1000)
            isAutoPlaying = true
            } else {
                clearInterval(intervalId)
                isAutoPlaying = false
            }
            
        }
    


        document.body.addEventListener('keydown', function(event){
            if(event.key === 'r'){
                playGame('rock')
            } else if(event.key === 'p'){
                playGame('paper')
            } else if(event.key === 's'){
                playGame('scissors')
            }
        })

        function confirm(){
            let confirm = document.querySelector('.confirm')
            confirm.innerHTML = `Are you sure you want to reset <button class= 'yes'>yes</button> or <button class = 'no'>no</button> ?`

            const yes = document.querySelector('.yes');
            const no = document.querySelector('.no');
            yes.classList.add('button')
            no.classList.add('button')
            yes.addEventListener('click', () => {
                scores.wins = 0;
            scores.losses = 0;
            scores.ties = 0;
            localStorage.removeItem('scores');
            updateScoreElement();
            confirm.innerHTML = ''
            })

            no.addEventListener('click', function(){
                confirm.innerHTML = ''
            })
            

        }

        