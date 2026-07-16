// Q5. Checkbox Group Validation
// Scenario:
// A permission settings page has 12 checkboxes grouped under "Admin", "Editor", and "Viewer" roles. You need to:
// 1. Check all checkboxes under "Editor" role
// 2. Uncheck all under "Viewer" role
// 3. Assert exactly 4 checkboxes are now checked in total

import test, { expect } from "@playwright/test";

// Q6. Autocomplete / Typeahead Dropdown
// Scenario:
// A form has a country search field. When you type "Ind", a dropdown appears with options like "India", "Indiana (US)", "Indonesia". You must:
// 1. Type "Ind" into the field
// 2. Wait for the dropdown to appear
// 3. Select exactly "India" (not partial matches)
// 4. Assert the field now shows "India"
 
// ✏️ Write Playwright code handling the async dropdown appearance without waitForTimeout.

// Q8. Multi-Select Listbox
// Scenario:
// A user management form has a multi-select <select> element listing 20 cities. You need to select "Mumbai", "Delhi", and "Bangalore" while leaving all others unselected.
 
// ✏️ Write Playwright code using page.locator('select').selectOption() to select multiple values and assert the selected count is exactly 3.

test('test',async({page})=>{
   await page.getByRole('combobox',{name:'Role'}).selectOption([{value:'Delhi'},{value:'Mumbai'},{value:'Banglore'}]);
   await page.getByRole('alert').waitFor({state:'visible',timeout:3000})
})





