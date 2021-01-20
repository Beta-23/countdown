const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');


let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let savedCountdown;

// Set Date Input Min & Value with Today's Date and ISOS date format
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Take values from Form input
function updateCountdown(e) {
    e.preventDefault();
    // Set title and date, save to localStorage
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    savedCountdown = {
        title: countdownTitle,
        date: countdownDate,
    };
    localStorage.setItem('countdown', JSON.stringify(savedCountdown));
    // Check if no date entered
    if (countdownDate === '') {
        alert('Please select a date for the countdown.');
    } else {
        // Get number version of current Date
        countdownValue = new Date(countdownDate).getTime();
    } 
}

// Event Listener
countdownForm.addEventListener('submit', updateCountdown);


