window.onload = () => {
  attachListeners();
};
var gameState = ['', '', '', '', '', '', '', '', ''];
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

var attachListeners = () => {
  var squareTDs = window.document.querySelectorAll('td');

  var i = 0;

  for (i=0; i < squareTDs.length; i++){
    squareTDs[i].addEventListener('click', doTurn());
  }

  this.saveButton = document.getElementById('save');
  // this.saveButton.addEventListener('click', this.saveGame.bind(this));
  this.saveButton.addEventListener('click', () => console.log("button clicked"));
};

function checkWinner() {

}

function doTurn(e) {
  console.log("doTurn e", e);
  turn++;
  updateState(e);
  checkWinner();
  setMessage();
}

var player = () => {
  if (turn % 2 == 0) {
    return 'X';
  } else {
    return 'O';
  }
};

var previousGame = () => {
};

var saveGame = () => {
};

function setMessage(string) {
  var messageDiv = document.getElementById('message');
  messageDiv.innerHTML = string;
}

function updateState(square) {
  var token = player();
  // square.innerText = token;
}