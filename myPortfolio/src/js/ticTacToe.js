var gameMarker = "X"

function changeMarkerToX() {
  gameMarker = "X"
  console.log("The x button was clicked!")
}
function changeMarkerToO() {
  gameMarker = "O"
  console.log("The o button was clicked!")
}

//THIS WORKS!!!
var placeMarker = function (obj) {
  console.log(obj.id)
  var clickId = obj.id
  if (document.getElementById(clickId).innerHTML === "") {
    document.getElementById(clickId).innerHTML = gameMarker
  } else {
    alert("That spot is taken!")
  }
}

function resetBoard() {
  document.getElementById("topL").innerHTML = " ."
  document.getElementById("topM").innerHTML = " ."
  document.getElementById("topR").innerHTML = " ."
  document.getElementById("midL").innerHTML = " ."
  document.getElementById("midM").innerHTML = " ."
  document.getElementById("midR").innerHTML = " ."

  document(topM.innerHTML = " .")
  document(topR.innerHTML = " .")
  document(midL.innerHTML = " .")
  document(midM.innerHTML = " .")
  document(midR.innerHTML = " .")
  document(botL.innerHTML = " .")
  document(botM.innerHTML = " .")
  document(botR.innerHTML = " .")

  console.log("reset")
}
