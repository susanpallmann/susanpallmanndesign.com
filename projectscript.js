function parallaxScroll() {
  var scroll_amount = 0;
  $("div.project_img").each(function() {
    var scrollAmount = ($(this).height()*-0.5 * ($(this).offset().top - $(window).scrollTop())/$(window).height());
    $(this).css("background-position", "0px " + scrollAmount + "px");
  });
}

window.onload = function() {
  parallaxScroll();
  window.addEventListener("scroll", parallaxScroll);
};
