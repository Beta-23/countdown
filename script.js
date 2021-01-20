const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');


let countdownTitle = '';
let countdownDate = '';

// Set Date Input Min & Value with Today's Date and ISOS date format
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Take values from Form input
function updateCountdown(e) {
    e.preventDefault();
    console.log(e)
}

// Event Listener
countdownForm.addEventListener('submit', updateCountdown);


