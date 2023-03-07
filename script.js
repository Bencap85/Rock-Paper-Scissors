function playRound() {

  setUp();
  
}
function setUp() {
  addEventListeners();
}
function addEventListeners() {
  
  for(let i = 0; i < 3; i++) {
    for(let x = 0; x < 3; x++) {
      let btn = document.getElementById(`${i}${x}`);
      addEventListenerTo(btn);
    }
  }
}
function addEventListenerTo(button) {
  button.addEventListener('click', () => {
    if(button.innerText != "X") {
      button.innerText = "X";
    }
    else {
      button.innerText = "O";
    }
    checkForWin();
  });
}
function checkForWin() {
  let btn1;
  let btn2;
  let btn3;
  
  //check rows
  for(let i = 0; i < 3; i++) {
    btn1 = document.getElementById(`${i}0`);
    btn2 = document.getElementById(`${i}1`);
    btn3 = document.getElementById(`${i}2`);
    checkForWinIn(btn1, btn2, btn3);
      
  }
  //check columns
  for(let i = 0; i < 3; i++) {
    btn1 = document.getElementById(`0${i}`);
    btn2 = document.getElementById(`1${i}`);
    btn3 = document.getElementById(`2${i}`);
    checkForWinIn(btn1, btn2, btn3);
      
  }
  //Check diagonally
  btn1 = document.getElementById(`00`);
  btn2 = document.getElementById(`11`);
  btn3 = document.getElementById(`22`);
  checkForWinIn(btn1, btn2, btn3);

  btn1 = document.getElementById(`20`);
  btn2 = document.getElementById(`11`);
  btn3 = document.getElementById(`02`);
  checkForWinIn(btn1, btn2, btn3);
}
function checkForWinIn(b1, b2, b3) {
  if((b1.innerText != "") && b1.innerText == b2.innerText && b2.innerText == b3.innerText) {
    alert(`${b1.innerText} is the winner!`);
  }
  return;
}
