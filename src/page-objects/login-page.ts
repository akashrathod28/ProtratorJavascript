import{by,element, browser,ElementFinder} from "protractor";
import {DashboardPage} from "./dashboard-page"
import { BasePage } from "./base-page";

export  class LoginPage extends BasePage
{

    txtUsername:ElementFinder;
    txtPassword:ElementFinder;
    txtCSP:ElementFinder;
    nextButton:ElementFinder;
    btnLogin:ElementFinder
    invalidUserText:ElementFinder;
    canNotAccessText:ElementFinder;
    userNameError:ElementFinder;
    passwordError:ElementFinder;
    userSelection:ElementFinder;
    useAnotherUser:ElementFinder;



constructor()
{
 super()
    this.txtCSP=element(by.xpath("//a[contains(.,'Carrier Self Provisioning')]"));
    this.txtUsername=element(by.xpath("//input[@name='loginfmt']"));
    this.nextButton=element(by.xpath("//input[@class='win-button button_primary button ext-button primary ext-primary']"));
    this.txtPassword=element(by.xpath("//input[@name='passwd']"));
    this.btnLogin=element(by.xpath("//input[@class='win-button button_primary button ext-button primary ext-primary']"));
    this.invalidUserText=element(by.xpath("//div[@id='passwordError']"));
    this.canNotAccessText=element(by.xpath("//a[@id='cantAccessAccount']"));
    this.userNameError=element(by.xpath("//div[@id='usernameError']"));
    this.passwordError=element(by.xpath("//div[@id='passwordError']"));
    //this.userSelection=element(by.xpath("//div[@class='table-cell text-left content']"));
    this.useAnotherUser=element(by.xpath("//div[@id='otherTile']//div[@class='table-cell text-left content']"));


    
}

async checkIfLoginWindowPresent(): Promise<boolean> {
    let flag=false;
    try
    {
        return await element(by.xpath("//div[@id='otherTile']//div[@class='table-cell text-left content']")).isPresent().then(function(result)
        {
            if(result)
            {
                flag=true;   
            }
            else
            {
                flag=false;
            }
       return flag;
        });
    }
    catch(e)
    {
        console.log("Login exception block>>>>")
        return await flag;
    }
 }

}