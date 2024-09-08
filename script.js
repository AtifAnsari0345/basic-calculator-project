// JavaScript (script.js)

// Get the display element
const display = document.getElementById('display');

// Initialize the display value
let displayValue = '';

// Function to handle button clicks
function handleButtonClick(value) {
    switch (value) {
        case 'AC':
            displayValue = '';
            break;
        case '%':
            displayValue += '%';
            break;
        case 'x²':
            displayValue += '**2';
            break;
        case '=':
            try {
                // Replace x² with **2 for power operation
                const result = eval(displayValue.replace('x²', '**2'));
                displayValue = result.toString();
            } catch (error) {
                displayValue = 'Error';
            }
            break;
        default:
            displayValue += value;
            break;
    }
    // Update display
    display.value = displayValue;
}

// Add event listeners to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.innerText));
});
