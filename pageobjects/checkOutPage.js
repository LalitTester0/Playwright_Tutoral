import { expect } from "@playwright/test";

export class checkOutPage{
    
    constructor(page){
        this.page=page;
        this.usermail=page.locator('input.text-validated.ng-valid');
        this.selectCountryField=page.getByPlaceholder('Select Country');
        this.placeOrderBtn= page.locator('a.btnn');
    }


    async getProductQuantity(productName){
        let cartname= this.page.getByText(productName);
        expect(await cartname).toBeVisible();
        let quantity=await this.page.locator('.item__quantity').textContent() || "";
        let numquantity=quantity.split(":")[1];
        return numquantity;
    }

    async getUserMailId(){
        return await this.usermail.inputValue()
    }

    async SelectCountry(){
        await this.selectCountryField.pressSequentially('Ind');
        await this.page.locator(':text-is("India")').click();
    }
    async clickPlaceOrderBtn(){
        await this.placeOrderBtn.click();
    }
}