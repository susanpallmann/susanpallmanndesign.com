// Declaring global variables needed for page-load function.
var i;
var initial;
var box;
var box2;
var box3;
var initial;
var initial2;
var initial3;
var distance;
var movement;
var elementOffset;
var scrollTop;
var scrollInterval;

// Once page is loaded we can get the distance our parallax elements are from the top, which we'll make an unchanging variable.
window.onload = function() {
  box = $(".par");
  box2 = $(".par2");
  box3 = $(".par3");
  len = box.length;
  len2 = box2.length;
  len3 = box3.length;
  for (i=0; i<len; i++) {
    scrollTop = $(window).scrollTop();
    elementOffset = box.eq(i).offset().top;
    distance = (elementOffset - scrollTop);
    initial = distance;
  }
  for (i=0; i<len2; i++) {
    scrollTop = $(window).scrollTop();
    elementOffset = box2.eq(i).offset().top;
    distance = (elementOffset - scrollTop);
    initial2 = distance;
  }
  for (i=0; i<len3; i++) {
    scrollTop = $(window).scrollTop();
    elementOffset = box3.eq(i).offset().top;
    distance = (elementOffset - scrollTop);
    initial3 = distance;
  }
  
  scrollInterval = setInterval(parallax2, 15);
};

//Parallax effect only runs when scrolling.

//Creates a parallax effect by moving elements an increment of how far the element is from the top relative to the distance it was from the top of the screen to begin with.
function parallax2() {
  var i;
  var box = $(".par");
  var len = box.length;
  var box2 = $(".par2");
  var len2 = box2.length;
  var scrollTop;
  var distance;
  var movement;
  var elementOffset;
  for (i=0; i<len; i++) {
    scrollTop = $(window).scrollTop();
    elementOffset = box.eq(i).offset().top;
    distance = (elementOffset - scrollTop);
    movement = (distance - initial)/60;
    box.eq(i).css("top",movement + "px");
  }
  for (i=0; i<len2; i++) {
    scrollTop = $(window).scrollTop();
    elementOffset = box2.eq(i).offset().top;
    distance = (elementOffset - scrollTop);
    movement = (distance - initial2)/80;
    box2.eq(i).css("top",movement + "px");
  }
}
