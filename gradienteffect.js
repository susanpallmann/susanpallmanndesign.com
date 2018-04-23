$(".gradient").mousemove(function( event ) {
  var w = $(this).width(),
      pct = 360*(+event.pageY)/w,
      bg = "linear-gradient(" + pct + "deg,#FF6666,#FF9966)";
      $(".gradient").css("background-image", bg);
});
