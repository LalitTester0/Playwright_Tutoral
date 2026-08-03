import test, { expect } from "@playwright/test";
import { LoginPage } from "../pageobjects/LoginPage";
import { DashBoardPage } from "../pageobjects/DashBoardPage";
import { POManager } from "../pageobjects/POManager";

test.only('Book phone',async({page})=>{
    let mailid='iamla42lit1431@gmail.com';
    let pwd='Admin123';
    let productName='iphone 13 pro';
    const poManager=new POManager(page);
    const loginpage= poManager.getloginPage();
    await loginpage.goto();
    await loginpage.validLogin(mailid,pwd);
    let dash=poManager.getdashboardPage();
    await page.waitForLoadState('networkidle');
    await dash.selectProduct(productName);
    await dash.clickCartBtn();
    let cart=poManager.getCartPage();
    const texts=await cart.getAllProductsName();
    expect(texts).toContain(productName);
    await cart.clickCheckoutBtn();
    const checkout =poManager.getcheckoutPage();
    let numquantity=await checkout.getProductQuantity(productName);
    expect(Number(numquantity)).toEqual(1);
    let usermail=await checkout.getUserMailId();
    expect(usermail).toEqual(mailid);
    await checkout.SelectCountry();
    await checkout.clickPlaceOrderBtn();
    const order=poManager.getorderDetailsPage();
    let orderid=await order.getOrderidtext();
    await order.navigateToOrderHistory();
    const orderhistory=poManager.getorderHistoryDetailsPage();
    await orderhistory.viewOrderDetails(orderid)


})