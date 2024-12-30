// asyncな関数は必ずpromiseを返す
// 関数が値を返せば、promiseはその値でresolveする
// 関数がエラーをthrowした場合、promiseはそのエラーでrejectする。
const sing = async () => {
  throw new Error('問題が起きました。');
  return 'ラララララ';
}
//singはpromiseを返すので、thenで繋げてreturnした値を引数で受け取ることができる。
sing()
  .then((data) => {
    console.log('成功！', data)
  })
  .catch((err) => {
    console.log('エラー！！！');
    console.log(err);
  })

// await
//asyncな関数の中でしか使えない。
// promiseがresolveかrejectするまでasync関数の実行を一時的に停止する
