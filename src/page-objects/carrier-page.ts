import { ElementFinder,element,by } from "protractor";
import { BasePage } from "./base-page";

export class CarrierPage extends BasePage
{
   carrierNameAusPostQA:ElementFinder;
   buttonGrid:ElementFinder;
   onboardingbutton:ElementFinder;
   duplicatebutton:ElementFinder;
   editButton:ElementFinder;
  


constructor()
{
   super();
   this.carrierNameAusPostQA= element(by.xpath("//h1[.='AusPost-QA']"));
   this.buttonGrid=element(by.xpath("//div[@class='d-flex justify-content-start mt-5']//button"));
   this.onboardingbutton=element(by.xpath("//div[@class='d-flex justify-content-start mt-5']//button[contains(.,'Onboard')]"));
   this.duplicatebutton=element(by.xpath("//div[@class='d-flex justify-content-start mt-5']//button[contains(.,'Duplicate')]"));
   this.editButton=element(by.xpath("//div[@class='d-flex justify-content-start mt-5']//button[contains(.,'Edit')]"));
   

}
   
}
