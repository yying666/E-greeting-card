/*
==================================================
Get all necessary DOM:
1. class .card
2. class .front
==================================================
*/
var card = document.querySelector(".card");
var front = document.querySelector(".front");

/*
==================================================
Create a variable isOpen and set the value to false
==================================================
*/
var isOpen = false;

/*
==================================================
Attach addEventListener to .card (make it clickable):
1. If the card is open
    - remove class .open from .front
    - toggle variable isOpen (make isOpen to be not true)
2. Else if the card is close
    - add class .open to .front
    - toggle variable isOpen (make isOpen to be true)
Hint: Use classList.remove("className") to remove a class,
while classList.add("className") to add a class.
==================================================
*/
card.addEventListener("click", function () {
    if (isOpen === true) {
        front.classList.remove("open");
        isOpen = false;
    }
    else {
        front.classList.add("open");
        isOpen = true;
    }
})