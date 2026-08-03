import test, { expect } from "@playwright/test";
import { POManager } from "../pageobjects/POManager";
import { placeOrderTestData } from "./utils/placeorderTestData";

for (const data of placeOrderTestData){
test.only(`Book phone ${data.productName}`,async({page})=>{
    let mailid=data.mailid;
    let pwd=data.pwd;
    let productName=data.productName;
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
}