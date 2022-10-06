import { ElementFinder, element, by } from "protractor";
import { BasePage } from "./base-page";

export class CarrierBasicInfoPage extends BasePage {
   basicInfoQuestion: ElementFinder;
   carrierName:ElementFinder;
   originCountry:ElementFinder;
   addressline1:ElementFinder;
   addressline2:ElementFinder;
   city:ElementFinder;
   state:ElementFinder;
   zip:ElementFinder;
   country:ElementFinder;
   contactType:ElementFinder;
   contactName:ElementFinder;
   contactTitle:ElementFinder;
   contactPhoneNumber:ElementFinder;
   contactEmail:ElementFinder;
   contactadd:ElementFinder;
   nextbutton:ElementFinder;
   carrierIdentifier:ElementFinder;

  

   constructor() {
      super();
      this.basicInfoQuestion = element(by.xpath("//li[@class='progress-step is-active ng-star-inserted']//span[@class='progress-title btn btn-link']"));
      this.carrierName=element(by.xpath("//input[@id='carrierName']"));
      this.originCountry=element(by.xpath("//select[@id='originCountryCode']"));
      this.addressline1=element(by.xpath("//input[@id='line1']"))
      this.addressline2=element(by.xpath("//input[@id='address2']"));
      this.city=element(by.xpath("//div[@class='col-lg-8']/div[@class='row']/div[1]//input[@class='form-control ng-untouched ng-pristine ng-valid']"));
      this.state=element(by.xpath("//input[@id='state']"));
      this.zip=element(by.xpath("//input[@id='zip']"));
      this.country=element(by.xpath("//select[@id='countryCode']"));
      this.contactType=element(by.xpath("//select[@class='form-control ng-pristine ng-valid ng-touched']"));
      this.contactName=element(by.css("[placeholder='Jonathan Smith']"));
      this.contactTitle=element(by.css("[placeholder='IT Manager']"));
      this.contactPhoneNumber=element(by.css("[placeholder='(555)555-5555']"));
      this.contactEmail=element(by.css("[placeholder='jonathan.smith@contact-email.com']"));
      this.contactadd=element(by.css(".pbi-add-circle"));
      this.nextbutton=element(by.css(".mat-ripple"));
      this.carrierIdentifier=element(by.xpath("//span[@class='header-margin-left']"));

     
   }

}
