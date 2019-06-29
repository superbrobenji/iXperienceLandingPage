var score = 0;
var total = 6;
var point = 1;
var highest = total * point;

function init() {
  sessionStorage.setItem("a1", "a");
  sessionStorage.setItem("a2", "c");
  sessionStorage.setItem("a3", "c");
  sessionStorage.setItem("a4", "a");
  sessionStorage.setItem("a5", "c");
  sessionStorage.setItem("a6", "d");
}

$(document).ready(function() {
  //hide questions
  $(".questionForm").hide();
  $(".Name").show();

  $(".Name #submit").click(function() {
    var name = $("#nameEntry").val();
    $("#subject-name").html(name);
    $(".Name").hide();
    $("#q1").show();
    return false;
  });
  //show 1st question

  $(".questionForm #submit").click(function() {
    current = $(this)
      .parents("form:first")
      .data("question");
    next =
      $(this)
        .parents("form:first")
        .data("question") + 1;
    $(".questionForm").hide();
    $("#q" + next + "").fadeIn(300);
    process("" + current + "");
    return false;
  });
});

function process(n) {
  var submitted = $("input[name=q" + n + "]:checked").val();
  if (submitted == sessionStorage.getItem("a" + n + "")) {
    score = score + point;
  }

  if (n == total) {
    $("#results").html(
      "<h3>Your score is: " +
        score +
        " out of " +
        highest +
        "!</h3><a href=../img/quiz.html>Take Quiz Again</a>"
    );
  }
  return false;
}

window.addEventListener("load", init, false);
