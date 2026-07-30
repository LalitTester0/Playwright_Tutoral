export class APIutils{

    constructor(apiContext,loginPayLoad){
        this.apiContext=apiContext;
        this.loginPayLoad=loginPayLoad;
    }

    async getToken(){
        const loginresponse=await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
        {data:this.loginPayLoad});
        const loginResponeJson=await loginresponse.json();
        let token=loginResponeJson.token ;
        return token;
    }

    async createOrder(orderPayLoad){
        let response={};
        response.token= await this.getToken();
        const orderresponse=await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',{
                data:orderPayLoad,
                headers:{
                    'Authorization':response.token,
                    'Content-Type':'application/json'
                }
            })
            const orderresponsejson=await orderresponse.json();
            let orderid=orderresponsejson.orders[0];
            response.orderid= orderid;
        return response;
    }
}

