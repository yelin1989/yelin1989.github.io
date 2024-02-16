// Sing-In Popup
document.querySelector("#sign-in").addEventListener("click", function () {
    document.querySelector(".signin-popup").classList.add("active");
});

document.querySelector(".signin-popup .close-btn").addEventListener("click", function () {
    document.querySelector(".signin-popup").classList.remove("active");
});

// Sign-Up Popup
document.querySelector("#sign-up").addEventListener("click", function () {
    document.querySelector(".signup-popup").classList.add("active");
});

document.querySelector(".signup-popup .close-btn").addEventListener("click", function () {
    document.querySelector(".signup-popup").classList.remove("active");
});

document.getElementById('search').addEventListener('click', function (event) {
    event.preventDefault(); 

    document.getElementById('cars').scrollIntoView({ behavior: 'smooth' });
});

// Booking Pop-up
function showPopup(button) {
    let boxImg = button.parentElement;
    let year = boxImg.querySelector('p').textContent;
    let model = boxImg.querySelector('h3').textContent;
    let price = boxImg.querySelector('h2').textContent;

    let popupContent = `
      <div class="popup-content">
        <h1> Booking confirmation</h1>
        <p>Year: ${year}</p>
        <p>Model: ${model}</p>
        <p>Price: ${price}</p>
        <button onclick="saveAndClose(this)">Confirm</button>
        <button onclick="closePopup()">Cancel</button>
      </div>
    `;
    let popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = popupContent;

    let overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.appendChild(popup);

    document.body.appendChild(overlay);
}

function saveAndClose(button) {
    let popupContent = button.parentElement;
    let year = popupContent.querySelector('p:nth-of-type(1)').textContent;
    let model = popupContent.querySelector('p:nth-of-type(1)').textContent;
    let price = popupContent.querySelector('p:nth-of-type(1)').textContent;

    alert('Your Booking Is Confirmed!');
    
    document.querySelector('.overlay').remove();
}

function closePopup() {
    
    document.querySelector('.overlay').remove();
}

// Sign-Up Form Submission
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // If validation passes, show success message
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('success-message').style.display = 'block';
});

// Function to close the pop-up
function closePopup_signup() {
    document.getElementById('signup-form').reset();
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('success-message').style.display = 'none';
}

// Function to return to the main page
function returnToMainPage() {
    // Redirect to the main page
    window.location.href = 'index.html';
}

// Sign-In Validation
document.addEventListener('DOMContentLoaded', function () {
    // Function to handle form submission
    document.getElementById('signin-form').addEventListener('submit', function (event) {
        event.preventDefault(); 

        // Get username and password
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        // Check if the username and password are correct
        if (email === 'abcd@uowmail.au' && password === 'abcd') {
            // Redirect to index.html
            window.location.href = 'index.html';
        } else {
            // Show error message or handle incorrect credentials
            alert('Incorrect email or password. Please try again.');
        }
    });

    // Function to close the pop-up
    function closePopup() {
        // Reset the form and close the pop-up
        document.getElementById('signin-form').reset();
    }
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navbar.classList.toggle("active")
}

