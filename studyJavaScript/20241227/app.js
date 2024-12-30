const button = document.querySelector('#button');
const colorName = document.querySelector('h1');

button.addEventListener('click', function () {
  console.log("クリック！");
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const newColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = newColor;
  colorName.innerText = newColor;
})
