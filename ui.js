$(document).ready(function () {
    /* Calling functions on load & setting some global variables */

    /* Set Global Variables */
    // Retrieves height of viewport
    globalViewportHeight = getViewportHeight();
    // Retrieves full height of page, including what's not visible
    globalPageHeight = getPageHeight();
    // Tracks the current pattern under the ligature
    pattern = 1;
    // Retrieves screen width (there's no horizontal scrolling so this is both viewport and window width)
    screenWidth = screen.width;
    // Variables for tracking mouse direction trajectory
    traj1 = [null, null];
    traj2 = [null, null];
    // Pre-programmed circle points for hero header.
    points = [
        [0.5, 0], 
        [0.58, 0.01], 
        [0.67, 0.03], 
        [0.73, 0.06],
        [0.80, 0.11], 
        [0.85, 0.15], 
        [0.89, 0.21], 
        [0.92, 0.25],
        [0.96, 0.32], 
        [0.98, 0.40], 
        [1, 0.5], 
        [0.98, 0.60],
        [0.96, 0.68], 
        [0.92, 0.75], 
        [0.89, 0.79], 
        [0.85, 0.85],
        [0.80, 0.89], 
        [0.73, 0.94], 
        [0.67, 0.97], 
        [0.58, 0.99],
        [0.5, 1], 
        [0.42, 0.99], 
        [0.33, 0.97], 
        [0.27, 0.94],
        [0.20, 0.89], 
        [0.15, 0.85], 
        [0.11, 0.79], 
        [0.08, 0.75],
        [0.04, 0.68], 
        [0.02, 0.60], 
        [0, 0.5], 
        [0.02, 0.40],
        [0.04, 0.32], 
        [0.08, 0.25], 
        [0.11, 0.21], 
        [0.15, 0.15],
        [0.20, 0.11], 
        [0.27, 0.06], 
        [0.33, 0.03], 
        [0.42, 0.01]
    ];

    /* Calling functions */
    //     Checks URL for sort instructions, acts accordingly
    sortPortfolio();
    //     Start parallax for hero headers
    heroParallax();
    //     Start parallax on images (on the homepage)
    parallax();
    //     Generate circle on homepage
    generateCirclePoints();

    /* Read More Functionality */
    // Expands or collapses panels with this switch in them
    // When the user clicks on an expand/collapse toggle
    $('.read-more').click(function toggleView() {
        var button = $(this);
        var container = $(this).parents('.container');

        //jQuery default slideToggle effect
        container.find('.expandable').slideToggle("fast");

        //If it's already checked
        if (button.attr('aria-checked') === 'true') {
            //Uncheck it, update the icon, expand text
            button.attr('aria-checked', 'false');
            button.html("View More ▼");
            container.find('.expandable').addClass('collapsed');
        } else {
            //If it is not checked, check it, update the icon, collapse text
            button.attr('aria-checked', 'true');
            button.html("View Less ▲");
            container.find('.expandable').removeClass('collapsed');
        }
    });

    /* Accessibility Concern - Enter/Space input in place of clicking */
    $('.read-more').keydown(function (e) {
        var code = e.which;
        // 13 = Return, 32 = Space
        if ((code === 13) || (code === 32)) {
            $(this).click();
        }
    });

    //Gallery widget functionality
    $('.gallery-right').click(function () {
        var button = $(this);
        var gallery = button.parents('.gallery');
        var galleryNum = parseInt(gallery.attr('data-img-num'));
        var currentImg = gallery.find('.gallery-img');
        var imgNum = parseInt(currentImg.attr('data-current-img'));
        if (gallery.hasClass('gallery-anim')) {
            currentImg.animate({ 'opacity': '0' }, 100);
            if (imgNum === galleryNum) {
                imgNum = 1;
            } else {
                imgNum++;
            }
            currentImg
                .delay(100)
                .queue(function (next) { $(this).attr('data-current-img', imgNum); next(); })
                .animate({ 'opacity': '1' }, 400);
        } else {
            if (imgNum === galleryNum) {
                imgNum = 1;
            } else {
                imgNum++;
            }
            currentImg.attr('data-current-img', imgNum);
        }
    });

    $('.gallery-left').click(function () {
        var button = $(this);
        var gallery = button.parents('.gallery');
        var galleryNum = parseInt(gallery.attr('data-img-num'));
        var currentImg = gallery.find('.gallery-img');
        var imgNum = parseInt(currentImg.attr('data-current-img'));
        if (gallery.hasClass('gallery-anim')) {
            currentImg.animate({ 'opacity': '0' }, 100);
            if (imgNum === 1) {
                imgNum = galleryNum;
            } else {
                imgNum--;
            }
            currentImg
                .delay(100)
                .queue(function (next) { $(this).attr('data-current-img', imgNum); next(); })
                .animate({ 'opacity': '1' }, 400);
        } else {
            if (imgNum === 1) {
                imgNum = galleryNum;
            } else {
                imgNum--;
            }
            currentImg.attr('data-current-img', imgNum);
        }
    });

    $('.gallery-right').keydown(function (e) {
        var code = e.which;
        // 13 = Return, 32 = Space
        if ((code === 13) || (code === 32)) {
            $(this).click();
        }
    });

    $('.gallery-left').keydown(function (e) {
        var code = e.which;
        // 13 = Return, 32 = Space
        if ((code === 13) || (code === 32)) {
            $(this).click();
        }
    });

    
    /* Ligature Hover Function */
    $('body').on('mouseleave', 'header .sp-icon', function() {
        // Resets the pattern if the maximum is reached
        if (pattern < 3) {
            pattern++;
        } else {
            pattern = 1;
        }
        // Change the pattern url based on the outcome of the previous variable manipulation
        switch (pattern) {
            case 1:
                $('header').find('.pattern-gif').attr('xlink:href', '/images/Pattern 1.gif');
                break;
            case 2:
                $('header').find('.pattern-gif').attr('xlink:href', '/images/Pattern 2.gif');
                break;
            case 3:
                $('header').find('.pattern-gif').attr('xlink:href', '/images/Pattern 3.gif');
                break;
            default:
                $('header').find('.pattern-gif').attr('xlink:href', '/images/Pattern 1.gif');
        }
    });

    /* Ligature Hover Function (Footer Version) */
    $('body').on('mouseleave', 'footer .sp-icon', function() {
        // Resets the pattern if the maximum is reached (it's 2 here because the third pattern doesn't read well against a dark background)
        if (pattern < 2) {
            pattern++;
        } else {
            pattern = 1;
        }
        // Change the pattern url based on the outcome of the previous variable manipulation
        switch (pattern) {
            case 1:
                $('footer').find('.pattern-gif').attr('xlink:href', '/images/Pattern 1.gif');
                break;
            case 2:
                $('footer').find('.pattern-gif').attr('xlink:href', '/images/Pattern 2.gif');
                break;
            default:
                $('footer').find('.pattern-gif').attr('xlink:href', '/images/Pattern 1.gif');
        }
    });

    /* Ligature Click Function */
    $('body').on('click', '.mark', function() {
        //If on the homepage
        if (location.pathname == "/" || location.pathname == "/index.html") { // Change to this version on the real site.
        //if (location.pathname == "/stage.susanpallmanndesign.com/" || location.pathname == "/stage.susanpallmanndesign.com/index.html") { // Change to this version on the stage site.
            // Retrieve current sorting instructions from URL
            var sort = getParameterByName('sort');
            // If there aren't any sort instructions
            if (!sort) {
                // Scroll to top of page rather than refreshing
                $("html,body").animate({
                    scrollTop: $("body").offset().top - $("header").height()
                }, "slow");
                // If there are filters in place
            } else {
                // Navigate to the homepage without filters
                window.location.assign("https://www.susanpallmanndesign.com/");
            }
            // If not on the homepage
        } else {
            // Navigate to the homepage
            window.location.assign("https://www.susanpallmanndesign.com/");
        }
    });

    /* Hamburger Menu Animation */
    $('body').on('click', '#top_hamburger', function() {
        // If the animation is complete
        if ($(this).hasClass("animcomplete")) {
            // Set to incomplete
            $(this).removeClass("animcomplete");
            // Mark closed
            $(this).addClass("closed");
            // Toggle dropdown
            $("#dropdown").slideToggle("fast");
            $('#dropdown').find('.expandable').addClass('collapsed');
            // Set delay (for CSS animation)
            setTimeout(function () {
                // Remove closed
                $("#top_hamburger").removeClass("closed");
            }, 400);
        } else {
            // Mark open
            $(this).addClass("open");
            // Toggle dropdown
            $('#dropdown').find('.expandable').removeClass('collapsed');
            $("#dropdown").slideToggle("fast");
            // Set delay (for CSS animation)
            setTimeout(function () {
                // Remove open
                $("#top_hamburger").removeClass("open");
                // Mark complete
                $("#top_hamburger").addClass("animcomplete");
            }, 400);
        }
    });
});

