export class OrderDetailsPage{

    constructor (page){
        this.page=page;
        this.orderid=page.locator('label.ng-star-inserted')
        this.orders=page.locator('label[routerlink$="/dashboard/myorders"]');
    }

    async getOrderidtext(){
        let orderid=await this.orderid.textContent();
        let order=orderid.split('|')[1].trim();
        return order
    }

    async navigateToOrderHistory(){
        await this.orders.click();
    }


}