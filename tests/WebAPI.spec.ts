import test, { expect, request } from "@playwright/test";

const payloaddata={
    userEmail: "iamla42lit1431@gmail.com",
    userPassword: "Admin123"
}
let token='';

test.beforeAll(async()=>{
    const apicont= await request.newContext();
    const loginResponse= await apicont.post('https://rahulshettyacademy.com/api/ecom/auth/login',{data:payloaddata});
    expect(( loginResponse).ok).toBeTruthy();
    const loginresponsejson=await loginResponse.json();
    token=  loginresponsejson.token;
    console.log(token)
})




test.only('Book phone',async({page})=>{

    let mailid='iamla42lit1431@gmail.com';
    let pwd='Admin123';
    let productName='iphone 13 pro';
    let email= page.getByPlaceholder('email@example.com'); 
    let pwd2= page.getByRole('textbox', { name: 'enter your passsword' });
    let loginBtn= page.getByRole('button', { name: 'Login' })
    let products=page.locator('.card-body');
    let cart= page.getByRole('button', { name: 'Cart 1' });
    // await email.fill(mailid);
    // await pwd2.fill(pwd);
    // await loginBtn.click();
    // await page.waitForLoadState('networkidle');
    await page.addInitScript(value => {
        window.localStorage.setItem('token',value);
    },token);
    await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
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