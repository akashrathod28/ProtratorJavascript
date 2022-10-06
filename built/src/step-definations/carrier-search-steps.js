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
const dashboard_page_1 = require("../page-objects/dashboard-page");
var expect = chai_1.default.expect;
let dashBoardPage = new dashboard_page_1.DashboardPage();
cucumber_1.Then('Search for carrier {string}', (carrierName) => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.searchCarrier.clear();
    yield dashBoardPage.searchCarrier.sendKeys(carrierName);
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.Then('Search for status {string}', (carrierStatus) => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.searchCarrier.clear();
    yield dashBoardPage.searchCarrier.sendKeys(carrierStatus);
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.Then('Search for Action {string}', (action) => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.searchCarrier.clear();
    yield dashBoardPage.searchCarrier.sendKeys(action);
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.Then('System show carriers which have {string} in Carrier Name column', (carrierName) => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.tableGridCarrierName.getText().then(function (name) {
        if (name.length > 0) {
            expect(name).contain(carrierName);
        }
    });
}));
cucumber_1.Then('System show carriers which have {string} in Carrier status column', (carrierStatus) => __awaiter(void 0, void 0, void 0, function* () {
    yield dashBoardPage.tableGridCarrierStatus.getText().then(function (status) {
        if (status.length > 0) {
            console.log(status);
            var array = [status];
            console.log(array[0]);
            expect(array[0]).contain(carrierStatus);
        }
    });
}));
cucumber_1.Then('System show carriers which have {string} in Carrier action column', (carrierAction) => __awaiter(void 0, void 0, void 0, function* () {
    yield console.log("Condition fullfilled");
    yield dashBoardPage.tableGridCarrierAction.getText().then(function (action) {
        if (action.length > 0) {
            expect(action).contain(carrierAction);
        }
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycmllci1zZWFyY2gtc3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RlcC1kZWZpbmF0aW9ucy9jYXJyaWVyLXNlYXJjaC1zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUF3QjtBQUN4Qix1Q0FBZ0M7QUFDaEMsMkNBQW9DO0FBQ3BDLG1FQUErRDtBQUcvRCxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksYUFBYSxHQUFHLElBQUksOEJBQWEsRUFBRSxDQUFDO0FBRXhDLGVBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFPLFdBQVcsRUFBRSxFQUFFO0lBQ3RELE1BQU0sYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQyxNQUFNLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFPLGFBQWEsRUFBRSxFQUFFO0lBQ3ZELE1BQU0sYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQyxNQUFNLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQ2hELE1BQU0sYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQyxNQUFNLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxpRUFBaUUsRUFBRSxDQUFPLFdBQVcsRUFBRSxFQUFFO0lBQzFGLE1BQU0sYUFBYSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7UUFDbEUsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3JDO0lBRUwsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLG1FQUFtRSxFQUFFLENBQU8sYUFBYSxFQUFFLEVBQUU7SUFDOUYsTUFBTSxhQUFhLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTTtRQUN0RSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7U0FFM0M7SUFFTCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsbUVBQW1FLEVBQUUsQ0FBTyxhQUFhLEVBQUUsRUFBRTtJQUM5RixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUMxQyxNQUFNLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNO1FBQ3RFLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9