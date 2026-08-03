import { CartPage } from "./CartPage";

export class DashBoardPage{
    
    constructor(page){
        this.page=page;
        this.products=page.locator('.card-body');
        this.cart= page.getByRole('button', { name: 'Cart 1' });

    }

    async selectProduct(productName){
        const cou=await this.products.count()
        for (let i=0;i<cou;i++){
            let name=await this.products.nth(i).locator('b').textContent();
            if (name===productName){
            await this.products.nth(i).getByRole('button',{
                name:'Add To Cart'
            }).click();
            }
        }
    }

    async clickCartBtn(){
        await this.cart.click();
        let cart=new CartPage(this.page);
        return cart;
    }


}