var randomNum1 = Math.floor(Math.random()*6) + 1;

var image1Name = "dice" + randomNum1 + ".png";

var image1Path = "images/" + image1Name;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", image1Path);

var randomNum2 = Math.floor(Math.random()*6) + 1;

var image2Name = "dice" + randomNum2 + ".png";

var image2Path = "images/" + image2Name;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", image2Path);

if(randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 won!"
} else if(randomNum1 < randomNum2) {
    document.querySelector("h1").innerHTML = "Player 2 won! 🚩"
} else {
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩"
}