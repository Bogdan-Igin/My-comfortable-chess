///////////////////////////////////////////////////////
// DRAG & DROP PIESES

// set class "piece" and allow drag attribute to all piece elements
const allPieces = document.querySelectorAll(
  "div.side-board-black > div > img,  div.side-board-white > div > img"
);
allPieces.forEach((item) => {
  item.classList.add("piece");
  item.setAttribute("ondragstart", "drag(event)");
});

// set drop attributes to all spaces on board - central and aside
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
}

// do the drop, with checking if the space is occupied
function drop(ev) {
  // ev.preventDefault();
  const data = ev.dataTransfer.getData("piece");
  const name = ev.target.nodeName;
  console.log(name);
  if (name === "IMG") {
    alert("Please remove the piece first");
  } else {
    ev.target.appendChild(document.getElementById(data));
  }
}

///////////////////////////////////////////////////////
// CONTROL BUTTONS

const buttonStart = document.querySelector(".btn-start");
console.log(buttonStart);
buttonStart.addEventListener("click", function (e) {
  document
    .getElementById("a8")
    .appendChild(document.getElementById("black-rook-1"));
  document
    .getElementById("b8")
    .appendChild(document.getElementById("black-knight-1"));
  document
    .getElementById("c8")
    .appendChild(document.getElementById("black-bishop-1"));
  document
    .getElementById("d8")
    .appendChild(document.getElementById("black-queen"));
  document
    .getElementById("e8")
    .appendChild(document.getElementById("black-king"));
  document
    .getElementById("f8")
    .appendChild(document.getElementById("black-bishop-2"));
  document
    .getElementById("g8")
    .appendChild(document.getElementById("black-knight-2"));
  document
    .getElementById("h8")
    .appendChild(document.getElementById("black-rook-2"));
  document
    .getElementById("a7")
    .appendChild(document.getElementById("black-pawn-1"));
  document
    .getElementById("b7")
    .appendChild(document.getElementById("black-pawn-2"));
  document
    .getElementById("c7")
    .appendChild(document.getElementById("black-pawn-3"));
  document
    .getElementById("d7")
    .appendChild(document.getElementById("black-pawn-4"));
  document
    .getElementById("e7")
    .appendChild(document.getElementById("black-pawn-5"));
  document
    .getElementById("f7")
    .appendChild(document.getElementById("black-pawn-6"));
  document
    .getElementById("g7")
    .appendChild(document.getElementById("black-pawn-7"));
  document
    .getElementById("h7")
    .appendChild(document.getElementById("black-pawn-8"));
  document
    .getElementById("a2")
    .appendChild(document.getElementById("white-pawn-1"));
  document
    .getElementById("b2")
    .appendChild(document.getElementById("white-pawn-2"));
  document
    .getElementById("c2")
    .appendChild(document.getElementById("white-pawn-3"));
  document
    .getElementById("d2")
    .appendChild(document.getElementById("white-pawn-4"));
  document
    .getElementById("e2")
    .appendChild(document.getElementById("white-pawn-5"));
  document
    .getElementById("f2")
    .appendChild(document.getElementById("white-pawn-6"));
  document
    .getElementById("g2")
    .appendChild(document.getElementById("white-pawn-7"));
  document
    .getElementById("h2")
    .appendChild(document.getElementById("white-pawn-8"));
  document
    .getElementById("a1")
    .appendChild(document.getElementById("white-rook-1"));
  document
    .getElementById("b1")
    .appendChild(document.getElementById("white-knight-1"));
  document
    .getElementById("c1")
    .appendChild(document.getElementById("white-bishop-1"));
  document
    .getElementById("d1")
    .appendChild(document.getElementById("white-queen"));
  document
    .getElementById("e1")
    .appendChild(document.getElementById("white-king"));
  document
    .getElementById("f1")
    .appendChild(document.getElementById("white-bishop-2"));
  document
    .getElementById("g1")
    .appendChild(document.getElementById("white-knight-2"));
  document
    .getElementById("h1")
    .appendChild(document.getElementById("white-rook-2"));
});
