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
