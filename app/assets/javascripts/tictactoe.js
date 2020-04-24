window.onload = () => {
  attachListeners();
};

var gameState = ['', '', '', '', '', '', '', '', ''];
var squareTDs = Array.from(window.document.querySelectorAll('td'));
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
  function state(squareTDs) {
    for (let i = 0; i < 9; i++) {
      gameState[i] = squareTDs[i].innerText;
    }
  }

  state(squareTDs);

  for (let index = 0; index < 8; index++) {
    var winCombo = winCombinations[index];
    var a = gameState[winCombo[0]];
    var b = gameState[winCombo[1]];
    var c = gameState[winCombo[2]];
    if (a === '' || b === '' || c === '') {
      continue;
    }
    if (a === b && b === c) {
      won = true;
      break;
    }
  }
  if (won === true) {
    setMessage(`Player ${a} Won!`);
  }
  return won;
}

function doTurn(e) {
  turn++;
  updateState(e);
  checkWinner();
  var messageDiv = document.getElementById('message');
  if (messageDiv.innerHTML.includes('Won') === true) {
    squareTDs.forEach(function(e) {
      e.innerHTML = '';
    });
    turn = 0;
  }
  // setMessage();
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
  // var i = Number(square.dataset.x) + 3 * Number(square.dataset.y);
};