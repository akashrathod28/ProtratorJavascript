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
const configuration_page_1 = require("../page-objects/configuration-page");
const chai_1 = __importDefault(require("chai"));
const fs_1 = require("fs");
var expect = chai_1.default.expect;
let loginPage = new login_page_1.LoginPage();
let dashBoardPage = new dashboard_page_1.DashboardPage();
let configurationPage = new configuration_page_1.ConfigurationPage();
cucumber_1.When('User map {string} using {string} to {string} {string} for {string} api', (carrierField, mapingType, gcsTopField, gcsInsideField, apiName) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.getCarrierBodyFileldSelected(carrierField, apiName).click();
    yield configurationPage.getMappingType(mapingType).click();
    //var splitted = gcsField.split(",", 2);
    //console.log(splitted);
    //console.log(splitted[0]);
    //await configurationPage.getGCSTopField(splitted[0]).click();
    yield configurationPage.getGCSHirerchyField(gcsTopField, gcsInsideField).click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.addToMapButton.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.saveMapping.click();
    yield protractor_1.browser.sleep(2000);
    //await configurationPage.getGCSTopField(splitted[0]).click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('User map queryParam {string} using {string} to {string} {string} for {string} api', (carrierField, mapingType, gcsTopField, gcsInsideField, apiName) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.shipmentQueyParamconsignmentNumber.click();
    yield configurationPage.getMappingType(mapingType).click();
    //var splitted = gcsField.split(",", 2);
    //console.log(splitted);
    //console.log(splitted[0]);
    //await configurationPage.getGCSTopField(splitted[0]).click();
    yield configurationPage.getGCSHirerchyField(gcsTopField, gcsInsideField).click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.addToMapButton.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.saveMapping.click();
    yield protractor_1.browser.sleep(2000);
    //await configurationPage.getGCSTopField(splitted[0]).click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('User map {string} using {string} to {string} {string} with conversion to {string} for {string} api', (carrierField, mapingType, gcsTopField, gcsInsideField, conversionUnit, apiName) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.getCarrierBodyFileldSelected(carrierField, apiName).click();
    yield configurationPage.getMappingType(mapingType).click();
    yield configurationPage.getGCSHirerchyField(gcsTopField, gcsInsideField).click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.addToMapButton.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.valueConversionDropDown.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.valueConversionDropDown.sendKeys(conversionUnit);
    yield configurationPage.saveMapping.click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('User map {string} using {string} to {string} {string} at {string} with conversion to {string} for {string} api', (carrierField, mapingType, gcsTopField, gcsInsideField, seq, conversionUnit, apiName) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.getCarrierBodyFileldSelected(carrierField, apiName).click();
    yield configurationPage.getMappingType(mapingType).click();
    yield configurationPage.getGCSHirerchyFieldAtSeq(gcsTopField, gcsInsideField, seq).click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.addToMapButton.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.valueConversionDropDown.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.valueConversionDropDown.sendKeys(conversionUnit);
    yield configurationPage.saveMapping.click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('User map header field {string} using {string} to {string}', (headerField, mapingType, constantValue) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.getCarrierHeaderFileldSelected(headerField).click();
    yield configurationPage.getMappingType(mapingType).click();
    yield configurationPage.defineAConstant.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.constantValueField.sendKeys(constantValue);
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.saveMapping.click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('User map {string} using {string} to {string} for {string} api', (carrierField, mapingType, constantValue, apiName) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.getCarrierBodyFileldSelected(carrierField, apiName).click();
    yield configurationPage.getMappingType(mapingType).click();
    yield configurationPage.defineAConstant.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.constantValueField.sendKeys(constantValue);
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.saveMapping.click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('User click on Save button for {string} to save complte mapping', (apiName) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.getCompletMappingSaveButton(apiName).click();
    yield protractor_1.browser.sleep(50000);
}));
cucumber_1.When('User select No on the configuration download popup', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.mappingDownloadConfirmation.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('User enter text on preview data field from {string}', (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    let path = require('path');
    let absolutePath = yield path.resolve(`${protractor_1.browser.params.root}/src/JSONData`, fileName);
    const file = fs_1.readFileSync(absolutePath, 'utf-8');
    yield configurationPage.previewTextArea.sendKeys(file);
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('User enter text on response preview data field from {string}', (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    let path = require('path');
    let absolutePath = yield path.resolve(`${protractor_1.browser.params.root}/src/JSONData`, fileName);
    const file = fs_1.readFileSync(absolutePath, 'utf-8');
    yield configurationPage.previewTextAreaResponse.sendKeys(file);
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('User Click on Preview button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.previewButton.click();
    yield protractor_1.browser.sleep(10000);
}));
cucumber_1.When('Click on Add Option button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.addOptionButton.click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('Add Shipment Option {string}', (options) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.getShipmentOption(options).click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('Click on Add button on the shipmetOption window', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.addShipmetOptionButton.click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('User Click on response Preview button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.responsePreviewButton.click();
    yield protractor_1.browser.sleep(8000);
}));
cucumber_1.When('User click on Response selection', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.responseButton.click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('User enter curl request in response text area', () => __awaiter(void 0, void 0, void 0, function* () {
    let path = require('path');
    let absolutePath = yield path.resolve(`${protractor_1.browser.params.root}/src/JSONData`, "courple-RateShop-Response.txt");
    const file = fs_1.readFileSync(absolutePath, 'utf-8');
    yield configurationPage.responseBodyTextArea.sendKeys(file);
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('User click on import button for response', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.responseImportButton.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('User select {string} for cancel and manifest', (value) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.shipmentCancelManifestKey.click();
    yield configurationPage.shipmentCancelManifestKey.sendKeys(value);
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('Mark data as a repeating element for {string} api', (apiName) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.getResponseRepetingElement(apiName).click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('Close the request section after clicking on request button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.request.click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('User map header field {string} using {string} to a special value2', (headerField, mapingType) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.getCarrierHeaderFileldSelected(headerField).click();
    yield configurationPage.getMappingType(mapingType).click();
    yield configurationPage.defineAConstant.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.constantValueField.sendKeys("Basic V0QwMDAwNjcyNjo4OUFGMUY3MEU4MjkyNTdGREQ5NTlGQjVGRTJEQ0M1Q0EyMzhBQTEwQkE0NzlGQkU1MDIyQzU4RjdGRjYwMTAy");
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.saveMapping.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('User map header field {string} using {string} to a special value', (headerField, mapingType) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.getCarrierHeaderFileldSelected(headerField).click();
    yield configurationPage.getMappingType(mapingType).click();
    yield configurationPage.defineAConstant.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.constantValueField.sendKeys("WD00006726:89AF1F70E829257FDD959FB5FE2DCC5CA238AA10BA479FBE5022C58F7FF60102");
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.saveMapping.click();
    yield protractor_1.browser.sleep(5000);
}));
//And User map "fee" at sequence "1" using "From a  Field" to "calculated_fuel_charge" at sequence "1" for "RATE_SHOP" api
cucumber_1.When('User map {string} at sequence {string} using {string} to {string} at sequence {string} for {string} api', (gcsField, gcsFiledSeq, mapingType, carrierField, carrierFieldSeq, apiName) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.getResponseGCSfield(gcsField, gcsFiledSeq).click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.getMappingType(mapingType).click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.getResponseCarrierField(carrierField, apiName, carrierFieldSeq).click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.addToMapButton.click();
    yield protractor_1.browser.sleep(5000);
}));
//User map "name" at sequence "1" using "With Constant" to a constant "FUEL" for "RATE_SHOP" api
cucumber_1.When('User map {string} at sequence {string} using {string} to a constant {string} for {string} api', (gcsField, gcsFiledSeq, mapingType, constantValue, apiName) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.getResponseGCSfield(gcsField, gcsFiledSeq).click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.getMappingType(mapingType).click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.defineAConstant.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.constantValueField.sendKeys(constantValue);
    yield configurationPage.constantValueField.sendKeys(protractor_1.protractor.Key.TAB);
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('User map {string} at sequence {string} with wait using {string} to a constant {string} for {string} api', (gcsField, gcsFiledSeq, mapingType, constantValue, apiName) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(10000);
    yield configurationPage.getResponseGCSfield(gcsField, gcsFiledSeq).click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.getMappingType(mapingType).click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.defineAConstant.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.constantValueField.sendKeys(constantValue);
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('User click on +Rule on rule window', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.addRule.click();
}));
cucumber_1.When('User select {string} from field dropdown and {string} from operator dropdown and {string} in value text box', (dataField, operator, value) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.selectField.click();
    yield configurationPage.selectField.sendKeys(dataField);
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.selectOperator.click();
    yield configurationPage.selectOperator.sendKeys(operator);
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.valueField.sendKeys(value);
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('User click on Save button on rule window', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.saveMapping.click();
    yield protractor_1.browser.sleep(8000);
}));
cucumber_1.When('User map {string} using {string} to {string} with non 0 validation', (gcsField, mapingType, carrierField) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.surcharges_surcharge_0_fee.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.getMappingType(mapingType).click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.data_0_calculated_fuel_charge.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.addToMapButton.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.addRule.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.selectField.click();
    yield configurationPage.selectField.sendKeys("data_0_calculated_fuel_charge");
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.selectOperator.click();
    yield configurationPage.selectOperator.sendKeys("gt");
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.valueField.sendKeys(0);
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.saveMapping.click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('User map {string} using {string} to {string} with non 0 validation', (gcsField, mapingType, constant) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.surcharges_surcharge_0_fee.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.getMappingType(mapingType).click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.data_0_calculated_fuel_charge.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.addToMapButton.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.addRule.click();
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.selectField.click();
    yield configurationPage.selectField.sendKeys("data_0_calculated_fuel_charge");
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.selectOperator.click();
    yield configurationPage.selectOperator.sendKeys("gt");
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.valueField.sendKeys(0);
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.saveMapping.click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('User map header field {string} using {string} with I want to perform {string}', (headerField, mapingType, operation) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.getCarrierHeaderFileldSelected(headerField).click();
    yield configurationPage.getMappingType(mapingType).click();
    yield protractor_1.browser.sleep(5000);
    console.log("Operation >" + operation);
    yield configurationPage.getComputePerformAction("Concatenation").click();
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.getcomputeValueType("Request/Response Field", "1").click();
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.getcomputeValueField("carrierAccount.userId", "1").click();
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.getcomputeValueType("Constant", "2").click();
    yield protractor_1.browser.sleep(5000);
    ;
    yield configurationPage.computeConstant.sendKeys(":");
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.addArgumentButton.click();
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.getcomputeValueType("Request/Response Field", "3").click();
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.getcomputeValueField("carrierAccount.userPassword", "2").click();
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.addThisFunctionButton.click();
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.getComputePerformAction(operation).click();
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.getcomputeValueType("Constant", "1").click();
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.computeConstant.sendKeys("Basic ");
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.getcomputeValueType("From Previous Function", "2").click();
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.computeFunctionIdentifier.click();
    //await browser.sleep(5000);
    //await configurationPage.computeFunctionIdentifier.sendKeys("Concatenation-0");
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.getcomputeValueConversion("encodeToBase64String", "2").click();
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.addThisFunctionButton.click();
    yield configurationPage.completeAndMap.click();
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.saveMapping.click();
    yield protractor_1.browser.sleep(20000);
}));
//User map "pickupFirstName" using "Compute Value" to compuet function "FirstName" to field "shipmentAddress.shipFrom.name"
cucumber_1.When('User map {string} using {string} to compuet function {string} to field {string} for {string} api', (carrierField, mapingType, computeFunction, mappedValue, apiName) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.getCarrierBodyFileldSelected(carrierField, apiName).click();
    yield configurationPage.getMappingType(mapingType).click();
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.getComputePerformAction(computeFunction).click();
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.getcomputeValueType("Request/Response Field", "1").click();
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.getcomputeValueField(mappedValue, "1").click();
    yield configurationPage.addThisFunctionButton.click();
    yield configurationPage.completeAndMap.click();
    yield protractor_1.browser.sleep(5000);
    yield configurationPage.saveMapping.click();
    yield protractor_1.browser.sleep(20000);
}));
cucumber_1.When('User slected media type JsonXml', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield configurationPage.selectContentForShipment.click();
    yield protractor_1.browser.sleep(2000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmF0ZVNob3Atc3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RlcC1kZWZpbmF0aW9ucy9SYXRlU2hvcC1zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywyQ0FBeUU7QUFDekUsMkRBQXVEO0FBQ3ZELG1FQUErRDtBQUMvRCwyRUFBcUU7QUFDckUsZ0RBQXdCO0FBQ3hCLDJCQUFrQztBQUNsQyxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksU0FBUyxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO0FBQ2hDLElBQUksYUFBYSxHQUFHLElBQUksOEJBQWEsRUFBRSxDQUFDO0FBQ3hDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxzQ0FBaUIsRUFBRSxDQUFDO0FBR2hELGVBQUksQ0FBQyx3RUFBd0UsRUFBRSxDQUFNLFlBQVksRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFFLGNBQWMsRUFBQyxPQUFPLEVBQUMsRUFBRTtJQUMvSSxNQUFNLGlCQUFpQixDQUFDLDRCQUE0QixDQUFDLFlBQVksRUFBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuRixNQUFNLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzRCx3Q0FBd0M7SUFDeEMsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiw4REFBOEQ7SUFDOUQsTUFBTSxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEYsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUks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