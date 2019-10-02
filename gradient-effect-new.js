$(".gradient").mousemove(function( event ) {
  var w = $(this).width(),
      pct = 360*(+event.pageX)/w,
      bg = "linear-gradient(" + pct + "deg,#FF6666,#DCA1C4)";
      $(".gradient").css("background-image", bg);
});
