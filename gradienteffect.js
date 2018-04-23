$(".gradient").mousemove(function( event ) {
  var w = $(this).width(),
      pct = 360*(+event.pageX)/w,
      bg = "linear-gradient(" + pct + "deg,#4ac1ff,#795bb0)";
      $(".gradient").css("background-image", bg);
});
