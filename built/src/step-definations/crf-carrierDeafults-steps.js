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
const crf_carrierdefaultPage_1 = require("../page-objects/crf-carrierdefaultPage");
const crf_carrierServicePage_1 = require("../page-objects/crf-carrierServicePage");
var expect = chai_1.default.expect;
let carrierDefaultPage = new crf_carrierdefaultPage_1.CarrierDefaultPage();
let carrierServicePage = new crf_carrierServicePage_1.CarrierServicePage();
cucumber_1.Then('User select {string} as weight measurement  unit', (weightMeasuringUnit) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierDefaultPage.weightUnit_kg.click();
}));
cucumber_1.Then('User select {string} as dimension measurement  unit', (diminsionUnit) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierDefaultPage.lengthUnit_cm.click();
}));
cucumber_1.Then('User select {string} as supported currency', (currency) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierDefaultPage.carrier_currancy.click();
    yield carrierDefaultPage.carrier_currancy.sendKeys(currency);
    yield carrierDefaultPage.carrier_currancy.sendKeys(protractor_1.protractor.Key.TAB);
}));
cucumber_1.When('User click on next button on Carrier defaults', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(8000);
    yield carrierDefaultPage.nextButton.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('User is landed on Carrier Carrier Service page with Carrier Name as {string}', (carrierName) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierServicePage.pageIdentifier.getText().then(function (text) {
        expect(text).contains("Carrier Services");
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JmLWNhcnJpZXJEZWFmdWx0cy1zdGVwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGVwLWRlZmluYXRpb25zL2NyZi1jYXJyaWVyRGVhZnVsdHMtc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBd0I7QUFDeEIsdUNBQTZDO0FBQzdDLDJDQUFzRztBQUN0RyxtRkFBeUU7QUFDekUsbUZBQXlFO0FBSXpFLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLDJDQUFrQixFQUFFLENBQUM7QUFDbEQsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLDJDQUFrQixFQUFFLENBQUM7QUFHbEQsZUFBSSxDQUFDLGtEQUFrRCxFQUFFLENBQU8sbUJBQW1CLEVBQUUsRUFBRTtJQUNuRixNQUFNLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNqRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUwsZUFBSSxDQUFDLHFEQUFxRCxFQUFFLENBQU8sYUFBYSxFQUFFLEVBQUU7SUFDaEYsTUFBTSxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDakQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyw0Q0FBNEMsRUFBRSxDQUFPLFFBQVEsRUFBRSxFQUFFO0lBQ3JFLE1BQU0sa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEQsTUFBTSxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0QsTUFBTSxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywrQ0FBK0MsRUFBRSxHQUFTLEVBQUU7SUFDL0QsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFLSCxlQUFJLENBQUMsOEVBQThFLEVBQUUsQ0FBTyxXQUFXLEVBQUUsRUFBRTtJQUN6RyxNQUFNLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1FBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==