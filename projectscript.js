function parallaxScroll() {
  var scroll_amount = 0;
  $("div.project_img").each(function() {
    var scrollAmount = ($(this).height()*-0.5 * ($(this).offset().top - $(window).scrollTop())/$(window).height());
    $(this).css("background-position", "0px " + scrollAmount + "px");
  });
}

function scrollTo(element) {
  var thisAnchor = $("#" + element + "");
  $("html,body").animate({scrollTop: thisAnchor.offset().top - $("header").height()}, "slow");
}

window.onload = function() {
  parallaxScroll();
  window.addEventListener("scroll", parallaxScroll);
  var upArrow = document.getElementsByClassName("uparrow")[0];
  var title = document.getElementById("username");
  
  title.addEventListener("mousemove", function() {
    scrollTo("body");
  });

  upArrow.addEventListener("click", function() {
    scrollTo("body");
  });
};
