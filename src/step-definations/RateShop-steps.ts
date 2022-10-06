import { Given, When, Then } from "cucumber";
import { browser, element, by, WebElement, protractor } from "protractor"
import { LoginPage } from "../page-objects/login-page";
import { DashboardPage } from "../page-objects/dashboard-page";
import {ConfigurationPage} from "../page-objects/configuration-page";
import chai from "chai";
import { readFileSync } from 'fs';
var expect = chai.expect;
let loginPage = new LoginPage();
let dashBoardPage = new DashboardPage();
let configurationPage = new ConfigurationPage();


When('User map {string} using {string} to {string} {string} for {string} api', async(carrierField,mapingType,gcsTopField, gcsInsideField,apiName)=> {
    await configurationPage.getCarrierBodyFileldSelected(carrierField,apiName).click();
    await configurationPage.getMappingType(mapingType).click();
    //var splitted = gcsField.split(",", 2);
    //console.log(splitted);
    //console.log(splitted[0]);
    //await configurationPage.getGCSTopField(splitted[0]).click();
    await configurationPage.getGCSHirerchyField(gcsTopField,gcsInsideField).click();
    await browser.sleep(2000);
    await configurationPage.addToMapButton.click();
    await browser.sleep(2000);
    await configurationPage.saveMapping.click();
    await browser.sleep(2000);
    //await configurationPage.getGCSTopField(splitted[0]).click();
    await browser.sleep(2000);
           
         });

         When('User map queryParam {string} using {string} to {string} {string} for {string} api', async(carrierField,mapingType,gcsTopField, gcsInsideField,apiName)=> {
            await configurationPage.shipmentQueyParamconsignmentNumber.click();
            await configurationPage.getMappingType(mapingType).click();
            //var splitted = gcsField.split(",", 2);
            //console.log(splitted);
            //console.log(splitted[0]);
            //await configurationPage.getGCSTopField(splitted[0]).click();
            await configurationPage.getGCSHirerchyField(gcsTopField,gcsInsideField).click();
            await browser.sleep(2000);
            await configurationPage.addToMapButton.click();
            await browser.sleep(2000);
            await configurationPage.saveMapping.click();
            await browser.sleep(2000);
            //await configurationPage.getGCSTopField(splitted[0]).click();
            await browser.sleep(2000);
                   
                 });

         When('User map {string} using {string} to {string} {string} with conversion to {string} for {string} api', async(carrierField,mapingType,gcsTopField, gcsInsideField,conversionUnit,apiName)=>{
            await configurationPage.getCarrierBodyFileldSelected(carrierField,apiName).click();
            await configurationPage.getMappingType(mapingType).click();
            await configurationPage.getGCSHirerchyField(gcsTopField,gcsInsideField).click();
            await browser.sleep(2000);
            await configurationPage.addToMapButton.click();
            await browser.sleep(2000);
            await configurationPage.valueConversionDropDown.click();
            await browser.sleep(2000);
            await configurationPage.valueConversionDropDown.sendKeys(conversionUnit);
            await configurationPage.saveMapping.click();
            await browser.sleep(2000);

        });

        When('User map {string} using {string} to {string} {string} at {string} with conversion to {string} for {string} api', async(carrierField,mapingType,gcsTopField, gcsInsideField,seq,conversionUnit,apiName)=>{
            await configurationPage.getCarrierBodyFileldSelected(carrierField,apiName).click();
            await configurationPage.getMappingType(mapingType).click();
            await configurationPage.getGCSHirerchyFieldAtSeq(gcsTopField,gcsInsideField,seq).click();
            await browser.sleep(2000);
            await configurationPage.addToMapButton.click();
            await browser.sleep(2000);
            await configurationPage.valueConversionDropDown.click();
            await browser.sleep(2000);
            await configurationPage.valueConversionDropDown.sendKeys(conversionUnit);
            await configurationPage.saveMapping.click();
            await browser.sleep(2000);

        });

        When('User map header field {string} using {string} to {string}', async(headerField,mapingType,constantValue)=>{
            await configurationPage.getCarrierHeaderFileldSelected(headerField).click();
            await configurationPage.getMappingType(mapingType).click();
            await configurationPage.defineAConstant.click();
            await browser.sleep(2000);
            await configurationPage.constantValueField.sendKeys(constantValue);
            await browser.sleep(2000);
            await configurationPage.saveMapping.click();
            await browser.sleep(2000);

        });

        When('User map {string} using {string} to {string} for {string} api', async(carrierField,mapingType,constantValue,apiName)=>{
            await configurationPage.getCarrierBodyFileldSelected(carrierField,apiName).click();
            await configurationPage.getMappingType(mapingType).click();
            await configurationPage.defineAConstant.click();
            await browser.sleep(2000);
            await configurationPage.constantValueField.sendKeys(constantValue);
            await browser.sleep(2000);
            await configurationPage.saveMapping.click();
            await browser.sleep(2000);

        });
        When('User click on Save button for {string} to save complte mapping', async(apiName)=>{
            await configurationPage.getCompletMappingSaveButton(apiName).click();
            await browser.sleep(50000);

        });
        When('User select No on the configuration download popup', async()=>{
            await configurationPage.mappingDownloadConfirmation.click();
            await browser.sleep(5000);

        });
        
        When('User enter text on preview data field from {string}', async(fileName)=>{
            let path = require('path');
            let absolutePath = await path.resolve(`${browser.params.root}/src/JSONData`, fileName);
            const file = readFileSync(absolutePath, 'utf-8');
            await configurationPage.previewTextArea.sendKeys(file);
            await browser.sleep(5000);

        });

        When('User enter text on response preview data field from {string}', async(fileName)=>{
            let path = require('path');
            let absolutePath = await path.resolve(`${browser.params.root}/src/JSONData`, fileName);
            const file = readFileSync(absolutePath, 'utf-8');
            await configurationPage.previewTextAreaResponse.sendKeys(file);
            await browser.sleep(5000);

        });

        When('User Click on Preview button', async()=>{
            await configurationPage.previewButton.click();
            await browser.sleep(10000);

        });

        When('Click on Add Option button', async()=>{
            await configurationPage.addOptionButton.click();
            await browser.sleep(2000);

        });

        When('Add Shipment Option {string}', async(options)=>{
            await configurationPage.getShipmentOption(options).click();
            await browser.sleep(2000);

        });
        When('Click on Add button on the shipmetOption window', async()=>{
            await configurationPage.addShipmetOptionButton.click();
            await browser.sleep(2000);

        });

        
        When('User Click on response Preview button', async()=>{
            await configurationPage.responsePreviewButton.click();
            await browser.sleep(8000);

        });

        When('User click on Response selection', async()=>{
            await configurationPage.responseButton.click();
            await browser.sleep(2000);

        });

        When('User enter curl request in response text area', async()=>{
            let path = require('path');
            let absolutePath = await path.resolve(`${browser.params.root}/src/JSONData`, "courple-RateShop-Response.txt");
            const file = readFileSync(absolutePath, 'utf-8');
            await configurationPage.responseBodyTextArea.sendKeys(file);
            await browser.sleep(5000);

        });
        
        When('User click on import button for response', async()=>{
            await configurationPage.responseImportButton.click();
            await browser.sleep(5000);

        });

        When('User select {string} for cancel and manifest', async(value)=>{
            await configurationPage.shipmentCancelManifestKey.click();
            await configurationPage.shipmentCancelManifestKey.sendKeys(value);
            await browser.sleep(2000);

        });


        

        When('Mark data as a repeating element for {string} api', async (apiName)=> {
            await configurationPage.getResponseRepetingElement(apiName).click();
            await browser.sleep(5000);
         });

        When('Close the request section after clicking on request button', async()=>{
            await configurationPage.request.click();
            await browser.sleep(2000);

        });
        When('User map header field {string} using {string} to a special value2', async(headerField,mapingType)=>{
            await configurationPage.getCarrierHeaderFileldSelected(headerField).click();
            await configurationPage.getMappingType(mapingType).click();
            await configurationPage.defineAConstant.click();
            await browser.sleep(2000);
            await configurationPage.constantValueField.sendKeys("Basic V0QwMDAwNjcyNjo4OUFGMUY3MEU4MjkyNTdGREQ5NTlGQjVGRTJEQ0M1Q0EyMzhBQTEwQkE0NzlGQkU1MDIyQzU4RjdGRjYwMTAy");
            await browser.sleep(2000);
            await configurationPage.saveMapping.click();
            await browser.sleep(5000);

        });
        When('User map header field {string} using {string} to a special value', async(headerField,mapingType)=>{
            await configurationPage.getCarrierHeaderFileldSelected(headerField).click();
            await configurationPage.getMappingType(mapingType).click();
            await configurationPage.defineAConstant.click();
            await browser.sleep(2000);
            await configurationPage.constantValueField.sendKeys("WD00006726:89AF1F70E829257FDD959FB5FE2DCC5CA238AA10BA479FBE5022C58F7FF60102");
            await browser.sleep(2000);
            await configurationPage.saveMapping.click();
            await browser.sleep(5000);

        });
        //And User map "fee" at sequence "1" using "From a GCS Field" to "calculated_fuel_charge" at sequence "1" for "RATE_SHOP" api
        When('User map {string} at sequence {string} using {string} to {string} at sequence {string} for {string} api', async(gcsField,gcsFiledSeq,mapingType,carrierField,carrierFieldSeq, apiName)=>{
            await configurationPage.getResponseGCSfield(gcsField,gcsFiledSeq).click();
            await browser.sleep(2000);
            await configurationPage.getMappingType(mapingType).click();
            await browser.sleep(2000);
            await configurationPage.getResponseCarrierField(carrierField,apiName,carrierFieldSeq).click();
            await browser.sleep(2000);
            await configurationPage.addToMapButton.click();
            await browser.sleep(5000);
        });
