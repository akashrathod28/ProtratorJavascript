import { Given, When, Then } from "cucumber";
import { browser, element, by, protractor } from "protractor"
import { LoginPage } from "../page-objects/login-page";
import { DashboardPage } from "../page-objects/dashboard-page";
import { CarrierPage } from "../page-objects/carrier-page";
import { APIConfigration } from "../page-objects/APIConfigration-page";
import { QuestionariesPage } from "../page-objects/questionnaries-page";
import chai from "chai";
var expect = chai.expect;
let loginPage = new LoginPage();
let dashBoardPage = new DashboardPage();
let APIConfigrationPage = new APIConfigration();
let carrierPage = new CarrierPage();
let questionariesPage = new QuestionariesPage();


Given('User enter carier {string} in the search box', async (carrierName) => {

  await dashBoardPage.sendKey(dashBoardPage.searchCarrier, carrierName);
  browser.sleep(5000);

  var EC = protractor.ExpectedConditions;
  // Waits for the element with id 'myInput' to contain the input 'foo'.
  browser.wait(EC.textToBePresentInElementValue(dashBoardPage.searchCarrier, carrierName), 5000);

  await dashBoardPage.searchCarrier.getAttribute('value').then(function (text) {
    console.log("enter carrier name value.", text);
    expect(text).contain(carrierName);
  });
});


Then('User view the carrier {string} to navigate Carrier home', async (carrierName) => {
  await dashBoardPage.getListedCarrier(carrierName).getText().then(function (text) {
    console.log("enter carrier text .", text);
    browser.sleep(5000);
    expect(text).contain(carrierName);
  });
  await dashBoardPage.getButtonCarrierView(carrierName).click();
  browser.sleep(5000);
  await carrierPage.carrierNameAusPostQA.getText().then(function (text) {
    console.log("enter carrier name text .", text);
    expect(text).contain(carrierName);
  });
});

Then('User wish to Onboard the {string} carrier', async (carrierName) => {
  browser.sleep(2000);
  await carrierPage.onboardingbutton.getAttribute('disabled').then(async function (value) {
    if (value == "" || value == "true" ) {
      await carrierPage.editButton.click();
    }
    else {
      await carrierPage.onboardingbutton.click();
    }
  });

  browser.sleep(2000);
  // TO Validate we are on Questionaries Page, can change below locator
  await questionariesPage.checkboxNameAPISupportedRate.getText().then(function (text) {
    expect(text).contain("Rate");
  });
  browser.sleep(2000);
});

Then('User set {string} api to Onboard', async (APIName) => {
  
  await questionariesPage.checkboxAPISupportedRateInput.getAttribute('aria-checked').then(function (text) {
    if (text == 'true') {

    } else {
      questionariesPage.checkboxAPISupportedRate.click();
    }
  });
  browser.sleep(2000);

  //continue to APIConfig page
  await questionariesPage.buttonContinue.click();
  browser.sleep(2000);

});

Then('User sets {string} request mapping', async (APIName) => {
  if (APIName == "Rate") {
    // click on Rate option
    await APIConfigrationPage.tabAPIRate.click();
    browser.sleep(4000);
    // click on add request
    await APIConfigrationPage.titleAddRequest.click();
    browser.sleep(2000);
    // click and enter mapping request from carrier
    // import the fs module
    const fs = require('fs');
    // read the file into raw data
    let rateRequest = fs.readFileSync('src/JSONData/Auspost_rate_request.JSON');

    await browser.actions().
      mouseMove(APIConfigrationPage.textAddrequestAreaBody).
      click().
      sendKeys(String(rateRequest)).
      perform();
    console.log("enter carrier request");
    await browser.executeScript("arguments[0].focus(); arguments[0].blur(); return true", APIConfigrationPage.textAddrequestAreaBody);
    await browser.sleep(5000);

    await APIConfigrationPage.clickByMouseMove(APIConfigrationPage.buttonImportRequest);

    browser.sleep(7000);

  }

});

