const applyButton = document.getElementById('applyButton');
applyButton.addEventListener('click', function() {
    const textInput = document.getElementById('textInput');
    const inputText = textInput.value;
    const displayArea = document.getElementById("displayArea");
    displayArea.innerHTML =`Введений текст - ${inputText}`;
});

const selectedLetters = [];

document.addEventListener('mousedown', function(event) {
    if (event.target.tagName === 'DIV') {
    const clickedLetter = event.target;
    clickedLetter.classList.add('selected');
    selectedLetters.push(clickedLetter);
    }
});

document.addEventListener('mousemove', function(event) {
    selectedLetters.forEach(function(letter) {
    letter.style.left = event.clientX + 'px';
    letter.style.top = event.clientY + 'px';
    });
});

document.addEventListener('mouseup', function() {
    selectedLetters = [];
});

let isCtrlPressed = false;

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
    isCtrlPressed = true;
    }
});

document.addEventListener('keyup', function(event) {
    if (event.ctrlKey) {
    isCtrlPressed = false;
    }
});

document.addEventListener('mousedown', function(event) {
    if (isCtrlPressed && event.target.tagName === 'DIV') {
    const clickedLetter = event.target;
    clickedLetter.classList.toggle('selected');
    }
});

document.addEventListener('mousedown', function(event) {
    if (event.target.tagName === 'DIV') {
        const clickedLetter = event.target;
        clickedLetter.style.position = 'absolute';
        clickedLetter.style.left = event.clientX + 'px';
        clickedLetter.style.top = event.clientY + 'px';
    }
});