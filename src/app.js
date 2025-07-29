import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here 
  function drawCard() {

    const div = document.querySelector(".div");
  
    const arrayOfFaces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const arrayOfSuites = ["♦", "♥", "♠", "♣"];
    
  
    function randomIndex (array) {
      return Math.floor(Math.random() * array.length);
    };
    

    div.innerHTML = arrayOfFaces[randomIndex(arrayOfFaces)] + arrayOfSuites[randomIndex(arrayOfSuites)]
  };

  const interactiveButton = document.querySelector(".interactive");
    interactiveButton.addEventListener ("click",
      drawCard
  );
};



