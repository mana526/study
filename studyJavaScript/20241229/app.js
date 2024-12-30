const p1 = {
  name: 'first-player',
  score: 0,
  button: document.querySelector('#button-first'),
  display: document.querySelector('#score-first')
}

const p2 = {
  name: 'second-player',
  score: 0,
  button: document.querySelector('#button-second'),
  display: document.querySelector('#score-second')
}

const resetButton = document.querySelector('#reset');
const h1 = document.querySelector('h1');
const select = document.querySelector('select');

let selectValue = 3;
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    player.display.textContent = player.score;
    if (player.score === selectValue) {
      isGameOver = true;
      player.display.classList.add('winner');
      opponent.display.classList.add('loser');

      const li = document.createElement('li');
      li.innerText = `${player.name}：${player.score} ー ${opponent.name}：${opponent.score}`;
      document.querySelector('#score-list').appendChild(li);
    }
  }
}
select.addEventListener('change', function () {
  // selectのvalueはstring型なのでnumber型に変換
  selectValue = parseInt(select.value);
  reset();
});

p1.button.addEventListener('click', function () {
  updateScore(p1, p2);
});
p2.button.addEventListener('click', function () {
  updateScore(p2, p1);
});

resetButton.addEventListener('click', reset);

function reset(){
  isGameOver = false;
  for (p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('winner', 'loser');
  }
}
