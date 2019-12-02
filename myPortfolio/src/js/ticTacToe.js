var gameMarker = "x";
//do I need this?? see placeMarker function.
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
  //do I need this?? from codepen js tictactoe, but I maybe don't need it. Is checking if box is empty.
  //What I need is for the marker to be placed!

  if (cells.contentText == "") {
    this.contentText = gameMarker;
  }

  console.log("The marker was placed!");
}

//get id of clicked box. does this need to be a separate function? if not, how do I "pass" the info?
function getName(clicked) {
  var name = clicked;
  console.log("id got");
}
