let pleaseCounter = 1;
let popupTimeout; // Store the timeout so we can clear it later

document.getElementById('yesButton').addEventListener('click', function() {
    clearTimeout(popupTimeout); // Clear any existing timeout to ensure the popup stays
    document.getElementById('buttons').style.display = 'none'; // Hide buttons
    const popup = document.getElementById('popup');
    popup.innerHTML = '<img src="happy-cats.jpg" alt="Happy Cats" style="width:100%;"><p>yayyyyyyyyyyyy heppiiiii 🤭🤭</p>';
    popup.style.display = 'block';
    popup.style.opacity = 1;
    popupTimeout = setTimeout(() => {
        popup.style.display = 'none'; // Ensure it only disappears after a set time
    }, 10000); // Keep the popup visible for 10 seconds
});

document.getElementById('noButton').addEventListener('click', function() {
    clearTimeout(popupTimeout); // Clear any existing timeout to avoid hiding the popup early
    let noButton = document.getElementById('noButton');
    noButton.style.p
