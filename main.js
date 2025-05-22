$(document).ready(function () {
  var flame = $("#flame");
  var txt = $("h1");

  flame.on("click", function () {
    flame.removeClass("burn").addClass("puff");
    $(".smoke").each(function () {
      $(this).addClass("puff-bubble");
    });

    $("#glow").remove();
    txt.hide().html("Happy Birthday my beautiful Bubu").delay(750).fadeIn(300);
    $("#candle").animate({ opacity: ".5" }, 100);

    // Show images
    $("#birthday-images").fadeIn(800);

    // Confetti burst
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  });
});
