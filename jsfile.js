/*I will try and generate a row div and within the row div I will go ahead and add 16 div boxes 
I will add 16 of these rows so that and this will allow me to have the grid that I want
I will add a hover event to the boxes that adds a transition/css class and when the mouse is no longer hovering it transition back to normal.
*/

const container = document.querySelector('#container');

for ( i=0; i < 16; i++){
    const row = document.createElement('div')
    row.classList.add('row')
    container.appendChild(row)
}