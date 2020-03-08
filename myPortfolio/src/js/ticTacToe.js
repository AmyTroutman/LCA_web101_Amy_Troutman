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
var placeMarker = function(obj) {
  console.log(obj.id)
  var clickId = obj.id
  if (document.getElementById(clickId).innerHTML === "") {
    document.getElementById(clickId).innerHTML = gameMarker
  } else {
    alert("That spot is taken!")
  }
}
