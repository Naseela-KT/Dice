var randomNumber1= Math.floor((Math.random() * 6) + 1);
var randomImage="images/dice"+randomNumber1+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",randomImage);

var randomNumber2= Math.floor((Math.random() * 6) + 1);
var randomImage="images/dice"+randomNumber2+".png";
document.getElementsByClassName("img2")[0].setAttribute("src",randomImage);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="🚩 Play 2 Wins!";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}