let turn = 'x';
let squares = [];

let again = document.getElementById('again');
let board = document.getElementById('board');
let indicator = document.getElementById('indicator');
function playAgin(){
    again.style.display = 'none'
    // again.style.background = '#42df76';
    location.reload()
}
function end(num1, num2, num3){
    let idi = document.getElementById(num1).style.background = '#42df76';
    document.getElementById(num2).style.background = '#42df76';
    document.getElementById(num3).style.background = '#42df76';

    document.getElementById(num1).style.color = '#fff';
    document.getElementById(num2).style.color = '#fff';
    document.getElementById(num3).style.color = '#fff';
    // window.alert(document.getElementById(num2).innerHTML + 'won')
    again.style.display = 'flex'
    board.style.filter = 'blur(5px)';
    indicator.innerHTML = `${document.getElementById(num2).innerHTML} is the winner`
}

function winner() {
    for(let i = 1; i < 10; i++){
        squares[i] = document.getElementById(i).innerHTML;
    }
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){
        end(1,2,3);
    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != ''){
        end(4,5,6);
    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != ''){
        end(7,8,9);
    }
    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ''){
        end(1,4,7);
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != ''){
        end(2,5,8);
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != ''){
        end(3,6,9);
    }
    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != ''){
        end(1,5,9);
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != ''){
        end(3,5,7);
    }
}
// winner()
function game(id){
    let box = document.getElementById(id)
    if (turn === 'x' && box.innerHTML === ''){
        box.innerHTML = 'X';
        turn = 'o';
    }else if(turn === 'o' && box.innerHTML === '') {
        box.innerHTML = 'O';
        turn = 'x';
    }
    winner()
}