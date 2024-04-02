// Function to validate if the input is in a valid hexadecimal color format
function isValidHexColor(color) {
  const regex = /^#([0-9A-F]{3}){1,2}$/i; // Regular expression for hex color validation
  return regex.test(color); // Tests if the color matches the hex format
}

// Function to prevent the default form submission action
function handleFormSubmit(event) {
  event.preventDefault(); // Prevents form from submitting
}

// Function called when a color is input or the button is clicked
function changeBackgroundColorFromInput(colorInputValue) {
  if (isValidHexColor(colorInputValue)) {
    // If the color is valid, changes the page's background color to the input color
    document.body.style.backgroundColor = colorInputValue;
  } else {
    // If the color is not valid, shows an error message
    alert("Please enter a color in hex format (e.g., #FFFFFF)");
  }
}

// Function to change the page's background color based on the picker's color
function changeBackgroundColorFromPicker(colorWindowValue) {
  // Changes the background color of the page to the picker's color
  document.body.style.backgroundColor = colorWindowValue;
}

// Adds an event listener for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
  // Selects the color input, color picker, and submit button elements
  const colorInput = document.querySelector('input[type="text"]');
  const colorWindow = document.querySelector('input[type="color"]');
  const submitButton = document.querySelector('input[type="submit"]');

  // Listens for real-time color changes in the color picker
  colorWindow.addEventListener("input", function() {
    changeBackgroundColorFromPicker(colorWindow.value);
  });

  // Listens for clicks on the submit button to change color based on text input
  submitButton.addEventListener("click", function() {
    changeBackgroundColorFromInput(colorInput.value);
  });

  // Prevents the default action when the form is submitted
  document.querySelector("form").addEventListener("submit", handleFormSubmit);
}); 