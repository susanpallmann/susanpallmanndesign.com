window.onload = function() {
  /* Adjust these global variables */
  // Speed of hamburger animation (milliseconds). Should match CSS animation speed.
  hamburgerAnimSpeed = 400;
  /* End adjustable variables */

  /* Do not adjust these global variables */
  scrollValue = -100;
  screenWidth = screen.width;
  pattern = 1;
  /* End global variables */

  $("#top_hamburger").click(function() {
    if ($(this).hasClass("animcomplete")) {
      $(this).removeClass("animcomplete");
      $(this).addClass("closed");
      $("#dropdown").css("transform", "TranslateY(-200px)");
      $("#dropdown").css("-webkit-transform", "TranslateY(-200px)");
      setTimeout(function() {
        $("#top_hamburger").removeClass("closed");
      }, hamburgerAnimSpeed);
    } else {
      $(this).addClass("open");
      $("#dropdown").css("transform", "TranslateY(0px)");
      $("#dropdown").css("-webkit-transform", "TranslateY(0px)");
      setTimeout(function() {
        $("#top_hamburger").removeClass("open");
        $("#top_hamburger").addClass("animcomplete");
      }, hamburgerAnimSpeed);
    }
  });
  $("#mark").click(function() {
    if (location.pathname == "/") {
      scrollToTop();
    } else {
      redirect("/");
    }
  });
  $('#sp-icon').mouseleave(function() {
    if (pattern < 3) {
      pattern++;
    } else {
      pattern = 1;
    }
    switch (pattern) {
      case 1:
        $('.pattern-gif').attr('xlink:href', 'images/Pattern 1.gif');
        break;
      case 2:
        $('.pattern-gif').attr('xlink:href', 'images/Pattern 2.gif');
        break;
      case 3:
        $('.pattern-gif').attr('xlink:href', 'images/Pattern 3.gif');
        break;
      default:
        $('.pattern-gif').attr('xlink:href', 'images/Pattern 1.gif');
    }
  });
};
