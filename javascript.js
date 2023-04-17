const container= document.querySelector('.container');
// creating the 256 divs:
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



const button=document.querySelector('button');

button.addEventListener('click', ()=>{
    var gridSize=prompt('enter the desired grid size');
    console.log(gridSize);
    const rows = document.querySelectorAll('.row');
    //delete the 16*16
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
    const squares=document.querySelectorAll('.square');

    squares.forEach((square)=>{

        square.addEventListener('mouseover', ()=>{
            square.style.backgroundColor='black';
    
        })
    });
}
});

squares.forEach((square)=>{

    square.addEventListener('mouseover', ()=>{
        square.style.backgroundColor='black';

    })
});