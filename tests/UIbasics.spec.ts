import test, { expect } from "@playwright/test"



test('First Playwright Test',async({browser})=>{
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
    //console.log(await items.nth(0).textContent())
    const titles=await items.allTextContents();
    console.log(titles)


})


test('page playwright test',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const signuplink= page.locator('.login-wrapper-footer-text');
    let firstName= page.getByRole('textbox', { name: 'First Name' }); 
    let lastName= page.getByRole('textbox', { name: 'Last Name' }); 
    let email= page.getByPlaceholder('email@example.com'); 
    let phoneNumber= page.getByPlaceholder('enter your number'); 
    let gender= page.locator('//input[@value="Male"]'); 
    let password= page.getByRole('textbox', { name: 'Passsword' })
    let confirmpassword= page.getByRole('textbox', { name: 'Confirm Password' })
    let register= page.getByRole('button', { name: 'Register' })
    let checkbox=page.locator('[type*="checkbox"]');
    let pwd2= page.getByRole('textbox', { name: 'enter your passsword' });
    let loginBtn= page.getByRole('button', { name: 'Login' })
    let productnames=page.locator('.card-body b');
    let mailid='iamla42lit1431@gmail.com';
    let pwd='Admin123';
    await signuplink.click();
    await firstName.fill('Lalit');
    await lastName.fill('Jadhav');
    await email.fill(mailid);
    await phoneNumber.fill('7845124578');
    await page.selectOption('[formcontrolname="occupation"]',{
        label:'Doctor'
    })
    await gender.click();
    await password.fill(pwd);
    await confirmpassword.fill(pwd);
    await checkbox.click();
    await register.click();
    await signuplink.click();
    await email.fill(mailid);
    await pwd2.fill(pwd);
    await loginBtn.click();
    const firstproductname=await productnames.nth(0).textContent();
})

test.only('Book phone',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    let mailid='iamla42lit1431@gmail.com';
    let pwd='Admin123';
    let productName='iphone 13 pro';
    let email= page.getByPlaceholder('email@example.com'); 
    let pwd2= page.getByRole('textbox', { name: 'enter your passsword' });
    let loginBtn= page.getByRole('button', { name: 'Login' })
    let products=page.locator('.card-body');
    let cart= page.getByRole('button', { name: 'Cart 1' });
    await email.fill(mailid);
    await pwd2.fill(pwd);
    await loginBtn.click();
    await page.waitForLoadState('networkidle');
    const cou=await products.count()
    for (let i=0;i<cou;i++){
        let name=await products.nth(i).locator('b').textContent();
        if (name===productName){
           await products.nth(i).getByRole('button',{
            name:'Add To Cart'
           }).click();

        }
    }
    await cart.click();
    const texts = await page.locator('h3').allTextContents();
    expect(texts).toContain(productName);
    await page.getByRole('button', { name: 'Checkout' }).click();
    let cartname= page.getByText(productName);
    await expect(cartname).toBeVisible();
    let quantity=await page.locator('.item__quantity').textContent() || "";
    let numquantity=quantity.split(":")[1];
    expect(Number(numquantity)).toEqual(1);
    let usermail=await page.locator('input.text-validated.ng-valid').inputValue();
    expect(usermail).toEqual(mailid);
    await page.getByPlaceholder('Select Country').pressSequentially('Ind')
    await page.locator(':text-is("India")').click();
    await page.locator('a.btnn').click();
    let orderid=await page.locator('label.ng-star-inserted').textContent() || '';
    let order=orderid.split('|')[1].trim();
    await page.locator('label[routerlink$="/dashboard/myorders"]').click();
    let tr=page.locator('tr').filter({ hasText: order });
    tr.getByRole('button',{name:'View'}).click();
    await page.waitForTimeout(5000)

})