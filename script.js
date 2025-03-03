let isRotating = false;
let isDancing = false;
let isShaking = false;
let display = document.getElementById("display");
let calculator = document.getElementById("calculator");

// Function to add numbers to the display
function appendNumber(number) {
    display.value += number;
}

// Function to add operators to the display
function appendOperator(operator) {
    display.value += " " + operator + " ";
}

// Function to clear the screen
function clearScreen() {
    display.value = "";
}

// Function to calculate the result of the expression
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Function for self-destruct 
function selfDestruct() {
    if (isShaking) return; 

    isShaking = true;
    calculator.style.animation = "shake 0.5s infinite";
    setTimeout(() => {
        calculator.style.display = "none"; // Remove the calculator after shaking
    }, 2000);
}

// Function to rotate the calculator
function rotateCalculator() {
    if (isRotating) {
        calculator.style.animation = ""; // Stop rotating
        isRotating = false;
    } else {
        calculator.style.animation = "rotate 2s linear infinite"; // Start rotating
        isRotating = true;
    }
}

// Function for the dance party effect
function danceParty() {
    if (isDancing) {
        document.body.style.animation = ""; // Stop dancing
        isDancing = false;
    } else {
        document.body.style.animation = "danceParty 1s infinite"; // Start dance party
        isDancing = true;
    }
}
