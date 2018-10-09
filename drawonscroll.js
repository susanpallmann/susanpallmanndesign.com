// Get the id of the <path> element and the length of <path>
var ligature = document.getElementById("ligature");
var ligature2 = document.getElementById("ligature2");
var length = ligature.getTotalLength();

// The start position of the drawing
ligature.style.strokeDasharray = length;
ligature2.style.strokeDasharray = length;

// Hide the ligature by offsetting dash. Remove this line to show the ligature before scroll draw
ligature.style.strokeDashoffset = length;
ligature2.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", myFunction);

function myFunction() {
var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var draw = length * scrollpercent;
  
  // Reverse the drawing (when scrolling upwards)
  ligature.style.strokeDashoffset = length - draw;
  ligature2.style.strokeDashoffset = length - draw;
}
$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('h2').css({
    opacity: function() {
      var elementHeight = $(this).height();
      return (elementHeight - scrollTop) / elementHeight;
    }
  });
});
