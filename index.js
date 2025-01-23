let randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

let randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

let title = document.querySelector("h1");

console.log(randomNumber1);
console.log(randomNumber2);


let img1 = document.querySelector(".img1");

if(randomNumber1 === 1){
    img1.setAttribute("src", "images/dice1.png");
} else if(randomNumber1 ===2){
    img1.setAttribute("src", "images/dice2.png");
} else if(randomNumber1 ===3){
    img1.setAttribute("src", "images/dice3.png");
} else if(randomNumber1 ===4){
    img1.setAttribute("src", "images/dice4.png");
} else if(randomNumber1 ===5){
    img1.setAttribute("src", "images/dice5.png");
}
else{
    img1.setAttribute("src", "images/dice6.png");
}


let img2 =  document.querySelector(".img2");
if(randomNumber2 === 1){
    img2.setAttribute("src", "images/dice1.png");
} else if(randomNumber2 ===2){
    img2.setAttribute("src", "images/dice2.png");
} else if(randomNumber2 ===3){
    img2.setAttribute("src", "images/dice3.png");
} else if(randomNumber2 ===4){
    img2.setAttribute("src", "images/dice4.png");
} else if(randomNumber2 ===5){
    img2.setAttribute("src", "images/dice5.png");
}
else{
    img2.setAttribute("src", "images/dice6.png");
}


if(randomNumber1 > randomNumber2){
    title.innerHTML = "Player one wins";
} else if(randomNumber1 < randomNumber2){
    title.innerHTML = "Player two wins";
}else if(randomNumber1 === randomNumber2){
    title.innerHTML = "Draw";
}
 else{
    title.innerHTML = "Refresh me";
}