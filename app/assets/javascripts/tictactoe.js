window.onload = () => {
  attachListeners();
};
var gameState = ['', '', '', '', '', '', '', '', ''];
var turn = 0;
var  winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

var attachListeners = () => {
  var squareTDs = Array.from(window.document.querySelectorAll('td'));

  squareTDs.forEach(function(e) {
    e.addEventListener('click', function() {
      doTurn(e);
    });
  });

  this.saveButton = document.getElementById('save');
  // this.saveButton.addEventListener('click', this.saveGame.bind(this));
};

function checkWinner() {
  var won = false;
  var TDs = Array.from(window.document.querySelectorAll('td'));
  console.log("TDs", TDs);
  // function state(TDs) {
  //   console.log("checkWinner() TDs", TDs);
  //   for (let i = 0; i < 9; i++) {
  //     gameState[i] = TDs[i].innerText;
  //   }
  // }

  // gameState = state(TDs);

  // for (let index = 0; index <= 8; index++) {
  //   var winCombo = winCombinations[index];
  //   // console.log("checkWinner() gameState", gameState);
  //   // console.log("checkWinner() winCombo", winCombo);
  //   var a = gameState[winCombo[0]];
  //   var b = gameState[winCombo[1]];
  //   var c = gameState[winCombo[2]];
  //   if (a === '' || b === '' || c === '') {
  //     continue;
  //   }
  //   if (a === b && b === c) {
  //     won = true;
  //     break;
  //   }
  // }
  // return won;
}

function doTurn(e) {
  // console.log("doTurn(e)", e);
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

var updateState = (square) => {
  var token = player();
  square.innerText = token;
  var i = Number(square.dataset.x) + 3 * Number(square.dataset.y);
  // gameState[i] = token;
  // console.log("gameState in updateState", gameState);
};