'use strict'

document.getElementById('mybtn').addEventListener('click', multiply)
// Event Listener connects the button with the function "multiply()"

function multiply () {
  let multiplier = parseInt(document.getElementById("multiplier").value)
  let multiplicand = parseInt(document.getElementById("multiplicand").value)
  let product = 0
  let i = 0
  if (multiplier > 0) {
    for (i = 1; i <= multiplier; i++) {
      product=product+ multiplicand
    }
  }
  else {
    for (i = -1; i >= multiplier; i--) {
      product=product - multiplicand
    }
  }
  alert('the answer is ' + product)
}
