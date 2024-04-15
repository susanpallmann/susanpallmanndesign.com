let round;

$(document).ready(function () {
    prepareGame();
});

/* Player Actions */

// On left click
$(document).on('click', '.ms-grid', function(event) {

    let clickedX = $(event.currentTarget).attr('x');
    let clickedY = $(event.currentTarget).attr('y');
    
    // TODO remove
    console.log('Left mouse button is pressed');

    // Is this the first turn?
    if (round.gameStarted === false) {

        // TODO: remove
        console.log("this is the first turn");
        
        // If so, generate the level (TODO)
        generateLevel(8, 8, clickedX, clickedY);

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
    
    for (i=0; i<8; i++) {
        for (j=0; j<8; j++) {
            // Creates corresponding grid in the UI with coordinates
            $('#game-grid').append(`<div class="ms-grid ms-uncleared-blank" x="${j}" y="${i}"></div>`);
        }
    }
}

function generateLevel(x, y, clickedX, clickedY) {

    console.log(clickedX);
    
    // Empties grid of existing elements
    $('#game-grid').empty();

    // Creates an array to store our level
    let level = [];

    // Going to represent the states of each cell with another array
    // First is contents:
    // 0 = empty
    // 1-8 = number
    // 10 = bomb
    // Second is display:
    // 0 = unrevealed
    // 1 = marked
    // 2 = revealed
    
    for (i=0; i<x; i++) {
        let column = [];
        for (j=0; j<y; j++) {
            column[j] = [0,0];

            // Creates corresponding grid in the UI with coordinates
            $('#game-grid').append(`<div class="ms-grid ms-uncleared-blank" x="${j}" y="${i}"></div>`);
        }
        level[i] = column;
    }
    console.log(JSON.stringify(level))

    level[clickedX][clickedY] = "test";

    console.log(JSON.stringify(level))
    
    console.log(round.flags);
    for (k=0; k < round.flags;k++) {
        let tryX = Math.floor((Math.random() * 8) + 1);
        let tryY = Math.floor((Math.random() * 8) + 1);
        
        if (level[tryX][tryY] === [0,0]) {
            console.log('the arrays matched');
            level[tryX][tryY] = [10, 0];
        }
    }
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
