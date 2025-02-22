import { validatePasswordMatch, validatePasswordStrength } from '../utils/validation.js';

export const AccountDetails = () => `
    <div class="pb-4 mb-6">
        <h2 class="text-xl font-bold text-secondary mb-4">Account Details</h2>

        <div class="mb-4">
            <label class="block text-secondary mb-1">Password</label>
            <input 
                type="password" 
                id="password" 
                class="w-full p-3 border rounded-md " 
                placeholder="Password" 
                required
                oninput="validatePasswordStrength(); validatePasswordMatch();">
            <p id="passwordStrengthError" class="text-red-500 text-sm hidden mt-1"></p>
        </div>

        <div class="mb-4">
            <label class="block text-secondary mb-1">Confirm Password</label>
            <input 
                type="password" 
                id="confirmPassword" 
                class="w-full p-3 border rounded-md" 
                placeholder="Confirm Password" 
                required
                oninput="validatePasswordMatch()">
            <p id="passwordError" class="text-red-500 text-sm hidden mt-1"></p>
        </div>
    </div>
`;
