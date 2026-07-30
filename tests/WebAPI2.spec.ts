import test, { expect,request} from "@playwright/test";
import { APIutils } from './utils/APIutils';


const loginPayLoad={userEmail:"iamla42lit1431@gmail.com",userPassword:"Admin123"}
const orderPayLoad={
    orders: [
        {
            country: "India",
            productOrderedId: "6960eac0c941646b7a8b3e68"
        }
    ]
};
let orderid='';
let token='';

test.beforeAll(async ()=>{
    const apiContext=await request.newContext();
    const apiUtils=new APIutils(apiContext,loginPayLoad)
    let response=await apiUtils.createOrder(orderPayLoad);
    token=response.token;
    orderid=response.orderid;
})


test('Book phone',async({page})=>{
    await page.addInitScript(value =>{
        window.localStorage.setItem('token',value);
    },token)
    await page.goto("https://rahulshettyacademy.com/client/");
 
    await page.getByRole('button', { name: 'ORDERS' }).click();
    let tr= page.locator('tr').filter({ hasText: orderid });
    await tr.getByRole('button',{name:'View'}).click();
    })




