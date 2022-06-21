let gameOn = true;
let turn = "X";
let gameState = 9;
function changeTurn() {
  return turn === "X" ? "O" : "X";
}

const checkWin = () => {
  let boxText = document.getElementsByClassName('boxtext')
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  wins.forEach(e => {
    if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
      document.getElementsByClassName("info")[0].innerText = `${turn}-WON`;
      gameOn = false;
      document.getElementsByClassName("msg")[0].innerText = `Player-${turn} WON`;
      document.getElementsByClassName("pop_up")[0].style.display = "flex";
    }
  })
}


let cells = document.getElementsByClassName("cell");
Array.from(cells).forEach(ele => {
  let boxText = ele.querySelector('.boxtext');
  ele.addEventListener("click", () => {
    if (boxText.innerText === "" && gameOn === true) {

      boxText.innerText = turn;
      gameState--;
      checkWin();
      draw();
      if (gameOn === true) {
        turn = changeTurn();
        document.getElementsByClassName("info")[0].innerText = `${turn}-Turn`;
      }

    }
  })
})
function draw() {
  if (gameOn === true && gameState === 0) {
    document.getElementsByClassName("msg")[0].innerText = `Match Drawn`;
    document.getElementsByClassName("pop_up")[0].style.display = "flex";
    gameOn = false;
    let bgimg = document.getElementsByClassName("wrapper")[0];
    bgimg.style.backgroundImage = "url(./images/aron-visuals-BXOXnQ26B7o-unsplash.jpg)"
  }
}
function restart() {
  let boxText = document.getElementsByClassName("boxtext");
  Array.from(boxText).forEach(e => {
    e.innerText = "";
  })
  turn = "X";
  let bgimg = document.getElementsByClassName("wrapper")[0];
  bgimg.style.backgroundImage = "url(./images/erwan-hesry-f6BON21ds9w-unsplash.jpg)"
  document.getElementsByClassName("info")[0].innerText = `${turn}-Turn`;
  document.getElementsByClassName("pop_up")[0].style.display = "none";
  gameOn = true;
  gameState = 9;
}

