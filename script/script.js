////////////////
// DRAG & DROP PIESES

let pieceBeingMoved; // a piece that being moved

// set class "piece" and allow drag attribute to all piece elements
const allPieces = document.querySelectorAll(
  "div.side-board-black > div > img,  div.side-board-white > div > img"
);
allPieces.forEach((item) => {
  item.classList.add("piece");
  item.setAttribute("ondragstart", "drag(event)");
});

// set drop attributes with its actions functions - to all spaces on board, central and aside
const allBoardSpaces = document.querySelectorAll(
  "div.board-center > div, div.side-board-black > div,  div.side-board-white > div"
);
allBoardSpaces.forEach((item) => {
  item.setAttribute("ondragover", "allowDrop(event)");
  item.setAttribute("ondrop", "drop(event)");
});

// delete default behavior from element that will receive dropped element
function allowDrop(ev) {
  ev.preventDefault();
}

// setting what data will be dragged
function drag(ev) {
  ev.dataTransfer.setData("piece", ev.target.id);
  pieceBeingMoved = ev.target.id;
}

// do the drop, with checking if the space is occupied
function drop(ev) {
  const data = ev.dataTransfer.getData("piece");
  const name = ev.target.nodeName;
  console.dir(ev.target.id);
  if (name === "IMG" && ev.target.id !== pieceBeingMoved) { // handle a move to an occupied space
    alert("Please remove the piece first");
  } else if (ev.target.id === pieceBeingMoved) { // handle a move to the same space
    // do nothing
  } else {
        ev.target.appendChild(document.getElementById(data));
        noteMoves(pieceBeingMoved, ev.target.id);
  }
}

////////////////
// MOVIES

////
// Note moves

const movesWhite = []; // arrey with moves of white
const movesBlack = []; // array with moves of black
let movesOrder; // moves order
let previousMove; // previous move

// handle button for starting note moves, !!!use only with "start" button!!!
const buttonNote = document.querySelector(".btn-notes");
let startNote = false;
buttonNote.addEventListener("click", function (e) {
  startNote = true;
  movesOrder = "white";
  previousMove = "black";
});

// function for note moves
function noteMoves(moved, target) {
  if (startNote) {
    let figureMoved = moved.slice(6, moved.indexOf("-", 6)); // white or black moves?
    
    if (moved.includes("white") && movesOrder === "white" && previousMove === "black") {
      movesWhite.push(`${figureMoved} ${target}`);
      console.log(movesWhite);
      movesOrder = "black";
      previousMove = "white";
      showWhoseMove();
    } else if (moved.includes("black") && movesOrder === "black" && previousMove === "white") {
      movesBlack.push(`${figureMoved} ${target}`);
      console.log(movesBlack);
      movesOrder = "white";
      previousMove = "black";
      showWhoseMove();
    } else {
      alert("Illigal move!");
    }
  }

  // insert massage about order of moves
  function showWhoseMove() {
    const whoseMoveEl = document.querySelector(".whose-move");
    whoseMoveEl.textContent = movesOrder;
  }
}

////
// Setting Castl




////////////////
// CONTROL BUTTONS

////
// "Start" button

// Start positions object
const startPosition = [
  {a8: "black-rook-1"},
  {b8: "black-knight-1"},
  {c8: "black-bishop-1"},
  {d8: "black-queen"},
  {e8: "black-king"},
  {f8: "black-bishop-2"},
  {g8: "black-knight-2"},
  {h8: "black-rook-2"},
  {a7: "black-pawn-1"},
  {b7: "black-pawn-2"},
  {c7: "black-pawn-3"},
  {d7: "black-pawn-4"},
  {e7: "black-pawn-5"},
  {f7: "black-pawn-6"},
  {g7: "black-pawn-7"},
  {h7: "black-pawn-8"},
  {a2: "white-pawn-1"},
  {b2: "white-pawn-2"},
  {c2: "white-pawn-3"},
  {d2: "white-pawn-4"},
  {e2: "white-pawn-5"},
  {f2: "white-pawn-6"},
  {g2: "white-pawn-7"},
  {h2: "white-pawn-8"},
  {a1: "white-rook-1"},
  {b1: "white-knight-1"},
  {c1: "white-bishop-1"},
  {d1: "white-queen"},
  {e1: "white-king"},
  {f1: "white-bishop-2"},
  {g1: "white-knight-2"},
  {h1: "white-rook-2"},
]

const buttonStart = document.querySelector(".btn-start");

// handle "click" on start button
buttonStart.addEventListener("click", function (e) {
  startPosition.forEach(item => {
    let key = Object.keys(item)[0];
    let value = item[key];
    document.getElementById(key).appendChild(document.getElementById(value));
  })
});