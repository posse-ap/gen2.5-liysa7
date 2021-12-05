document.getElementById("correct").addEventListener("click", function() {
  // 正解の選択肢を青くする
  this.classList.add('correctAnswer');
  // 正解の選択肢を押したときのボックス表示
  let ansArea = document.createElement('div');
  ansArea.classList.add('area');
  document.getElementById('q1').appendChild(ansArea);
  let anstitle = document.createElement('p');
  let anstext = document.createElement('p');
  anstitle.innerHTML = '<p class="titleline">正解です！</p>'
  anstext.innerText ="正解は「たかなわ」です！";
  ansArea.appendChild(anstitle);
  ansArea.appendChild(anstext);
  // 一回クリックでロックする
  this.classList.add('pointerevent');
  
})