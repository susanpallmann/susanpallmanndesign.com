$(document).ready(function () {
    /* Coding's like riding a bike, right? */
    $('.ms-grid').mousedown(function(event) {
    switch (event.which) {
        case 1:
            console.log('Left mouse button is pressed');
            break;
        case 2:
            console.log('Middle mouse button is pressed');
            break;
        case 3:
            console.log('Right mouse button is pressed');
            break;
        default:
            console.log('Something went wrong');
        }
    });
});
