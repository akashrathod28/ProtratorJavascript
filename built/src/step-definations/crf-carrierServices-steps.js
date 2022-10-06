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
const crf_carrierServicePage_1 = require("../page-objects/crf-carrierServicePage");
const crf_additionalQuestions_1 = require("../page-objects/crf-additionalQuestions");
var expect = chai_1.default.expect;
let carrierServicePage = new crf_carrierServicePage_1.CarrierServicePage();
let carrierAdditionalQuestions = new crf_additionalQuestions_1.CarrierAdditionalQuestions();
cucumber_1.Then('User enter {string} in Rate Name input box', (rateName) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierServicePage.rate_name.sendKeys(rateName);
}));
cucumber_1.Then('User enter {string} in Rate Code input box', (rateCode) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierServicePage.rate_code.sendKeys(rateCode);
}));
cucumber_1.Then('User enter {string} in Request contract dropdown', (contratType) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierServicePage.request_contract.click();
    //await carrierServicePage.request_contract.sendKeys(contratType);
    yield protractor_1.browser.sleep(5000);
    yield carrierServicePage.rateType_added.click();
}));
cucumber_1.Then('User eneter {string} in additionalSurcharges Name and {string} in additionalSurcharges code', (surchargeName, surchargeCode) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierServicePage.adtlChargeName.sendKeys(surchargeName);
    yield carrierServicePage.adtlChargeCode.sendKeys(surchargeCode);
    yield carrierServicePage.addButton.click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.Then('User upload the rateRule file {string}', (rateRuleFileName) => __awaiter(void 0, void 0, void 0, function* () {
    let path = require('path');
    let absolutePath = yield path.resolve(`${protractor_1.browser.params.root}/src/JSONData`, rateRuleFileName);
    //await carrierServicePage.rate_upload.sendKeys(browser.params.root+"/JSONData/"+rateRuleFileName);
    //await carrierServicePage.rate_upload.click();
    yield protractor_1.browser.sleep(8000);
    console.log("PATH >>" + absolutePath);
    yield carrierServicePage.rate_upload.sendKeys(absolutePath);
    yield protractor_1.browser.sleep(8000);
}));
cucumber_1.When('User click on next button on Carrier services', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield carrierServicePage.nextButton.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('User is landed on Carrier Additional Questions page with Carrier Name as {string}', (carrierName) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierAdditionalQuestions.pageIdentifier.getText().then(function (text) {
        expect(text).contains("Additional Questions");
    });
}));
cucumber_1.When('User enter gcsIdentifier for surcharges', () => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierServicePage.approvegcsIdentifier.sendKeys("FUEL");
    yield protractor_1.browser.sleep(5000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JmLWNhcnJpZXJTZXJ2aWNlcy1zdGVwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGVwLWRlZmluYXRpb25zL2NyZi1jYXJyaWVyU2VydmljZXMtc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBd0I7QUFDeEIsdUNBQTZDO0FBQzdDLDJDQUEwRjtBQUMxRixtRkFBeUU7QUFDekUscUZBQWtGO0FBRWxGLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLDJDQUFrQixFQUFFLENBQUM7QUFDbEQsSUFBSSwwQkFBMEIsR0FBRyxJQUFJLG9EQUEwQixFQUFFLENBQUM7QUFFbEUsZUFBSSxDQUFDLDRDQUE0QyxFQUFFLENBQU8sUUFBUSxFQUFFLEVBQUU7SUFDbkUsTUFBTyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsNENBQTRDLEVBQUUsQ0FBTyxRQUFRLEVBQUUsRUFBRTtJQUNwRSxNQUFNLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxrREFBa0QsRUFBRSxDQUFPLFdBQVcsRUFBRSxFQUFFO0lBQzdFLE1BQU0sa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEQsa0VBQWtFO0lBQ2xFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbEQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLGVBQUksQ0FBQyw2RkFBNkYsRUFBRSxDQUFPLGFBQWEsRUFBRSxhQUFhLEVBQUUsRUFBRTtJQUMxSSxNQUFNLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEUsTUFBTSxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFM0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyx3Q0FBd0MsRUFBRSxDQUFPLGdCQUFnQixFQUFFLEVBQUU7SUFDeEUsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLElBQUksWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLG9CQUFPLENBQUMsTUFBTSxDQUFDLElBQUksZUFBZSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDaEcsbUdBQW1HO0lBQ25HLCtDQUErQztJQUMvQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sa0JBQWtCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1RCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsK0NBQStDLEVBQUUsR0FBUyxFQUFFO0lBQy9ELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLG1GQUFtRixFQUFFLENBQU8sV0FBVyxFQUFFLEVBQUU7SUFDOUcsTUFBTSwwQkFBMEIsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtRQUN6RSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLEdBQVMsRUFBRTtJQUN6RCxNQUFNLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==