$(function() {
  $("#btn").mousedown(function() {
    $("h1").text("N高へようこそ！");
  });
  $("#btn").mouseup(function() {
    $("h1").text("Hello,World!");
  });
});