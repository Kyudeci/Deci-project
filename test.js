let buttonW = document.getElementById("white");
let buttonB = document.getElementById("black");
let buttonR = document.getElementById("return");
let imgR = document.getElementById("kyuw");
let imgZ = document.getElementById("kyub");

function ch1() {
  document.getElementById("kyuw").src = "images/kyuremw.png"
}
function ch2() {
  document.getElementById("kyub").src = "images/kyuremb.png"
}
function revert() {
  document.getElementById("kyuw").src = "images/reshi.png"
  document.getElementById("kyub").src = "images/zek.png"
}
// document.getElementById("white").style.visibility = "visible";
