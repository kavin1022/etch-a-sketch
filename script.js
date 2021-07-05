function createGrid(){
    for(let i = 0; i < 16; i++){
        var container = document.getElementById("grid-container");
        var row = document.createElement("div");
        row.className = "inner-container";
        row.id = "row" + i.toString()
        container.appendChild(row);

        for(let j = 0; j < 16; j++){
            var rowContainer = document.getElementById("row" + i.toString());
            var cell = document.createElement("div");
            cell.className = "col";
            rowContainer.appendChild(cell);
        }
    }
}

function changeColour(){
    const square = document.getElementsByClassName("col");
    for (var i = 0; i < square.length; i++) {
        square[i].addEventListener('mouseenter', function(event){
            event.target.style.backgroundColor = "black"
        });
    }

    for (var i = 0; i < square.length; i++) {
        square[i].addEventListener('mouseenter', function(event){
            event.target.style.backgroundColor = "blue"
        });
    }
}

function clearGrid(){
    const button = document.getElementById("clearButton");
    button.addEventListener("click", function(){
        const grid = document.getElementsByClassName("col");
        for (var i = 0; i<grid.length; i++){
            grid[i].style.backgroundColor = "white"
        }
    });
}

function main(){
    createGrid();
    changeColour();
    clearGrid();
}
main()