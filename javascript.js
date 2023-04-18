const container= document.querySelector('.container');
// creating the 16 * 16 grid:
for (let index = 0; index < 16; index++) {
    var row = document.createElement('div'); row.classList.add('row');
    container.appendChild(row);
    for (let index = 0; index < 16; index++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
            
    }

}
var squares=document.querySelectorAll('.square');

function squaresHoverEvent (){
squares.forEach((square)=>{
    square.addEventListener('mouseover', ()=>{
        square.style.backgroundColor='black';
     });

})
}
squaresHoverEvent ()
// 
const button=document.querySelector('#changeGridSize');

button.addEventListener('click', ()=>{
    let gridSize=parseInt(prompt('enter the desired grid size'));
    console.log(gridSize);
    
    if (gridSize<=100) {
        //delete the 16*16 grid
        const rows = document.querySelectorAll('.row');
        rows.forEach(row => {
        container.removeChild(row);
      }); 
      
        //creating the new grid
     for (let index = 0; index < gridSize; index++) {
     var row = document.createElement('div'); row.classList.add('row');
     container.appendChild(row);
     for (let index = 0; index < gridSize; index++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
        }
    }
    squares=document.querySelectorAll('.square');
    squaresHoverEvent ()
}
else{
    alert('the grid cant be more than 100*100 try again');
}

});

//clear the grid button
const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click',()=>{
squares.forEach(square =>{
    square.style.backgroundColor='white';
}); 
});
squaresHoverEvent ()



