import test, { expect } from "@playwright/test";

test('test',async({page})=>{
   await page.getByRole('combobox',{name:'Role'}).selectOption([{value:'Delhi'},{value:'Mumbai'},{value:'Banglore'}]);
   await page.getByRole('alert').waitFor({state:'visible',timeout:3000})
})

test.only('visual testing',async({page})=>{
   await page.goto('https://timesofindia.indiatimes.com/');
   expect(await page.screenshot()).toMatchSnapshot('landing.png');
})