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
//Returns the position user is scrolled to when called. Ensure this function is called when user has finished scrolling.
function getScrollPosition () {
    var scrollPosition = $(window).scrollTop();
    console.log("getScrollPosition ran");
    return scrollPosition;
}
//Returns the full height of the page, even past the viewport. Useful for determining percentage scrolled.
function getPageHeight () {
    var pageHeight = $(document).height();
    console.log("getPageHeight ran");
    return pageHeight;
}
//Returns the viewport height. Useful for determining if something is visible or not as the user scrolls.
function getViewportHeight () {
    var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    console.log("getViewportHeight ran");
  return viewportHeight;
}
//Listen for when the user scrolls and then finishes scrolling (that is, stopped scrolling for 250 milliseconds)
$(window).scroll(function() {
  clearTimeout($.data(this, 'scrollTimer'));
  $.data(this, 'scrollTimer', setTimeout(function() {
    console.log("USER STOPPED SCROLLING");
    var scrollPosition = getScrollPosition();
    var pageHeight =  getPageHeight();
    var viewportHeight = getViewportHeight();
    console.log("called function variables correctly and they are" + scrollPosition + " " + pageHeight + " " + viewportHeight);
    var newScrollMax = pageHeight - viewportHeight;
    console.log(newScrollMax);
    var pageScrollPercentage = scrollPosition/newScrollMax;
    console.log(pageScrollPercentage);
    if (pageScrollPercentage > 0) {
    $("#false-after").css("transform", "scaleX(" + pageScrollPercentage + ")" );
    $("#false-after").css("height", "4px");
    } else {
    $("#false-after").css("transform", "scaleX(" + pageScrollPercentage + ")" );
    $("#false-after").css("height", "0px");
    }
    console.log("End function");
    //Scroll timer value
  }, 50));
});