/* Checks URL for search parameters */
function getParameterByName(name, url) {
    // Gets current URL
    if (!url) url = window.location.href;
    // Some regular expression manipulation to get to the parameter we're looking for
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    // Failsafes
    if (!results) return null;
    if (!results[2]) return '';
    // Returns the parameter information
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/* Sorts Portfolio */
function sortPortfolio() {
    // Retrieves sort parameter
    var sort = getParameterByName('sort');
    // If there isn't a sort instruction
    if (!sort) {
        // Assumes to view all
        $('.tag').removeClass('selected');
        $('.tag-all').addClass('selected');
        return null;
        // If there is a sort instruction
    } else {
        // Hide all projects
        $('.project .column').parents('.project').removeClass('visible').css('display', 'none');
        // Show projects with the correct tag (marked as a class)
        $('.' + sort).parents('.project').addClass('visible').css('display', 'inline-block');
        // Unselect any of the tag options on the homepage
        $('.tag').removeClass('selected');
        // Select the correct tag option
        $('.tag-' + sort).addClass('selected');
    }
}

/* Returns the position user is scrolled to when called. Ensure this function is called when user has finished scrolling. */
function getScrollPosition() {
    var scrollPosition = $(window).scrollTop();
    return scrollPosition;
}

/* Returns the full height of the page, even past the viewport. Useful for determining percentage scrolled. */
function getPageHeight() {
    var pageHeight = $(document).height();
    globalPageHeight = pageHeight;
    return pageHeight;
}

/* Returns the viewport height. Useful for determining if something is visible or not as the user scrolls. */
function getViewportHeight() {
    var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    globalViewportHeight = viewportHeight;
    return viewportHeight;
}

/* Parallax effect on heros (project pages) */
function heroParallax() {
    if ($('#hero').length) {
        if ($('#hero').hasClass('gradient')) {
            $("#hero").mousemove(function (event) {
                var w = $(this).width(),
                    pct = 360 * (+event.pageX) / w, 
                    bg = "linear-gradient(" + pct + "deg,#FF6666,#F87C7C)";
                $("#hero").css('background-image', bg);
                
                // If this is our first time saving trajectories
                if (traj1[0] === null) {
                    // Just set them to the same values (we'll treat it as 0 movement, user never sees it anyway)
		            traj1 = [(event.pageX - $('.canvas').offset().left),(event.pageY - $('.canvas').offset().top)];
		            traj2 = [(event.pageX - $('.canvas').offset().left),(event.pageY - $('.canvas').offset().top)];
                // Otherwise
                } else {
                    // Move our previous newest trajectory (traj2) to the old trajectory position (traj1)
		            traj1 = traj2;
                    // And then update our newest trajectory position with the current mouse position
		            traj2 = [(event.pageX - $('.canvas').offset().left),(event.pageY - $('.canvas').offset().top)];
                }
                // Check dots to see if the new mouse location is within range of any of them
                checkDots();
		console.log('this ran 1');
            });
        } else {
            var hero = $('#hero');
            var heroOffset = hero.offset();
            var heroTop = heroOffset.top;
            var heroHeight = hero.height();
            var heroBottom = heroTop + heroHeight;
            var imageModifier = 200;
            var headlineModifier = 50;
            var scrollPosition = getScrollPosition();
            var bottomScrollPosition = scrollPosition + globalViewportHeight;
            var bottomOffset = bottomScrollPosition - heroBottom;
            if (bottomOffset < 0) {
                bottomOffset = 0;
            }
            $(window).scroll(function () {
                var scrollPosition = getScrollPosition();
                var bottomScrollPosition = scrollPosition + globalViewportHeight;
                if (heroBottom > scrollPosition) {
                    if (heroBottom < bottomScrollPosition) {
                        var percentScrolled = 1 - (((heroBottom + bottomOffset) - scrollPosition) / globalViewportHeight);
                        $('img.parallax').css('transform', 'translateY(-' + imageModifier * percentScrolled + 'px)');
                        $('#dramatic-headline').css('transform', 'translateY(' + headlineModifier * percentScrolled + 'px)');
                    }
                }
            });
        }
    }
}

/* Parallax effect on images (homepage) */
function parallax() {
    $('.imgParallax').each(function (index) {
        var image = $(this);
        var imageOffset = image.offset();
        var imageTop = imageOffset.top;
        var imageHeight = image.height();
        var imageBottom = imageTop + imageHeight;
        var parallaxModifier = 20;
        var scrollPosition = getScrollPosition();
        var bottomScrollPosition = scrollPosition + globalViewportHeight;
        var bottomOffset = bottomScrollPosition - imageBottom;
        if (bottomOffset < 0) {
            bottomOffset = 0;
        }
        $(window).scroll(function () {
            var scrollPosition = getScrollPosition();
            var bottomScrollPosition = scrollPosition + globalViewportHeight;
            if (imageBottom > scrollPosition) {
                if (imageBottom < bottomScrollPosition) {
                    var percentScrolled = 1 - (((imageBottom + bottomOffset) - scrollPosition) / globalViewportHeight);
                    image.css('background-position-y', (-10 + parallaxModifier * percentScrolled) + 'px');
                }
            }
        });
    });
}

/* Generate circle of points for homepage */
function generateCirclePoints() {
    // If the circle-bounds element exists (should only exist on homepage)
    if ($('.circle-bounds').length) {
        // Get size of bounding element
        let circleWidth = $('.circle-bounds').width();
        let circleHeight = $('.circle-bounds').height();
        // For each set of coordinates in the points array (see global variables)
        for (i = 0; i < points.length; i++) {
            // create dots multiplying the coordinates by the dimensions of the bounding element
            // we're also storing these values as custom attributes to let the dots come back to their original
            // position
            $('.circle-bounds').append(
                '<div class="dot" left="'
                + points[i][0]*circleWidth + 
                '"top="'
                + points[i][1]*circleHeight + 
                '"style="left:'
                + points[i][0]*circleWidth + 
                'px; top:'
                + points[i][1]*circleHeight + 
                'px"></div>'
            );
        }
    }
}

// Changes text from specified class to the next item in a switch case of options, replaces in the HTML
function alterText() {
    // We're using the class "open" to indicate whether the element should or shouldn't be animated (if the text changes
    // too much it feels weird, even if the user is triggering it a lot)
    if ($(".center h1").hasClass('open')) {
        // Retrieve current text from this element
        let centerText = $(".center h1.open").text();
        let newText;
        // Based on what text is currently set, change to the next thing in the list
        switch(centerText) {
          case 'create':
            newText = 'design';
            break;
          case 'design':
            newText = 'develop';
            break;
          case 'develop':
            newText = 'sketch';
            break;
          case 'sketch':
            newText = 'animate';
            break;
          default:
            newText = 'create';
            break;
        }
        // Remove "open" class so it can't be acted on again, hides the word to create a cool fade-out effect
        $(".center h1").removeClass('open').addClass('hidden');
        // Delay to allow the css transition time to work
        $(".center h1").delay(1000)
          .queue(function (next) { 
                // Change text to what was determined by the switch case
                $(this).text(newText)
                    next(); 
                })
          .delay(100)
          .queue(function (next) { 
                // Unhide element
                $(this).removeClass('hidden')
                    next(); 
                })
          .delay(800)
          .queue(function (next) { 
                // Allow for new events
                $(this).addClass('open');
                    next();
                });
    }
}

/* Determine mouse proximity to all dots */
function checkDots() {
    setTimeout(function(){
	console.log('this ran 2');
	$('.dot').each(function ( index ) {
            if ($(this).hasClass('inUse') === false) {
                // Captures snapshot of mouse trajectory so we're not constantly updating movement
				let captureTraj1 = traj1;
				let captureTraj2 = traj2;
                
                // Get position information about this specific dot, and calculate each side as well
				let dotPosition = $(this).offset();
				let dotWidth = $(this).width();
				let leftBound = dotPosition.left;
				let rightBound = dotPosition.left + dotWidth;
				let topBound = dotPosition.top;
				let bottomBound = dotPosition.top + dotWidth;
                
                // Editable variable that determines how far away the mouse can be to affect the dot
				let detectionRadius = 80;
                
                // If mouse is within range of the bounds expanded by the detection radius
				if (traj2[0] > -detectionRadius + leftBound && traj2[0] < detectionRadius + rightBound && traj2[1] > -detectionRadius + topBound && traj2[1] < detectionRadius + bottomBound) {
				    
                    // Gets how close to the dot the mouse is on all sides, converts to absolute value because it's a distance
				    let closeness = [Math.abs(leftBound - captureTraj2[0]), Math.abs(topBound - captureTraj2[1]), Math.abs(rightBound - captureTraj2[0]), Math.abs(bottomBound - captureTraj2[1])];
				    // Returns smallest value from the closeness array
                    Array.min = function( array ){
						return Math.min.apply( Math, array );
				    };
				    let minimum = Array.min(closeness);
                    // To get the "closeness modifier" we take the smallest distance value from above and divide it by the detection radius
                    // From there we subtract this ratio from 1 (because a higher number in this case would actually mean it is further away
                    // We're multiplying this calculation by itself to make the effect exponentially more noticeable, and again by 5 to make 
                    // it bigger overall
				    let closenessModifier = (1-(minimum/detectionRadius))*(1-(minimum/detectionRadius))*5;
                    
                    // Calls function to change the text of a specific span whenever the dots are moving
                    alterText();
                    
                    // Makes the moving dots grow/fade to enhance the effect by adding "large" class
				    $(this).addClass('inUse').addClass('large');
                    
				    // Calculate trajectory direction of the mouse from the captured values we grabbed earlier
                    // Multiplying this value by the closeness modifier so that dots closer to the mouse move further
				    let moveX = (traj2[0] - traj1[0])*closenessModifier;
				    let moveY = (traj2[1] - traj1[1])*closenessModifier;
                    
                    // Grabs existing values of dot position to use later when dots return to their original places, ensures they're integers
				    let exisTop = $(this).attr('top');
				    exisTop = parseInt(exisTop);
				    let exisLeft = $(this).attr('left');
				    exisLeft =  parseInt(exisLeft);
                    
                    // Change position value of the dot by adding our move values to the existing positions
				    $(this).css('left', (exisLeft + moveX) + 'px')
					       .css('top', (exisTop + moveY) + 'px')
                           // Delay to allow the transition effect in CSS to run its course
					       .delay(1000)
					       .queue(function (next) { 
                               // Return dots to their original positions we saved earlier
							   $(this).css('top', (exisTop) + 'px')
						              .css('left', (exisLeft) + 'px')
                                      // Removes large class, allowing dots to return to their original size/opacity as they move
						              .removeClass('large');
					           next(); 
					       })
                           // Delays again to allow transition of CSS again (.large has a longer transition than a typical .dot)
					       .delay(1500)
					       .queue(function (next) {
					           $(this).removeClass('inUse');
					           next(); 
					       })
				}
			}
		});
	}, 100);
}

//Listen for when the user scrolls and then finishes scrolling (that is, stopped scrolling for 250 milliseconds)
$(window).scroll(function () {
    if ($("#false-after").length) {
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function () {
            var scrollPosition = getScrollPosition();
            var pageHeight = getPageHeight();
            var viewportHeight = getViewportHeight();
            var newScrollMax = pageHeight - viewportHeight;
            var pageScrollPercentage = scrollPosition / newScrollMax;
            if (pageScrollPercentage > 0) {
                $("#false-after").css("transform", "scaleX(" + pageScrollPercentage + ")");
                $("#false-after").css("height", "4px");
            } else {
                $("#false-after").css("transform", "scaleX(" + pageScrollPercentage + ")");
                $("#false-after").css("height", "0px");
            }
            //Scroll timer value
        }, 100));
    } else {
    }
    /* Get locations of page bottom and an arbitrary height of each element */
    $('.animate-fade-in').each(function (i) {
        var fadeLocation = $(this).offset().top + 0.25 * ($(window).height());
        var windowBottom = $(window).scrollTop() + $(window).height();
        /* If the object is visible in the window, fade in */
        if (windowBottom > fadeLocation) {
            $(this).delay(150).animate({ 'opacity': '1' }, 600);
        }
    });
});
// end
