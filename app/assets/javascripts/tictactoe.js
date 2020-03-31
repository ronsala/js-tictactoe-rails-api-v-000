// var square = '';
// var squares = [];
var turn = 0;

function attachListeners() {

}

function checkWinner() {

}

function doTurn() {

}

var player = () => {
  if (turn % 2 == 0) {
    return 'X';
  } else {
    return 'O';
  }
}

function setMessage() {

}

function updateState(square) {
  var token = player();
  square.innerText = token;
}