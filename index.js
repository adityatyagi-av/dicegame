/*setting all the images in an array" */
var image=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

/*dice game for image 1*/
var randomNumber1= Math.floor(Math.random()*6 );
var selectedimg1=image[randomNumber1];
document.querySelector(".img1").setAttribute("src",selectedimg1);

/*dice game for image 2*/
var randomNumber2= Math.floor(Math.random()*6);
var selectedimg2=image[randomNumber2];
document.querySelector(".img2").setAttribute("src",selectedimg2);

/*time to change the heading*/
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Won";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Won";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="DRAW";
}