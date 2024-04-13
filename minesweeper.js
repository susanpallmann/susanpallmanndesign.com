
$(document).ready(function () {
    /* Coding's like riding a bike, right? */

    /* Listens for left and right clicks, then triggers the appropriate method */
    $('.ms-grid').mousedown(function(event) {
    switch (event.which) {
        case 1:
            console.log('Left mouse button is pressed');
            const round = new Round(8, false, 0, 0);
            round.writeStartTime();
            break;
        case 2:
            console.log('Middle mouse button is pressed');
            event.preventDefault();
            break;
        case 3:
            console.log('Right mouse button is pressed');
            event.preventDefault();
            break;
        default:
            console.log('Something went wrong');
        }
    });
});


/* Unprofessional suedo code or something */

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
        console.log(this.startTime);
        this.startTime = $.now();
        console.log(this.startTime);
    }
    updateTimeElapsed(){
    }
    updateFlags(value){
    }
    startGame(){
    }
}
