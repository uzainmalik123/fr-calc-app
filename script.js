let resetBtn = document.getElementById('reset-btn');
let submitBtn = document.getElementById('submit-btn');
let mainInput = document.getElementById("main-input");

let anchorTagsArray = [];
let anchorTagsValArray = [];
let smallButtonsArray = [];

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
    mainInput.textContent = '';
})

smallButtonsArray[3].addEventListener('click', () => {
    console.log(mainInput.lastElementChild);
})