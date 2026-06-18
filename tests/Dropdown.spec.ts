import test, { expect } from "@playwright/test";

test('handling dropdown',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const username= page.getByRole('textbox', { name: 'Username:' })
    const passsword=page.getByRole("textbox",{name:'Password:'})
    const dropdown=page.getByRole('combobox');
    dropdown.selectOption('consult')
    let radio=page.getByRole('radio',{
        name:'User'
    })
    await expect(radio).not.toBeChecked();
    await radio.click();
   // await page.locator('.radiotextsty').last().click();
    let okbtn=page.getByRole('button', { name: 'Okay' });
    await  okbtn.click();
    await expect(radio).toBeChecked();

    let blinkingtext= page.locator('a:has-text("Free Access to ")');
    await expect(blinkingtext).toHaveAttribute('class','blinkingText')
    //await page.pause();
})

test.only('child window handling',async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const username= page.getByRole('textbox', { name: 'Username:' })
    let blinkingtext= page.locator('a:has-text("Free Access to ")');
    const [page2]=await Promise.all([
    context.waitForEvent('page'),
    await blinkingtext.click(),
    ])
    const t=await page2.locator('.red').textContent() || "";
    const arraytext= t.split('@');
    const domain=arraytext[1].split(" ")[0];
    console.log(domain)
    await username.fill(domain)
    console.log(await username.inputValue())
    //await page.pause()


})