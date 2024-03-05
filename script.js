

const display = document.querySelector("#display");

function appendToDisplay(input) {
    display.value +=input;
}


function clearDisplay() {
    display.value = ""

}


function calculate() {
    try {
        display.value = eval(display.value)
    }
    catch(error) {
        display.value = "Error"
    }
}

function removeFromDisplay() {
    str = display.value
    display.value = str.slice(0, -1);
}

function positiveOrNegative() {
    if (display.value.charAt(0) != '-') {
        display.value = display.value.padStart(1, "-");
    } else {
        display.value = display.value.substring(1);
    }
}
