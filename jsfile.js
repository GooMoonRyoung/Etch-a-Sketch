/*I will try and generate a row div and within the row div I will go ahead and add 16 div boxes 
I will add 16 of these rows so that and this will allow me to have the grid that I want
I will add a hover event to the boxes that adds a transition/css class and when the mouse is no longer hovering it transition back to normal.
*/

const container = document.querySelector('#container');
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
            console.log(currentRow);
            const box = document.createElement('div');
            box.classList.add('box');
            currentRow.appendChild(box);
        }   
    }
}
createGrid(yDefault, xDefault)