// Select the project toggle buttons
const projectToggleButtons = document.querySelectorAll(".project-toggle-btn");

// When a project toggle button is clicked, display or hide project details
// Loop through the project toggle buttons to add a click event listener to each button
projectToggleButtons.forEach(button => {
    button.addEventListener("click", toggleProjectDetails);
});

// Define a function to toggle the project details and update the button text
function toggleProjectDetails(e) {

    // Select the specific button that was clicked
    const button = e.currentTarget;

    // Select the element where the project details will appear
    const projectDetails = button.closest(".project-item").querySelector(".project-details");

    // Check if the class of the element where the project details will appear is toggled to "hidden"
    const isHidden = projectDetails.classList.toggle("hidden");

    // Update the button text based on whether the project details are hidden
    button.textContent = isHidden ? "Show Details" : "Hide Details";
}

//------------------------------------------------------------------------------------------------------------------

// Define a function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.toLowerCase());
}

// Define a function to clear contact form error or success messages
function clearContactFormMessages() {
    contactNameError.textContent = "";
    contactEmailError.textContent = "";
    contactMessageError.textContent = "";
    contactFormSuccess.textContent = "";
}

// Select the contact form elements and success message element
const contactForm = document.getElementById("contact-form");

const contactNameInput = document.getElementById("contact-name");
const contactEmailInput = document.getElementById("contact-email");
const contactMessageInput = document.getElementById("contact-message");

const contactNameError = document.getElementById("contact-name-error");
const contactEmailError = document.getElementById("contact-email-error");
const contactMessageError = document.getElementById("contact-message-error");

const contactFormSuccess = document.getElementById("contact-form-success");

const contactSendBtn = document.getElementById("contact-send-btn");
const contactClearBtn = document.getElementById("contact-clear-btn");

// Validate each field when the contact form is submitted
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Disable the send button to prevent double click
    contactSendBtn.disabled = true;

    // Clear previous error or success messages
    clearContactFormMessages();

    // Initialize validation flag
    let isValidForm = true;

    // If each field is empty after empty spaces are removed using trim(), display an error message:
    if (contactNameInput.value.trim() === "") {
        contactNameError.textContent = "Please enter your name!";
        isValidForm = false;
    }

    if (contactEmailInput.value.trim() === "" || !isValidEmail(contactEmailInput.value.trim())) {
        contactEmailError.textContent = "Please enter a valid email address!";
        isValidForm = false;
    } 

    if (contactMessageInput.value.trim() === "") {
        contactMessageError.textContent = "Please type your message!";
        isValidForm = false;
    }

    // If all inputs are valid, display a success message
    if (isValidForm) {
        contactFormSuccess.textContent = "Thanks for sending your message 🙂";
        console.log("Contact form has been submitted!");
        contactForm.reset();

        // Re-enable the send button after successful submission
        contactSendBtn.disabled = false;
    } else {
        // Re-enable the send button immediately if validation fails
        contactSendBtn.disabled = false;
    }
});

// Dynamically validate each field
contactNameInput.addEventListener("input", () => {
    if (contactNameInput.value.trim() == "") {
    contactNameError.textContent = "Please enter your name!";
    } else contactNameError.textContent = "";
});

contactEmailInput.addEventListener("input", () => {   
    if (contactEmailInput.value.trim() === "" || !isValidEmail(contactEmailInput.value.trim())) {
        contactEmailError.textContent = "Please enter a valid email address!";
    } else {
        contactEmailError.textContent = "";
    }
});

contactMessageInput.addEventListener("input", () => {
    if (contactMessageInput.value.trim() === "") {
        contactMessageError.textContent = "Please type your message!";
    } else contactMessageError.textContent = "";
});

// Clear each field when the contact form clear button is clicked
contactClearBtn.addEventListener("click", () => {
    contactForm.reset();
    clearContactFormMessages();
    console.log("Contact form has been cleared!");
});

//------------------------------------------------------------------------------------------------------------------

// Select the element where the location or message will be displayed
const locationElement = document.getElementById("location");

// Select the get location button
const locationButton = document.getElementById("location-btn");

// When the get location button is clicked, get and display the location
locationButton.addEventListener("click", getLocation);


// Define a function to get the user's location
function getLocation() {

    // Check if geolocation is supported
    if (navigator.geolocation) {

        // Display a loading message if geolocation is supported
        locationElement.innerHTML = "Getting location 🌍";

        // Get the user's current position if geolocation is supported
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {

        // Display an error message if geolocation is not supported
        locationElement.innerHTML = "Geolocation is not supported by this browser 😔";
    }
}


// Define a function to display the user's position
function showPosition(position) {

    // Display the latitude and longitude
    locationElement.innerHTML = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`;
}


// Define a function to handle errors
function showError(error) {

    // Handle different error codes
    switch (error.code) {
        case error.PERMISSION_DENIED:
            locationElement.innerHTML = "Please allow location access in your browser to see your location.";
            break;
        case error.POSITION_UNAVAILABLE:
            locationElement.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            locationElement.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            locationElement.innerHTML = "An unknown error occured.";
            break;    
    }
}

//------------------------------------------------------------------------------------------------------------------

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();

        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

//------------------------------------------------------------------------------------------------------------------
