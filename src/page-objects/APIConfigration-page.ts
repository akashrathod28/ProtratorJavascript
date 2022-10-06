import { by, element, browser, ElementFinder, protractor, ElementArrayFinder } from "protractor";
import { DashboardPage } from "./dashboard-page"
import { BasePage } from "./base-page";

export class APIConfigration extends BasePage {

  tabAPIRate: ElementFinder;
  tabAPIShip: ElementFinder;
  tabAPICancel: ElementFinder;
  tabAPIManifest: ElementFinder;

  tabRequest1: ElementFinder;
  tabResponse1: ElementFinder;
  tabRequest2: ElementFinder;
  tabResponse2: ElementFinder;

  titleAddRequest: ElementFinder;
  titleMapRequest: ElementFinder;
  titleAddResponse: ElementFinder;
  titleMapResponse: ElementFinder;

  tabBody: ElementFinder;
  tabHeaders: ElementFinder;
  tabPathParameters: ElementFinder;
  tabQueryParameters: ElementFinder;
  tabAuthorization: ElementFinder;

  textAddrequestAreaBody: ElementFinder;
  textAddresponseAreaBody: ElementFinder
  buttonImportRequest: ElementFinder;
  buttonImportResponse:ElementFinder;
  inputAddRequestField: ElementFinder;
  selectAuthorizationType: ElementFinder;
  inputUsername: ElementFinder;
  inputPassword: ElementFinder;
  buttonDeleteField: ElementFinder;
  buttonSaveAuthorization: ElementFinder;
  buttonSelectMappingField: ElementFinder;
  buttonTypeConvert: ElementFinder;

  buttonRequestField: ElementFinder;
  buttonRequestConstant: ElementFinder;
  buttonRequestFunction: ElementFinder;
  buttonRequestClear: ElementFinder;

  buttonAddToMap: ElementFinder;
  inputCanstant: ElementFinder;
  buttonClose: ElementFinder;

  // current field we mapping 
  labelFieldMappedCurrent: ElementFinder;
  labelFieldMappedfunction: ElementFinder;

