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
const crf_additionalFeaturePage_1 = require("../page-objects/crf-additionalFeaturePage");
const crf_carrierdefaultPage_1 = require("../page-objects/crf-carrierdefaultPage");
const dashboard_page_1 = require("../page-objects/dashboard-page");
var expect = chai_1.default.expect;
let dashBoardPage = new dashboard_page_1.DashboardPage();
let carrierFeaturePage = new crf_carrierFeaturePage_1.CarrierFeaturePage();
let carrierAdditionalFeaturePage = new crf_additionalFeaturePage_1.CarrierAdditionalFeaturePage();
let carrierDefaultPage = new crf_carrierdefaultPage_1.CarrierDefaultPage();
cucumber_1.Then('Select Shipment Label', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield carrierAdditionalFeaturePage.checkbox_ShippingLabel.isSelected().then(function (selected) {
        if (!selected) {
            //carrierAdditionalFeaturePage.checkbox_ShippingLabel.click();
            carrierAdditionalFeaturePage.clickByJs(carrierAdditionalFeaturePage.checkbox_ShippingLabel);
            console.log("Outbount clicked >>>>>");
        }
    });
    //await carrierAdditionalFeaturePage.checkbox_ShippingLabel.click();
}));
cucumber_1.Then('Select Thermal type printer', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield carrierAdditionalFeaturePage.printer_Thermal.click();
}));
cucumber_1.Then('Select Lazer or Inkjet type printer', () => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierAdditionalFeaturePage.printer_Lazer.click();
}));
cucumber_1.Then('Select label size {int} into {int}', (int, int2) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierAdditionalFeaturePage.DOC_4X6.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('User select YES for the carrier support reference', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    //await browser.refresh();
    yield carrierAdditionalFeaturePage.carrierRefYes.click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.Then('User eneter {string} and {string} for the refrence', (ref1, ref1Description) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield carrierAdditionalFeaturePage.carrierRef1.sendKeys(ref1);
    yield carrierAdditionalFeaturePage.carrierRef1Description.sendKeys(ref1Description);
    yield carrierAdditionalFeaturePage.addRefrence.click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.Then('Select Carrier support future Shipment date with day value {int}', (futureDays) => __awaiter(void 0, void 0, void 0, function* () {
    //await carrierAdditionalFeaturePage.clickByJs(carrierAdditionalFeaturePage.futureShipmentDate_Yes);
    yield carrierAdditionalFeaturePage.futureShipmentDate_Yes.click();
    yield carrierAdditionalFeaturePage.future_Days.click();
    yield carrierAdditionalFeaturePage.future_Days.sendKeys(futureDays);
}));
cucumber_1.Then('Select Carrier support custom message on lable with value {int}', (messageCount) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield carrierAdditionalFeaturePage.customeMessage_Yes.click();
    yield carrierAdditionalFeaturePage.customMessage_Count.click();
    yield protractor_1.browser.sleep(5000);
    yield carrierAdditionalFeaturePage.customMessage_Count.sendKeys(2);
}));
cucumber_1.When('User click on next button on Additional feature', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield carrierAdditionalFeaturePage.next_button.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('User is landed on Carrier Carrier Default page with Carrier Name as {string}', (carrierName) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierDefaultPage.pageIdentifier.getText().then(function (text) {
        expect(text).contains("Carrier Defaults");
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JmLWFkZGl0aW9uYWxGZWF0dXJlLXN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0ZXAtZGVmaW5hdGlvbnMvY3JmLWFkZGl0aW9uYWxGZWF0dXJlLXN0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQXdCO0FBQ3hCLHVDQUE2QztBQUM3QywyQ0FBMEY7QUFDMUYsbUZBQTJFO0FBQzNFLHlGQUFzRjtBQUN0RixtRkFBeUU7QUFDekUsbUVBQStEO0FBRy9ELElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxhQUFhLEdBQUcsSUFBSSw4QkFBYSxFQUFFLENBQUM7QUFDeEMsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLDJDQUFrQixFQUFFLENBQUM7QUFDbEQsSUFBSSw0QkFBNEIsR0FBRyxJQUFJLHdEQUE0QixFQUFFLENBQUM7QUFDdEUsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLDJDQUFrQixFQUFFLENBQUM7QUFFbEQsZUFBSSxDQUFDLHVCQUF1QixFQUFFLEdBQVMsRUFBRTtJQUNwQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLE1BQU8sNEJBQTRCLENBQUMsc0JBQXNCLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsUUFBUTtRQUMzRixJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ1osOERBQThEO1lBQzlELDRCQUE0QixDQUFDLFNBQVMsQ0FBQyw0QkFBNEIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0gsb0VBQW9FO0FBQ3RFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsNkJBQTZCLEVBQUUsR0FBUyxFQUFFO0lBQzdDLE1BQU0sb0JBQU8s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