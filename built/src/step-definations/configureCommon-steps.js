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
cucumber_1.Then('User is landed on carrierConfiguration page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.configurationPageIndentifier.getText().then(function (text) {
        expect(text).contains("Configure Carrier");
    });
}));
cucumber_1.When('User click on RateShop from the api pane', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.rateShopLink.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('User click on Rate from the api pane', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.rateLink.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('User click on Shipment from the api pane', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.shipmentLink.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('User click on Cancel from the api pane', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.cancelLink.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('User click on DeployAndTest from the api pane', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.deployAndTestLink.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('Click on Add API button for {string}', (apiName) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.getAddAPIButton(apiName).click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('Click on {string} button for rate', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.addAPIButton.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('Click on {string} on the popup', (addAPIButton) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.optionYes.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('Click on Request from the options', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.request.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('Enter the curl request for API {string} with file {string} in the text box', (apiName, fileName) => __awaiter(void 0, void 0, void 0, function* () {
    let path = require('path');
    let absolutePath = yield path.resolve(`${protractor_1.browser.params.root}/src/JSONData`, fileName);
    const file = fs_1.readFileSync(absolutePath, 'utf-8');
    yield configurationPage.getmetaDataTextArea(apiName).clear();
    yield configurationPage.getmetaDataTextArea(apiName).sendKeys(file);
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('Click on import button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.importButton.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('Select {string} request from the httpMethod Drop down', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.httpMethodDropDown.click();
    yield configurationPage.httpMethodDropDown.sendKeys("POST");
}));
cucumber_1.When('Enter URL in the url text box', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.serviceURLTextBox.sendKeys("https://api-test.couriersplease.com.au/v2/domestic/quote");
}));
cucumber_1.When('User click on metadata Header', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.optionHeader.click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('User click on Mapping tab', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.mappingTab.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('Select from a field mapping option', () => __awaiter(void 0, void 0, void 0, function* () {
    yield console.log("Pending");
}));
cucumber_1.When('User click on Deploy and Test button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield configurationPage.deployAndTestButton.click();
}));
cucumber_1.Then('Deployment is started for the carrier', () => __awaiter(void 0, void 0, void 0, function* () {
    yield console.log("Deployment started");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJlQ29tbW9uLXN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0ZXAtZGVmaW5hdGlvbnMvY29uZmlndXJlQ29tbW9uLXN0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUE2RDtBQUM3RCwyREFBdUQ7QUFDdkQsbUVBQStEO0FBQy9ELDJFQUFxRTtBQUNyRSxnREFBd0I7QUFDeEIsMkJBQWtDO0FBQ2xDLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7QUFDaEMsSUFBSSxhQUFhLEdBQUcsSUFBSSw4QkFBYSxFQUFFLENBQUM7QUFDeEMsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLHNDQUFpQixFQUFFLENBQUM7QUFHaEQsZUFBSSxDQUFDLDZDQUE2QyxFQUFFLEdBQU8sRUFBRTtJQUNsRCxNQUFNLGlCQUFpQixDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7UUFDakYsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQywwQ0FBMEMsRUFBRSxHQUFPLEVBQUU7SUFDeEQsTUFBTSxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0MsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHNDQUFzQyxFQUFFLEdBQU8sRUFBRTtJQUNuRCxNQUFNLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QyxNQUFNLG9CQUFP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