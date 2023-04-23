/*I will try and generate a row div and within the row div I will go ahead and add 16 div boxes 
I will add 16 of these rows so that and this will allow me to have the grid that I want
I will add a hover event to the boxes that adds a transition/css class and when the mouse is no longer hovering it transition back to normal.
*/

const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
const grid = document.querySelector('#grid')
const xDefault = 16
const yDefault = 16

//This is the logic for creating the first 16 rows and 16 boxes in each row
function createGrid(yAxis, xAxis){
    for ( r=1; r <= yAxis; r++){
        const row = document.createElement('div');
        row.classList.add(`row`);
        row.classList.add(`r${r}`);
        container.appendChild(row);
        for (b= 0; b < xAxis; b++){
            const currentRow = document.querySelector(`.r${r}`);
            const box = document.createElement('div');
            box.classList.add('box');
            currentRow.appendChild(box);
        }   
    }
    addBoxEvents();
}

// Asks for
grid.addEventListener('click', function(e){
    while (container.hasChildNodes()){
        container.firstChild.remove()
    };
    const newXAxis = Number(prompt('how many boxes should there be for the width?(The limit is 100)'))
    if (newXAxis > 100){
        newXAxis = xDefault
        alert(`you can't input a number greater than 100`)
    }
    const newYAxis = Number(prompt('how many boxes should there be for the height?(The limit is 100)'))
    if (newXAxis > 100){
        newXAxis = xDefault
        alert(`you can't input a number greater than 100`)
    }
    createGrid(newYAxis, newXAxis)
})

createGrid(yDefault, xDefault)

//Adds a class to the boxes when they are hovered over and changes their colour over a transition period
function addBoxEvents(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseover',function (e){
            this.classList.add('activated')
        });
    })
}
// Resets all the boxes to their original colour
reset.addEventListener('click', function(e){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.classList.remove('activated');
    })
});
