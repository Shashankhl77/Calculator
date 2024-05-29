const display = document.getElementById("calculator-screen");
function apend(input) {
  display.value += input;
}
function clr() {
  display.value = "";
}
function res() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
