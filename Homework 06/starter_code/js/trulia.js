
let truliaCards = document.getElementsByClassName("trulia-grid-item");

document.addEventListener('DOMContentLoaded', function (event) {

  // Toggle the navigation
  document.querySelector(".trulia-nav-toggle").onclick = function (e) {
    e.preventDefault();

    let uls = document.querySelectorAll('.trulia-nav > nav ul');

    for (let i = 0; i < uls.length; i++) {
      uls[i].classList.toggle('trulia-nav-mobilehide');
    }
  }

  // Loop through all the cards
  // Add a click listener on each card
  // Remove the featured class
  // Add the featured class on the one clicked on
  for (let i = 0; i < truliaCards.length; i++) {
    truliaCards[i].onclick = function (e) {
      for (let j = 0; j < truliaCards.length; j++) {
        truliaCards[j].classList.remove("trulia-featured-grid-item")
      }
      truliaCards[i].classList.toggle("trulia-featured-grid-item")
    }
  }
});
