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
