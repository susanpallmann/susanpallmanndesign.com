$(".gradient").mousemove(function( event ) {
  var h = $(this).height(),
      pct = 360*(+event.pageY)/h,
      bg = "linear-gradient(" + pct + "deg,#FF6666,#FF9966)";
      $(".gradient").css("background-image", bg);
});
