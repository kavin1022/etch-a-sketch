function createGrid(rowNumber){
    if (rowNumber > 100){
        rowNumber = 100;
    }
    size = 480 / rowNumber;

    var container = document.getElementById("grid-container");
    for(let i = 0; i < rowNumber; i++){
        var row = document.createElement("div");
        row.className = "inner-container";
        row.id = "row" + i.toString();
        container.appendChild(row);

        for(let j = 0; j < rowNumber; j++){
            var rowContainer = document.getElementById("row" + i.toString());
            var cell = document.createElement("div");
            cell.className = "col";
            cell.style.height = size + "px"
            cell.style.width = size + "px"
            rowContainer.appendChild(cell);
        }
    }
}

function changeColour(){
    const square = document.getElementsByClassName("col");

    for (var i = 0; i < square.length; i++) {
        square[i].addEventListener('mouseenter', function(event){
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            event.target.style.backgroundColor = "#" + randomColor;
        });
    }
}

function clearGrid(){
    var container = document.getElementById("grid-container");
    while (container.firstChild){
        container.removeChild(container.lastChild)
    }
}

function clearButton(){
    const button = document.getElementById("clearButton");
    button.addEventListener("click", function(){
        const grid = document.getElementsByClassName("col");
        for (var i = 0; i<grid.length; i++){
            grid[i].style.backgroundColor = "white"
        }
    });
}

function resizeButton(){
    const button = document.getElementById("resizeButton");
    button.addEventListener("click", function(){
        let newSize = window.prompt("Enter new grid size: ")
        clearGrid();
        createGrid(newSize);
        changeColour();
    });
}

function main(){
    createGrid(16);
    changeColour();
    clearButton();
    resizeButton();
}
main()