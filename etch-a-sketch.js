const container = document.querySelector(".container");
const gridSquare = document.getElementsByClassName("gridSquare");
// This function creates 16 rows with 16 squares in each row
let fullGrid = function () {
  for (let i = 0; i < 16; i++) {
    row = document.createElement("DIV");
    container.appendChild(row);
    row.className = "row";
    for (let i = 0; i < 16; i++) {
      square = document.createElement("DIV");
      row.appendChild(square);
      square.className = "gridSquare";
    }
  }
};
fullGrid();

// This event listener makes it so when user hovers over a grid square it turns changes color and turns black.
for (let i = 0; i < gridSquare.length; i++) {
  gridSquare[i].addEventListener("mouseover", () => {
    gridSquare[i].style.backgroundColor = "black";
  });
}
