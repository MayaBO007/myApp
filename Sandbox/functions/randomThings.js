//import msCount from "./msCountTimer.js";
//import { redChoice, blueChoice } from "./gameInterval.js";

function randColor() { // 1 or 0 - random choice of car color
    const colorArry = [0, 1];
    let car = colorArry[Math.floor(Math.random() * colorArry.length)]
    if (car == 0) {
        blueChoice.push(now);
        allChoices.push(now);
    } else {
        redChoice.push(now);
        allChoices.push(now);
    }
    return car
};
// Random car choise yellow tesr:
function randColorYellow() { // 2 or 1 or 0
    const colorArry = [0, 1, 2];
    let car = colorArry[Math.floor(Math.random() * colorArry.length)];
    if (car == 0) {
        redChoiceYellow.push(now);
        allChoicesYellow.push(now);
    } else if (car == 1) {
        blueChoiceYellow.push(now)
    } else {
        yellowChoiceYellow.push(now)
    }
    allChoicesYellow.push(now);
    return car
};

// Random car choise switch test:
function randColorSwitch() {
    const colorArry = [0, 1];
    let car = colorArry[Math.floor(Math.random() * colorArry.length)]
    if (car == 0) {
        blueChoiceSwitch.push(now);
    } else {
        redChoiceSwitch.push(now)
    }
    allChoicesSwitch.push(now);
    return car
};

// Random car choise dev test:
function randColorDev() {
    const colorArry = [0, 1];
    let car = colorArry[Math.floor(Math.random() * colorArry.length)]
    if (car == 0) {
        blueChoiceDev.push(now);
    } else {
        redChoiceDev.push(now)
    }
    allChoicesDev.push(now);
    return car
};


const speedArry = [0.6, 0.8, 1];
const choseSpeed = Array.from({ length: 1000 });
for (let i = 0; i < choseSpeed.length; i++) {
    let speed = speedArry[Math.floor(Math.random() * speedArry.length)];
    choseSpeed.fill(speed, i);
};

indexC1 = 0;
indexC2 = 1;
indexV1 = 0;
indexV2 = 1;

// Random car choise function:
function randSpeedInterval() {
    indexV1++
    indexV2++
    return (choseSpeed.slice(indexV1, indexV2));
};
function randSpeedCar() {
    indexC1++
    indexC2++
    return (choseSpeed.slice(indexC1, indexC2));
};
