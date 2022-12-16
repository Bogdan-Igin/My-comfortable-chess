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
