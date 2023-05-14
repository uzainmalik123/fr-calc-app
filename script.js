let resetBtn = document.getElementById('reset-btn');
let submitBtn = document.getElementById('submit-btn');
let mainInput = document.getElementById("main-input");

let anchorTagsArray = [];
let anchorTagsValArray = [];
let smallButtonsArray = [];

let charString = "";

for (let anchorSelector = 0; anchorSelector < 3; anchorSelector++) {
    anchorTagsArray[anchorSelector] = document.getElementsByTagName('a')[anchorSelector];
}

for (let anchorValSelector = 0; anchorValSelector < 3; anchorValSelector++) {
    anchorTagsValArray[anchorValSelector] = anchorTagsArray[anchorValSelector].getAttribute('data-status');
}

for (let smallButtonSelector = 0; smallButtonSelector < 16; smallButtonSelector++) {
    smallButtonsArray[smallButtonSelector] = document.getElementsByTagName('button')[smallButtonSelector];
}

resetBtn.addEventListener('click', () => {
    charString = "";
    mainInput.textContent = charString;
})

smallButtonsArray[3].addEventListener('click', () => {
    charString = charString.slice(0, charString.length - 1)
    mainInput.textContent = charString;
})

smallButtonsArray[0].addEventListener('click', () => {
    charString += 7;
    mainInput.textContent = charString;
})

smallButtonsArray[1].addEventListener('click', () => {
    charString += 8;
    mainInput.textContent = charString;
})

smallButtonsArray[2].addEventListener('click', () => {
    charString += 9;
    mainInput.textContent = charString;
})

smallButtonsArray[4].addEventListener('click', () => {
    charString += 4;
    mainInput.textContent = charString;
})

smallButtonsArray[5].addEventListener('click', () => {
    charString += 5;
    mainInput.textContent = charString;
})

smallButtonsArray[6].addEventListener('click', () => {
    charString += 6;
    mainInput.textContent = charString;
})

smallButtonsArray[7].addEventListener('click', () => {
    charString += "+";
    mainInput.textContent = charString;
})

smallButtonsArray[8].addEventListener('click', () => {
    charString += 1;
    mainInput.textContent = charString;
})

smallButtonsArray[9].addEventListener('click', () => {
    charString += 2;
    mainInput.textContent = charString;
})

smallButtonsArray[10].addEventListener('click', () => {
    charString += 3;
    mainInput.textContent = charString;
})

smallButtonsArray[11].addEventListener('click', () => {
    charString += "-";
    mainInput.textContent = charString;
})

smallButtonsArray[12].addEventListener('click', () => {
    if(charString.includes(".") == true){
        mainInput.textContent = charString;
    }
    else if(charString.includes(".") == false) {
        charString += ".";
        mainInput.textContent = charString;
    }
})

smallButtonsArray[13].addEventListener('click', () => {
    charString += 0;
    mainInput.textContent = charString;
})

smallButtonsArray[14].addEventListener('click', () => {
    charString += "/";
    mainInput.textContent = charString;
})

smallButtonsArray[15].addEventListener('click', () => {
    charString += "x";
    mainInput.textContent = charString;
})