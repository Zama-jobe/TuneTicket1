class FormValidator {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        this.initialize();
    }

    initialize() {
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            this.validateForm();
        });
    }

    validateForm() {
        const nameInput = document.getElementById('ticket-form-name');
        const emailInput = document.getElementById('ticket-form-email');
        const phoneInput = document.getElementById('ticket-form-phone');
        const numberInput = document.getElementById('ticket-form-number');

        let isValid = true;

        if (nameInput.value.trim() === '') {
            this.displayError(nameInput, 'Please enter your full name.');
            isValid = false;
        } else {
            this.removeError(nameInput);
        }

        if (!this.isValidEmail(emailInput.value)) {
            this.displayError(emailInput, 'Please enter a valid email address.');
            isValid = false;
        } else {
            this.removeError(emailInput);
        }

        if (!this.isValidPhone(phoneInput.value)) {
            this.displayError(phoneInput, 'Please enter a valid phone number (e.g., 085-456-7890).');
            isValid = false;
        } else {
            this.removeError(phoneInput);
        }

        if (!this.isValidNumber(numberInput.value)) {
            this.displayError(numberInput, 'Please enter a valid number of tickets.');
            isValid = false;
        } else {
            this.removeError(numberInput);
        }

        if (isValid) {
            console.log("Redirecting to payment.html");
            window.location.href = "payment.html";
        }
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidPhone(phone) {
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        return phoneRegex.test(phone);
    }

    isValidNumber(number) {
        return !isNaN(number) && parseInt(number) > 0;
    }

    displayError(input, message) {
        const errorDiv = input.nextElementSibling;
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }

    removeError(input) {
        const errorDiv = input.nextElementSibling;
        errorDiv.textContent = '';
        errorDiv.style.display = 'none';
    }
}

const formValidator = new FormValidator('.custom-form');
