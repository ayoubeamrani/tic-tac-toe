let turn = 'x';

function game(id){
    let box = document.getElementById(id)
    if (turn === 'x' && box.innerHTML === ''){
        box.innerHTML = 'X';
        turn = 'o';
    }else if(turn === 'o' && box.innerHTML === '') {
        box.innerHTML = 'O';
        turn = 'x';
    }
}