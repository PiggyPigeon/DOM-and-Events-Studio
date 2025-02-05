// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){



const takeOff = document.getElementById("takeoff");
const flightStatus = document.getElementById("flightStatus");
const flightScreen = document.getElementById("shuttleBackground");
const shuttleHeight = document.getElementById("spaceShuttleHeight");
const land = document.getElementById("landing");
const abort = document.getElementById("missionAbort");

let shuttleHeightNum = 0;


// When the "Take off" button is clicked, the following should happen:
// A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
// The flight status should change to "Shuttle in flight."
// The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
// The shuttle height should increase by 10,000 miles.
function checkForTakeOff(){
    let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (result == true){
        flightStatus.innerHTML = "Shuttle in flight";
        flightScreen.style.backgroundColor ='blue';
        shuttleHeightNum += 10000;
        shuttleHeight.innerHTML = shuttleHeightNum;
        console.log("took off")
    } else {
        console.log("didn't take off")
    }
}
takeOff.addEventListener("click", checkForTakeOff)



// When the "Land" button is clicked, the following should happen:
// A window alert should let the user know "The shuttle is landing. Landing gear engaged."
// The flight status should change to "The shuttle has landed."
// The background color of the shuttle flight screen should change from blue to green.
// The shuttle height should go down to 0.

function landingClick(){
    window.alert('The shuttle is landing. Landing gear engaged.');
    flightStatus.innerHTML = "The shuttle has landed.";
    flightScreen.style.backgroundColor ='green';
    shuttleHeight.innerHTML = 0;
    console.log("landed")
}
land.addEventListener('click', landingClick)


// When the "Abort Mission" button is clicked, the following should happen:
// A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
// The flight status should change to "Mission aborted."
// The background color of the shuttle flight screen should change from blue to green.
// The shuttle height should go to 0.
 function abortMission(){
    let result = window.confirm("Confirm that you want to abort the mission.");
    if (result == true){
        flightStatus.innerHTML = "Mission aborted.";
        flightScreen.style.backgroundColor ='green';
        shuttleHeight.innerHTML = 0;
        console.log("mission aborted")
    } else {
        console.log("mission not aborted")
    }
 }
 abort.addEventListener("click", abortMission)


const up = document.getElementById("up");
const down = document.getElementById("down");
const right = document.getElementById("right");
const left = document.getElementById("left");
const rocket = document.getElementById("rocket");
let rocketTop = 0;
let rocketLeft = 0;

//  When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
// The rocket image should move 10 px in the direction of the button that was clicked.
// If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.

function moveDown(){
    rocketTop += 10;
    rocket.style.top = rocketTop+'px';
    shuttleHeightNum -= 10000;
    shuttleHeight.innerHTML = shuttleHeightNum;
}
down.addEventListener("click", moveDown)

function moveUp(){
    rocketTop -= 10;
    rocket.style.top = rocketTop+'px';
    shuttleHeightNum += 10000;
    shuttleHeight.innerHTML = shuttleHeightNum;
}
up.addEventListener("click", moveUp)

function moveRight(){
    rocketLeft += 10;
    rocket.style.left = rocketLeft+'px';
}
right.addEventListener("click", moveRight)

function moveLeft(){
    rocketLeft -= 10;
    rocket.style.left = rocketLeft+'px';
}
left.addEventListener("click", moveLeft)


// Bonus Missions
// Keep the rocket from flying off of the background.
// Return the rocket to its original position on the background when it has been landed or the mission was aborted.


})