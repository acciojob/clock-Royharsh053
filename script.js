//your JS code here. If required.
function updateTimer() {
    const now = new Date();
    const formattedTime = now.toLocaleString(); // Format the date and time
    document.getElementById('timer').innerHTML = formattedTime; // Update the timer
}

setInterval(updateTimer, 1000); // Update the timer every second