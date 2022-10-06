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
const crf_carrierFeaturePage_1 = require("../page-objects/crf-carrierFeaturePage");
const crf_additionalQuestions_1 = require("../page-objects/crf-additionalQuestions");
const crf_additionalFeaturePage_1 = require("../page-objects/crf-additionalFeaturePage");
const crf_carrierServicePage_1 = require("../page-objects/crf-carrierServicePage");
const crf_carrierdefaultPage_1 = require("../page-objects/crf-carrierdefaultPage");
const dashboard_page_1 = require("../page-objects/dashboard-page");
var expect = chai_1.default.expect;
let dashBoardPage = new dashboard_page_1.DashboardPage();
let carrierFeaturePage = new crf_carrierFeaturePage_1.CarrierFeaturePage();
let carrierAdditionalQuestionsPage = new crf_additionalQuestions_1.CarrierAdditionalQuestions();
let carrierAdditionalFeaturePage = new crf_additionalFeaturePage_1.CarrierAdditionalFeaturePage();
let carrierServicePage = new crf_carrierServicePage_1.CarrierServicePage();
let carrierDefaultPage = new crf_carrierdefaultPage_1.CarrierDefaultPage();
cucumber_1.Then('User enter gcsIdentifier {string} for refrence', (gcsrefrence) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(500);
    yield carrierAdditionalFeaturePage.refrenceGcsIdentifier.clear();
    yield carrierAdditionalFeaturePage.refrenceGcsIdentifier.sendKeys(gcsrefrence);
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('User enter gcsIdentifier {string} for rateType', (gcsrateType) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(500);
    yield carrierServicePage.rateTypeGcsIdentifier.clear();
    yield carrierServicePage.rateTypeGcsIdentifier.sendKeys(gcsrateType);
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('User enter gcsIdentifier {string} for surcharges', (gcsSurchageIdentifier) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(500);
    yield carrierServicePage.fuelTypeGCSIdentifier.clear();
    yield carrierServicePage.fuelTypeGCSIdentifier.sendKeys(gcsSurchageIdentifier);
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('User click on Approve Carrier Request button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(500);
    yield carrierAdditionalQuestionsPage.approvCarrierRequest.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('User enter carrierIdentifier {string} on approve carrier request form', (identifier) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    //await browser.driver.switchTo().activeElement();
    //await  browser.switchTo().alert();
    //await browser.sleep(5000);
    //await carrierAdditionalQuestionsPage.closeError.click();
    yield protractor_1.browser.sleep(5000);
    yield carrierAdditionalQuestionsPage.carrierIdentifier.sendKeys(identifier);
}));
cucumber_1.Then('User enter comment on approve carrier request form', () => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierAdditionalQuestionsPage.carrierDescription.sendKeys("Automated courrie please");
}));
cucumber_1.Then('User click on Approve button on approve carrier request form', () => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierAdditionalQuestionsPage.carrierApproveButton.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('User is landed on dashboard page with status configure of the carrier', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(8000);
    yield protractor_1.browser.sleep(5000);
    yield dashBoardPage.resumeButton.getText().then(function (text) {
        expect(text).contains("Configure");
    });
}));
cucumber_1.Then('Carrier version of carrier {string} is {string}', (carrier, version) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(8000);
    yield protractor_1.browser.sleep(5000);
    yield dashBoardPage.getCarrierVersion(carrier).getText().then(function (text) {
        expect(text).contains(version);
    });
}));
cucumber_1.Then('Carrier group of carrier {string} is {string}', (carrier, group) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(8000);
    yield protractor_1.browser.sleep(5000);
    yield dashBoardPage.getCarrierGroup(carrier).getText().then(function (text) {
        expect(text).contains(group);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycmllci1hcHByb3ZlLXN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0ZXAtZGVmaW5hdGlvbnMvY2Fycmllci1hcHByb3ZlLXN0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQXdCO0FBQ3hCLHVDQUE2QztBQUM3QywyQ0FBMEY7QUFDMUYsbUZBQTJFO0FBQzNFLHFGQUFrRjtBQUNsRix5RkFBc0Y7QUFDdEYsbUZBQXlFO0FBQ3pFLG1GQUF5RTtBQUN6RSxtRUFBK0Q7QUFHL0QsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLGFBQWEsR0FBRyxJQUFJLDhCQUFhLEVBQUUsQ0FBQztBQUN4QyxJQUFJLGtCQUFrQixHQUFHLElBQUksMkNBQWtCLEVBQUUsQ0FBQztBQUNsRCxJQUFJLDhCQUE4QixHQUFHLElBQUksb0RBQTBCLEVBQUUsQ0FBQztBQUN0RSxJQUFJLDRCQUE0QixHQUFDLElBQUksd0RBQTRCLEVBQUUsQ0FBQztBQUNwRSxJQUFJLGtCQUFrQixHQUFHLElBQUksMkNBQWtCLEVBQUUsQ0FBQztBQUNsRCxJQUFJLGtCQUFrQixHQUFHLElBQUksMkNBQWtCLEVBQUUsQ0FBQztBQUVsRCxlQUFJLENBQUMsZ0RBQWdELEVBQUUsQ0FBTyxXQUFXLEVBQUUsRUFBRTtJQUMzRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLE1BQU8sNEJBQTRCLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkUsTUFBTyw0QkFBNEIsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEYsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLGdEQUFnRCxFQUFFLENB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