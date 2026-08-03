export class LoginPage {

    constructor(page){
        this.page=page;
        this.signInbutton=page.getByRole('button', { name: 'Login' });
        this.email= page.getByPlaceholder('email@example.com'); 
        this.passWord= page.getByRole('textbox', { name: 'enter your passsword' });

    }

    async validLogin(mailid,passsword){
        await this.email.fill(mailid);
        await this.passWord.fill(passsword);
        await this.signInbutton.click();
    }
    async goto(){
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    }
}