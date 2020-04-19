// var square = '';
var squareTDs = window.document.querySelectorAll('td');
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
  squareTDs.forEach(e); {
    console.log("attachListeners e", e);
    e.addEventListener('click', doTurn());
  }
  this.saveButton = document.getElementById('save');
  this.saveButton.addEventListener('click', this.saveGame.bind(this));
}

function checkWinner() {

}

function doTurn() {
  console.log("In doTurn()")
}

var player = () => {
  if (turn % 2 == 0) {
    return 'X';
  } else {
    return 'O';
  }
};

var previousGame = () => {
}

var saveGame = () => {
}

function setMessage(string) {
  var messageDiv = document.getElementById('message');
  messageDiv.innerHTML = string;
}

function updateState(square) {
  var token = player();
  console.log("updateState token", token)
  square.innerText = token;
}