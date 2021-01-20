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
    // Set title and date, save to localStorage
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    console.log(countdownTitle, countdownDate)
}

// Event Listener
countdownForm.addEventListener('submit', updateCountdown);


