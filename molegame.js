let score = 0;
let gameOver = false;
let currMoleTile;

window.onload = function(){
    setGame()
}

function setGame(){
    for(let i = 0; i <9; i++){
        let tile = document.createElement("div")
        tile.id = i.toString();
        tile.addEventListener("click", selectTile)
        document.getElementById("board").appendChild(tile)
    }
    setInterval(setMole,1000)
}

function getRandomTile(){
    let num = Math.floor(Math.random()*9)
    return num.toString()
}

function setMole(){
    if(currMoleTile){
        currMoleTile.innerHTML = ""
    }
    let mole = document.createElement("img")
    mole.src = "monty-mole.png"
    let num = getRandomTile()
    currMoleTile = document.getElementById(num)
    currMoleTile.appendChild(mole);
}

function selectTile(){
    if(this == currMoleTile){
        score += 1
        document.getElementById("score").innerText = score.toString()
    }
}