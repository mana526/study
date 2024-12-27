// 書いたコード０１
// ・100個のbutton要素を新規に作成
// ・button要素の中には何かしらのテキストを入れてください（何でもOK）
// ・各button要素はcontainerのIDを持つdivの中に追加してください

const div = document.querySelector('div');
console.log(div);
for (let i = 1; i <= 100; i++) {
  const button = document.createElement('button');
  button.innerText = 'Hey!!!!';
  div.appendChild(button);
}
