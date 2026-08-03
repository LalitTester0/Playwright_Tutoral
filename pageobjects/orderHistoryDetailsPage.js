export class OrderHistoryDetailsPage
{
    constructor(page){
        this.page=page;
    }


    async viewOrderDetails(orderid){
    
    let tr=this.page.locator('tr').filter({ hasText: orderid });
    await tr.getByRole('button',{name:'View'}).click();
    }


}