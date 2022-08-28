
var randomNumber1 = Math.floor(Math.random() * 6)+1; //first we create a random number

var randomDiceImage = "images/dice"+ randomNumber1 +".png" // then use that random number top pick a random pic

var image1 = document.querySelectorAll("img")[0]; // finally we make a var for our image address to address it more clearly

image1.setAttribute("src", randomDiceImage);  // and in the end, we set the attribute a random picture.

var randomNumber2 = Math.floor(Math.random() * 6)+1;// same algorithm in here
var randomDiceImage2 = "images/dice"+ randomNumber2 +".png"//

var image2 = document.querySelectorAll("img")[1];//

image2.setAttribute("src" , randomDiceImage2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins"
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩 "
}
else if (randomNumber1 = randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!🧐"

}
