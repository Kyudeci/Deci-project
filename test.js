// Need to create a rule that allows only one corrupt or disables second button.
// let a = document.getElementById("kyuw").src = "images/reshi.png"
// let b = document.getElementById("kyub").src = "images/zek.png"
// let x = document.getElementById("return")
// let y = document.getElementById("kyuw").src = "images/kyuremw.png"
// let z = document.getElementById("kyub").src = "images/kyuremb.png"
function ch1() {
  document.getElementById("kyuw").src = "images/kyuremw.png"
  document.getElementById("kyuo").style.visibility = "hidden"
  document.getElementById("return").style.visibility = "visible"
  document.getElementById("black").style.visibility = "hidden"
}
function ch2() {
  document.getElementById("kyub").src = "images/kyuremb.png"
  document.getElementById("kyuo").style.visibility = "hidden"
  document.getElementById("return").style.visibility = "visible"
  document.getElementById("white").style.visibility = "hidden"
}
function revert() {
  document.getElementById("kyuw").src = "images/reshi.png"
  document.getElementById("kyub").src = "images/zek.png"
  document.getElementById("kyuo").style.visibility = "visible"
  document.getElementById("return").style.visibility = "hidden"
  document.getElementById("black").style.visibility = "visible"
  document.getElementById("white").style.visibility = "visible"
}
