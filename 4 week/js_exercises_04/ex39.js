document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.input-digit');
  
    // Function to move focus to next input
    const moveToNextInput = (element) => {
      const nextInput = element.nextElementSibling;
      if (nextInput && nextInput.classList.contains('input-digit')) {
        nextInput.focus();
      }
    };
  
    // Function to auto submit form if all inputs are filled
    const autoSubmit = () => {
      const allFilled = Array.from(inputs).every(input => input.value);
      if (allFilled) {
        // Here you can trigger the form submission or any other action
        console.log('Form ready to be submitted!');
        // document.getElementById('verificationForm').submit(); // Uncomment to enable form submission
      }
    };
  
    // Handle manual input
    inputs.forEach(input => {
      input.addEventListener('input', function() {
        if (this.value) moveToNextInput(this);
        autoSubmit();
      });
    });
  
    // Handle paste event
    inputs[0].addEventListener('paste', function(event) {
      const pasteData = event.clipboardData.getData('text');
      const digits = pasteData.split('').filter(digit => !isNaN(digit)).slice(0, inputs.length);
  
      // Distribute the digits to the inputs
      digits.forEach((digit, index) => {
        inputs[index].value = digit;
        moveToNextInput(inputs[index]);
      });
  
      autoSubmit();
  
      event.preventDefault(); // Prevent the default paste action
    });
  });
  