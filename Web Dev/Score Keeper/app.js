const maxScoreContainer = document.querySelector("#maxScore");
const player1Button = document.querySelector("#player1");
const player2Button = document.querySelector("#player2");
const resetButton = document.querySelector("#reset");

let maxScore = 0;
let gameStart = false;

player1Button.addEventListener('click',()=>addPoint(1))
player2Button.addEventListener('click',()=>addPoint(2))
resetButton.addEventListener('click', () => reset());


function addPoint(player){
    if(!gameStart){
        maxScore = maxScoreContainer.value;
        document.querySelector(".currentMax").innerText = maxScore;
        maxScoreContainer.disabled = true;
        document.querySelector("h3").style.display = "block";
        gameStart = true;
    }
    let score = document.querySelector(".player" + player + "Score");
    let currentScore = score.innerText;
    currentScore++;
    score.innerText = currentScore;
    checkWon(score, player);
}

function checkWon(player, playerId){
    if(player.innerText == maxScore){
        let loserplayer = (3-playerId);

        let winner = document.querySelector(".player" + playerId + "Score");
        let loser = document.querySelector(".player" + loserplayer + "Score");

        winner.classList.add("won");
        loser.classList.add("lost");
        document.querySelector("h3").innerText = `Winner is Player ${playerId}!!`;

        document.querySelector("#player" + playerId).disabled = true;
        document.querySelector("#player" + loserplayer).disabled = true;
    }
}

function reset(){
    maxScoreContainer.disabled = false;
    gameStart = false;
    document.querySelector("h3").innerHTML = '<span class="currentMax"></span> <br>Current Max Score';
    document.querySelector("h3").style.display = "none";
    for(let i = 1; i <=2;i++){
        document.querySelector(".player" + i + "Score").innerText = 0;
        document.querySelector("#player" + i).disabled = false;
        document.querySelector(".player" + i + "Score").classList.remove('won');
        document.querySelector(".player" + i + "Score").classList.remove('lost');
    }
}