// IDの取得
let introDivWrapper=document.getElementById("introDivWrapper");

// for文を用いて9回表示
for (i=0; i<9; i++){

  // htmlの内容をJSに書き込み
let x=
  `<main class= "main">`
    +`<div>`
      +`<p class="name">1.高原知顕</p>`
    +`</div>`
  +`<div class="profile-pic">`
    +`<img class="image-tomoaki" id="imageTomoaki" src="tomoaki.jpg" alt="ともあきの写真">`
  +`</div>`
  
  +`</div>`
  +`<div class="introduction" id="introduction">`
    +`<ul class="introduction-content">`
      +`<li class="option">・出身地：東京都</li>`
      +`<li class="option">・生年月日：2002年2月10日</li>`
      +`<li class="option">・星座：水瓶座</li>`
      +`<li class="option">・血液型：不明</li>`
    +`</ul>`
  +`</div>`
  +`<div class="button">`
    +`<div class="back-button" id="backButton" onclick="check(${i})"> 
    <p class="box-name">戻る</p>`
    +`</div>`
    +`<div class="next-button" id="nextButton" onclick="check(${i})">`
      +`<p class="box-name">次へ</p>`
    +`</div>`
  +`<div class="button-2">`
    +`<div class="back-button-2" id="backButton2" onclick="check(${i})">`
    +`<p class="box-name">戻る</p>`
    +`</div>`
    +`<div class="next-button-2" id="nextButton2" onclick="check(${i})">`
    +`<p class="box-name">次へ</p>`
    +`</div>`
  +`</main>`;

  // 表示
introDivWrapper.insertAdjacentHTML('afterbegin',x);

// check関数、34－37
function check(number){
  // ID取得
  let backButton=document.getElementById(`backButton${number}`);
  let nextButton=document.getElementById(`nextButton${number}`);
  let backButton2=document.getElementById(`backButton2${number}`);
  let nextButton2=document.getElementById(`nextButton2${number}`);
  let introduction=document.getElementById(`introduction${number}`);
  let imageTomoaki=document.getElementById(`imageTomoaki${number}`);
}


// introduction.style.display="none";

// 次へを押したとき
nextButton.onclick=function(){
  backButton.style.display="none";
  nextButton.style.display="none";
  nextButton2.style.display="block";
  backButton2.style.display="block";
  imageTomoaki.style.display="none";
  introduction.style.display="block";
}

// 戻るを押したとき
backButton2.onclick=function(){
    backButton2.style.display="none";
    nextButton2.style.display="none";
    nextButton.style.display="block";
    backButton.style.display="block";
    introduction.style.display="none";
    imageTomoaki.style.display="block";
}
}
