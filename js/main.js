var timeContainer = document.getElementById("time-display");

var btnStart = document.getElementById("btn-start");
var btnStop = document.getElementById("btn-stop");
var btnReset = document.getElementById("btn-reset");

var pauseFlag;
var firstPress = true;


var start;
var stoppedTime = 'Null';

btnStart.addEventListener("click", function() {

    //Prevents resetting start time upon pause
    if (firstPress) {
        start = new Date().getTime();
    }
    firstPress = false;
    pauseFlag = true;

    var update = setInterval(function() {
        if (pauseFlag) {
            var now = new Date().getTime();
            if (stoppedTime != 'Null') {
                now = stoppedTime;
                stoppedTime = 'Null';
            }
            var distance = now - start;
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            renderHTML(hours, minutes, seconds);
        }

    }, 1000);
});

//This doesn't work
btnStop.addEventListener("click", function() {
    pauseFlag = false; //Flag pauses update setInterval
    stoppedTime = new Date().getTime();
    console.log(Math.floor(((stoppedTime - start) % (1000 * 60)) / 1000));

});


btnReset.addEventListener("click", function() {
    resetHTML();
});

function renderHTML(h, m, s) {
    timeContainer.innerHTML = h + "h " + m + "m " + s + "s ";
}

function resetHTML() {
    pauseFlag = false;
    timeContainer.innerHTML = "0h 0m 0s"
    firstPress = true;
}
