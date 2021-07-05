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

function main(){
    createGrid()
}
main()

