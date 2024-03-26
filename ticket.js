// Class definition for form validation
class FormValidator {
    // Constructor to initialize the form selector and set up event listener
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        this.initialize();
    }

    // Method to initialize form validation
    initialize() {
        // Add submit event listener to the form
        this.form.addEventListener('submit', event => { 
            event.preventDefault();
            this.validateForm();
        });
    }

    // Method to validate form inputs
    validateForm() {
        const nameInput = document.getElementById('ticket-form-name');
        const emailInput = document.getElementById('ticket-form-email');
        const phoneInput = document.getElementById('ticket-form-phone');
        const numberInput = document.getElementById('ticket-form-number');

        // Variable to track overall form validity
        let isValid = true;

        // Validate name input
        if (nameInput.value.trim() === '') {
            this.displayError(nameInput, 'Please enter your full name.');
            isValid = false;
        } else {
            this.removeError(nameInput);
        }

        // Validate email input
        if (!this.isValidEmail(emailInput.value)) {
            this.displayError(emailInput, 'Please enter a valid email address.');
            isValid = false;
        } else {
            this.removeError(emailInput);
        }

        // Validate phone input
        if (!this.isValidPhone(phoneInput.value)) {
            this.displayError(phoneInput, 'Please enter a valid phone number (e.g., 085-456-7890).');
            isValid = false;
        } else {
            this.removeError(phoneInput);
        }

        // Validate number of tickets input
        if (!this.isValidNumber(numberInput.value)) {
            this.displayError(numberInput, 'Please enter a valid number of tickets.');
            isValid = false;
        } else {
            this.removeError(numberInput);
        }

        // If form is valid, redirect to payment page
        if (isValid) {
            console.log("Redirecting to payment.html");
            window.location.href = "payment.html";
        }
    }

    // Method to check if an email is valid
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Method to check if a phone number is valid
    isValidPhone(phone) {
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        return phoneRegex.test(phone);
    }

    // Method to check if a number is valid
    isValidNumber(number) {
        return !isNaN(number) && parseInt(number) > 0;
    }

    // Method to display error message for an input field
    displayError(input, message) {
        const errorDiv = input.nextElementSibling;
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }

    // Method to remove error message for an input field
    removeError(input) {
        const errorDiv = input.nextElementSibling;
        errorDiv.textContent = '';
        errorDiv.style.display = 'none';
    }
}

// Create an instance of FormValidator with the provided form selector
const formValidator = new FormValidator('.custom-form');
