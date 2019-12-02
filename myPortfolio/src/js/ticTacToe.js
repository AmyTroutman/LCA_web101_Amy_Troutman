var gameMarker = "x";
var cells = document.getElementsByClassName(".ttt");

function changeMarkerToX() {
  var gameMarker = "X";
  console.log("The x button was clicked!");
}
function changeMarkerToO() {
  var gameMarker = "O";
  console.log("The o button was clicked!");
}

function placeMarker() {
  if (cells.contentText == "") {
    this.contentText = gameMarker;
  }

  console.log("The marker was placed!");
}

function getName(clicked) {
  var name = clicked;
  console.log("id got");
}
