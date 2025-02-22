
export const validatePasswordMatch = () => {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');

    if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match.";
        passwordError.classList.remove('hidden');
        return false;
    } else {
        passwordError.classList.add('hidden');
        return true;
    }
};

export const validatePasswordStrength = () => {
    const password = document.getElementById('password').value;
    const passwordStrengthError = document.getElementById('passwordStrengthError');

    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    
    if (!strongPasswordPattern.test(password)) {
        passwordStrengthError.textContent = "Password must be at least 8 characters with uppercase, lowercase, number, and symbol.";
        passwordStrengthError.classList.remove('hidden');
        return false;
    } else {
        passwordStrengthError.classList.add('hidden');
        return true;
    }
};

export const validateEmailFormat = () => {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.classList.remove('hidden');
        return false;
    } else {
        emailError.classList.add('hidden');
        return true;
    }
};
