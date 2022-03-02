'use strict';

let turn = 0;
let previousTurn = 0;
const flag = [1, 1, 1, 1, 1, 1, 1, 1, 1];
const c = [];
const ox = [];
let count = 9;
const caseToWin = [0, 0, 0, 0, 0, 0, 0, 0];
let player1 = 0;
let player2 = 0;

for (let i = 1; i <= 9; i++) {
  c.push(document.querySelector('.c' + i));
}

const board = document.querySelector('.board');
const t = document.querySelector('.turn');
const p1Score = document.querySelector('.p1-score');
const p2Score = document.querySelector('.p2-score');
const reset = document.querySelector('.reset');

const logic = function () {
  if (
    (ox[0] === 1 && ox[1] === 1 && ox[2] === 1) ||
    (ox[3] === 1 && ox[4] === 1 && ox[5] === 1) ||
    (ox[6] === 1 && ox[7] === 1 && ox[8] === 1) ||
    (ox[0] === 1 && ox[3] === 1 && ox[6] === 1) ||
    (ox[1] === 1 && ox[4] === 1 && ox[7] === 1) ||
    (ox[2] === 1 && ox[5] === 1 && ox[8] === 1) ||
    (ox[0] === 1 && ox[4] === 1 && ox[8] === 1) ||
    (ox[2] === 1 && ox[4] === 1 && ox[6] === 1)
  ) {
    player1++;
    p1Score.textContent = player1;
    t.textContent = '🏆 Player1 win!';
    turn = -1;
    gray(1);
  } else if (
    (ox[0] === 2 && ox[1] === 2 && ox[2] === 2) ||
    (ox[3] === 2 && ox[4] === 2 && ox[5] === 2) ||
    (ox[6] === 2 && ox[7] === 2 && ox[8] === 2) ||
    (ox[0] === 2 && ox[3] === 2 && ox[6] === 2) ||
    (ox[1] === 2 && ox[4] === 2 && ox[7] === 2) ||
    (ox[2] === 2 && ox[5] === 2 && ox[8] === 2) ||
    (ox[0] === 2 && ox[4] === 2 && ox[8] === 2) ||
    (ox[2] === 2 && ox[4] === 2 && ox[6] === 2)
  ) {
    player2++;
    p2Score.textContent = player2;
    t.textContent = '🏆 Player2 win!';
    turn = -1;
    gray(2);
  } else if (count === 0) {
    t.textContent = '🔄 Match draw!';
    turn = -1;
    gray(-1);
  }
};

for (let i = 1; i <= 9; i++) {
  c[i - 1].addEventListener('click', function () {
    if (flag[i - 1]-- === 1) {
      if (turn === 0) {
        c[i - 1].textContent = 'o';
        ox[i - 1] = 1;
        c[i - 1].style.color = '#d82148';
        t.textContent = `Player2's turn....`;
        turn = 1;
        count--;
        logic();
      } else if (turn === 1) {
        c[i - 1].textContent = 'x';
        ox[i - 1] = 2;
        c[i - 1].style.color = '#555';
        t.textContent = `Player1's turn....`;
        turn = 0;
        count--;
        logic();
      }
    }
  });
}

reset.addEventListener('click', function () {
  turn = previousTurn === 0 ? 1 : 0;
  previousTurn = turn;
  count = 9;
  t.textContent = `Player1's turn....`;
  for (let i = 1; i <= 9; i++) {
    c[i - 1].textContent = '';
    flag[i - 1] = 1;
    ox.pop();
  }
});

const gray = function (j) {
  c[0].style.color = '#aaa';
  c[1].style.color = '#aaa';
  c[2].style.color = '#aaa';
  c[3].style.color = '#aaa';
  c[4].style.color = '#aaa';
  c[5].style.color = '#aaa';
  c[6].style.color = '#aaa';
  c[7].style.color = '#aaa';
  c[8].style.color = '#aaa';
  console.log('changed');
  if (ox[0] === j && ox[1] === j && ox[2] === j) {
    c[0].style.color = j === 1 ? '#d82148' : '#555';
    c[1].style.color = j === 1 ? '#d82148' : '#555';
    c[2].style.color = j === 1 ? '#d82148' : '#555';
  } else if (ox[2] === j && ox[4] === j && ox[6] === j) {
    c[2].style.color = j === 1 ? '#d82148' : '#555';
    c[4].style.color = j === 1 ? '#d82148' : '#555';
    c[6].style.color = j === 1 ? '#d82148' : '#555';
  } else if (ox[3] === j && ox[4] === j && ox[5] === j) {
    c[3].style.color = j === 1 ? '#d82148' : '#555';
    c[4].style.color = j === 1 ? '#d82148' : '#555';
    c[5].style.color = j === 1 ? '#d82148' : '#555';
  } else if (ox[6] === j && ox[7] === j && ox[8] === j) {
    c[6].style.color = j === 1 ? '#d82148' : '#555';
    c[7].style.color = j === 1 ? '#d82148' : '#555';
    c[8].style.color = j === 1 ? '#d82148' : '#555';
  } else if (ox[0] === j && ox[3] === j && ox[6] === j) {
    c[0].style.color = j === 1 ? '#d82148' : '#555';
    c[3].style.color = j === 1 ? '#d82148' : '#555';
    c[6].style.color = j === 1 ? '#d82148' : '#555';
  } else if (ox[1] === j && ox[4] === j && ox[7] === j) {
    c[1].style.color = j === 1 ? '#d82148' : '#555';
    c[4].style.color = j === 1 ? '#d82148' : '#555';
    c[7].style.color = j === 1 ? '#d82148' : '#555';
  } else if (ox[2] === j && ox[5] === j && ox[8] === j) {
    c[2].style.color = j === 1 ? '#d82148' : '#555';
    c[5].style.color = j === 1 ? '#d82148' : '#555';
    c[8].style.color = j === 1 ? '#d82148' : '#555';
  } else if (ox[0] === j && ox[4] === j && ox[8] === j) {
    c[0].style.color = j === 1 ? '#d82148' : '#555';
    c[4].style.color = j === 1 ? '#d82148' : '#555';
    c[8].style.color = j === 1 ? '#d82148' : '#555';
  }
};
