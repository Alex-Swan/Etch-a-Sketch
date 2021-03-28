const container = document.querySelector(".container");
const gridSquare = document.getElementsByClassName("gridSquare");
const clearBTN = document.querySelector(".clearBTN");
let squareAmount = 16;
let userAmount;

/* This function creates 16x16 grid or what ever input the user has given, the event listner at the
 bottom of the function makes it that when a user hovers over a grid square it turns black. 
*/
function fullGrid(e) {
  for (let i = 0; i < e; i++) {
    row = document.createElement("DIV");
    container.appendChild(row);
    row.className = "row";
    for (let i = 0; i < e; i++) {
      square = document.createElement("DIV");
      row.appendChild(square);
      square.className = "gridSquare";
    }
  }
  for (let i = 0; i < gridSquare.length; i++) {
    gridSquare[i].addEventListener("mouseover", () => {
      gridSquare[i].className += " squareBlack";
    });
  }
}

/* This event lister the the clear button clears all drawing on the grid and asks the user how big the grid
 that they want should be. If user enters a number below 4 or above 100 it sends another prompt asking
 the user to select a number between 4 and 100. This also removes the original grid and replaces it
 with the users desired size.
*/
clearBTN.addEventListener("click", () => {
  for (let i = 0; i < gridSquare.length; i++) {
    gridSquare[i].classList.remove("squareBlack");
  }
  userAmount = prompt(
    "The current grid is 16x16, what number of square x square would you like?"
  );
  while (parseInt(userAmount) < 4 || parseInt(userAmount) > 100) {
    userAmount = prompt(
      `Please choose a number between 4 and 100. 
    The current grid is 16x16, what number of square x square would you like?`
    );
  }
  squareAmount = parseInt(userAmount);
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  fullGrid(squareAmount);
});

fullGrid(squareAmount);
