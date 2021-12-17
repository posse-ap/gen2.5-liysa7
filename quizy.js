let pictureAlley =[
  'https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png',
  'https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png',
  'https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png',
  'https://d1khcm40x1j0f.cloudfront.net/quiz/ee645c9f43be1ab3992d121ee9e780fb.png',
  'https://d1khcm40x1j0f.cloudfront.net/quiz/6a235aaa10f0bd3ca57871f76907797b.png',
  'https://d1khcm40x1j0f.cloudfront.net/quiz/0b6789cf496fb75191edf1e3a6e05039.png',
  'https://d1khcm40x1j0f.cloudfront.net/quiz/23e698eec548ff20a4f7969ca8823c53.png',
  'https://d1khcm40x1j0f.cloudfront.net/quiz/50a753d151d35f8602d2c3e2790ea6e4.png',
  'https://d1khcm40x1j0f.cloudfront.net/words/8cad76c39c43e2b651041c6d812ea26e.png',
  'https://d1khcm40x1j0f.cloudfront.net/words/34508ddb0789ee73471b9f17977e7c9c.png'
];

let optionTextArray = [
  ['たかなわ','こうわ','たかわ'],
  ['かめいど','かめど','かめと'],
  ['こうじまち','かゆまち','おかとまち'],
  ['おなりもん','ごせいもん','おかどもん'],
  ['とどろき','たたら','たたりき'],
  ['しゃくじい','いじい','せきこうい'],
  ['ぞうしき','ざっしき','ざっしょく'],
  ['おかちまち','みとちょう','ごしろちょう'],
  ['ししぼね','しこね','ろっこつ'],
  ['こぐれ','こしゃく','こばく'],
];


// // 正解の選択肢
// document.getElementById("correct").addEventListener("click", function() {

//   this.classList.add ("correctAnswer");
//   let area= document.getElementById("correct_area");
//   area.style.display= "block";

//   // 一回クリックでロックする
//   let nonClick = document.getElementById("cannotclick");
//   nonClick.style.pointerEvents="none";
// })

// // 不正解の選択肢1
// document.getElementById("incorrect").addEventListener("click",function() {

//   // 不正解の選択肢を赤くする
//   this.classList.add('incorrectAnswer');
//   // 正解の選択肢を青くする
//   document.getElementById("correct").classList.add('correctAnswer');

//   let area= document.getElementById("incorrect_area");
//   area.style.display= "block";


//   // 一回クリックでロックする
//   let nonClick = document.getElementById("cannotclick");
//   nonClick.style.pointerEvents="none";
  

// })

// // 不正解の選択肢2
// document.getElementById("incorrect2").addEventListener("click",function() {
//   // 不正解の選択肢を赤くする
//   this.classList.add('incorrectAnswer');
//     // 正解の選択肢を青くする
//     document.getElementById("correct").classList.add('correctAnswer');

//     let area= document.getElementById("incorrect_area");
//   area.style.display= "block";

//   // 一回クリックでロックする
//   let nonClick = document.getElementById("cannotclick");
//   nonClick.style.pointerEvents="none";
  
// })

for (let i=0; i<10; i++){

let quizDiv=`<div id="q1_${i+1}">`
+`<h2 class="question">1.この地名は何て読む？</h2>`
+`<div class="img">`
+`<img src= ${pictureAlley[i]}>`
+`</div>`
+`<ul id="cannotclick_${i+1}">`
+`<li class="option" id="incorrect_${i+1}">${optionTextArray[i][1]}</li>`
+`<li class="option" id="incorrect2_${i+1}">${optionTextArray[i][2]}</li>`
+`<li class="option" id="correct_${i+1}">${optionTextArray[i][0]}</li>`
+`</ul>`
+`<div class="area" id="correct_area_${i+1}">`
+`<p class="titleLine">正解！</p>`
+`<p class="ansText">正解は「たかなわ」です！</p>`
+`</div>`
+`<div class="area" id="incorrect_area_${i+1}">`
+`<p class="titleLine2">不正解！</p>`
+`<p class="ansText" id="ansText">正解は「たかなわ」です！</p>`
+`</div>`
+`</div>`

document.getElementById("quizDivWrapper").insertAdjacentHTML('beforeend',quizDiv);
};