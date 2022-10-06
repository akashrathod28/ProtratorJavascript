import chai from "chai";
import { Then } from "cucumber";
import { browser} from "protractor";
import { DashboardPage } from "../page-objects/dashboard-page";


var expect = chai.expect;
let dashBoardPage = new DashboardPage();

Then('Search for carrier {string}', async (carrierName) => {
    await dashBoardPage.searchCarrier.clear();
    await dashBoardPage.searchCarrier.sendKeys(carrierName);
    await browser.sleep(2000);
});

Then('Search for status {string}', async (carrierStatus) => {
    await dashBoardPage.searchCarrier.clear();
    await dashBoardPage.searchCarrier.sendKeys(carrierStatus);
    await browser.sleep(2000);
});

Then('Search for Action {string}', async (action) => {
    await dashBoardPage.searchCarrier.clear();
    await dashBoardPage.searchCarrier.sendKeys(action);
    await browser.sleep(2000);
});

Then('System show carriers which have {string} in Carrier Name column', async (carrierName) => {
    await dashBoardPage.tableGridCarrierName.getText().then(function (name) {
        if (name.length > 0) {
            expect(name).contain(carrierName);
        }

    });

});

Then('System show carriers which have {string} in Carrier status column', async (carrierStatus) => {
    await dashBoardPage.tableGridCarrierStatus.getText().then(function (status) {
        if (status.length > 0) {
            console.log(status);
            var array = [status];
            console.log(array[0]);
            expect(array[0]).contain(carrierStatus);
            
        }

    });

});

Then('System show carriers which have {string} in Carrier action column', async (carrierAction) => {
    await console.log("Condition fullfilled");
    await dashBoardPage.tableGridCarrierAction.getText().then(function (action) {
        if (action.length > 0) {
            expect(action).contain(carrierAction);
        }
    });
});