//User map "name" at sequence "1" using "With Constant" to a constant "FUEL" for "RATE_SHOP" api
        When('User map {string} at sequence {string} using {string} to a constant {string} for {string} api', async(gcsField,gcsFiledSeq,mapingType,constantValue, apiName)=>{
            await configurationPage.getResponseGCSfield(gcsField,gcsFiledSeq).click();
            await browser.sleep(2000);
            await configurationPage.getMappingType(mapingType).click();
            await browser.sleep(2000);
            await configurationPage.defineAConstant.click();
            await browser.sleep(2000);
            await configurationPage.constantValueField.sendKeys(constantValue);
            await configurationPage.constantValueField.sendKeys(protractor.Key.TAB);
            await browser.sleep(2000);
            
        });

        When('User map {string} at sequence {string} with wait using {string} to a constant {string} for {string} api', async(gcsField,gcsFiledSeq,mapingType,constantValue, apiName)=>{
            await browser.sleep(10000);
            await configurationPage.getResponseGCSfield(gcsField,gcsFiledSeq).click();
            await browser.sleep(2000);
            await configurationPage.getMappingType(mapingType).click();
            await browser.sleep(2000);
            await configurationPage.defineAConstant.click();
            await browser.sleep(2000);
            await configurationPage.constantValueField.sendKeys(constantValue);
            await browser.sleep(2000);
            
        });
        
        
        When('User click on +Rule on rule window', async()=>{
            await configurationPage.addRule.click();
        });

        When('User select {string} from field dropdown and {string} from operator dropdown and {string} in value text box', async(dataField, operator,value)=>{
            await configurationPage.selectField.click();
            await configurationPage.selectField.sendKeys(dataField);
            await browser.sleep(2000);
            await configurationPage.selectOperator.click();
            await configurationPage.selectOperator.sendKeys(operator);
            await browser.sleep(2000);
            await configurationPage.valueField.sendKeys(value);
            await browser.sleep(2000);
           
        });

        When('User click on Save button on rule window', async()=>{
            await configurationPage.saveMapping.click();
            await browser.sleep(8000);
        });
        When('User map {string} using {string} to {string} with non 0 validation', async(gcsField,mapingType,carrierField)=>{
            await configurationPage.surcharges_surcharge_0_fee.click();
            await browser.sleep(2000);
            await configurationPage.getMappingType(mapingType).click();
            await browser.sleep(2000);
            await configurationPage.data_0_calculated_fuel_charge.click();
            await browser.sleep(2000);
            await configurationPage.addToMapButton.click();
            await browser.sleep(2000);
            await configurationPage.addRule.click();
            await browser.sleep(2000);
            await configurationPage.selectField.click();
            await configurationPage.selectField.sendKeys("data_0_calculated_fuel_charge");
            await browser.sleep(2000);
            await configurationPage.selectOperator.click();
            await configurationPage.selectOperator.sendKeys("gt");
            await browser.sleep(2000);
            await configurationPage.valueField.sendKeys(0);
            await browser.sleep(2000);
            await configurationPage.saveMapping.click();
            await browser.sleep(2000);

        });

        When('User map {string} using {string} to {string} with non 0 validation', async(gcsField,mapingType,constant)=>{
            await configurationPage.surcharges_surcharge_0_fee.click();
            await browser.sleep(2000);
            await configurationPage.getMappingType(mapingType).click();
            await browser.sleep(2000);
            await configurationPage.data_0_calculated_fuel_charge.click();
            await browser.sleep(2000);
            await configurationPage.addToMapButton.click();
            await browser.sleep(2000);
            await configurationPage.addRule.click();
            await browser.sleep(2000);
            await configurationPage.selectField.click();
            await configurationPage.selectField.sendKeys("data_0_calculated_fuel_charge");
            await browser.sleep(2000);
            await configurationPage.selectOperator.click();
            await configurationPage.selectOperator.sendKeys("gt");
            await browser.sleep(2000);
            await configurationPage.valueField.sendKeys(0);
            await browser.sleep(2000);
            await configurationPage.saveMapping.click();
            await browser.sleep(2000);

        });

        
        
        When('User map header field {string} using {string} with I want to perform {string}', async(headerField,mapingType,operation)=>{
            await configurationPage.getCarrierHeaderFileldSelected(headerField).click();
            await configurationPage.getMappingType(mapingType).click();
            await browser.sleep(5000);
            console.log("Operation >"+operation);
            await configurationPage.getComputePerformAction("Concatenation").click();
            await browser.sleep(5000);
            await configurationPage.getcomputeValueType("Request/Response Field","1").click();
            await browser.sleep(5000);
            await configurationPage.getcomputeValueField("carrierAccount.userId","1").click();
            
            await browser.sleep(5000);
            await configurationPage.getcomputeValueType("Constant","2").click();
            await browser.sleep(5000);
            ;
            await configurationPage.computeConstant.sendKeys(":");
            await browser.sleep(5000);
            await configurationPage.addArgumentButton.click();
            await browser.sleep(5000);
            await configurationPage.getcomputeValueType("Request/Response Field","3").click();
            await browser.sleep(5000);
            await configurationPage.getcomputeValueField("carrierAccount.userPassword","2").click();
            await browser.sleep(5000);
            await configurationPage.addThisFunctionButton.click();
            await browser.sleep(5000);
            await configurationPage.getComputePerformAction(operation).click();
            await browser.sleep(5000);
            await configurationPage.getcomputeValueType("Constant","1").click();
            await browser.sleep(5000);
            await configurationPage.computeConstant.sendKeys("Basic ");
            await browser.sleep(5000);
            await configurationPage.getcomputeValueType("From Previous Function","2").click();
            await browser.sleep(5000);
            await configurationPage.computeFunctionIdentifier.click();
            //await browser.sleep(5000);
            //await configurationPage.computeFunctionIdentifier.sendKeys("Concatenation-0");
            await browser.sleep(5000);
            await configurationPage.getcomputeValueConversion("encodeToBase64String","2").click();
            await browser.sleep(5000);
            await configurationPage.addThisFunctionButton.click();
            await configurationPage.completeAndMap.click();
            await browser.sleep(5000);
            await configurationPage.saveMapping.click();
            await browser.sleep(20000);

        });
       
        //User map "pickupFirstName" using "Compute Value" to compuet function "FirstName" to field "shipmentAddress.shipFrom.name"

        When('User map {string} using {string} to compuet function {string} to field {string} for {string} api', async(carrierField,mapingType,computeFunction,mappedValue,apiName)=>{
            await configurationPage.getCarrierBodyFileldSelected(carrierField,apiName).click();
            await configurationPage.getMappingType(mapingType).click();
            await browser.sleep(5000);
            await configurationPage.getComputePerformAction(computeFunction).click();
            await browser.sleep(5000);
            await configurationPage.getcomputeValueType("Request/Response Field","1").click();
            await browser.sleep(5000);
            await configurationPage.getcomputeValueField(mappedValue,"1").click();
            await configurationPage.addThisFunctionButton.click();
            await configurationPage.completeAndMap.click();
            await browser.sleep(5000);
            await configurationPage.saveMapping.click();
            await browser.sleep(20000);
        });

        When('User slected media type JsonXml', async()=>{
            await browser.sleep(2000);
            await configurationPage.selectContentForShipment.click();
            await browser.sleep(2000);
        });
     
       