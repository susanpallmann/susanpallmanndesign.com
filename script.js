window.onload = function() {
  var title = document.getElementById("username");
  title.addEventListener("mousemove", function(e) {
    var mouse_y = e.clientY;
    var mouse_x = e.clientX;
    alert(mouse_y);
    title.style.marginTop = mouse_y;
    title.style.marginLeft = mouse_x;
  });
};
