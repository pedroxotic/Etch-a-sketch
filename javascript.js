const container= document.querySelector('.container');
// creating the 256 divs:
for (let index = 0; index < 16; index++) {
    const row = document.createElement('div'); row.classList.add('row');
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

