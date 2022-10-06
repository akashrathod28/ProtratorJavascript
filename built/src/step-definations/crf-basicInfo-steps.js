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
const chai_1 = __importDefault(require("chai"));
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const crf_basicInformationPage_1 = require("../page-objects/crf-basicInformationPage");
const crf_carrierFeaturePage_1 = require("../page-objects/crf-carrierFeaturePage");
const dashboard_page_1 = require("../page-objects/dashboard-page");
const node_fetch_1 = __importDefault(require("node-fetch"));
var expect = chai_1.default.expect;
let carrierBasicInformationPage = new crf_basicInformationPage_1.CarrierBasicInformationPage();
let dashBoardPage = new dashboard_page_1.DashboardPage();
let carrierFeaturePage = new crf_carrierFeaturePage_1.CarrierFeaturePage();
cucumber_1.Given('User Enter {string} in Carrier name text box', (carrierName) => __awaiter(void 0, void 0, void 0, function* () {
    //await browser.sleep(5000);
    yield dashBoardPage.waitForURLContain("request-form", 2000);
    yield carrierBasicInformationPage.sendKey(carrierBasicInformationPage.input_CarrierName, carrierName);
    //await carrierBasicInformationPage.input_CarrierName.sendKeys(carrierName);
}));
cucumber_1.Given('User select {string} from the Origin Country drop sown', (originCountry) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.click(carrierBasicInformationPage.select_OriginCountry);
    //await carrierBasicInformationPage.select_OriginCountry.click();
    yield carrierBasicInformationPage.select_OriginCountry.sendKeys(originCountry);
}));
cucumber_1.Given('User Enter the {string} in the Address Line1 text fields', (address1) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.sendKey(carrierBasicInformationPage.input_AddressLine1, address1);
    //await carrierBasicInformationPage.input_AddressLine1.sendKeys(address1);
}));
cucumber_1.Given('User Enter the {string} in the Address Line2 text fields', (address2) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.sendKey(carrierBasicInformationPage.input_AddressLine2, address2);
    //await carrierBasicInformationPage.input_AddressLine2.sendKeys(address2);
}));
cucumber_1.Given('User Enter the {string} in the city text fields', (cityName) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.sendKey(carrierBasicInformationPage.input_City, cityName);
    //await carrierBasicInformationPage.input_City.sendKeys(cityName);
}));
cucumber_1.Given('User Enter the {string} in the state text fields', (stateName) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.sendKey(carrierBasicInformationPage.input_State, stateName);
    //await carrierBasicInformationPage.input_State.sendKeys(stateName);
}));
cucumber_1.Given('Delete carrier {string} with origin country {string} if exist', (carrierName, originCountry) => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.searchCarrier.clear();
    //await dashBoardPage.searchCarrier.sendKeys(carrierName);
    //await dashBoardPage.getActionButton(carrierName).click();
    //await browser.sleep(5000);
    //var splitted = (await browser.getCurrentUrl()).toString().split("?",2);
    // console.log(splitted);
    //console.log(splitted[1]);
    //var splitted2=splitted[1].split("&",2);
    //var splitted3=splitted2[0].split("=",2);
    //await console.log(splitted3[1]);
    //deleteCarrier?carrierIdentifier="+splitted3[1]+"&countryCode="+originCountry,
    yield console.log(protractor_1.browser.params.basePath);
    //await console.log(browser.params.basePath+"/v1/carrier/deleteCarrier?carrierIdentifier="+splitted3[1]+"&countryCode="+originCountry);
    const response = yield node_fetch_1.default(protractor_1.browser.params.basePath + "/v1/carrier/deleteCarrier?carrierIdentifier=autcp&countryCode=AU", { method: 'DELETE', headers: {
            'Content-Type': 'application/json',
            'idToken': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiI1NTFiNjE3Ny1kODZjLTQ4YmMtODc3MC0xMGZjZGIzODQzZDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84YTQ5MjVhOS1mZDhlLTQ4NjYtYjMxYy1mNzE5ZmIwNWRjZTYvIiwiaWF0IjoxNjQxMjg1NDA0LCJuYmYiOjE2NDEyODU0MDQsImV4cCI6MTY0MTI5MDg5MCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkUyWmdZTGdSbVBqWmkzdnIyL1hScWZvUERqWThrdjluSTZkZFBOdnFzT3I2NE4rOXpIRUEiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiNTUxYjYxNzctZDg2Yy00OGJjLTg3NzAtMTBmY2RiMzg0M2Q2IiwiYXBwaWRhY3IiOiIwIiwiYXV0aF90aW1lIjoxNjQxMjc5MDQyLCJkZXZpY2VpZCI6ImI0OWU1MGIxLTYzOTgtNGE1MS05NWY5LTVkYjZjZjM3YzBjYiIsImVtYWlsIjoiZ2NzLXFhLWF1dG9tYXRpb25AcGIuY29tIiwiZmFtaWx5X25hbWUiOiJhdXRvbWF0aW9uIiwiZ2l2ZW5fbmFtZSI6Imdjcy1xYSIsImlwYWRkciI6IjE2NS4yMjUuMzguMjMiLCJuYW1lIjoiZ2NzLXFhLWF1dG9tYXRpb24iLCJvaWQiOiJiZDRiZTg2Yi03Zjc2LTRjOWYtOGNhMS0zMTQ1MTY4ZjFhYTEiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtNTkwNDQ1NjA4LTE4NTU3MzE4ODktNjE3NjMwNDkzLTU4MTQ3NiIsInByZWZlcnJlZF91c2VybmFtZSI6Imdjcy1xYS1hdXRvbWF0aW9uQHBiLmNvbSIsInJoIjoiMC5BUklBcVNWSmlvNzlaa2l6SFBjWi13WGM1bmRoRzFWczJMeEloM0FRX05zNFE5WVNBSkUuIiwic2NwIjoiZGVmYXVsdCIsInNpZCI6IjNiYTUxNDA0LWRlNzYtNGY0Ny1iYzYzLWU5MjE4YmUyYjM3MyIsInN1YiI6Ik1pOElndVVYMDQ4cDFuWGxOcnlmalcyTlBoZjZ4cHpfSVJVN3BydkFjRTAiLCJ0ZW5hbnRfY3RyeSI6IlVTIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6Ik5BIiwidGlkIjoiOGE0OTI1YTktZmQ4ZS00ODY2LWIzMWMtZjcxOWZiMDVkY2U2IiwidW5pcXVlX25hbWUiOiJnY3MtcWEtYXV0b21hdGlvbkBwYi5jb20iLCJ1cG4iOiJnY3MtcWEtYXV0b21hdGlvbkBwYi5jb20iLCJ1dGkiOiJVVmdTTUo3b08wV2ZzWnNudUtLRUFRIiwidmVyIjoiMS4wIiwidmVyaWZpZWRfcHJpbWFyeV9lbWFpbCI6WyJnY3MtcWEtYXV0b21hdGlvbkBwYi5jb20iXSwidmVyaWZpZWRfc2Vjb25kYXJ5X2VtYWlsIjpbImdjcy1xYS1hdXRvbWF0aW9uQHBiaW5jLm9ubWljcm9zb2Z0LmNvbSIsImdjcy1xYS1hdXRvbWF0aW9uQHBiaW5jLm1haWwub25taWNyb3NvZnQuY29tIl0sInhtc190cGwiOiJlbiJ9.PLbGrHAlyuwwOfdT98GSi0aTps7s7PQpQqI_7ClFg6GUKhSoSGK8qOZTmslS35yFSCjG1-Lftxd6s-2PGbOpHbr9OGIAJEyRAy7d5AkuHQWB7aYCLde5BqXetPOHHFM8DFnaToVMQ9aOjQZqzt1TldjuoEghdnYyuMn1lNP1MhBMKywr00CJ2mVnq0nmzFFYmz5_Um5T_LsKWRaeYot2haa_3_0yTPW4IOAYPK8Lk2EzEWv5UHYiCCEadRF9K0A9AqHWbCG_loM0IAxnWtSfxNsho4GRRYm9DvJ9tHjjGF2DI-Nw618rarg74cKuymPPQp2Y2_VKp-gC7g4SqxP2UQ'
        }, }).then(function (text) {
        console.log(text);
        //const data = await response.json();
        console.log(text);
    });
}));
cucumber_1.When('User Enter the {string} in the zip text fields', (zipCode) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.sendKey(carrierBasicInformationPage.input_Zip, zipCode);
    //await carrierBasicInformationPage.input_Zip.sendKeys(zipCode);
}));
cucumber_1.When('User Select the {string} from the Country dropdown', (countryName) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.select_Country.click();
    yield carrierBasicInformationPage.select_Country.sendKeys(countryName);
}));
cucumber_1.When('User Select the {string} from the Type Of Contact dropdown', (titel) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.select_TypeOfContact.click();
    yield carrierBasicInformationPage.select_Country.sendKeys(titel);
}));
cucumber_1.Given('User Enter the {string} in the Name text fields', (name) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.sendKey(carrierBasicInformationPage.input_Name, name);
}));
cucumber_1.Given('User Enter the {string} in the Title text fields', (titel) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.sendKey(carrierBasicInformationPage.input_Title, titel);
}));
cucumber_1.When('User Enter the {string} in the Phone Number text fields', (input_PhoneNumber) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield carrierBasicInformationPage.input_PhoneNumber.sendKeys(input_PhoneNumber);
}));
cucumber_1.When('User Enter the {string} in the Email text fields', (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.input_Email.sendKeys(email);
}));
cucumber_1.When('User Click on the Next button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.button_Next.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('User is landed on Carrier Features page with Carrier Name as {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield carrierFeaturePage.pageIdentifier.getText().then(function (text) {
        expect(text).contains("Carrier Features");
    });
}));
cucumber_1.Then('Carrier {string} status is {string}', (carrierName, status) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield dashBoardPage.getActionButton(carrierName)
        .getText().then(function (text) {
        expect(text).contains(status);
    });
}));
cucumber_1.Then('Next button should not be enabled', () => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.button_Next.isEnabled().then(function (status) {
        expect(status).to.be.false;
    });
}));
cucumber_1.Then('User should not able to move on next section', () => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.pageIdentifier.isPresent().then(function (status) {
        expect(status).to.be.true;
    });
}));
cucumber_1.When('User click on dashboard link on header', () => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.dashboardLink.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('System asked for save or exit and select save and exit', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield dashBoardPage.saveAndExit.click();
    yield protractor_1.browser.sleep(8000);
}));
cucumber_1.Then('System asked for save or exit and select donot Save and exit', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield dashBoardPage.donotsaveAndExit.click();
    yield protractor_1.browser.sleep(8000);
}));
cucumber_1.When('User edited the carrierName with {string}', (editedCarrierName) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.sendKey(carrierBasicInformationPage.input_CarrierName, editedCarrierName);
    //await carrierBasicInformationPage.text_CarrierName.clear();
    //await carrierBasicInformationPage.text_CarrierName.sendKeys(editedCarrierName);
}));
cucumber_1.When('User editied originCountry with {string}', (editedCountry) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.select_OriginCountry.click();
    yield carrierBasicInformationPage.select_OriginCountry.sendKeys(editedCountry);
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('System show {string} in carrierName text box', (editedCarrierName) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.text_CarrierName
        .getText().then(function (text) {
        expect(text).contains(editedCarrierName);
    });
}));
cucumber_1.When('System show {string} in originCountry', (editedCountryName) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.select_OriginCountry
        .getText().then(function (text) {
        expect(text).contains(editedCountryName);
    });
}));
cucumber_1.Then('System show {string} in carrier basic info', (carrierIdentifier) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.carrierIdentifier
        .getText().then(function (text) {
        expect(text).contains(carrierIdentifier);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JmLWJhc2ljSW5mby1zdGVwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGVwLWRlZmluYXRpb25zL2NyZi1iYXNpY0luZm8tc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBd0I7QUFDeEIsdUNBQTZDO0FBQzdDLDJDQUEwRjtBQUMxRix1RkFBdUY7QUFDdkYsbUZBQTRFO0FBQzVFLG1FQUErRDtBQUMvRCw0REFBK0I7QUFHL0IsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLDJCQUEyQixHQUFHLElBQUksc0RBQTJCLEVBQUUsQ0FBQztBQUNwRSxJQUFJLGFBQWEsR0FBRyxJQUFJLDhCQUFhLEVBQUUsQ0FBQztBQUN4QyxJQUFJLGtCQUFrQixHQUFHLElBQUksMkNBQWtCLEVBQUUsQ0FBQztBQUtsRCxnQkFBSyxDQUFDLDhDQUE4QyxFQUFFLENBQU8sV0FBVyxFQUFFLEVBQUU7SUFDMUUsNEJBQTRCO0lBQzVCLE1BQU0sYUFBYSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RCxNQUFNLDJCQUEyQixDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN0Ryw0RUFBNEU7QUFDOUUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsd0RBQXdELEVBQUUsQ0FBTyxhQUFhLEVBQUUsRUFBRTtJQUN0RixNQUFNLDJCQUEyQixDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzFGLGlFQUFpRTtJQUNqRSxNQUFNLDJCQUEyQixDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNqRixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQywwREFBMEQsRUFBRSxDQUFP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