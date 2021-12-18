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