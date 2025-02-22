import { RegistrationForm } from './components/RegistrationForm.js';

import { 
    validatePasswordMatch, 
    validatePasswordStrength, 
    validateEmailFormat 
} from './utils/validation.js';

const state = {
    formData: {
        registrationNumber: '',
        companyName: '',
        email: '',
        phone: '',
        city: '',
        region: '',
        zipCode: '',
        password: '',
        confirmPassword: '',
        terms: false,
    },
    loading: false,
    error: ''
};

const validateForm = () => {
    const isPasswordMatch = validatePasswordMatch();
    const isPasswordStrong = validatePasswordStrength();
    const isEmailValid = validateEmailFormat();

    return isPasswordMatch && isPasswordStrong && isEmailValid;
};

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    root.innerHTML = RegistrationForm();

    const fetchButton = document.getElementById('fetchDetails');
    if (fetchButton) {
        fetchButton.addEventListener('click', fetchCompanyDetails);
    } else {
        console.error('Fetch button not found.');
    }

    const form = document.getElementById('registrationForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 

            if (validateForm()) {
                alert('Form submitted successfully!');
                form.reset();
            } else {
                alert('Please correct the errors before submitting the form.');
            }
        });
    } else {
        console.error('Registration form not found.');
    }
});

const fetchCompanyDetails = async () => {
    const registrationNumber = document.getElementById('registrationNumber').value;
    const companyName = document.getElementById('companyName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

    try {
        state.loading = true;
        document.getElementById('loading').classList.remove('hidden');
        state.error = '';
        document.getElementById('error-message').classList.add('hidden');

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        const company = data.find(item => item.id.toString() === registrationNumber);

        if (company) {
            const fullAddress = `${company.address.suite}, ${company.address.street}, ${company.address.city}, ${company.address.zipcode}`;

            companyName.value = company.company.name;
            address.value = fullAddress;
            email.value = company.email;
        } 
        else {
            companyName.value = '';
            address.value = '';
            email.value = '';
            errorMessage.classList.remove('hidden');
            errorMessage.textContent = 'No company found with this registration number.';
        }
    } catch (error) {
        console.error('Fetch Error:', error);
        state.error = 'Failed to fetch company details.';
        document.getElementById('error-message').classList.remove('hidden');
    } finally {
        state.loading = false;
        document.getElementById('loading').classList.add('hidden');
    }
};


