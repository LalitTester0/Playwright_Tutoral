import test from "@playwright/test";

test('calander test',async({page})=>{
    const month='8';
    const date='26';
    const year='2027';
    
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    await page.locator('.react-date-picker__inputGroup').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.getByRole('button', { name: year }).click();
    await page.getByRole('button', { name: 'June' }).click();
    await page.getByRole('button').filter({hasText:'10'}).click();
    await page.waitForTimeout(5000)
    



})