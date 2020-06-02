var trainSpeed = 250;
var trainPosition = 0;
var animation;


var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", speedUp);

function speedUp() {
    if (trainSpeed > 20) {
        trainSpeed -= 20;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 4;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 580) {
        alert("Crash!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopTrain() {
    if (trainPosition < 580) {
        clearInterval(animation);
        console.log("Whew! That was close!");
    }
}