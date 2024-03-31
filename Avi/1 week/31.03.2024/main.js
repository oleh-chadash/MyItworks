// Function to check if the input is a valid hexadecimal color format
function isValidHexColor(color) {
    const regex = /^#([0-9A-F]{3}){1,2}$/i;
    return regex.test(color);
}

// Function that is called when the button is clicked
function changeBackgroundColor() {
    var colorInput = document.getElementById('colorInput').value;
    
    // Check if the input color is valid
    if (isValidHexColor(colorInput)) {
        // If the color is valid, change the background color of the page
        document.body.style.backgroundColor = colorInput;
    } else {
        // If the color is not valid, show an error message
        alert('Please enter color is not in hex format (e.g., #FFFFFF)');
    }
}

// Add an event listener for the button click after the page content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor);
});
