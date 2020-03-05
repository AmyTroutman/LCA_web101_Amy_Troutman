var gameMarker = "x"

function changeMarkerToX() {
  gameMarker = "X"
  console.log("The x button was clicked!")
}
function changeMarkerToO() {
  gameMarker = "O"
  console.log("The o button was clicked!")
}

//THIS WORKS!!!
var reply_click = function(obj) {
  console.log(obj.id)
  var clickId = obj.id
  if (clickId != "") {
    document.getElementById(clickId).innerHTML = gameMarker
  }
  return clickId
}

///ok, so the asignment requires a function called placeMarker(). So I need to get the document.write bit
///to work outside of reply_click.