  //button for Add rules for mapped fields, need to make dynamic 
  buttonAddRule: ElementFinder;
  selectRule: ElementFinder;
  Test: ElementFinder;
  offtext: ElementFinder;
  optionConvertToKG: ElementFinder;
  buttonCarrierBodyField: ElementFinder;
  buttonGCSBodyField: ElementFinder;
  constructor() {
    super()

    this.tabAPIRate = element(by.xpath("//a[contains(.,'RATE')]"));
    this.tabAPIShip = element(by.xpath("//a[contains(.,'SHIP')]"));
    this.tabAPICancel = element(by.xpath("//a[contains(.,'CANCEL')]"));
    this.tabAPIManifest = element(by.xpath("//a[contains(.,'MANIFEST')]"));

    this.titleAddRequest = element(by.xpath("//div[@aria-expanded='true']//mat-panel-title[contains(.,'Add request')]"));
    this.titleMapRequest = element(by.xpath("//div[@aria-expanded='true']//mat-panel-title[contains(.,' Map request ')]"));
    this.titleAddResponse = element(by.xpath("//div[@aria-expanded='true']//mat-panel-title[contains(.,'Add response')]"));
    this.titleMapResponse = element(by.xpath("//div[@aria-expanded='true']//mat-panel-title[contains(.,'Map response')]"));

    this.tabBody = element(by.xpath("//div[@aria-expanded='true']//div[@class='mat-tab-label-content' and contains(.,'Body')]"));
    this.tabHeaders = element(by.xpath("//div[@aria-expanded='true']//div[@class='mat-tab-label-content' and contains(.,'Headers')]"));
    this.tabPathParameters = element(by.xpath("//div[@aria-expanded='true']//div[@class='mat-tab-label-content' and contains(.,'Path Parameters')]"));
    this.tabQueryParameters = element(by.xpath("//div[@aria-expanded='true']//div[@class='mat-tab-label-content' and contains(.,'Query Parameters')]"));
    this.tabAuthorization = element(by.xpath("//div[@aria-expanded='true']//div[@class='mat-tab-label-content' and contains(.,'Authorization')]"));

    this.textAddrequestAreaBody = element(by.xpath("//mat-expansion-panel[contains(.,'Add request')]//textarea"));
    this.textAddresponseAreaBody = element(by.xpath("//mat-expansion-panel[contains(.,'Add response')]//textarea"));
    this.buttonImportRequest = element(by.xpath("//mat-expansion-panel[contains(.,'Add request')]//button[contains(.,'Import')]"));
    this.buttonImportResponse = element(by.xpath("//mat-expansion-panel[contains(.,'Add response')]//button[contains(.,'Import')]"));

    this.inputAddRequestField = element(by.xpath("//div[@aria-expanded='true']//table[@class='table table-sm table-borderless']//input[1]"));
    this.selectAuthorizationType = element(by.xpath("//div[@aria-expanded='true']//label[contains(.,'Authorization Type')]//following-sibling::select"));
    this.inputUsername = element(by.xpath("//div[@aria-expanded='true']//label[contains(.,'Username')]//following-sibling::input"));
    this.inputPassword = element(by.xpath("//div[@aria-expanded='true']//label[contains(.,'Password')]//following-sibling::input"));
    this.buttonDeleteField = element(by.xpath("//div[@aria-expanded='true']//table[@class='table table-sm table-borderless']//button[1]"));
    this.buttonSaveAuthorization = element(by.xpath("//div[@aria-expanded='true']//button[contains(.,'Save')]"));
    
    this.buttonSelectMappingField = element(by.xpath("//div[@aria-expanded='true']//p[.=' Carrier ']/button[1]"));
    
    this.buttonTypeConvert = element(by.xpath("//div[@aria-expanded='true']//p[.=' Carrier ']/button[2]"));

    this.buttonRequestField = element(by.xpath("//app-construct-request-map//button[contains(.,'Field')]"));
    this.buttonRequestConstant = element(by.xpath("//app-construct-request-map//button[contains(.,'Constant')]"));
    this.buttonRequestFunction = element(by.xpath("//app-construct-request-map//button[contains(.,'Function')]"));
    this.buttonRequestClear = element(by.xpath("//app-construct-request-map//button[contains(.,'Clear')]"));

    this.buttonAddToMap = element(by.xpath("//div[@aria-expanded='true']//button[contains(.,'Add to Map')]"));
    this.inputCanstant = element(by.xpath("//p//input[@type='text']"));
    this.buttonClose = element(by.xpath("//button[contains(.,'Close')]"));

    // current field we mapping 
    this.labelFieldMappedCurrent = element(by.xpath("//div[@aria-expanded='true']//div[@class='callout ng-star-inserted']/p"));
    this.labelFieldMappedfunction = element(by.xpath("//div[@aria-expanded='true']//div[@class='callout ng-star-inserted']/h5"));

    //button for Add rules for mapped fields, need to make dynamic, see below function  getCustomXpathForMappingAddRule
    this.buttonAddRule = element(by.xpath("//p[contains(.,'$.pickup_date')]//following-sibling::div/button[@ngbtooltip='Add Rules']"));
    this.selectRule = element(by.xpath("//div[@class='modal-content']//select"));
    this.optionConvertToKG = element(by.xpath("//div[@class='modal-content']//select//option[@value='convertWeightToKg']"));
    this.offtext = element(by.xpath("//div[@class='modal-content']//input[@value='or']"))

    this.buttonCarrierBodyField = element(by.xpath("//app-construct-request-map//h5[contains(.,'Carrier Body')]//..//p[contains(.,' product_id ')]//button[@class='btn btn-sm btn-link ml-1 ng-star-inserted']"));
    this.buttonGCSBodyField = element(by.xpath("//app-construct-request-map//mat-tree-node//p[contains(.,'FromName')]//button[@class='btn btn-sm btn-link ml-1 ng-star-inserted']"));
  }


  getXpathResponseCarrierBodyField(fieldMappingName: string, nthElement: number): ElementFinder {
    let elementsList = element.all(by.xpath("//app-construct-response-map//div[@class='row'][3]//div[contains(@class, 'col')][1]//p[contains(.,'"+fieldMappingName+"')]//button[@class='btn btn-sm btn-link ml-1 ng-star-inserted']"));
    return elementsList.get(nthElement);
  }

  getXpathResponseGCSBodyField(fieldMappingName: string): ElementFinder {
    return element(by.xpath("//app-construct-response-map//div[@class='row'][3]//div[contains(@class, 'col')][2]//p[contains(.,'"+fieldMappingName+"')]//button[@class='btn btn-sm btn-link ml-1 ng-star-inserted']"));
  }
  
  getCustomXpathForMappingAddRule(fieldMappingName: string): ElementFinder {
    return element(by.xpath("//p[contains(.,'" + fieldMappingName + "')]//following-sibling::div/button[@ngbtooltip='Add Rules']"));
  }

  getXpathAddRuleFunction(functionName: string): ElementFinder {
    return element(by.xpath("//div[@class='modal-content']//select//option[@value='" + functionName + "']"));
  }
  getXpathForCarrierBodyField(fieldMappingName: string, nthElement: number): ElementFinder {
    //mappingName has space at start and end  
    let elementsList = element.all(by.xpath("//app-construct-request-map//h5[contains(.,'Carrier Body')]//..//p[contains(.,'" + fieldMappingName + "')]//button[@class='btn btn-sm btn-link ml-1 ng-star-inserted']"));
    return elementsList.get(nthElement);
  }


