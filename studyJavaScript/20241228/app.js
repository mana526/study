const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const userName = form.elements.username.value;
  const tweet = form.elements.tweet.value;

  const li = document.createElement('li');
  li.innerText = `${userName} -${tweet}`;
  list.appendChild(li);

  form.elements.username.value = '';
  form.elements.tweet.value = '';
})

// inputのイベント
const h2 = document.querySelector('h2');
const input = document.querySelector('#nameInput');
input.addEventListener('input', function () {
  h2.innerText = `Welcome, ${input.value}`;

  if (input.value == '') {
    h2.innerText = 'Enter your name';
  }
})
