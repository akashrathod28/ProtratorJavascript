import { ElementFinder, ElementArrayFinder,element, by } from "protractor";
import { BasePage } from "./base-page";

export class DashboardPage extends BasePage {
   text_Dashboard: ElementFinder;
   text_Welcome: ElementFinder;
   text_CarrierCount: ElementFinder;
   numText_CarrierCount: ElementFinder;
   text_ReadyToConfigure: ElementFinder;
   numText_ReadyToConfigure: ElementFinder;
   text_CarrierCountCSP: ElementFinder;
   numText_carrierCountCSP: ElementFinder;
   button_SubmitCarrierRequest: ElementFinder;
   input_Search: ElementFinder;
   th_CarrierName: ElementFinder;
   th_OriginCountry: ElementFinder;
   th_ConfigVersion: ElementFinder;
   th_Status: ElementFinder;
   th_Action: ElementFinder;
   tbody_CarrierDataTable: ElementFinder;

   totalCarrier: ElementFinder;
   availableToOnboard: ElementFinder;
   onboardedviacsp: ElementFinder;
   viewButton: ElementFinder;
   searchCarrier: ElementFinder;
   listedCarrier: ElementFinder;
   burttonCarrierView: ElementFinder;
   buttonUserName: ElementFinder;
   buttonProfile: ElementFinder;
   buttonExportAuspost: ElementFinder;
   navigate_CarrierBasicInformation:ElementFinder;
   navigation_CarrierFeature:ElementFinder;
   navigation_AdditionalFeature:ElementFinder;
   navigation_CarrierDefault:ElementFinder;
   navigation_CarrierService:ElementFinder;
   navigation_AdditionalQuestions:ElementFinder;
   resumeButton:ElementFinder;
   reviewButton:ElementFinder;
   carrierTable:ElementFinder;
   carrierTableHeaderCarrierName:ElementFinder;
   carrierTableHeaderOriginCountry:ElementFinder;
   carrierTableHeaderEnviornment:ElementFinder;
   carrierTableHeaderConfigVersion:ElementFinder;
   carrierTableHeaderStatus:ElementFinder;
   carrierTableHeaderAction:ElementFinder;
  tableGridCarrierName:ElementArrayFinder;
  tableGridCarrierStatus:ElementArrayFinder;
  tableGridCarrierAction:ElementArrayFinder;
  carrierVersion:ElementFinder;
  carrierGroup:ElementFinder;
  actionButton:ElementFinder;
  saveAndExit:ElementFinder;
  donotsaveAndExit:ElementFinder;
  

