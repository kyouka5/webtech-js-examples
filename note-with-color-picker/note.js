const ELEMENT_IDS = {
    note: {
        colorPicker: "note-picker",
        counter: "note-counter"
    },
    warning: {
        colorPicker: "warning-picker",
        counter: "warning-counter"
    }
};

function applyBackgroundColorChange(className, color) {
    changeBackgroundColor(className, color);
    incrementCounter(className);
}

function changeBackgroundColor(className, color) {
    const elements = document.getElementsByClassName(className);
    Array.from(elements).forEach(element => element.style.backgroundColor = color);
}

function incrementCounter(className) {
    const counter = document.getElementById(ELEMENT_IDS[className].counter);
    counter.textContent = parseInt(counter.textContent) + 1;
}

function addChangeListener(className) {
    const colorPicker = document.getElementById(ELEMENT_IDS[className].colorPicker);
    colorPicker.addEventListener("change", () => applyBackgroundColorChange(className, colorPicker.value));
}

addChangeListener("note");
addChangeListener("warning");