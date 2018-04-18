window.onload = function() {
  // variable declarations
  var title = document.getElementById("username");
  var cells = document.getElementsByClassName("gallery_img");
  var body = document.getElementById("body");
  var i;
  
  window.addEventListener('scroll', function(e) {
    body.style.background-position-y = 0.5*window.scrollY;
  });
  
  // function declarations
  // adds link to cells based on ID.
  var addLink = function() {
    var thisId = this.getAttribute("id");
    switch (thisId) {
      case "cellA":
        var percent = (window.scrollY/document.documentElement.scrollHeight) * 100;
        alert(percent);
        //window.location="http://www.susanpallmanndesign.com/best-foot-forward.html"
        break;
      case "cellB":
        window.location="http://www.susanpallmanndesign.com/goodwill.html";
        break;
      case "cellC":
        window.location="http://www.susanpallmanndesign.com/2-truths-and-a-lie.html";
        break;
      case "cellD":
        window.location="http://www.susanpallmanndesign.com/mrs-eaves.html";
        break;
      case "cellE":
        window.location="http://www.susanpallmanndesign.com/futura.html";
        break;
      case "cellF":
        window.location="http://www.susanpallmanndesign.com/cardboard-ukulele.html";
        break;
      case "cellG":
        window.location="http://www.susanpallmanndesign.com/4th-symphony.html";
        break;
      case "cellH":
        window.location="http://www.susanpallmanndesign.com/paciterra.html";
        break;
      default:
        window.location="http://www.susanpallmanndesign.com/process-journal.html";
    }
  };
  
  // Add event listener for title
  title.addEventListener("mousemove", function(e) {
    // mouse_y is the y-value within the title element; ranges from 0 (top) to height of title (left)
    // mouse_x is the x-value within the title element; ranges from 0 (left) to width of title (right)
    var mouse_y = e.clientY;
    var mouse_x = e.clientX;
    // example code: sets padding to the x and y position of mouse, pushing the title towards wherever the mouse is
    // title.style.paddingTop = String(mouse_y) + "px";
    // title.style.paddingLeft = String(mouse_x) + "px";
  });

  // Add event listener for cells
  for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", addLink, false);
  }
  
};
