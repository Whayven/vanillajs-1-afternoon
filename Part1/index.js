let gameBoard = [];

let topLeft;
let topCent;
let topRight;

let midLeft;
let midCent;
let midRight;

let botLeft;
let botCent;
let botRight;

function play(id) {
  const playerSpan = document.getElementById("player");
  const clickedBox = document.getElementById(id);

  if (playerSpan.innerHTML === "X") {
    clickedBox.innerHTML = "X";
    gameBoard[id] = "X";

    playerSpan.innerHTML = "O";
  } else {
    clickedBox.innerHTML = "O";
    gameBoard[id] = "O";

    playerSpan.innerHTML = "X";
  }

  //Refresh the values of the array to our corresponding variables
  getBoardValues();

  //Check for (and declare) winner
  if (checkForWin()) {
    reset();
  } else if (checkFullBoard()) {
    alert("No Winner.");
    reset();
  }
}

function checkForWin() {
  if (topLeft !== undefined && topLeft === topCent && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    return true;
  }
  if (midLeft !== undefined && midLeft === midCent && midLeft === midRight) {
    alert(`${midLeft} is the winner`);
    return true;
  }
  if (botLeft !== undefined && botLeft === botCent && botLeft === botRight) {
    alert(`${botLeft} is the winner`);
    return true;
  }

  if (topLeft !== undefined && topLeft === midLeft && topLeft === botLeft) {
    alert(`${topLeft} is the winner`);
    return true;
  }
  if (topCent !== undefined && topCent === midCent && topCent === botCent) {
    alert(`${topCent} is the winner`);
    return true;
  }
  if (
    topRight !== undefined &&
    topRight === midRight &&
    topRight === botRight
  ) {
    alert(`${topRight} is the winner`);
    return true;
  }

  if (topLeft !== undefined && topLeft === midCent && topLeft === botRight) {
    alert(`${topLeft} is the winner`);
    return true;
  }
  if (botLeft !== undefined && botLeft === midCent && botLeft === topRight) {
    alert(`${botLeft} is the winner`);
    return true;
  }
  return false;
}

function getBoardValues() {
  topLeft = gameBoard[0];
  topCent = gameBoard[1];
  topRight = gameBoard[2];

  midLeft = gameBoard[3];
  midCent = gameBoard[4];
  midRight = gameBoard[5];

  botLeft = gameBoard[6];
  botCent = gameBoard[7];
  botRight = gameBoard[8];
}

function checkFullBoard() {
  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (gameBoard[i] === undefined) {
      boardFull = false;
    }
  }
  return boardFull
}

function reset() {
  let currBox;
  for (let i = 0; i < 9; i++) {
    currBox = document.getElementById(i);
    currBox.innerHTML = "";
  }
  gameBoard = [];
}