Then('User select fields from request mapping for {string} api', async (APIName) => {
  if (APIName == "Rate") {
    await APIConfigrationPage.titleMapRequest.click();
    console.log("click titleMapRequest");
    browser.sleep(2000);
    // map fields
    // function  mapcarrierToGCSField(carrier locator name, GCS locator name, nth occarance carrier field if more then one field found )

    await APIConfigrationPage.mapcarrierToGCSField(" name ", "FromName", 0);
    await APIConfigrationPage.mapcarrierToGCSField(" lines ", "FromLineZero", 0);
    await APIConfigrationPage.mapcarrierToGCSField(" suburb ", "FromCity", 0);
    await APIConfigrationPage.mapcarrierToGCSField(" state ", "FromState", 0);
    await APIConfigrationPage.mapcarrierToGCSField(" postcode ", "FromPostalCode", 0);
    await APIConfigrationPage.mapcarrierToGCSField(" phone ", "FromPhone", 0);
    await APIConfigrationPage.mapcarrierToGCSField(" email ", "FromEmail", 0);
    await APIConfigrationPage.mapcarrierToGCSField(" country ", "FromCountry", 0);
    await APIConfigrationPage.mapcarrierToGCSField(" business_name ", "FromCompany", 0);


    await APIConfigrationPage.mapcarrierToGCSField(" name ", "ToName", 0);
    await APIConfigrationPage.mapcarrierToGCSField(" lines ", "ToLineZero", 0);
    await APIConfigrationPage.mapcarrierToGCSField(" suburb ", "ToCity", 0);
    await APIConfigrationPage.mapcarrierToGCSField(" state ", "ToState", 0);
    await APIConfigrationPage.mapcarrierToGCSField(" postcode ", "ToPostalCode", 0);
    await APIConfigrationPage.mapcarrierToGCSField(" phone ", "ToPhone", 0);
    await APIConfigrationPage.mapcarrierToGCSField(" email ", "ToEmail", 0);
    await APIConfigrationPage.mapcarrierToGCSField(" country ", "ToCountry", 0);
    await APIConfigrationPage.mapcarrierToGCSField(" business_name ", "ToCompany", 0);

    await APIConfigrationPage.mapcarrierToGCSConstant(" type ", "shipments_0_to_type", "STANDARD_ADDRESS");

    // shipments_0_features_pickup_date_attributes_date
    await APIConfigrationPage.mapcarrierToGCSField(" date ", "PickupSvcDateValue", 1);
    // shipments_0_features_pickup_time_attributes_time
    await APIConfigrationPage.mapcarrierToGCSField(" time ", "PickupSvcTimeValue", 0);
    // shipments_0_features_print_at_depot_attributes_enabled
    await APIConfigrationPage.mapcarrierToGCSField(" enabled ", "PrintAtDepotSplSvcVal", 0);
    // shipments_0_items_0_authority_to_leave
    await APIConfigrationPage.mapcarrierToGCSField(" authority_to_leave ", " AuthorityToLeave ", 0);
    // need to add rule for above mapping
    await APIConfigrationPage.AddRuleTOField("shipments_0_items_0_authority_to_leave", "covertToBoolean");

    // shipments_0_items_0_features_transit_cover_attributes_cover_amount
    await APIConfigrationPage.mapcarrierToGCSField(" cover_amount ", "InsSplSvcValue", 0);

    // shipments_0_items_0_height
    // need to add rule for above mapping
    await APIConfigrationPage.mapcarrierToGCSField(" height ", "DimensionHeight", 0);
    await APIConfigrationPage.AddRuleTOField("shipments_0_items_0_height", "dimConverter");

    // shipments_0_items_0_length
    // need to add rule for above mapping
    await APIConfigrationPage.mapcarrierToGCSField(" length ", "DimensionLength", 0);
    await APIConfigrationPage.AddRuleTOField("shipments_0_items_0_length", "dimConverter");

    // shipments_0_items_0_product_id
    await APIConfigrationPage.mapcarrierToGCSField(" product_id ", "ServiceId", 0);

    // shipments_0_items_0_weight
    // need to add rule for above mapping
    await APIConfigrationPage.mapcarrierToGCSField(" weight ", " Weight ", 0);
    await APIConfigrationPage.AddRuleTOField("shipments_0_items_0_weight", "convertWeightToKg");

    // shipments_0_items_0_width
    // need to add rule for above mapping
    await APIConfigrationPage.mapcarrierToGCSField(" width ", "DimensionWidth", 0);
    await APIConfigrationPage.AddRuleTOField("shipments_0_items_0_width", "dimConverter");

    // shipments_0_features_transit_warranty_attributes_cover_amount
    // for same GCS field need to change button to span 
    await APIConfigrationPage.mapcarrierToGCSField(" cover_amount ", "InsSplSvcValue", 0);

    console.log("set name field carrier to name");
    // browser.sleep(2000);

  }

});
Then('User sets {string} response mapping', async (APIName) => {
  if (APIName == "Rate") {
    // click on Rate option
    await APIConfigrationPage.tabAPIRate.click();
    browser.sleep(4000);
    // click on add response
    await APIConfigrationPage.titleAddResponse.click();
    browser.sleep(2000);
    // click and enter mapping response from carrier
    // import the fs module // read the file into raw data
    const fs = require('fs');
    let rateResponse = fs.readFileSync('src/JSONData/Auspost_rate_Response.JSON');

    await browser.actions().
      mouseMove(APIConfigrationPage.textAddresponseAreaBody).
      click().
      sendKeys(String(rateResponse)).
      perform();
    console.log("enter carrier response");

    await browser.executeScript("arguments[0].focus(); arguments[0].blur(); return true", APIConfigrationPage.textAddresponseAreaBody);
    await browser.sleep(5000);

    await APIConfigrationPage.clickByMouseMove(APIConfigrationPage.buttonImportResponse);

    browser.sleep(7000);

  }
});

Then('User select fields from response mapping for {string} api', async (APIName) => {
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
});

Then('Check for deployment for mappings', async () => {
  // Write code here that turns the phrase above into concrete actions
  //click on profile 
  await browser.sleep(2000);
  await dashBoardPage.click(dashBoardPage.buttonUserName);
  await browser.sleep(2000);
  await dashBoardPage.click(dashBoardPage.buttonProfile);
  await browser.sleep(2000);
  await dashBoardPage.click(dashBoardPage.buttonExportAuspost);
  await console.log("click titleMapRequest");
  await browser.sleep(15000);

});


Then('{string} request API get success response', async (string) => {
  return 'pending';
});