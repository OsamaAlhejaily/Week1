export const AddressInformation = () => `
    <div class="border-b pb-4 mb-6">
        <h2 class="text-xl font-bold text-secondary mb-4">Address Information</h2>

        
        <div class="mb-4">
            <label class="block text-secondary mb-1">City</label>
            <input 
                type="text" 
                id="city" 
                class="w-full p-3 border rounded-md " 
                placeholder="City" 
                required>
        </div>

        
        <div class="mb-4">
            <label class="block text-secondary mb-1">Region</label>
            <input 
                type="text" 
                id="region" 
                class="w-full p-3 border rounded-md" 
                placeholder="Region" 
                required>
        </div>

        
        <div class="mb-4">
            <label class="block text-secondary mb-1">Zip Code</label>
            <input 
                type="text" 
                id="zipCode" 
                class="w-full p-3 border rounded-md" 
                placeholder="Zip Code" 
                required>
        </div>
    </div>
`;
