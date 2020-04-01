// var square = '';
// var squares = [];
var turn = 0;
var  winCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2]
];

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
};

function setMessage(string) {
  var messageDiv = document.getElementById('message');
  messageDiv.innerHTML = string;
}

function updateState(square) {
  var token = player();
  square.innerText = token;
}