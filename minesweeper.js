let round;

$(document).ready(function () {
    prepareGame();
});

/* Player Actions */

// On left click
$(document).on('click', '.ms-grid', function(event) {

    // TODO remove
    console.log('Left mouse button is pressed');

    // Is this the first turn?
    if (round.gameStarted === false) {

        // TODO: remove
        console.log("this is the first turn");
        
        // If so, generate the level (TODO)
        generateLevel(8, 8);

        // Clear any placed flags (TODO)

        // Record start time for the game
        round.writeStartTime();
        
        // Start timer, updates time elapsed every second
        //setInterval(function(){ 
            //code goes here that will be run every 1 seconds.
            //round.updateTimeElapsed($.now());
        //}, 1000);

        // Mark the game as started
        round.startGame();
        
    } else {
        
        // TODO: remove
        console.log("this is not the first turn");
        
    }
    // If no, assess move
});

// On right click
$(document).on("contextmenu", '.ms-grid', function(event) {

    // Preventing popover/context menu
    event.preventDefault();

    // TODO remove
    console.log('Right mouse button is pressed');
});

function prepareGame() {
    // Creating a new round
    $('#game-grid').empty();
    round = new Round(8, false, 0, 0);
    for (i=0; i<64; i++) {
        $('#game-grid').append('<div class="ms-grid ms-uncleared-blank"></div>');
    }
}

function generateLevel(x, y) {
    // Empties grid of existing elements
    $('#game-grid').empty();
    let level = [];
    for (i=0; i<x; i++) {
        let column = [];
        for (j=0; j<y; j++) {
            column[j] = 0;
            $('#game-grid').append(`<div class="ms-grid ms-uncleared-blank" x="${j}" y="${i}"></div>`);
        }
        level[i] = column;
    }
    console.log(level);
}

class Round {
    flags;
    gameStarted;
    startTime;
    timeElapsed;

    constructor(flags, gameStarted, startTime, timeElapsed) {
        this.flags = flags;
        this.gameStarted = gameStarted;
        this.startTime = startTime;
        this.timeElapsed = timeElapsed;
    }
    
    writeStartTime() {
        this.startTime = $.now();
    }
    
    updateTimeElapsed(time) {
        this.timeElapsed = (time - this.startTime) / 1000;
        console.log(this.timeElapsed + " seconds");
    }
    
    updateFlags(value) {
    }
    
    startGame() {
        this.gameStarted = true;
    }
}
