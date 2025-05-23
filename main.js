$(document).ready(function () {
  var flame = $("#flame");
  var txt = $("h1");

  flame.on("click", function () {
    flame.removeClass("burn").addClass("puff");
    $(".smoke").each(function () {
      $(this).addClass("puff-bubble");
    });

    $("#glow").remove();
    txt.hide().html("Happy Birthday my beautiful Bubu!").delay(750).fadeIn(300);
    $("#candle").animate({ opacity: ".5" }, 100);

    // 🎇 Confetti Celebration Sequence
    setTimeout(() => {
      // Central burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 500);

    setTimeout(() => {
      // Left side burst
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
      });
    }, 900);

    setTimeout(() => {
      // Right side burst
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
      });
    }, 1300);

    setTimeout(() => {
      // Final top rain
      confetti({
        particleCount: 120,
        spread: 150,
        startVelocity: 25,
        origin: { y: 0 },
      });
    }, 1700);

    setTimeout(() => {
      $("#star-message").fadeIn();
      $(".star").each(function (i) {
        $(this).delay(i * 200).queue(function (next) {
          $(this).css("opacity", 1);
          next();
        });
      });
    }, 2500);
  });
});
