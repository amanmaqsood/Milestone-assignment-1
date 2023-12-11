function generatePattern() {
    // Get the input value
    const inputValue = document.getElementById('inputNumber').value;
    
    // Validate input
    if (!inputValue || inputValue <= 0) {
      alert('Please enter a positive number greater than 0.');
      return;
    }
  
    // Generate the inverted right-angled triangle pattern
    let pattern = '';
    for (let i = inputValue; i >= 1; i--) {
      pattern += '*'.repeat(i) + '\n';
    }
  
    // Display the pattern in the output div
    document.getElementById('output').textContent = pattern;
  }
  