'use strict'

let pictureArray =[
  'https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png',
  'https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png',
  'https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png',
];

let optionTextArray =[
  ['たかなわ','こうわ','たかわ'],
  ['かめいど','かめと','かめど'],
  ['こうじまち','かゆまち','おかとまち'],
];


const answerNumber=3;


for (let i=0; i<3; i++){

let quizDiv=`<div id="q1_${i+1}">`
  +`<h2 class="question">${i+1}.この地名はなんて読む？</h2>`
  +`<div class="img">`
    +`<img src=${pictureArray[i]}>`
  +`</div>`
  +`<ul id="cannotClick_${i+1}">`
    +`<li class="option" id="option_${i+1}_1" onclick="check(${i+1},1)">${optionTextArray[i][1]}</li>`
    +`<li class="option" id="option_${i+1}_2" onclick="check(${i+1},2)">${optionTextArray[i][2]}</li>`
    +`<li class="option" id="option_${i+1}_3" onclick="check(${i+1},3)">${optionTextArray[i][0]}</li>`
  +`</ul>`
  +`<div class="area" id="correct_area_${i+1}">`
    +`<p class="titleLine">正解！</p>`
    +`<p class="ansText">正解は「${optionTextArray[i][0]}」です！</p>`
  +`</div>`
  +`<div class="area" id="incorrect_area_${i+1}">`
    +`<p class="titleLine2">不正解！</p>`
    +`<p class="ansText">正解は「${optionTextArray[i][0]}」です！</p>`
  +`</div>`
  +`</div>`

  // htmlに入れ込む
  document.getElementById("quizWrapper").insertAdjacentHTML('beforeend',quizDiv);
};

var check = function(questionNumber, optionNumber){
  let questionOptionNumber = document.getElementById("option_" + questionNumber + "_" + optionNumber);
  let alwaysAnswerNumber = document.getElementById("option_" + questionNumber + "_" + answerNumber);
  let click_invalidation = document.getElementById("cannotClick_" + questionNumber);

  click_invalidation.classList.add("click_invalidation"); //クリック不可


  if (optionNumber === answerNumber) {

    questionOptionNumber.classList.add("correctAnswer");
    const correctAnswerBox = document.getElementById("correct_area_" + questionNumber);
    correctAnswerBox.style.display = "block";
  
  } else {

    questionOptionNumber.classList.add("incorrectAnswer");
    alwaysAnswerNumber.classList.add("correctAnswer");
    const incorrectAnswerBox = document.getElementById("incorrect_area_" + questionNumber);
    incorrectAnswerBox.style.display = "block";
  }

} 