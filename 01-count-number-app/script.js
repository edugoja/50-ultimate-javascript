const result = document.querySelector(".result");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

//Event handler for decrease button
decrease.addEventListener("click", () => {
  result.innerHTML--;
  color();
});

//Event handler for reset button (number will be 0)
reset.addEventListener("click", () => {
  result.innerHTML = 0;
  color();
});

//Event handler for increase button
increase.addEventListener("click", () => {
  result.innerHTML++;
  color();
});

//Color change
// Less than 0 is red
// 0 is white
// Greater than 0 is green
function color() {
  var value = result.innerHTML;
  console.log(value);
  result.style.color =
    value < 0 ? "#F03E3E" : value > 0 ? "#37B24D" : "#FFFFFF";
}