   constructor() {
      super();
      this.text_Dashboard = element(by.css(".nav-link[routerlink='/home']"));
      this.text_Welcome = element(by.css("h1"));
      this.text_CarrierCount = element(by.css(".data-widget-1 .data-description"));
      this.numText_CarrierCount = element(by.css(".data-widget-1 .data-value"));
      this.text_ReadyToConfigure = element(by.css(".data-widget-2 .data-description"));
      this.numText_ReadyToConfigure = element(by.css(".data-widget-2 .data-value"));
      this.text_CarrierCountCSP = element(by.css(".data-widget-3 .data-description"));
      this.numText_carrierCountCSP = element(by.css(".data-widget-3 .data-value"));
      this.button_SubmitCarrierRequest = element(by.xpath("//button[@auto_id='dash-submit']"));
      this.input_Search = element(by.xpath("//input[@class='form-control']"));
      this.th_CarrierName = element(by.xpath("//th[contains(.,'Carrier Name (ID)')]"));
      this.th_OriginCountry = element(by.xpath("//th[contains(.,'Origin Country')]"));
      this.th_ConfigVersion = element(by.xpath("//th[contains(.,'Config Version')]"));
      this.th_Status = element(by.xpath("//th[contains(.,'Status')]"));
      this.th_Action = element(by.xpath("//th[@class='text-right']"));
      this.tbody_CarrierDataTable = element(by.css(".p-datatable-tbody"));
      this.navigate_CarrierBasicInformation=element(by.xpath("//li[1]//span[@class='progress-title btn btn-link']"));
      this.navigation_CarrierFeature=element(by.xpath("//ol[@class='progress-tracker progress-tracker--text progress-tracker--vertical']//span[@class='progress-text']/span[contains(.,'Carrier Features')]"));
      this.navigation_AdditionalFeature=element(by.xpath("//li[3]//span[@class='progress-title btn btn-link']"));
      this.navigation_CarrierDefault=element(by.xpath("//li[4]//span[@class='progress-title btn btn-link']"));
      this.navigation_CarrierService=element(by.xpath("//li[5]//span[@class='progress-title btn btn-link']"));
      this.navigation_AdditionalQuestions=element(by.xpath("//li[6]//span[@class='progress-title btn btn-link']"));
      
      this.totalCarrier = element(by.xpath("(//div[@class='card'])[1]"));
      this.availableToOnboard = element(by.xpath("(//div[@class='card'])[2]"));
      this.onboardedviacsp = element(by.xpath("(//div[@class='card'])[3]"));
      this.viewButton = element(by.xpath("//td[contains(.,'OnTrac Inc.')]//following-sibling::td//button"));
      this.searchCarrier = element(by.xpath("//input[@auto_id='dash-search']"));
      this.listedCarrier = element(by.xpath("//td[contains(.,'AusPost-QA')]"));
      this.burttonCarrierView = element(by.xpath("//td[contains(.,'AusPost-QA')]//..//button"));
      this.buttonUserName = element(by.xpath("//div[contains(@class,'header-username')]"));
      this.buttonProfile = element(by.xpath("//a[@href='/profile']"));
      this.buttonExportAuspost = element(by.xpath("//p[contains(.,'auspost')]//..//button[contains(.,'Export')]"));
      this.resumeButton=element(by.xpath("//tbody[@class='p-datatable-tbody']/tr[1]//button[@class='btn btn-link btn-request1 ng-star-inserted']"));
      this.reviewButton=element(by.xpath("//tbody[@class='p-datatable-tbody']/tr[1]//button[@class='btn btn-link btn-request1 ng-star-inserted']"));
      this.tableGridCarrierName=element.all(by.xpath("//tbody[@class='p-datatable-tbody']/tr//p[@class='uppercase ng-star-inserted']"));
      this.tableGridCarrierStatus=element.all(by.xpath("//tbody//td[5]"));
      this.tableGridCarrierAction=element.all(by.xpath("//tbody[@class='p-datatable-tbody']/tr//button[@class='btn btn-link btn-request1 ng-star-inserted']"));
      this.carrierTable=element(by.xpath("//table[@role='grid']"));
      this.carrierTableHeaderCarrierName=element(by.xpath("//table[@role='table']//th[1]"));
      this.carrierTableHeaderOriginCountry=element(by.xpath("//table[@role='table']//th[2]"));
      this.carrierTableHeaderEnviornment=element(by.xpath("//table[@role='table']//th[3]"));
      this.carrierTableHeaderConfigVersion=element(by.xpath("//table[@role='table']//th[3]"));
      this.carrierTableHeaderStatus=element(by.xpath("//table[@role='table']//th[4]"));
      this.carrierTableHeaderAction=element(by.xpath("//table[@role='table']//th[5]"));
      this.carrierVersion=element(by.xpath("//table//tr//td[contains(.,'CSP-UI-Test15')]//span[1]"));
      this.carrierGroup=element(by.xpath("//table//tr//td[contains(.,'CSP-UI-Test15')]//span[2]"));
      this.actionButton=element(by.xpath("//table//tr//td[contains(.,'CSP-UI-Test15')]/following-sibling::td/button"));
      this.saveAndExit=element(by.xpath("//button[@class='btn btn-primary btn-block']"));
      this.donotsaveAndExit=element(by.xpath("//button[@class='btn btn-outline-secondary btn-block']"));
   }

   getListedCarrier(name: string): ElementFinder {
      return element(by.xpath("//td[contains(.,'" + name + "')]"));
   }

   getButtonCarrierView(name: string): ElementFinder {
      return element(by.xpath("//td[contains(.,'" + name + "')]//..//button"));
   }

   
   getWebTableLink(carrierName: string, buttonText: string): ElementFinder {
      return element(by.xpath("//p[contains(text(),'"+carrierName+"')]//parent::td//following-sibling::td[@class='text-right']//button[contains(text(),'"+buttonText+"')]"))
   }
   getActionButton(carrierName: string): ElementFinder {
      return element(by.xpath("(//td[contains(.,'"+carrierName+"')])[1]/following-sibling::td/button"))
   }

   getCarrierVersion(carrierName: string): ElementFinder {
      return element(by.xpath("//table//tr//td[contains(.,'"+carrierName+"')]//sup"));
   }

   getCarrierGroup(carrierName: string): ElementFinder {
      return element(by.xpath("//table//tr//td[contains(.,'"+carrierName+"')]//span[1]"));
   }
}


