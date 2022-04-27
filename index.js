let calculatrice = document.querySelector(".calculatrice");
let resultat = document.querySelector(".resultat");
let actions = document.querySelectorAll(".action");
let numbers = document.querySelectorAll(".number");
let buttons = document.querySelectorAll(".button");
let equal = document.querySelector(".equal");
//toggle
let calcColorButton = document.querySelector(".calc-color");
calcColorButton.addEventListener("click", (event) => {
  calcColorButton.classList.toggle("calc-color-toggle");
  calculatrice.classList.toggle("calculatrice-toggle");
  toToggle(actions, "action-toggle");
  toToggle(numbers, "number-toggle");
  //
  function toToggle(items, className) {
    items.forEach((item) => {
      item.classList.toggle(className);
    });
  }
  //
});
//calculation
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (button.id === "clear") {
      resultat.innerHTML = "";
    } else if (button.id === "remove") {
      let newResult = resultat.innerHTML;
      resultat.innerHTML = newResult.substr(0, newResult.length - 1);
    } else if (button.id === "equal") {
      if (resultat.innerHTML !== "") {
        resultat.innerHTML = eval(resultat.innerHTML);
      } else {
        resultat.innerHTML = "EMPTY !";
        setTimeout(() => (resultat.innerHTML = ""), 2000);
      }
    } else {
      resultat.innerHTML += event.target.id;
    }
  });
});
//FOR TESTING
// let dahman = "DAHMAN";
// console.log(dahman.substr(0, dahman.length - 1));
