



function calculateTip() {
  let bill = document.getElementById("bill").value
 // console.log(bill)
let tipPercentage = document.getElementById("tipPercentage").value
// console.log(tipPercentage)

let sharingNo= document.getElementById("sharingNo").value
// console.log(sharingNo)

if(bill == "" || tipPercentage == "") {
  alert("Enter details")
}

if (sharingNo == 0) {
  alert("Minimum number of people sharing bill must be 1")
}

let total= (bill*tipPercentage)/sharingNo

// console.log(total)

document.getElementById("tip").innerText=total
}

function mouseHover() {
  document.getElementById("calculate").style.color="black"
}

function mouseHoverout() {
  document.getElementById("calculate").style.color="white"
}









