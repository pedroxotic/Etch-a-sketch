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

function squaresHoverEvent (){
 const squares=document.querySelectorAll('.square');
squares.forEach((square)=>{
    square.addEventListener('mouseover', ()=>{
        square.style.backgroundColor='black';
     });

})
}
squaresHoverEvent ()

const button=document.querySelector('button');

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
    squaresHoverEvent ()
}
else{
    alert('the grid cant be more than 100*100 try again');
}

});

//clear the grid button
const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click',()=>{
const squares2 = document.querySelectorAll('.square');
squares2.forEach(square =>{
    square.style.backgroundColor='white';
}); 
});


