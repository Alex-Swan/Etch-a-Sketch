const container = document.querySelector(".container");
const gridSquare = document.getElementsByClassName("gridSquare");
const clearBTN = document.querySelector("#clearBTN");
const changeGridBTN = document.querySelector("#changeGridBTN");
const blackColorBTN = document.querySelector("#blackColorBTN");
const randomColorBTN = document.querySelector("#randomColorBTN");
const eraseColorBTN = document.querySelector("#eraseColorBTN");
let squareAmount = 16;
let userAmount;
let penColor;

/* This function creates 16x16 grid or what ever input the user has given.
 The whole grid also stays the same size no mater how many grid squares there
 are inputted by user. 
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
      square.style.width = "100%";
      let height = 600 / parseInt(squareAmount);
      square.style.height = `${height}px`;
      square.style.backgroundColor = "rgb(255,255,255)";
    }
  }
}
/*
  This function below is for when the user mouses over one of the grid squares it changes
  the background color  so that it appears to the user that they are drawing. if the user
  then clicks on any of the color options it swaps the color to the chosen background color
  for the grid square. 
*/
function mousePenColor() {
  for (let i = 0; i < gridSquare.length; i++) {
    gridSquare[i].addEventListener("mouseover", () => {
      penColor = "rgb(0,0,0)";
      gridSquare[i].style.backgroundColor = `${penColor}`;
    });
  }

  blackColorBTN.addEventListener("click", () => {
    for (let i = 0; i < gridSquare.length; i++) {
      gridSquare[i].addEventListener("mouseover", () => {
        penColor = "rgb(0,0,0)";
        gridSquare[i].style.backgroundColor = `${penColor}`;
      });
    }
  });

  randomColorBTN.addEventListener("click", () => {
    for (let i = 0; i < gridSquare.length; i++) {
      gridSquare[i].addEventListener("mouseover", () => {
        penColor = `${randomColorNumber()}`;
        gridSquare[i].style.backgroundColor = `${penColor}`;
      });
    }
  });

  eraseColorBTN.addEventListener("click", () => {
    for (let i = 0; i < gridSquare.length; i++) {
      gridSquare[i].addEventListener("mouseover", () => {
        penColor = "rgb(255,255,255)";
        gridSquare[i].style.backgroundColor = `${penColor}`;
      });
    }
  });
}

/*
This function creates a random RGB value, when called returns a string for example
 "rgb(23,54,160)"
*/
function randomColorNumber() {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  let randomRGB = `rgb(${r},${g},${b})`;
  return randomRGB;
}

/* This event listener clears the whole grid when the button has been clicked letting
the user start again, by setting the background color of all grid squares white.
 */
clearBTN.addEventListener("click", () => {
  for (let i = 0; i < gridSquare.length; i++) {
    gridSquare[i].style.backgroundColor = "white";
  }
});

/* This event listener clears all drawing on the grid and asks the user how big the grid
 that they want should be. If user enters a number below 4 or above 100 it sends another
 prompt asking the user to select a number between 4 and 100. This also removes the 
 original grid and replaces it with the users desired size.
 */
changeGridBTN.addEventListener("click", () => {
  userAmount = prompt(
    "The current grid is 16x16, what number of square x square would you like?"
  );
  if (userAmount == "") {
    userAmount = 16;
  }
  while (parseInt(userAmount) < 4 || parseInt(userAmount) > 100) {
    userAmount = prompt(
      `Please enter a number between 4 and 100.
The current grid is 16x16, what number of square x square would you like?`
    );
  }
  squareAmount = parseInt(userAmount);
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  fullGrid(squareAmount);
  mousePenColor();
});

// This is running the function fullgrid which creates the grid, then runs the
// the mousePenColor function for drawing.

fullGrid(squareAmount);
mousePenColor();
