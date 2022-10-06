import chai from "chai";
import { Given, When, Then } from "cucumber";
import { browser, by, element, ElementArrayFinder, ElementFinder, Key } from "protractor";
import {CarrierFeaturePage } from "../page-objects/crf-carrierFeaturePage";
import{CarrierAdditionalQuestions} from "../page-objects/crf-additionalQuestions";
import{CarrierAdditionalFeaturePage} from "../page-objects/crf-additionalFeaturePage";
import{CarrierServicePage} from "../page-objects/crf-carrierServicePage";
import{CarrierDefaultPage} from "../page-objects/crf-carrierdefaultPage";
import { DashboardPage } from "../page-objects/dashboard-page";
import { WebTable } from '../page-objects/WebTable';

var expect = chai.expect;
let dashBoardPage = new DashboardPage();
let carrierFeaturePage = new CarrierFeaturePage();
let carrierAdditionalQuestionsPage = new CarrierAdditionalQuestions();
let carrierAdditionalFeaturePage=new CarrierAdditionalFeaturePage();
let carrierServicePage = new CarrierServicePage();
let carrierDefaultPage = new CarrierDefaultPage();

Then('User enter gcsIdentifier {string} for refrence', async (gcsrefrence) => {
  await browser.sleep(500);
  await  carrierAdditionalFeaturePage.refrenceGcsIdentifier.clear();
 await  carrierAdditionalFeaturePage.refrenceGcsIdentifier.sendKeys(gcsrefrence);
 await browser.sleep(5000);
 });


 Then('User enter gcsIdentifier {string} for rateType', async (gcsrateType) => {
  await browser.sleep(500);
  await  carrierServicePage.rateTypeGcsIdentifier.clear();
 await  carrierServicePage.rateTypeGcsIdentifier.sendKeys(gcsrateType);
 await browser.sleep(5000);
 });

 Then('User enter gcsIdentifier {string} for surcharges', async (gcsSurchageIdentifier) => {
  await browser.sleep(500);
  await  carrierServicePage.fuelTypeGCSIdentifier.clear();
 await  carrierServicePage.fuelTypeGCSIdentifier.sendKeys(gcsSurchageIdentifier);
 await browser.sleep(5000);
 });

Then('User click on Approve Carrier Request button', async () => {
   await browser.sleep(500);
  await  carrierAdditionalQuestionsPage.approvCarrierRequest.click();
  await browser.sleep(5000);
  });

  Then('User enter carrierIdentifier {string} on approve carrier request form', async (identifier) => {
    await browser.sleep(5000);
    //await browser.driver.switchTo().activeElement();
    //await  browser.switchTo().alert();
    //await browser.sleep(5000);
    //await carrierAdditionalQuestionsPage.closeError.click();
    await browser.sleep(5000);
    await carrierAdditionalQuestionsPage.carrierIdentifier.sendKeys(identifier);
  });



  Then('User enter comment on approve carrier request form', async () => {
    await carrierAdditionalQuestionsPage.carrierDescription.sendKeys("Automated courrie please");
  });
  
  Then('User click on Approve button on approve carrier request form', async () => {
    await carrierAdditionalQuestionsPage.carrierApproveButton.click();
    await browser.sleep(5000);
  });

  Then('User is landed on dashboard page with status configure of the carrier', async () => {
    await browser.sleep(8000);
    await browser.sleep(5000);
    await  dashBoardPage.resumeButton.getText().then(function (text) {
        expect(text).contains("Configure");
      });
  });


  Then('Carrier version of carrier {string} is {string}', async (carrier,version) => {
    await browser.sleep(8000);
    await browser.sleep(5000);
    await  dashBoardPage.getCarrierVersion(carrier).getText().then(function (text) {
        expect(text).contains(version);
      });
  });

  Then('Carrier group of carrier {string} is {string}', async (carrier,group) => {
    await browser.sleep(8000);
    await browser.sleep(5000);
    await  dashBoardPage.getCarrierGroup(carrier).getText().then(function (text) {
        expect(text).contains(group);
      });
  });
  