  getXpathForGCSBodyField(fieldMappingName: string, nthElement: number): ElementFinder {

    return element(by.xpath("//app-construct-request-map//mat-tree-node//p[contains(.,'" + fieldMappingName + "')]//button[@class='btn btn-sm btn-link ml-1 ng-star-inserted']"));
  }

  async getFieldElement(fieldMappingName: string) {
    try {
      // mappingName has space at start and end  
      var element1 = element(by.xpath("//app-construct-request-map//mat-tree-node//p[contains(.,'" + fieldMappingName + "')]//button[@class='btn btn-sm btn-link ml-1 ng-star-inserted']"));

      element1.isPresent().then(function (elm) {
        if (elm) {
          return "//button[@class='btn btn-sm btn-link ml-1 ng-star-inserted']";
        }
        else {
          console.log("in else");
          return "//span[@class='ng-star-inserted']";
        }
      });
    } catch (e) {
      console.log("mapcarrierToGCSField failed " + e);
    }
  }
  
  async mapcarrierToGCSField(CarrierField: string, GCSField: string, nthElement: number) {
    try {
      // click on field option

      browser.sleep(2000);
      // click on carrier field
      browser.sleep(100);
      await this.clickByMouseMove(this.getXpathForCarrierBodyField(CarrierField, nthElement));
      browser.sleep(1000);
      //await this.clickByMouseMove(this.buttonGCSBodyField);
      await this.getXpathForGCSBodyField(GCSField, nthElement).isPresent().then(function (value) {
        console.log(" GCS field button ", value)
      });
      console.log(" GCS field ", GCSField)
      await this.clickByMouseMove(this.getXpathForGCSBodyField(GCSField, nthElement));
      browser.sleep(1000);

      await this.buttonAddToMap.click();
      browser.sleep(2000);

    }
    catch (e) {
      console.log("mapcarrierToGCSField failed " + e);
    }

  }

  async mapcarrierToGCSFieldResponse(CarrierField: string, GCSField: string, nthElement: number) {
    try {
      // click on field option

      browser.sleep(2000);
      // click on carrier field
      await this.clickByMouseMove(this.getXpathResponseCarrierBodyField(CarrierField,nthElement));
      browser.sleep(1000);

      console.log(" GCS field response ", GCSField)
      await this.clickByMouseMove(this.getXpathResponseGCSBodyField(GCSField));
      browser.sleep(1000);

      await this.buttonAddToMap.click();
      browser.sleep(2000);

    }
    catch (e) {
      console.log("map carrier cms response failed " + e);
    }

  }


  async mapcarrierToGCSConstant(CarrierField: string, fieldName: string, value: string) {
    try {
      // click constant
      await this.click(this.buttonRequestConstant);
      browser.sleep(2000);

      browser.sleep(1000);
      // click on carrier field
      await this.clickByMouseMove(this.getXpathForCarrierBodyField(CarrierField, 0));
      browser.sleep(3000);

      await this.buttonAddToMap.click();
      browser.sleep(3000);

      // click add rule
      await this.clickByMouseMove(this.getCustomXpathForMappingAddRule(fieldName));
      browser.sleep(2000);
      await browser.executeScript("arguments[0].focus(); return true", this.inputCanstant);
      await this.sendKeyByMouseMove(this.inputCanstant, value);
      await browser.sleep(2000);
      await browser.executeScript("arguments[0].focus(); arguments[0].blur(); return true", this.inputCanstant);
      await browser.sleep(2000);
      await this.click(this.buttonClose);
      await browser.sleep(2000);
      await this.click(this.buttonRequestField);
      await browser.sleep(2000);

    }
    catch (e) {
      console.log("mapcarrierToGCSConstant failed " + e);
    }
  }
  async AddRuleTOField(MappingField: string, ruleName: string,) {
    try {

      //click add rule
      await this.clickByMouseMove(this.getCustomXpathForMappingAddRule(MappingField));
      browser.sleep(5000);
      console.log("select");
      await this.selectRule.click();
      browser.sleep(2000);
      console.log("select click");
      await this.click(this.getXpathAddRuleFunction(ruleName));

      browser.sleep(5000);
      await browser.executeScript("arguments[0].focus(); arguments[0].blur(); return true", this.selectRule);
      browser.sleep(1000);
      await this.click(this.buttonClose);
      await browser.sleep(4000);
      await this.clickByMouseMove(this.buttonRequestField);
      browser.sleep(2000);
    }
    catch (e) {
      console.log("mapcarrierToGCSConstant failed " + e);
    }
  }


}