

let dicevalue,globalX=0,currentPlayer;

//rolling the dice sound
let rollingsound = new Audio('rolling-dice-2-102706.mp3');
//start position
let turn = 1
let num = 0
let move = 0
p1 = 0
p2 = 0

//chaninging id add to the perivous num
function play(player , sum, num){
    
//player 1 move
if (sum == 'p1'){
    p1 = p1 + num;
//if more than 100 dont' move
if(p1 > 100){
    p1 = p1 - num
}
//moves inside
if(p1 == 10){
    p1 == 58
}
if(p1 == 27){
    p1 == 90
}
if(p1 == 74){
    p1 == 37 
}
if(p1 == 85){
    p1 == 50
}
if(p1 == 99 ){
    p1 == 1
}
move = p1;
}


//player 2 move
if (sum == 'p2'){
    p2 = p2 + num;
//if more than 100 dont' move
if(p2 > 100){
    p2 = p2 - num
}
if(p2 == 10){
    p2 == 58
}
if(p2 == 27){
    p2 == 90
}
if(p2 == 74){
    p2 == 37 
}
if(p2 == 85){
    p2 == 50
}
if(p2 == 99 ){
    p2 == 1
}
move = p2;
}
}

//moving from id to id (pic to pic)


//100 win the game
 if(move == 100){
    if(player == 'p1t'){
        alert("player 1 won")
    }
    else if(player == 'p2t'){
        alert("player 2 won")
    }
    //start new game
    location.reload()
}
//dicerolling

document.querySelector("#dice").addEventListener('click',()=> iamClicked());

let newMove = 0
function moves(){
    let newMove = dicevalue + globalX;

    if(currentPlayer=="skeleton"){
       // document.createElement("img");
        document.querySelector("#box"+newMove+"")
    }
    
    
    // document.querySelector('container').
    // console.log(newMove);




}

//which one will play
function position(x){
    let rollDice = x;
    globalX =x;
    //even
if (turn % 2 != 0){
    document.getElementById('turn').innerHTML= "SKELETON TURN";
    currentPlayer="skeleton";
    play('p1t', 'p1', num);
    


}
//odd
else if (turn % 2 == 0){
    document.getElementById('turn').innerHTML = "PUMPKIN TURN";
    currentPlayer="pumpkin";
    play('p2t' , 'p2', num)

}
turn = turn + 1;
    return position;
    
}

function iamClicked(){
    rollingsound.play();
    let myNumber = Math.ceil(Math.random()*6);
    dicevalue=myNumber;

    document.querySelector(".thedice").setAttribute("src",myNumber + ".png");

    position(myNumber);
    moves(myNumber);
}

//add mynumber to the player position
// function change(){
   

// let total = iamClicked();
    
    
// }

//two players in the same position 
//new game button 
//sound
document.addEventListener('DOMContentLoaded', function(e) {
    e.preventDefault(); 
    

})