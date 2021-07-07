var randNum1 = Math.floor(Math.random()*6)+1;
var randNum2 = Math.floor(Math.random()*6)+1;
console.log(randNum1);
console.log(randNum2);
const arr = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
img1.src = arr[randNum1-1];
img2.src = arr[randNum2-1];
var visible;
if(randNum1>randNum2){  
     document.getElementById("txtVisible").style.visibility="visible";
     document.getElementById("txtVisible").textContent="Player One Wins";
}
else if(randNum2>randNum1){  
    document.getElementById("txtVisible").style.visibility="visible";
    document.getElementById("txtVisible").textContent="Player two Wins";}
else{     
    document.getElementById("txtVisible").style.visibility="visible";
    document.getElementById("txtVisible").textContent="Tie";}




