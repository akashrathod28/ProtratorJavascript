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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const login_page_1 = require("../page-objects/login-page");
const dashboard_page_1 = require("../page-objects/dashboard-page");
const carrier_page_1 = require("../page-objects/carrier-page");
const APIConfigration_page_1 = require("../page-objects/APIConfigration-page");
const questionnaries_page_1 = require("../page-objects/questionnaries-page");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let loginPage = new login_page_1.LoginPage();
let dashBoardPage = new dashboard_page_1.DashboardPage();
let APIConfigrationPage = new APIConfigration_page_1.APIConfigration();
let carrierPage = new carrier_page_1.CarrierPage();
let questionariesPage = new questionnaries_page_1.QuestionariesPage();
cucumber_1.Given('User enter carier {string} in the search box', (carrierName) => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.sendKey(dashBoardPage.searchCarrier, carrierName);
    protractor_1.browser.sleep(5000);
    var EC = protractor_1.protractor.ExpectedConditions;
    // Waits for the element with id 'myInput' to contain the input 'foo'.
    protractor_1.browser.wait(EC.textToBePresentInElementValue(dashBoardPage.searchCarrier, carrierName), 5000);
    yield dashBoardPage.searchCarrier.getAttribute('value').then(function (text) {
        console.log("enter carrier name value.", text);
        expect(text).contain(carrierName);
    });
}));
cucumber_1.Then('User view the carrier {string} to navigate Carrier home', (carrierName) => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.getListedCarrier(carrierName).getText().then(function (text) {
        console.log("enter carrier text .", text);
        protractor_1.browser.sleep(5000);
        expect(text).contain(carrierName);
    });
    yield dashBoardPage.getButtonCarrierView(carrierName).click();
    protractor_1.browser.sleep(5000);
    yield carrierPage.carrierNameAusPostQA.getText().then(function (text) {
        console.log("enter carrier name text .", text);
        expect(text).contain(carrierName);
    });
}));
cucumber_1.Then('User wish to Onboard the {string} carrier', (carrierName) => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.sleep(2000);
    yield carrierPage.onboardingbutton.getAttribute('disabled').then(function (value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (value == "" || value == "true") {
                yield carrierPage.editButton.click();
            }
            else {
                yield carrierPage.onboardingbutton.click();
            }
        });
    });
    protractor_1.browser.sleep(2000);
    // TO Validate we are on Questionaries Page, can change below locator
    yield questionariesPage.checkboxNameAPISupportedRate.getText().then(function (text) {
        expect(text).contain("Rate");
    });
    protractor_1.browser.sleep(2000);
}));
cucumber_1.Then('User set {string} api to Onboard', (APIName) => __awaiter(void 0, void 0, void 0, function* () {
    yield questionariesPage.checkboxAPISupportedRateInput.getAttribute('aria-checked').then(function (text) {
        if (text == 'true') {
        }
        else {
            questionariesPage.checkboxAPISupportedRate.click();
        }
    });
    protractor_1.browser.sleep(2000);
    //continue to APIConfig page
    yield questionariesPage.buttonContinue.click();
    protractor_1.browser.sleep(2000);
}));
cucumber_1.Then('User sets {string} request mapping', (APIName) => __awaiter(void 0, void 0, void 0, function* () {
    if (APIName == "Rate") {
        // click on Rate option
        yield APIConfigrationPage.tabAPIRate.click();
        protractor_1.browser.sleep(4000);
        // click on add request
        yield APIConfigrationPage.titleAddRequest.click();
        protractor_1.browser.sleep(2000);
        // click and enter mapping request from carrier
        // import the fs module
        const fs = require('fs');
        // read the file into raw data
        let rateRequest = fs.readFileSync('src/JSONData/Auspost_rate_request.JSON');
        yield protractor_1.browser.actions().
            mouseMove(APIConfigrationPage.textAddrequestAreaBody).
            click().
            sendKeys(String(rateRequest)).
            perform();
        console.log("enter carrier request");
        yield protractor_1.browser.executeScript("arguments[0].focus(); arguments[0].blur(); return true", APIConfigrationPage.textAddrequestAreaBody);
        yield protractor_1.browser.sleep(5000);
        yield APIConfigrationPage.clickByMouseMove(APIConfigrationPage.buttonImportRequest);
        protractor_1.browser.sleep(7000);
    }
}));
cucumber_1.Then('User select fields from request mapping for {string} api', (APIName) => __awaiter(void 0, void 0, void 0, function* () {
    if (APIName == "Rate") {
        yield APIConfigrationPage.titleMapRequest.click();
        console.log("click titleMapRequest");
        protractor_1.browser.sleep(2000);
        // map fields
        // function  mapcarrierToField(carrier locator name,  locator name, nth occarance carrier field if more then one field found )
        yield APIConfigrationPage.mapcarrierToGCSField(" name ", "FromName", 0);
        yield APIConfigrationPage.mapcarrierToGCSField(" lines ", "FromLineZero", 0);
        yield APIConfigrationPage.mapcarrierToGCSField(" suburb ", "FromCity", 0);
        yield APIConfigrationPage.mapcarrierToGCSField(" state ", "FromState", 0);
        yield APIConfigrationPage.mapcarrierToGCSField(" postcode ", "FromPostalCode", 0);
        yield APIConfigrationPage.mapcarrierToGCSField(" phone ", "FromPhone", 0);
        yield APIConfigrationPage.mapcarrierToGCSField(" email ", "FromEmail", 0);
        yield APIConfigrationPage.mapcarrierToGCSField(" country ", "FromCountry", 0);
        yield APIConfigrationPage.mapcarrierToGCSField(" business_name ", "FromCompany", 0);
        yield APIConfigrationPage.mapcarrierToGCSField(" name ", "ToName", 0);
        yield APIConfigrationPage.mapcarrierToGCSField(" lines ", "ToLineZero", 0);
        yield APIConfigrationPage.mapcarrierToGCSField(" suburb ", "ToCity", 0);
        yield APIConfigrationPage.mapcarrierToGCSField(" state ", "ToState", 0);
        yield APIConfigrationPage.mapcarrierToGCSField(" postcode ", "ToPostalCode", 0);
        yield APIConfigrationPage.mapcarrierToGCSField(" phone ", "ToPhone", 0);
        yield APIConfigrationPage.mapcarrierToGCSField(" email ", "ToEmail", 0);
        yield APIConfigrationPage.mapcarrierToGCSField(" country ", "ToCountry", 0);
        yield APIConfigrationPage.mapcarrierToGCSField(" business_name ", "ToCompany", 0);
        yield APIConfigrationPage.mapcarrierToGCSConstant(" type ", "shipments_0_to_type", "STANDARD_ADDRESS");
        // shipments_0_features_pickup_date_attributes_date
        yield APIConfigrationPage.mapcarrierToGCSField(" date ", "PickupSvcDateValue", 1);
        // shipments_0_features_pickup_time_attributes_time
        yield APIConfigrationPage.mapcarrierToGCSField(" time ", "PickupSvcTimeValue", 0);
        // shipments_0_features_print_at_depot_attributes_enabled
        yield APIConfigrationPage.mapcarrierToGCSField(" enabled ", "PrintAtDepotSplSvcVal", 0);
        // shipments_0_items_0_authority_to_leave
        yield APIConfigrationPage.mapcarrierToGCSField(" authority_to_leave ", " AuthorityToLeave ", 0);
        // need to add rule for above mapping
        yield APIConfigrationPage.AddRuleTOField("shipments_0_items_0_authority_to_leave", "covertToBoolean");
        // shipments_0_items_0_features_transit_cover_attributes_cover_amount
        yield APIConfigrationPage.mapcarrierToGCSField(" cover_amount ", "InsSplSvcValue", 0);
        // shipments_0_items_0_height
        // need to add rule for above mapping
        yield APIConfigrationPage.mapcarrierToGCSField(" height ", "DimensionHeight", 0);
        yield APIConfigrationPage.AddRuleTOField("shipments_0_items_0_height", "dimConverter");
        // shipments_0_items_0_length
        // need to add rule for above mapping
        yield APIConfigrationPage.mapcarrierToGCSField(" length ", "DimensionLength", 0);
        yield APIConfigrationPage.AddRuleTOField("shipments_0_items_0_length", "dimConverter");
        // shipments_0_items_0_product_id
        yield APIConfigrationPage.mapcarrierToGCSField(" product_id ", "ServiceId", 0);
        // shipments_0_items_0_weight
        // need to add rule for above mapping
        yield APIConfigrationPage.mapcarrierToGCSField(" weight ", " Weight ", 0);
        yield APIConfigrationPage.AddRuleTOField("shipments_0_items_0_weight", "convertWeightToKg");
        // shipments_0_items_0_width
        // need to add rule for above mapping
        yield APIConfigrationPage.mapcarrierToGCSField(" width ", "DimensionWidth", 0);
        yield APIConfigrationPage.AddRuleTOField("shipments_0_items_0_width", "dimConverter");
        // shipments_0_features_transit_warranty_attributes_cover_amount
        // for same  field need to change button to span 
        yield APIConfigrationPage.mapcarrierToGCSField(" cover_amount ", "InsSplSvcValue", 0);
        console.log("set name field carrier to name");
        // browser.sleep(2000);
    }
}));
cucumber_1.Then('User sets {string} response mapping', (APIName) => __awaiter(void 0, void 0, void 0, function* () {
    if (APIName == "Rate") {
        // click on Rate option
        yield APIConfigrationPage.tabAPIRate.click();
        protractor_1.browser.sleep(4000);
        // click on add response
        yield APIConfigrationPage.titleAddResponse.click();
        protractor_1.browser.sleep(2000);
        // click and enter mapping response from carrier
        // import the fs module // read the file into raw data
        const fs = require('fs');
        let rateResponse = fs.readFileSync('src/JSONData/Auspost_rate_Response.JSON');
        yield protractor_1.browser.actions().
            mouseMove(APIConfigrationPage.textAddresponseAreaBody).
            click().
            sendKeys(String(rateResponse)).
            perform();
        console.log("enter carrier response");
        yield protractor_1.browser.executeScript("arguments[0].focus(); arguments[0].blur(); return true", APIConfigrationPage.textAddresponseAreaBody);
        yield protractor_1.browser.sleep(5000);
        yield APIConfigrationPage.clickByMouseMove(APIConfigrationPage.buttonImportResponse);
        protractor_1.browser.sleep(7000);
    }
}));
cucumber_1.Then('User select fields from response mapping for {string} api', (APIName) => __awaiter(void 0, void 0, void 0, function* () {
    //   if (APIName == "Rate") {
    //     await APIConfigrationPage.titleMapResponse.click();
    //     await console.log("click titleMapResponse");
    //     browser.sleep(2000);
    // //app-construct-response-map//div[@class='row'][3]//div[contains(@class, "col")][2]
    //     // mapcarrierToGCSFieldResponse (carrier field , cms fiels, nth)
    //     await APIConfigrationPage.mapcarrierToGCSFieldResponse(" total_cost ", " totalCarrierCharge ", 0);
    //     await APIConfigrationPage.mapcarrierToGCSFieldResponse(" total_cost ", " totalCharge ", 0);
    //     await APIConfigrationPage.mapcarrierToGCSFieldResponse(" total_gst ", " totalTaxAmount ", 0);
    //     await APIConfigrationPage.mapcarrierToGCSFieldResponse(" shipping_cost ", " baseCharge ", 0);
    //     await APIConfigrationPage.mapcarrierToGCSFieldResponseConstat( " packg chage surs sur name ", 0);
    //     // "defaultValue": "FUEL",
    //     // "ruleSet": {
    //     //     "rules": [
    //     //         {
    //     //             "field": "fuelSurcharge",
    //     //             "operator": "notnull"
    //     await APIConfigrationPage.mapcarrierToGCSFieldResponse(" fuel_surcharge ", " fee ", 0);
    // features.TRANSIT_COVER.type
    //     await APIConfigrationPage.mapcarrierToGCSFieldResponse(" type ", " packg chage spl serv splservID", 0);
    //     "typeConverter": "valueConverter"
    //     await APIConfigrationPage.mapcarrierToGCSFieldResponse(" TRANSIT_COVER.attributes.cover_amount ", " packg chage spl serv addATAss value", 0);
    //     "ruleSet": {
    //       "rules": [
    //           {
    //               "field": "specialServiceInsId",
    //               "operator": "notnull"
    //     await APIConfigrationPage.mapcarrierToGCSFieldResponse(" TRANSIT_COVER.price.calculated_price ", " packg chage spl serv fee", 0);
    //     "rules": [
    //       {
    //           "field": "specialServiceInsId",
    //           "operator": "notnull"
    //     await APIConfigrationPage.mapcarrierToGCSFieldResponse("  TRANSIT_COVER.price.calculated_gst ", " packg chage spl serv taxes applied tax", 0);
    //     "rules": [
    //       {
    //           "field": "specialServiceInsId",
    //           "operator": "notnull"
    //     await APIConfigrationPage.mapcarrierToGCSFieldResponseConstant("  TRANSIT_COVER.price.calculated_gst ", " packg chage spl serv taxes applied tax name", 0);
    //     "rules": [
    //       {
    //           "field": "specialServiceInsId",
    //           "operator": "notnull"
    //     await APIConfigrationPage.mapcarrierToGCSFieldResponseConstant(" ", " packg chage spl serv taxes Add data ss key", 0);
    //     await APIConfigrationPage.mapcarrierToGCSFieldResponse(" shipment_id ", "shipmentfield id", 0);
    //     await APIConfigrationPage.mapcarrierToGCSFieldResponse(" product_id ", "serviceId ", 0);
    //   }
}));
cucumber_1.Then('Check for deployment for mappings', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    //click on profile 
    yield protractor_1.browser.sleep(2000);
    yield dashBoardPage.click(dashBoardPage.buttonUserName);
    yield protractor_1.browser.sleep(2000);
    yield dashBoardPage.click(dashBoardPage.buttonProfile);
    yield protractor_1.browser.sleep(2000);
    yield dashBoardPage.click(dashBoardPage.buttonExportAuspost);
    yield console.log("click titleMapRequest");
    yield protractor_1.browser.sleep(15000);
}));
cucumber_1.Then('{string} request API get success response', (string) => __awaiter(void 0, void 0, void 0, function* () {
    return 'pending';
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJQ29uZmlncmF0aW9uLXN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0ZXAtZGVmaW5hdGlvbnMvQVBJQ29uZmlncmF0aW9uLXN0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUE2RDtBQUM3RCwyREFBdUQ7QUFDdkQsbUVBQStEO0FBQy9ELCtEQUEyRDtBQUMzRCwrRUFBdUU7QUFDdkUsNkVBQXdFO0FBQ3hFLGdEQUF3QjtBQUN4QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksU0FBUyxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO0FBQ2hDLElBQUksYUFBYSxHQUFHLElBQUksOEJBQWEsRUFBRSxDQUFDO0FBQ3hDLElBQUksbUJBQW1CLEdBQUcsSUFBSSxzQ0FBZSxFQUFFLENBQUM7QUFDaEQsSUFBSSxXQUFXLEdBQUcsSUFBSSwwQkFBVyxFQUFFLENBQUM7QUFDcEMsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLHVDQUFpQixFQUFFLENBQUM7QUFHaEQsZ0JBQUssQ0FBQyw4Q0FBOEMsRUFBRSxDQUFPLFdBQVcsRUFBRSxFQUFFO0lBRTFFLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3RFLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBCLElBQUksRUFBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7SUFDdkMsc0VBQXNFO0lBQ3RFLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRS9GLE1BQU0sYUFBYSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsSUFB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