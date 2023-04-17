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

const squares=document.querySelectorAll('.square');

squares.forEach((square)=>{

    square.addEventListener('mouseover', ()=>{
        square.style.backgroundColor='black';

    })
});


const button=document.querySelector('button');

button.addEventListener('click', ()=>{
    var gridSize=parseInt(prompt('enter the desired grid size'));
    console.log(gridSize);
    
    if (gridSize<=100) {
        const rows = document.querySelectorAll('.row');
        //delete the 16*16 grid
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
    const squares=document.querySelectorAll('.square');
    squares.forEach((square)=>{
        square.addEventListener('mouseover', ()=>{
            square.style.backgroundColor='black';
    
        })
    });
}
else{
    alert('the grid cant be more than 100*100 try again');
}

});

