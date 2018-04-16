window.onload = function() {
  var title = document.getElementById("username");
  title.addEventListener("mousemove", function(e) {
    var mouse_y = e.clientY;
    var mouse_x = e.clientX;
    title.style.paddingTop = String(mouse_y) + "px";
    title.style.paddingLeft = String(mouse_y) + "px";
  });
};
