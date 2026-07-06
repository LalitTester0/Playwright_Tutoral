import test from "@playwright/test";

test('handling alerts',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.on('dialog',dialog=>dialog.accept());
    await page.locator('#confirmbtn').click();
    await page.screenshot({ path: 'full_page.png', fullPage: true })
    let frame=page.frameLocator('#courses-iframe');
})