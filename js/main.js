// DECLARING VARIABLES
let submitButton = document.getElementById('submit-button');
let fullNameInput = document.getElementById('fullname');
let emailInput = document.getElementById('email');
let messageInput = document.getElementById('message');

// Regular expression for email validation
let emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// Event listener for the submit button
submitButton.onclick = function () {
    let userInputs = {}; // Object to store valid user inputs
    let errors = []; // Array to store error messages

    // +-----------+
    // | FULL NAME |
    // +-----------+
    if (fullNameInput.value.trim()) {
        userInputs.fullName = fullNameInput.value.trim();
    } else {
        errors.push('Full name is missing.');
    }

    // +-------+
    // | EMAIL |
    // +-------+
    if (emailInput.value.trim()) {
        if (emailRegex.test(emailInput.value.trim())) {
            userInputs.email = emailInput.value.trim();
        } else {
            errors.push('Invalid email address.');
        }
    } else {
        errors.push('Email is missing.');
    }

    // +---------+
    // | MESSAGE |
    // +---------+
    if (messageInput.value.trim()) {
        userInputs.message = messageInput.value.trim();
    } else {
        errors.push('Message is missing.');
    }

    // +-----------------+
    // | FEEDBACK/ERRORS |
    // +-----------------+
    if (errors.length === 0) {
        // Print the data in JavaScript console.
        console.log("Form submitted successfully!");
        console.log("Form Data:", userInputs);

        // Clear the form fields
        fullNameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    } else {
        // Print errors to the console
        console.error("Errors:", errors);
    }
};
