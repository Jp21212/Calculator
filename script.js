// Get the elements
const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".button");
let currentInput = "";
let rotateInterval;

// Do button click
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;

    // Do clear button
    if (buttonText === "C") {
      currentInput = "";
      screen.innerText = "0";
    }

    // Do self-destruct button
    else if (buttonText === "Self Destruct") {
      alert("Self Destruct initiated!");
      document.body.innerHTML = "<h1>BOOM!</h1><p>The calculator has self-destructed!</p>";
    }

    // Do rotate button
    else if (buttonText === "Rotate Forever") {
      if (rotateInterval) {
        clearInterval(rotateInterval);  // Stop rotation if it's already rotating
        rotateInterval = null;
      } else {
        rotateInterval = setInterval(() => {
          document.body.style.transform = `rotate(${(parseInt(document.body.style.transform.replace("rotate(", "").replace("deg)", "")) || 0) + 1}deg)`;
        }, 10);
      }
    }

    // Do number buttons and operators
    else if (buttonText === "=") {
      try {
        currentInput = eval(currentInput).toString();
        screen.innerText = currentInput;
      } catch (e) {
        screen.innerText = "Error";
      }
    } else {
      // Add the button text to the current input
      currentInput += buttonText;
      screen.innerText = currentInput;
    }
  });
});