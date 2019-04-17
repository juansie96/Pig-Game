/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/






var player1 = {
    name: 'player1',
    totalScore: 0,
    currentScore: 0,
    isActive: false
}

var player2 = {
    name: 'player2',
    score: 0,
    currentScore: 0,
    isActive: false
}

console.log(Math.floor(Math.random*6)+1);
   

   document.querySelector('.btn-new').addEventListener('click', function () {
       newGame(player1,player2); 
   }); // no llamo a newGame desde los parametros del evenlistener por que si no, llama automaticamente a la funcion, sin el click de por medio.
   //osea por ej ('click', console.log(32));  imprimia 32 automaticamente aunque no se haya clickeado el elemento que tiene el listener asociado
   // en este caso estoy llamando a la funcion newGame desde una funcion anonima (sin nombre)


function newGame(player1,player2){

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').innerHTML = 0;
    document.getElementById('score-1').innerHTML = 0;

    document.getElementById('current-0').innerHTML = 0;
    document.getElementById('current-1').innerHTML = 0;

    document.querySelector('.btn-roll').addEventListener('click', function () {
        var dice = Math.floor(Math.random()*6)+1; //ACA SUFRI POR OLVIDARME DE LOS PARENTESIS LLAMANDO AL MÉTODO RANDOM
        
        document.querySelector('.dice').src = 'dice-'+dice+'.png';
        
    })
    
}







