
const container = document.querySelector(".container");
const resetButton = document.querySelector("button");
const root = document.documentElement;


console.log(root);
current = getComputedStyle(root).getPropertyValue('--main-color');


container.addEventListener("mouseover", Etch);
resetButton.addEventListener("click", ResetSize);

for(i = 0; i < 16; i++){
    for(j = 0; j < 16; j++){
        column = document.createElement("div");
        column.classList.add("pixel");
        container.appendChild(column);
    }
}

function Etch(e){
    red = Math.round((Math.random() * 255));
    green = Math.round((Math.random() * 255));
    blue = Math.round((Math.random() * 255));

    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function ResetSize(e){
    container.textContent = '';
    size = prompt("Enter the size of the new grid");
    root.style.setProperty("--grid-width", size);
    for(i = 0; i < size; i++){
        for(j = 0; j < size; j++){
            column = document.createElement("div");
            column.classList.add("pixel");
            container.appendChild(column);
        }
    }
}