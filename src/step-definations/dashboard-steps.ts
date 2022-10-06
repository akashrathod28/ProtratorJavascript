import { Given, When, Then } from "cucumber";
import { browser, element, by } from "protractor"
import { LoginPage } from "../page-objects/login-page";
import { DashboardPage } from "../page-objects/dashboard-page";
import chai from "chai";
import { CarrierPage } from "../page-objects/carrier-page";
import { CarrierBasicInformationPage } from "../page-objects/crf-basicInformationPage";
import { CarrierBasicInfoPage } from "../page-objects/basicInformation-page";

var request = require('request');

var expect = chai.expect;
let dashBoardPage = new DashboardPage();
let carrierBasicInformationPage = new CarrierBasicInformationPage();
let carrierPage = new CarrierPage();
let carrierBasicInfo = new CarrierBasicInfoPage();

Then('Welcome message and user name are shown on the dashboard', async () => {
  await dashBoardPage.waitForElementToBePresent(dashBoardPage.text_Welcome);
  await dashBoardPage.text_Welcome.getText().then(function (text) {
    expect(text).contain("Welcome");
  });
  await dashBoardPage.buttonUserName.getText().then(function (text) {
    expect(text).not.null
  });
})

Then('Carrier table is shown on the dashboard with headres', async () => {
  //await expect(dashBoardPage.carrierTable.isPresent).true;
  await dashBoardPage.carrierTableHeaderCarrierName.getText().then(function (text) {
    expect(text).contain("NAME (ID)");
  });
  await dashBoardPage.carrierTableHeaderOriginCountry.getText().then(function (text) {
    expect(text).contain("ORIGIN COUNTRY");
  });
  // await dashBoardPage.carrierTableHeaderEnviornment.getText().then(function (text) {
  //   expect(text).contain("ENVIRONMENT");
  // });
  await dashBoardPage.carrierTableHeaderConfigVersion.getText().then(function (text) {
    expect(text).contain("VERSION");
  });
  await dashBoardPage.carrierTableHeaderStatus.getText().then(function (text) {
    expect(text).contain("STATUS");
  });
  await dashBoardPage.carrierTableHeaderAction.getText().then(function (text) {
    expect(text).contain("ACTION");
  });
})

Given('User Click on the Submit Carrier Request button', async () => {
  await browser.sleep(5000);
  await dashBoardPage.button_SubmitCarrierRequest.click();
  await browser.sleep(5000);
})

Then('User is landed on Carrier Request page', async () => {
  await carrierBasicInformationPage.waitForElementToBePresent(carrierBasicInformationPage.text_CarrierName);
  await carrierBasicInformationPage.text_CarrierName.getText().then(function (text) {
    expect(text).contain("Carrier Name & Origin Country");
  })
})



Then('User Click on {string} button for {string}', async (buttonName, carrierName) => {
  await dashBoardPage.getActionButton(carrierName).click();
  await browser.sleep(5000);

});
Then('User click on Carrier Basic information pane', async () => {
  await dashBoardPage.navigate_CarrierBasicInformation.click();
  await browser.sleep(5000);
});

Then('User click on Carrier Feature navigation pane', async () => {
  await dashBoardPage.navigation_CarrierFeature.click();
});

Then('User click on Additional Feature navigation pane', async () => {
  await dashBoardPage.navigation_AdditionalFeature.click();
});

Then('User click on Carrier Defaults navigation pane', async () => {
  await dashBoardPage.navigation_CarrierDefault.click();
});



Then('User click on Carrier Services navigation pane', async () => {
  await dashBoardPage.navigation_CarrierService.click();
});

Then('User click on Additional Questions navigation pane', async () => {
  await dashBoardPage.navigation_AdditionalQuestions.click();
});
Then('System show {string}, {string} and {string} options', async (text_CarrierCount, text_ReadyToConfigure, text_CarrierCountCSP) => {
  await dashBoardPage.text_CarrierCount.getText().then(function (text) {
    expect(text).contain(text_CarrierCount);
  });
    await dashBoardPage.text_ReadyToConfigure.getText().then(function (text) {
      expect(text).contain(text_ReadyToConfigure);
    });
      await dashBoardPage.text_CarrierCountCSP.getText().then(function (text) {
        expect(text).contain(text_CarrierCountCSP);
      });
    
    });




    Given('User click on the View button for OnTrac Inc', async () => {
      await dashBoardPage.viewButton.click();
    });

    Then('User is landed on Carrier Page', async () => {
      await carrierPage.carrierNameAusPostQA.getText().then(function (text) {
        //console.log("TEXTTTTTTTTTTT  "+text);
        expect(text).contain("OnTrac");
      });
    });




    Then('varify carriers from DB', async () => {

      var carriers = new Array();
      await request.get({
        'headers': { 'accept': 'application/json' },
        'uri': 'http://com-server-core.com/v1/carrier/getAllCarriersList?ownergroup=Admin',

      }, async (error, response, body) => {
        if (error) {
          return console.log(error);
        }
        // console.log('\nResponse Code: ' + response.statusCode);
        // console.log('\nResponse Headers: ' + response.headers['content-type']);
        // console.dir(JSON.parse(body));

        let jsonObj = JSON.parse(body)
        for (var k in jsonObj) {
          await carriers.push(jsonObj[k].carrierName);
        }

        await console.log(carriers);
        await dashBoardPage.getListedCarrier(carriers[0]).getText().then(function (text) {
          console.log("enter carrier text .", text);
          browser.sleep(5000);
          expect(text).contain(carriers[0]);
        });
      });

    });

    Then('User is landed on QuestnriesPage', async () => {
      browser.sleep(5000);
      dashBoardPage.waitForURLContain("questions", 200000);
      //carrierBasicInfo.basicInfoQuestion.isPresent();
      await carrierBasicInfo.basicInfoQuestion.getText().then(function (text) {
        expect(text).to.equal("Basic Information");
      });

    });

    Then('Enter the basic info of the carrier', async () => {
      browser.sleep(5000);
      dashBoardPage.waitForURLContain("questions", 200000);
      //carrierBasicInfo.basicInfoQuestion.isPresent();
      await carrierBasicInfo.basicInfoQuestion.getText().then(function (text) {
        expect(text).to.equal("Basic Information");
      });
      await carrierBasicInfo.carrierName.sendKeys("automation_carrier1");
      await carrierBasicInfo.originCountry.click();
      await carrierBasicInfo.originCountry.sendKeys("United States");
      await carrierBasicInfo.addressline1.sendKeys("Advent Buisness Park");
      await carrierBasicInfo.addressline2.sendKeys("sector 137");
      await carrierBasicInfo.city.sendKeys("Noida");
      await carrierBasicInfo.state.sendKeys("UP");
      await carrierBasicInfo.zip.sendKeys("201301");
      await carrierBasicInfo.country.click();
      await carrierBasicInfo.country.sendKeys("United States");
      await carrierBasicInfo.contactTitle.click();
      await carrierBasicInfo.contactTitle.sendKeys("Support");
      await carrierBasicInfo.contactName.sendKeys("Tom");
      await carrierBasicInfo.contactTitle.sendKeys("L2Support");
      await carrierBasicInfo.contactPhoneNumber.sendKeys("123456789");
      await carrierBasicInfo.contactEmail.sendKeys("ss@pb.com");
      await carrierBasicInfo.nextbutton.click();
      browser.sleep(50000);






    });

