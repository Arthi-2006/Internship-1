
function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors(form) {
    form.querySelectorAll(".error").forEach(function (element) {
        element.textContent = "";
    });

    form.querySelectorAll(".message").forEach(function (element) {
        element.textContent = "";
        element.style.color = "";
    });
}

function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Registration form validation
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        clearErrors(registerForm);

        const name = document.getElementById("registerName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        let isValid = true;

        if (name.length < 2) {
            showError("registerNameError", "Enter your full name.");
            isValid = false;
        }

        if (!validEmail(email)) {
            showError("registerEmailError", "Enter a valid email address.");
            isValid = false;
        }

        if (password.length < 8) {
            showError("registerPasswordError",
                "Password must contain at least 8 characters.");
            isValid = false;
        }

        if (password !== confirmPassword) {
            showError("confirmPasswordError",
                "Passwords do not match.");
            isValid = false;
        }

        if (isValid) {
            const message = document.getElementById("registerMessage");
            message.style.color = "#16803c";
            message.textContent =
                "Form validated successfully! Backend registration is not connected yet.";
        }
    });
}

// Login form validation
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        clearErrors(loginForm);

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        let isValid = true;

        if (!validEmail(email)) {
            showError("loginEmailError", "Enter a valid email address.");
            isValid = false;
        }

        if (password.trim() === "") {
            showError("loginPasswordError", "Password is required.");
            isValid = false;
        }

        if (isValid) {
            const message = document.getElementById("loginMessage");
            message.style.color = "#b45309";
            message.textContent =
                "Input validation successful. Connect a backend to verify your account.";
        }
    });
}
