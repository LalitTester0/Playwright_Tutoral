import test, { expect } from "@playwright/test"



test.only('First Playwright Test',async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await expect(page).not.toHaveTitle('google');
    const username=page.getByRole('textbox',{name:'Username'});
    const signbtn=page.getByRole('button',{name:'Sign In'});
    await username.fill("rahulshetty");
    await page.getByRole('textbox',{name:'Password'}).fill("Learning@830$3mK2");
    await signbtn.click();
    await expect(page.locator('[style*="block"]')).toContainText('username/password.');
    await username.fill("rahulshettyacademy");
    await signbtn.click();
    let items=page.locator(".card-body a");
    console.log(await items.nth(0).textContent())


})


test('page playwright test',async({page})=>{
    await page.goto("https://www.google.com/")
    console.log(await page.title())
    await expect(page).toHaveTitle('Google');
})