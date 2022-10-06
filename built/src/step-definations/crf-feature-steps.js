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
const dashboard_page_1 = require("../page-objects/dashboard-page");
var expect = chai_1.default.expect;
let dashBoardPage = new dashboard_page_1.DashboardPage();
let carrierFeaturePage = new crf_carrierFeaturePage_1.CarrierFeaturePage();
let carrierAdditionalFeaturePage = new crf_additionalFeaturePage_1.CarrierAdditionalFeaturePage();
cucumber_1.Given('Select RateShop from the feature list', () => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierFeaturePage.clickifNotSelected(carrierFeaturePage.rateShopCheckbox);
    yield carrierFeaturePage.clickifNotSelectedByJs(carrierFeaturePage.shopSingle);
}));
cucumber_1.Given('Select Shipment from the list', () => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierFeaturePage.clickifNotSelected(carrierFeaturePage.shipmentCheckbox);
}));
cucumber_1.Given('Select Outbound with Domestic for Shipment', () => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierFeaturePage.clickifNotSelectedByJs(carrierFeaturePage.shipSingle);
    yield carrierFeaturePage.clickifNotSelectedByJs(carrierFeaturePage.outboundCheckbox);
    yield carrierFeaturePage.clickifNotSelectedByJs(carrierFeaturePage.outDomCheckbox);
    //await carrierFeaturePage.domesticCheckbox.click();
}));
cucumber_1.Given('Select Cancel from the list', () => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierFeaturePage.cancelCheckbox.click();
}));
cucumber_1.When('User Click on the Next button on feature page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierFeaturePage.nextButton.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('User is landed on Carrier Additional feature page with Carrier Name as {string}', (carrierName) => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.sleep(5000);
    yield carrierAdditionalFeaturePage.pageIdentifier.getText().then(function (text) {
        expect(text).contains("Additional Features");
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JmLWZlYXR1cmUtc3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RlcC1kZWZpbmF0aW9ucy9jcmYtZmVhdHVyZS1zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUF3QjtBQUN4Qix1Q0FBNkM7QUFDN0MsMkNBQTBGO0FBQzFGLG1GQUEyRTtBQUMzRSx5RkFBc0Y7QUFDdEYsbUVBQStEO0FBRy9ELElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxhQUFhLEdBQUcsSUFBSSw4QkFBYSxFQUFFLENBQUM7QUFDeEMsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLDJDQUFrQixFQUFFLENBQUM7QUFDbEQsSUFBSSw0QkFBNEIsR0FBRyxJQUFJLHdEQUE0QixFQUFFLENBQUM7QUFFckUsZ0JBQUssQ0FBQyx1Q0FBdUMsRUFBRSxHQUFTLEVBQUU7SUFDekQsTUFBTSxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pGLE1BQU0sa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFHL0UsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsK0JBQStCLEVBQUUsR0FBUyxFQUFFO0lBQ2hELE1BQU0sa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUVuRixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyw0Q0FBNEMsRUFBRSxHQUFTLEVBQUU7SUFFN0QsTUFBTSxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvRSxNQUFNLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDckYsTUFBTSxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVuRixvREFBb0Q7QUFDdEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsNkJBQTZCLEVBQUUsR0FBUyxFQUFFO0lBQzlDLE1BQU0sa0JBQWtCLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2xELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsK0NBQStDLEVBQUUsR0FBUyxFQUFFO0lBRS9ELE1BQU0sa0JBQWtCLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyxpRkFBaUYsRUFBRSxDQUFPLFdBQVcsRUFBRSxFQUFFO0lBQzVHLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLE1BQU8sNEJBQTRCLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7UUFDM0UsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9