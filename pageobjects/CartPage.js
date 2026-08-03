export class CartPage{

    constructor(page){
        this.page=page;
        this.checkoutBtn=page.getByRole('button', { name: 'Checkout' });


    }


    async getAllProductsName(){
        let texts = await this.page.locator('h3').allTextContents();
        return  texts;
    }

    async clickCheckoutBtn(){
        await this.checkoutBtn.click();
    }
}