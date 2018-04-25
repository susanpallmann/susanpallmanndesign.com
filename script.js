// function declarations
  // adds link to cells based on ID.
  function parallaxScroll() {
    var scroll_amount = 0;
    $("div.gallery_img").each(function() {
      var scrollAmount = ($(this).height()*-0.5 * ($(this).offset().top - $(window).scrollTop())/$(window).height());
      $(this).css("background-position", "0px " + scrollAmount + "px");
    });
  }
  
  function scrollTo(element) {
    var thisAnchor = $("#" + element + "");
    $("html,body").animate({
      scrollTop: thisAnchor.offset().top
    }, "slow");
  }
  
  function addLink() {
    var thisId = this.getAttribute("id");
    if($("#" + thisId).children().first().is(":visible")) {
      switch (thisId) {
        case "cellA":
          window.location="http://www.susanpallmanndesign.com/best-foot-forward.html"
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
    }
  }

window.onload = function() {
  // variable declarations
  var title = document.getElementById("username");
  var cells = document.getElementsByClassName("gallery_img");
  var downArrow = document.getElementsByClassName("downarrow")[0];
  var body = document.getElementById("body");
  var cell_height = document.getElementById("cellA").offsetHeight;
  var i;
  parallaxScroll();
  //body.style.backgroundPosition = "0px " + 0.5*window.scrollY + "px";
  
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
  
  window.addEventListener("scroll", parallaxScroll);
  
  downArrow.addEventListener("mouseclick", function() {
    scrollTo("gallery");
  });

  // Add event listener for cells
  for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", addLink, false);
  }
  
};
