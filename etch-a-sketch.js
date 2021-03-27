const container = document.querySelector(".container");

// This function creates 16 rows with 16 squares in each row
let fullGrid = function () {
  for (let i = 0; i < 16; i++) {
    row = document.createElement("DIV");
    container.appendChild(row);
    row.className = "row";
    for (let i = 0; i < 16; i++) {
      square = document.createElement("DIV");
      row.appendChild(square);
      square.className = "square";
    }
  }
};

fullGrid();
