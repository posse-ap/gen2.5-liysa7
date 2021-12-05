// 正解の選択肢
document.getElementById("correct").addEventListener("click", function() {
  // 正解の選択肢を青くする
  this.classList.add('correctAnswer');
  
  let ansArea = document.createElement('div');
  // 正解の選択肢を押したときのボックス表示
  ansArea.classList.add('area');
  document.getElementById('q1').appendChild(ansArea);
  let ansText = document.createElement('p');
  let ansTitle = document.createElement('p');
  ansTitle.innerHTML = '<p class="titleLine">正解！</p>'
  ansText.innerHTML = '<p class="ansText">正解は「たかなわ」です！</p>'
  ansArea.appendChild(ansTitle);
  ansArea.appendChild(ansText);

  // 一回クリックでロックする
  this.classList.add('pointerevent');
})

// 不正解の選択肢1
document.getElementById("incorrect").addEventListener("click",function() {
  // 不正解の選択肢を赤くする
  this.classList.add('incorrectAnswer');
  // 正解の選択肢を青くする
  document.getElementById("correct").classList.add('correctAnswer');

  let ansArea = document.createElement('div');
  // 不正解の選択肢を押したときのボックス表示
  ansArea.classList.add('area');
  document.getElementById('q1').appendChild(ansArea);
  let ansText = document.createElement('p');
  let ansTitle = document.createElement('p');
  ansTitle.innerHTML = '<p class="titleLine2">不正解！</p>'
  ansText.innerHTML = '<p class="ansText">正解は「たかなわ」です！</p>'
  ansArea.appendChild(ansTitle);
  ansArea.appendChild(ansText);
})

// 不正解の選択肢2
document.getElementById("incorrect2").addEventListener("click",function() {
  // 不正解の選択肢を赤くする
  this.classList.add('incorrectAnswer2');
    // 正解の選択肢を青くする
    document.getElementById("correct").classList.add('correctAnswer');
})