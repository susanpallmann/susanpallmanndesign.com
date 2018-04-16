window.onload = function() {
  var title = document.getElementById("username");
  title.addEventListener("mousemove", function(e) {
    // mouse_y is the y-value within the title element; ranges from 0 (top) to height of title (left)
    // mouse_x is the x-value within the title element; ranges from 0 (left) to width of title (right)
    var mouse_y = e.clientY;
    var mouse_x = e.clientX;
    // example code: sets padding to the x and y position of mouse, pushing the title towards wherever the mouse is
     title.style.paddingTop = String(mouse_y) + "px";
     title.style.paddingLeft = String(mouse_x) + "px";
  });
};
