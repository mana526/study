### JavaScriptの勉強
- 教材：https://www.udemy.com/share/105zPc3@U4a2ntWymewEqPjAreKnuYOC0jhvZKVetd_jSte-Ucp2Y3R7nPC1zr5mt8A_Svru9A==/

#### 2024/12/26
*セクション２４　DOM入門*
- 要素取得：
  - idで取得：document.getElementById
- Element作成：document.createElement("div")
- 親要素の中に入れる：親要素.appendChild(子要素);
- 要素のスタイルを操作：要素.style.color = 'purple'/要素.style.backgroundColor = 'red'　
  - キャメルケースでスタイルを指定。

#### 2024/12/27
- DOMイベント
  - インラインイベント　→ html要素内に直接イベントをかく　例）<button onclick="alert('クリック！')"></button>
    - インラインイベントは同じイベントを使いたい時に使い回せない。
  - addEventListener('イベント', function(){})はコールバック関数を引数に渡せるので、使い回し◎

#### 2024/12/28
- DOMイベント（formでの使用）
  - submitイベントでformの内容を送信。
  - submitイベントにはデフォルトで値を送信して画面をリロードするようになっている。
    この動作を止めるために、event.preventDefault()を使う。
  - form内のinput要素の値を取得する時には、form.elements.(input要素のname).valueで取得できる。

  - changeイベント　→　テキストのフォーカスが外れて、変更があった場合に発火。
  - inputイベント　→　テキストに値が打ち込まれるたびに発火。

  - イベントのバブリング
    - 親子関係にある要素で、子の要素にイベントを設定して、親にも設定している場合、子要素のイベントが発火した後に勝手に親要素のイベントも発火する現象。
    - eventオブジェクト.stopPropagationを使うと止めることができる。
