/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var activePlayer,scores,currentScore,lastDice;

    // document.querySelector('#ws-submit').addEventListener('click',function(){
    //     console.log(document.getElementById('winscore').nodeValue);
    // });

    newGame();

    //TIRAR DADOS
    document.querySelector('.btn-roll').addEventListener('click', function () {

        var dice1 = Math.floor(Math.random()*6)+1; 
        var dice2 = Math.floor(Math.random()*6)+1; 

        console.log(dice1+' '+dice2);
        
        document.querySelector('#dice-1').style.display = 'block';
        document.querySelector('#dice-2').style.display = 'block';
        document.querySelector('#dice-1').src = 'dice-'+dice1+'.png';
        document.querySelector('#dice-2').src = 'dice-'+dice2+'.png';


        if (dice1===6 && lastDice===6){
            scores[activePlayer]=0;
            document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
            document.getElementById('current-'+activePlayer).textContent = 0;
            nextPlayer();
        }else if (dice1!==1 && dice2 !==1){
            currentScore+=dice1 +dice2;
            document.getElementById('current-'+activePlayer).textContent = currentScore;
            lastDice=dice1;
        }else{
            document.getElementById('current-'+activePlayer).textContent = 0;
            nextPlayer();
        }

        
    
    });

    
    //GUARDAR SCORE
    document.querySelector('.btn-hold').addEventListener('click', function () {

        var finalScore = document.querySelector('.final-score').value;
        

        scores[activePlayer]+=currentScore;
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];

        if (!finalScore) finalScore=100;
        if (scores[activePlayer] >= finalScore){
            document.getElementById('name-'+activePlayer).textContent = 'WINNER';
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.btn-roll').style.display = 'none';
            document.querySelector('.btn-hold').style.display = 'none';
            

        }else{
            nextPlayer();
        }
    
    });

    //SIGUIENTE JUGADOR
    function nextPlayer(){


        activePlayer===0 ? activePlayer=1 : activePlayer=0;
        currentScore=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('#dice-1').style.display = 'none';
        document.querySelector('#dice-2').style.display = 'none';
   
    }

    //NUEVO JUEGO FUNCION
    function newGame(){

        currentScore=0;
        activePlayer=0;
        scores=[0,0];

        document.querySelector('#dice-1').style.display = 'none';
        document.querySelector('#dice-2').style.display = 'none';

        document.getElementById('score-0').textContent = 0;
        document.getElementById('score-1').textContent = 0;

        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';

        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');

        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        
        document.querySelector('.btn-roll').style.display = 'block';
        document.querySelector('.btn-hold').style.display = 'block';

        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
    }

    //NUEVO JUEGO LISTENER
    document.querySelector('.btn-new').addEventListener('click', newGame);


    








