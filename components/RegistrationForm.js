import { AccountDetails } from './AccountDetails.js';
import { AddressInformation } from './AddressInformation.js';
import { CompanyDetails } from './CompanyDetails.js';
import { ErrorMessage } from './ErrorMessage.js';
import { SubmitSection } from './SubmitSection.js';
import { LoadingIndicator } from './LoadingIndicator.js';

export const RegistrationForm = () => `
     <main class="min-h-screen flex items-center justify-center animate__animated animate__fadeIn">
        <div class="w-full max-w-4xl bg-white shadow-md rounded-2xl p-8">
            <h1 class="text-3xl font-bold mb-6 text-primary text-center">Company Registration</h1>
            <form id="registrationForm" class="space-y-6">
                ${CompanyDetails()}
                ${AddressInformation()}
                ${AccountDetails()}
                ${SubmitSection()}
                ${LoadingIndicator()}
                ${ErrorMessage()}
            </form>
        </div>
    </main>
`;
