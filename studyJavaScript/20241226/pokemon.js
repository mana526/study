// 書いたコード０２
//ポケモン図鑑を作る

const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

for (let i = 1; i <= 151; i++) {
  const div = document.createElement('div');
  div.classList.add('pokemon');
  const image = document.createElement('img');
  image.src = `${baseURL}/${i}.png`;
  const span = document.createElement('span');
  span.innerText = `#${i}`;

  const wrap = document.querySelector('#wrapper');
  wrap.appendChild(div);
  div.appendChild(image);
  div.appendChild(span);

}
