// Get the display element where the calculation is shown
let display = document.getElementById('display');

// Function to append a number to the display
function appendNumber(number) {
    display.value += number; // Concatenate the number to the display value
}

// Function to append an operator (+, -, *, /) to the display
function appendOperator(operator) {
    display.value += ' ' + operator + ' '; // Add spaces around the operator for readability
}

// Function to clear the display when the 'C' button is pressed
function clearDisplay() {
    display.value = ''; // Reset the display to an empty string
}

// Function to calculate the result of the expression entered
function calculate() {
    try {
        // Use the eval() function to evaluate the expression entered in the display
        // The regex is used to remove any invalid characters to prevent security risks
        display.value = eval(display.value.replace(/[^-()\d/*+.]/g, ''));
    } catch (error) {
        // If there's an error in the expression (e.g., incomplete input), show 'Error'
        display.value = 'Error';
    }
}