// 以下必須項目
let backButton=document.getElementById("backButton");
let nextButton=document.getElementById("nextButton");
let backButton2=document.getElementById("backButton2");
let nextButton2=document.getElementById("nextButton2");
let introduction=document.getElementById("introduction");
let tomoakiImage=document.getElementById("imageTomoaki");


nextButton.onclick=function(){
  backButton2.style.display="block";
  nextButton2.style.display="block";
  nextButton.style.display="none";
  backButton.style.display="none";
  introduction.style.display="block";
  imageTomoaki.style.display="none";
}

backButton2.onclick=function(){
  backButton2.style.display="none";
  nextButton2.style.display="none";
  nextButton.style.display="block";
  backButton.style.display="block";
  introduction.style.display="none";
  imageTomoaki.style.display="block";

}

// 以上必須項目。以下必須項目からいじってしまっているのでコメントアウトで失礼します。


// let backButton=document.getElementById(`backButton${i}`);
// let nextButton=document.getElementById(`nextButton${i}`);
// let backButton2=document.getElementById(`backButton2${i}`);
// let nextButton2=document.getElementById(`nextButton2${i}`);
// let introduction=document.getElementById(`introduction${i}`);
// let tomoakiImage=document.getElementById(`imageTomoaki${i}`);

// let introDivWrapper=document.getElementById("introDivWrapper");

// let x=
//   `<main class= "main">`
//     +`<div>`
//       +`<p class="name">1.高原知顕</p>`
//     +`</div>`
//   +`<div class="profile-pic">`
//     +`<img class="image-tomoaki" id="imageTomoaki" src="tomoaki.jpg" alt="ともあきの写真">`
//   +`</div>`
  
//   +`</div>`
//   +`<div class="introduction" id="introduction">`
//     +`<ul class="introduction-content">`
//       +`<li class="option">・出身地：東京都</li>`
//       +`<li class="option">・生年月日：2002年2月10日</li>`
//       +`<li class="option">・星座：水瓶座</li>`
//       +`<li class="option">・血液型：不明</li>`
//     +`</ul>`
//   +`</div>`
//   +`<div class="button">`
//     +`<div class="back-button" id="backButton"> 
//     <p class="box-name">戻る</p>`
//     +`</div>`
//     +`<div class="next-button" id="nextButton">`
//       +`<p class="box-name">次へ</p>`
//     +`</div>`
//   +`<div class="button-2">`
//     +`<div class="back-button-2" id="backButton2">
//     <p class="box-name">戻る</p>`
//     +`</div>`
//     +`<div class="next-button-2" id="nextButton2">
//     <p class="box-name">次へ</p>`
//     +`</div>`
//   +`</main>`;

// introDivWrapper.insertAdjacentHTML('afterbegin',x);




// let backButton=document.getElementById(`backButton`)
// let nextButton=document.getElementById(`nextButton`)
// let backButton2=document.getElementById(`backButton2`)
// let nextButton2=document.getElementById(`nextButton2`)
// let introduction=document.getElementById(`introduction`)
// let tomoakiImage=document.getElementById(`imageTomoaki`)


// introduction.style.display="none";

// nextButton.onclick=function(){
//   backButton.style.display="none";
//   nextButton.style.display="none";
//   nextButton2.style.display="block";
//   backButton2.style.display="block";
//   imageTomoaki.style.display="none";
//   introduction.style.display="block";
// }


// backButton2.onclick=function(){
//     backButton2.style.display="none";
//     nextButton2.style.display="none";
//     nextButton.style.display="block";
//     backButton.style.display="block";
//     introduction.style.display="none";
//     imageTomoaki.style.display="block";
// }

