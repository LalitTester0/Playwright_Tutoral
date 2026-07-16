import test from "@playwright/test";

test('handling alerts @smoke',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.on('dialog',dialog=>dialog.accept());
    await page.locator('#confirmbtn').click();
    await page.screenshot({ path: 'full_page.png', fullPage: true })
    let frame=page.frameLocator('#courses-iframe');
})

test('handling alertse',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.on('dialog',dialog=>dialog.accept());
    await page.locator('#confirmbtn').click();
    await page.screenshot({ path: 'full_page.png', fullPage: true })
    let frame=page.frameLocator('#courses-iframe');
})