/////////////new//////////
let box = document.querySelectorAll(".box");
let gameSet = false;
let turn = "x";
function restartGame(wnn) {
  let myDiv = document.createElement("div");
  let indicator = document.createElement("h2");
  let indicatorText = document.createTextNode(`${wnn} is the winner`);
  let myBtn = document.createElement("button");
  let btnText = document.createTextNode(`play again`);
  indicator.appendChild(indicatorText);
  myBtn.appendChild(btnText);
  myDiv.appendChild(indicator);
  myDiv.appendChild(myBtn);
  document.body.appendChild(myDiv);
  myDiv.className = "again";
  board.style.filter = "blur(5px)";
  myBtn.onclick = () => {
    location.reload();
  };
}

let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function cheking() {
  for (let combo of winPattern) {
    let [a, b, c] = combo;
    if (
      box[a].innerHTML === box[b].innerHTML &&
      box[b].innerHTML !== "" &&
      box[b].innerHTML === box[c].innerHTML
    ) {
      box[a].style.background = "#42df76";
      box[b].style.background = "#42df76";
      box[c].style.background = "#42df76";
      game = true;
      console.log(`the winner is: ${box[a].innerHTML}`);
      console.log(game);
      restartGame(box[a].innerHTML);
    }
  }
}
box.forEach((el) => {
  el.addEventListener("click", function () {
    if (turn === "x" && el.innerHTML === "") {
      el.innerHTML = "X";
      turn = "o";
    } else if (turn === "o" && el.innerHTML === "") {
      el.innerHTML = "O";
      turn = "x";
    }
    cheking();
  });
});
