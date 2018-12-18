window.onload = function() {
    /* Adjust these global variables */
    // Speed of hamburger animation (milliseconds). Should match CSS animation speed.
    hamburgerAnimSpeed = 400;
    /* End adjustable variables */
    
    /* Do not adjust these global variables */
    scrollValue = -100;
    screenWidth = screen.width;
    /* End global variables */
    
    $("#top_hamburger").click(function() {
        if ($(this).hasClass("animcomplete")) {
            $(this).removeClass("animcomplete");
            $(this).addClass("closed");
            $("#dropdown").css("transform", "TranslateY(-200px)");
            $("#dropdown").css("-webkit-transform", "TranslateY(-200px)");
            setTimeout(function() {
              $("#top_hamburger").removeClass("closed");
            }, hamburgerAnimSpeed);
        } else {
            $(this).addClass("open");
            $("#dropdown").css("transform", "TranslateY(0px)");
            $("#dropdown").css("-webkit-transform", "TranslateY(0px)");
            setTimeout(function() {
              $("#top_hamburger").removeClass("open");
              $("#top_hamburger").addClass("animcomplete");
            }, hamburgerAnimSpeed);
        }
    });
    $("#mark").click(function() {
        if (location.pathname == "/") {
            scrollToTop();
        } else {
            redirect("/");
        }
    });
};
function redirect(url) {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf("msie") !== -1) {
      var isInternetExplorer = true;
  } else {
      var isInternetExplorer = true;
  }
  var version = parseInt(userAgent.substr(4, 2), 10);
  
  if (isInternetExplorer && version < 9) {
    var link = document.createElement("a");
    link.href = url;
    document.body.appendChild(link);
    link.click();
  } else { 
     window.location.href = url; 
  }
}
function openNewTab(url) {
  var newTab = window.open(url, '_blank');
  newTab.focus();
}
