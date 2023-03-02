  var diceRoll = Math.floor(Math.random() * 6 + 1);
  var result1 = "images/dice" + diceRoll + ".png";
  var player1 = document.querySelector(".img1").setAttribute("src", result1);
  diceRoll2 = Math.floor(Math.random() * 6 + 1);
  var result2 = "images/dice" + diceRoll2 + ".png";
  var player2 = document.querySelector(".img2").setAttribute("src", result2);
  if (diceRoll > diceRoll2)
  {
    document.querySelector("h1").innerHTML="player1 won !"
  }
  else if (diceRoll < diceRoll2) {
    document.querySelector("h1").innerHTML="player2 won !"

  }
  else {
    document.querySelector("h1").innerHTML="draw "

  }
