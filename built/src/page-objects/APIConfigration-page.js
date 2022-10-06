"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIConfigration = void 0;
const protractor_1 = require("protractor");
const base_page_1 = require("./base-page");
class APIConfigration extends base_page_1.BasePage {
    constructor() {
        super();
        this.tabAPIRate = protractor_1.element(protractor_1.by.xpath("//a[contains(.,'RATE')]"));
        this.tabAPIShip = protractor_1.element(protractor_1.by.xpath("//a[contains(.,'SHIP')]"));
        this.tabAPICancel = protractor_1.element(protractor_1.by.xpath("//a[contains(.,'CANCEL')]"));
        this.tabAPIManifest = protractor_1.element(protractor_1.by.xpath("//a[contains(.,'MANIFEST')]"));
        this.titleAddRequest = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//mat-panel-title[contains(.,'Add request')]"));
        this.titleMapRequest = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//mat-panel-title[contains(.,' Map request ')]"));
        this.titleAddResponse = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//mat-panel-title[contains(.,'Add response')]"));
        this.titleMapResponse = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//mat-panel-title[contains(.,'Map response')]"));
        this.tabBody = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//div[@class='mat-tab-label-content' and contains(.,'Body')]"));
        this.tabHeaders = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//div[@class='mat-tab-label-content' and contains(.,'Headers')]"));
        this.tabPathParameters = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//div[@class='mat-tab-label-content' and contains(.,'Path Parameters')]"));
        this.tabQueryParameters = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//div[@class='mat-tab-label-content' and contains(.,'Query Parameters')]"));
        this.tabAuthorization = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//div[@class='mat-tab-label-content' and contains(.,'Authorization')]"));
        this.textAddrequestAreaBody = protractor_1.element(protractor_1.by.xpath("//mat-expansion-panel[contains(.,'Add request')]//textarea"));
        this.textAddresponseAreaBody = protractor_1.element(protractor_1.by.xpath("//mat-expansion-panel[contains(.,'Add response')]//textarea"));
        this.buttonImportRequest = protractor_1.element(protractor_1.by.xpath("//mat-expansion-panel[contains(.,'Add request')]//button[contains(.,'Import')]"));
        this.buttonImportResponse = protractor_1.element(protractor_1.by.xpath("//mat-expansion-panel[contains(.,'Add response')]//button[contains(.,'Import')]"));
        this.inputAddRequestField = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//table[@class='table table-sm table-borderless']//input[1]"));
        this.selectAuthorizationType = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//label[contains(.,'Authorization Type')]//following-sibling::select"));
        this.inputUsername = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//label[contains(.,'Username')]//following-sibling::input"));
        this.inputPassword = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//label[contains(.,'Password')]//following-sibling::input"));
        this.buttonDeleteField = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//table[@class='table table-sm table-borderless']//button[1]"));
        this.buttonSaveAuthorization = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//button[contains(.,'Save')]"));
        this.buttonSelectMappingField = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//p[.=' Carrier ']/button[1]"));
        this.buttonTypeConvert = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//p[.=' Carrier ']/button[2]"));
        this.buttonRequestField = protractor_1.element(protractor_1.by.xpath("//app-construct-request-map//button[contains(.,'Field')]"));
        this.buttonRequestConstant = protractor_1.element(protractor_1.by.xpath("//app-construct-request-map//button[contains(.,'Constant')]"));
        this.buttonRequestFunction = protractor_1.element(protractor_1.by.xpath("//app-construct-request-map//button[contains(.,'Function')]"));
        this.buttonRequestClear = protractor_1.element(protractor_1.by.xpath("//app-construct-request-map//button[contains(.,'Clear')]"));
        this.buttonAddToMap = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//button[contains(.,'Add to Map')]"));
        this.inputCanstant = protractor_1.element(protractor_1.by.xpath("//p//input[@type='text']"));
        this.buttonClose = protractor_1.element(protractor_1.by.xpath("//button[contains(.,'Close')]"));
        // current field we mapping 
        this.labelFieldMappedCurrent = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//div[@class='callout ng-star-inserted']/p"));
        this.labelFieldMappedfunction = protractor_1.element(protractor_1.by.xpath("//div[@aria-expanded='true']//div[@class='callout ng-star-inserted']/h5"));
        //button for Add rules for mapped fields, need to make dynamic, see below function  getCustomXpathForMappingAddRule
        this.buttonAddRule = protractor_1.element(protractor_1.by.xpath("//p[contains(.,'$.pickup_date')]//following-sibling::div/button[@ngbtooltip='Add Rules']"));
        this.selectRule = protractor_1.element(protractor_1.by.xpath("//div[@class='modal-content']//select"));
        this.optionConvertToKG = protractor_1.element(protractor_1.by.xpath("//div[@class='modal-content']//select//option[@value='convertWeightToKg']"));
        this.offtext = protractor_1.element(protractor_1.by.xpath("//div[@class='modal-content']//input[@value='or']"));
        this.buttonCarrierBodyField = protractor_1.element(protractor_1.by.xpath("//app-construct-request-map//h5[contains(.,'Carrier Body')]//..//p[contains(.,' product_id ')]//button[@class='btn btn-sm btn-link ml-1 ng-star-inserted']"));
        this.buttonGCSBodyField = protractor_1.element(protractor_1.by.xpath("//app-construct-request-map//mat-tree-node//p[contains(.,'FromName')]//button[@class='btn btn-sm btn-link ml-1 ng-star-inserted']"));
    }
    getXpathResponseCarrierBodyField(fieldMappingName, nthElement) {
        let elementsList = protractor_1.element.all(protractor_1.by.xpath("//app-construct-response-map//div[@class='row'][3]//div[contains(@class, 'col')][1]//p[contains(.,'" + fieldMappingName + "')]//button[@class='btn btn-sm btn-link ml-1 ng-star-inserted']"));
        return elementsList.get(nthElement);
    }
    getXpathResponseGCSBodyField(fieldMappingName) {
        return protractor_1.element(protractor_1.by.xpath("//app-construct-response-map//div[@class='row'][3]//div[contains(@class, 'col')][2]//p[contains(.,'" + fieldMappingName + "')]//button[@class='btn btn-sm btn-link ml-1 ng-star-inserted']"));
    }
    getCustomXpathForMappingAddRule(fieldMappingName) {
        return protractor_1.element(protractor_1.by.xpath("//p[contains(.,'" + fieldMappingName + "')]//following-sibling::div/button[@ngbtooltip='Add Rules']"));
    }
    getXpathAddRuleFunction(functionName) {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='modal-content']//select//option[@value='" + functionName + "']"));
    }
    getXpathForCarrierBodyField(fieldMappingName, nthElement) {
        //mappingName has space at start and end  
        let elementsList = protractor_1.element.all(protractor_1.by.xpath("//app-construct-request-map//h5[contains(.,'Carrier Body')]//..//p[contains(.,'" + fieldMappingName + "')]//button[@class='btn btn-sm btn-link ml-1 ng-star-inserted']"));
        return elementsList.get(nthElement);
    }
    getXpathForGCSBodyField(fieldMappingName, nthElement) {
        return protractor_1.element(protractor_1.by.xpath("//app-construct-request-map//mat-tree-node//p[contains(.,'" + fieldMappingName + "')]//button[@class='btn btn-sm btn-link ml-1 ng-star-inserted']"));
    }
    getFieldElement(fieldMappingName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // mappingName has space at start and end  
                var element1 = protractor_1.element(protractor_1.by.xpath("//app-construct-request-map//mat-tree-node//p[contains(.,'" + fieldMappingName + "')]//button[@class='btn btn-sm btn-link ml-1 ng-star-inserted']"));
                element1.isPresent().then(function (elm) {
                    if (elm) {
                        return "//button[@class='btn btn-sm btn-link ml-1 ng-star-inserted']";
                    }
                    else {
                        console.log("in else");
                        return "//span[@class='ng-star-inserted']";
                    }
                });
            }
            catch (e) {
                console.log("mapcarrierToGCSField failed " + e);
            }
        });
    }
    mapcarrierToGCSField(CarrierField, GCSField, nthElement) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // click on field option
                protractor_1.browser.sleep(2000);
                // click on carrier field
                protractor_1.browser.sleep(100);
                yield this.clickByMouseMove(this.getXpathForCarrierBodyField(CarrierField, nthElement));
                protractor_1.browser.sleep(1000);
                //await this.clickByMouseMove(this.buttonGCSBodyField);
                yield this.getXpathForGCSBodyField(GCSField, nthElement).isPresent().then(function (value) {
                    console.log("  field button ", value);
                });
                console.log("  field ", GCSField);
                yield this.clickByMouseMove(this.getXpathForGCSBodyField(GCSField, nthElement));
                protractor_1.browser.sleep(1000);
                yield this.buttonAddToMap.click();
                protractor_1.browser.sleep(2000);
            }
            catch (e) {
                console.log("mapcarrierToGCSField failed " + e);
            }
        });
    }
    mapcarrierToGCSFieldResponse(CarrierField, GCSField, nthElement) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // click on field option
                protractor_1.browser.sleep(2000);
                // click on carrier field
                yield this.clickByMouseMove(this.getXpathResponseCarrierBodyField(CarrierField, nthElement));
                protractor_1.browser.sleep(1000);
                console.log("  field response ", GCSField);
                yield this.clickByMouseMove(this.getXpathResponseGCSBodyField(GCSField));
                protractor_1.browser.sleep(1000);
                yield this.buttonAddToMap.click();
                protractor_1.browser.sleep(2000);
            }
            catch (e) {
                console.log("map carrier response failed " + e);
            }
        });
    }
    mapcarrierToGCSConstant(CarrierField, fieldName, value) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // click constant
                yield this.click(this.buttonRequestConstant);
                protractor_1.browser.sleep(2000);
                protractor_1.browser.sleep(1000);
                // click on carrier field
                yield this.clickByMouseMove(this.getXpathForCarrierBodyField(CarrierField, 0));
                protractor_1.browser.sleep(3000);
                yield this.buttonAddToMap.click();
                protractor_1.browser.sleep(3000);
                // click add rule
                yield this.clickByMouseMove(this.getCustomXpathForMappingAddRule(fieldName));
                protractor_1.browser.sleep(2000);
                yield protractor_1.browser.executeScript("arguments[0].focus(); return true", this.inputCanstant);
                yield this.sendKeyByMouseMove(this.inputCanstant, value);
                yield protractor_1.browser.sleep(2000);
                yield protractor_1.browser.executeScript("arguments[0].focus(); arguments[0].blur(); return true", this.inputCanstant);
                yield protractor_1.browser.sleep(2000);
                yield this.click(this.buttonClose);
                yield protractor_1.browser.sleep(2000);
                yield this.click(this.buttonRequestField);
                yield protractor_1.browser.sleep(2000);
            }
            catch (e) {
                console.log("mapcarrierToGCSConstant failed " + e);
            }
        });
    }
    AddRuleTOField(MappingField, ruleName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //click add rule
                yield this.clickByMouseMove(this.getCustomXpathForMappingAddRule(MappingField));
                protractor_1.browser.sleep(5000);
                console.log("select");
                yield this.selectRule.click();
                protractor_1.browser.sleep(2000);
                console.log("select click");
                yield this.click(this.getXpathAddRuleFunction(ruleName));
                protractor_1.browser.sleep(5000);
                yield protractor_1.browser.executeScript("arguments[0].focus(); arguments[0].blur(); return true", this.selectRule);
                protractor_1.browser.sleep(1000);
                yield this.click(this.buttonClose);
                yield protractor_1.browser.sleep(4000);
                yield this.clickByMouseMove(this.buttonRequestField);
                protractor_1.browser.sleep(2000);
            }
            catch (e) {
                console.log("mapcarrierToGCSConstant failed " + e);
            }
        });
    }
}
exports.APIConfigration = APIConfigration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJQ29uZmlncmF0aW9uLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZS1vYmplY3RzL0FQSUNvbmZpZ3JhdGlvbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFpRztBQUVqRywyQ0FBdUM7QUFFdkMsTUFBYSxlQUFnQixTQUFRLG9CQUFRO0lBeUQzQztRQUNFLEtBQUssRUFBRSxDQUFBO1FBRVAsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1FBRXZFLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDBFQUEwRSxDQUFDLENBQUMsQ0FBQztRQUNySCxJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDLENBQUM7UUFDdkgsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyRUFBMkUsQ0FBQyxDQUFDLENBQUM7UUFDdkgsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyRUFBMkUsQ0FBQyxDQUFDLENBQUM7UUFFdkgsSUFBSSxDQUFDLE9BQU8sR0FB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