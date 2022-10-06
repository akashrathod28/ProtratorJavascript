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
const dashboard_page_1 = require("../page-objects/dashboard-page");
const chai_1 = __importDefault(require("chai"));
const carrier_page_1 = require("../page-objects/carrier-page");
const crf_basicInformationPage_1 = require("../page-objects/crf-basicInformationPage");
const basicInformation_page_1 = require("../page-objects/basicInformation-page");
var request = require('request');
var expect = chai_1.default.expect;
let dashBoardPage = new dashboard_page_1.DashboardPage();
let carrierBasicInformationPage = new crf_basicInformationPage_1.CarrierBasicInformationPage();
let carrierPage = new carrier_page_1.CarrierPage();
let carrierBasicInfo = new basicInformation_page_1.CarrierBasicInfoPage();
cucumber_1.Then('Welcome message and user name are shown on the dashboard', () => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.waitForElementToBePresent(dashBoardPage.text_Welcome);
    yield dashBoardPage.text_Welcome.getText().then(function (text) {
        expect(text).contain("Welcome");
    });
    yield dashBoardPage.buttonUserName.getText().then(function (text) {
        expect(text).not.null;
    });
}));
cucumber_1.Then('Carrier table is shown on the dashboard with headres', () => __awaiter(void 0, void 0, void 0, function* () {
    //await expect(dashBoardPage.carrierTable.isPresent).true;
    yield dashBoardPage.carrierTableHeaderCarrierName.getText().then(function (text) {
        expect(text).contain("NAME (ID)");
    });
    yield dashBoardPage.carrierTableHeaderOriginCountry.getText().then(function (text) {
        expect(text).contain("ORIGIN COUNTRY");
    });
    // await dashBoardPage.carrierTableHeaderEnviornment.getText().then(function (text) {
    //   expect(text).contain("ENVIRONMENT");
    // });
    yield dashBoardPage.carrierTableHeaderConfigVersion.getText().then(function (text) {
        expect(text).contain("VERSION");
    });
    yield dashBoardPage.carrierTableHeaderStatus.getText().then(function (text) {
        expect(text).contain("STATUS");
    });
    yield dashBoardPage.carrierTableHeaderAction.getText().then(function (text) {
        expect(text).contain("ACTION");
    });
}));
cucumber_1.Given('User Click on the Submit Carrier Request button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield dashBoardPage.button_SubmitCarrierRequest.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('User is landed on Carrier Request page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierBasicInformationPage.waitForElementToBePresent(carrierBasicInformationPage.text_CarrierName);
    yield carrierBasicInformationPage.text_CarrierName.getText().then(function (text) {
        expect(text).contain("Carrier Name & Origin Country");
    });
}));
cucumber_1.Then('User Click on {string} button for {string}', (buttonName, carrierName) => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.getActionButton(carrierName).click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('User click on Carrier Basic information pane', () => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.navigate_CarrierBasicInformation.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('User click on Carrier Feature navigation pane', () => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.navigation_CarrierFeature.click();
}));
cucumber_1.Then('User click on Additional Feature navigation pane', () => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.navigation_AdditionalFeature.click();
}));
cucumber_1.Then('User click on Carrier Defaults navigation pane', () => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.navigation_CarrierDefault.click();
}));
cucumber_1.Then('User click on Carrier Services navigation pane', () => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.navigation_CarrierService.click();
}));
cucumber_1.Then('User click on Additional Questions navigation pane', () => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.navigation_AdditionalQuestions.click();
}));
cucumber_1.Then('System show {string}, {string} and {string} options', (text_CarrierCount, text_ReadyToConfigure, text_CarrierCountcom) => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.text_CarrierCount.getText().then(function (text) {
        expect(text).contain(text_CarrierCount);
    });
    yield dashBoardPage.text_ReadyToConfigure.getText().then(function (text) {
        expect(text).contain(text_ReadyToConfigure);
    });
    yield dashBoardPage.text_CarrierCountcom.getText().then(function (text) {
        expect(text).contain(text_CarrierCountcom);
    });
}));
cucumber_1.Given('User click on the View button for OnTrac Inc', () => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.viewButton.click();
}));
cucumber_1.Then('User is landed on Carrier Page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierPage.carrierNameAusPostQA.getText().then(function (text) {
        //console.log("TEXTTTTTTTTTTT  "+text);
        expect(text).contain("OnTrac");
    });
}));
cucumber_1.Then('varify carriers from DB', () => __awaiter(void 0, void 0, void 0, function* () {
    var carriers = new Array();
    yield request.get({
        'headers': { 'accept': 'application/json' },
        'uri': 'http://com-server-core.com.tc.com/v1/carrier/getAllCarriersList?ownergroup=Admin',
    }, (error, response, body) => __awaiter(void 0, void 0, void 0, function* () {
        if (error) {
            return console.log(error);
        }
        // console.log('\nResponse Code: ' + response.statusCode);
        // console.log('\nResponse Headers: ' + response.headers['content-type']);
        // console.dir(JSON.parse(body));
        let jsonObj = JSON.parse(body);
        for (var k in jsonObj) {
            yield carriers.push(jsonObj[k].carrierName);
        }
        yield console.log(carriers);
        yield dashBoardPage.getListedCarrier(carriers[0]).getText().then(function (text) {
            console.log("enter carrier text .", text);
            protractor_1.browser.sleep(5000);
            expect(text).contain(carriers[0]);
        });
    }));
}));
cucumber_1.Then('User is landed on QuestnriesPage', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.sleep(5000);
    dashBoardPage.waitForURLContain("questions", 200000);
    //carrierBasicInfo.basicInfoQuestion.isPresent();
    yield carrierBasicInfo.basicInfoQuestion.getText().then(function (text) {
        expect(text).to.equal("Basic Information");
    });
}));
cucumber_1.Then('Enter the basic info of the carrier', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.sleep(5000);
    dashBoardPage.waitForURLContain("questions", 200000);
    //carrierBasicInfo.basicInfoQuestion.isPresent();
    yield carrierBasicInfo.basicInfoQuestion.getText().then(function (text) {
        expect(text).to.equal("Basic Information");
    });
    yield carrierBasicInfo.carrierName.sendKeys("automation_carrier1");
    yield carrierBasicInfo.originCountry.click();
    yield carrierBasicInfo.originCountry.sendKeys("United States");
    yield carrierBasicInfo.addressline1.sendKeys("Advent Buisness Park");
    yield carrierBasicInfo.addressline2.sendKeys("sector 137");
    yield carrierBasicInfo.city.sendKeys("Noida");
    yield carrierBasicInfo.state.sendKeys("UP");
    yield carrierBasicInfo.zip.sendKeys("201301");
    yield carrierBasicInfo.country.click();
    yield carrierBasicInfo.country.sendKeys("United States");
    yield carrierBasicInfo.contactTitle.click();
    yield carrierBasicInfo.contactTitle.sendKeys("Support");
    yield carrierBasicInfo.contactName.sendKeys("Tom");
    yield carrierBasicInfo.contactTitle.sendKeys("L2Support");
    yield carrierBasicInfo.contactPhoneNumber.sendKeys("123456789");
    yield carrierBasicInfo.contactEmail.sendKeys("ss@pb.com");
    yield carrierBasicInfo.nextbutton.click();
    protractor_1.browser.sleep(50000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLXN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0ZXAtZGVmaW5hdGlvbnMvZGFzaGJvYXJkLXN0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUFpRDtBQUVqRCxtRUFBK0Q7QUFDL0QsZ0RBQXdCO0FBQ3hCLCtEQUEyRDtBQUMzRCx1RkFBdUY7QUFDdkYsaUZBQTZFO0FBRTdFLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVqQyxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksYUFBYSxHQUFHLElBQUksOEJBQWEsRUFBRSxDQUFDO0FBQ3hDLElBQUksMkJBQTJCLEdBQUcsSUFBSSxzREFBMkIsRUFBRSxDQUFDO0FBQ3BFLElBQUksV0FBVyxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO0FBQ3BDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSw0Q0FBb0IsRUFBRSxDQUFDO0FBRWxELGVBQUksQ0FBQywwREFBMEQsRUFBRSxHQUFTLEVBQUU7SUFDMUUsTUFBTSxhQUFhLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFFLE1BQU0sYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1FBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLGFBQWEsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtRQUM5RCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQTtJQUN2QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSxD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