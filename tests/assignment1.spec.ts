import test, { expect } from "@playwright/test";


test('Create a brand new event ',async({page})=>{
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.getByPlaceholder('you@email.com').fill('lalit.jadhav@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Lalit@1431');
    await page.getByRole('button',{name:'Sign In'}).click();
    await expect(page.getByText('Browse Events →')).toBeVisible();
    await page.getByRole('button', { name: 'Admin' }).click();
    await page.locator('a').filter({ hasText: 'Manage Events' }).first().click();
    
    let eventName=`Lalit ${Date.now()}`;
    await page.getByPlaceholder('Event title').fill(eventName);
    await page.getByPlaceholder('Describe the event…').fill('Testing Activities')
    await page.getByRole('combobox', { name: 'Category*' }).selectOption({value:'Concert'});
    await page.getByPlaceholder('e.g. Bangalore').fill('Pune');
    await page.getByRole('textbox', { name: 'Venue*' }).fill('Pune')
    await page.getByRole('textbox', { name: 'Event Date & Time*' }).pressSequentially('08070020271015')
    await page.getByPlaceholder('0.00').fill('900');
    await page.getByPlaceholder('e.g. 500').fill('200')
    await page.getByRole('button', { name: '+ Add Event' }).click();
    await expect(page.getByText('Event created!')).toBeVisible();

})