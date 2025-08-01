import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  function drawCard() {
    const faceOfCard = document.querySelector("#face");
    const suitOfCard = document.querySelectorAll(".suit");
    
    function randomIndex (array) {
      return Math.floor(Math.random() * array.length);
    };
    
    const arrayOfFaces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const randomFaceIndex = randomIndex(arrayOfFaces)
    const arrayOfSuites = ["♦", "♥", "♠", "♣"];
    const randomSuitIndex = randomIndex(arrayOfSuites)
      
    faceOfCard.innerHTML = arrayOfFaces[randomFaceIndex];
    suitOfCard.forEach((item) => {
    const suit = arrayOfSuites[randomSuitIndex];
    item.innerHTML = suit;
    item.style.color = (suit === "♥" || suit === "♦") ? "red" : "black";
    }
  );
  };
  drawCard();
  // End of drawCard Function



  const interactiveButton = document.querySelector(".interactive");
  interactiveButton.style.backgroundColor = "silver";
    interactiveButton.addEventListener ("click",
      drawCard
  );
  // End of interactiveButton



};
// End of onload