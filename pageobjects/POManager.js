import { CartPage } from "./CartPage";
import { checkOutPage } from "./checkOutPage";
import { DashBoardPage } from "./DashBoardPage";
import { LoginPage } from "./LoginPage";
import { OrderDetailsPage } from "./OrderDetailsPage";
import { OrderHistoryDetailsPage } from "./orderHistoryDetailsPage";

export class POManager{

    constructor(page){
        this.page=page;
        this.loginPage=new LoginPage(page);
        this.dashboardPage=new DashBoardPage(page);
        this.cartpage=new CartPage(page);
        this.checkoutPage=new checkOutPage(page);
        this.orderDetailsPage=new OrderDetailsPage(page);
        this.orderHistoryDetailsPage=new OrderHistoryDetailsPage(page);
    }

    

    getloginPage(){
        return this.loginPage;
    }

    getdashboardPage(){
        return  this.dashboardPage;
    }
    getCartPage(){
        return  this.cartpage;
    }
    getcheckoutPage(){
        return  this.checkoutPage;
    }
    getorderDetailsPage(){
        return this.orderDetailsPage;
    }
    getorderHistoryDetailsPage(){
        return this.orderHistoryDetailsPage;
    }

}