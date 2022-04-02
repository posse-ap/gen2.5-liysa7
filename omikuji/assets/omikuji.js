// var omikujiResult = [
//   "大吉",
//   "中吉",
//   "小吉",
//   "凶",
// ];

// $(function(){
//   $("#omikujiBtn").click(function(){
//     var result = omikujiResult[Math.floor( Math.random() * omikujiResult.length)];
//     $("#omikujiResult").html("<div class='omikujiResultInner'>"+ result + "</div>");
//   });
// });

var omikujiResult = [
  "大吉",
  "中吉",
  "小吉",
  "凶" 
];

$(function() {
  $("#omikujiBtn").click(function() {
    var result = omikujiResult[Math.floor( Math.random() * omikujiResult.length)];
    $("#omikujiResult").html("<div class='omikujiResultInner'>" + result + "</div>");
  });
});