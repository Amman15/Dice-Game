var diceNumber1 = Math.floor(Math.random()*6) + 1;
var diceNumber2 = Math.floor(Math.random()*6) + 1;
document.querySelectorAll("img")[0].setAttribute("src","./images/dice"+ diceNumber1 +".png");
document.querySelectorAll("img")[1].setAttribute("src","./images/dice"+ diceNumber2 +".png");
if (diceNumber1 > diceNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins"
}
else if (diceNumber1 < diceNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins"
}
else if (diceNumber1 === diceNumber2){
    document.querySelector("h1").innerHTML = "It is a draw"
}