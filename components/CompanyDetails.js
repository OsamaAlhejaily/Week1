export const CompanyDetails = () => `
    <div class="border-b pb-4 mb-6">
        <h2 class="text-xl font-bold text-secondary mb-4">Company Details</h2>
        
        <!-- Commercial Registration Number -->
        <div class="mb-4">
            <label class="block text-secondary mb-1">Commercial Registration Number</label>
            <div class="flex space-x-4">
                <input type="text" id="registrationNumber" class="w-full p-3 border rounded-md" placeholder="Registration Number" required>
                <button type="button" id="fetchDetails" class="bg-primary text-white p-3 rounded-md hover:bg-green-600 transition">Fetch Company Details</button>
            </div>
        </div>

        <!-- Company Name -->
        <div class="mb-4">
            <label class="block text-secondary mb-1">Company Name</label>
            <input type="text" id="companyName" class="w-full p-3 border rounded-md " placeholder="Company Name" required>
        </div>

        <!-- Address -->
        <div class="mb-4">
            <label class="block text-secondary mb-1">Address</label>
            <input type="text" id="address" class="w-full p-3 border rounded-md" placeholder="Address" required>
        </div>


    <!-- Email -->
        <div class="mb-4">
            <label class="block text-secondary mb-1">Email Address</label>
            <input 
                type="email" 
                id="email" 
                class="w-full p-3 border rounded-md focus:outline-none" 
                placeholder="Email Address" 
                required
                oninput="validateEmailFormat()">
            <p id="emailError" class="text-red-500 text-sm hidden mt-1"></p>
        </div>
    </div>
    <!-- Loading Indicator -->
        <div class="spinner border-4 border-primary border-t-transparent border-solid rounded-full w-12 h-12 animate-spin mx-auto hidden"></div>

    <!-- Error Message -->
    <div id="error-message" class="hidden text-center text-red-500 mt-4">No company found with this registration number.</div>
`;
