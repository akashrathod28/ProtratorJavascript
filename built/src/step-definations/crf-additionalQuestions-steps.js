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
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const crf_additionalQuestions_1 = require("../page-objects/crf-additionalQuestions");
let carrierAdditionalQuestions = new crf_additionalQuestions_1.CarrierAdditionalQuestions();
cucumber_1.Then('User select {string} bases integration', (API) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierAdditionalQuestions.api_based.click();
}));
cucumber_1.Then('User select {string} bases implimentation', (rest) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierAdditionalQuestions.api_based_rest.click();
}));
cucumber_1.Then('User select {string} bases dataformate', (Json) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierAdditionalQuestions.content_json.click();
}));
cucumber_1.Then('User select BYOC type of carrier integration', () => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierAdditionalQuestions.byoc.click();
}));
cucumber_1.Then('User select {string} and {string} for BYOC', (ShipperUserName, ShipperPassword) => __awaiter(void 0, void 0, void 0, function* () {
    yield carrierAdditionalQuestions.byoc_shipperUsername.click();
    yield carrierAdditionalQuestions.byoc_shipperPassword.click();
}));
cucumber_1.When('User click on submit button on Carrier Additional questions', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield carrierAdditionalQuestions.submitButton.click();
    yield protractor_1.browser.sleep(5000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JmLWFkZGl0aW9uYWxRdWVzdGlvbnMtc3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RlcC1kZWZpbmF0aW9ucy9jcmYtYWRkaXRpb25hbFF1ZXN0aW9ucy1zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHVDQUE2QztBQUM3QywyQ0FBMEY7QUFDMUYscUZBQWtGO0FBSWxGLElBQUksMEJBQTBCLEdBQUcsSUFBSSxvREFBMEIsRUFBRSxDQUFDO0FBR2xFLGVBQUksQ0FBQyx3Q0FBd0MsRUFBRSxDQUFPLEdBQUcsRUFBRSxFQUFFO0lBQ3pELE1BQU0sMEJBQTBCLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3JELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsMkNBQTJDLEVBQUUsQ0FBTyxJQUFJLEVBQUUsRUFBRTtJQUMvRCxNQUFNLDBCQUEwQixDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMxRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLHdDQUF3QyxFQUFFLENBQU8sSUFBSSxFQUFFLEVBQUU7SUFDNUQsTUFBTSwwQkFBMEIsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDakQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLGVBQUksQ0FBQyw4Q0FBOEMsRUFBRSxHQUFTLEVBQUU7SUFDN0QsTUFBTSwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDaEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw0Q0FBNEMsRUFBRSxDQUFPLGVBQWUsRUFBRSxlQUFlLEVBQUUsRUFBRTtJQUM1RixNQUFNLDBCQUEwQixDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlELE1BQU0sMEJBQTBCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFaEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUtYLGVBQUksQ0FBQyw2REFBNkQsRUFBRSxHQUFTLEVBQUU7SUFDN0UsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLDBCQUEwQixDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0RCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==