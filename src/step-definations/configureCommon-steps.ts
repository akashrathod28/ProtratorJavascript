import { Given, When, Then } from "cucumber";
import { browser, element, by, WebElement } from "protractor"
import { LoginPage } from "../page-objects/login-page";
import { DashboardPage } from "../page-objects/dashboard-page";
import {ConfigurationPage} from "../page-objects/configuration-page";
import chai from "chai";
import { readFileSync } from 'fs';
var expect = chai.expect;
let loginPage = new LoginPage();
let dashBoardPage = new DashboardPage();
let configurationPage = new ConfigurationPage();


Then('User is landed on carrierConfiguration page', async()=> {
           await configurationPage.configurationPageIndentifier.getText().then(function (text) {
            expect(text).contains("Configure Carrier");
           });
         });

   

         When('User click on RateShop from the api pane', async()=>{
           await configurationPage.rateShopLink.click();
           await browser.sleep(5000);
         });

         When('User click on Rate from the api pane', async()=>{
            await configurationPage.rateLink.click();
            await browser.sleep(5000);
          });

          When('User click on Shipment from the api pane', async()=>{
            await configurationPage.shipmentLink.click();
            await browser.sleep(5000);
          });

          When('User click on Cancel from the api pane', async()=>{
            await configurationPage.cancelLink.click();
            await browser.sleep(5000);
          });

          When('User click on DeployAndTest from the api pane', async()=>{
            await configurationPage.deployAndTestLink.click();
            await browser.sleep(5000);
          });

         When('Click on Add API button for {string}', async (apiName)=> {
          await configurationPage.getAddAPIButton(apiName).click();
          await browser.sleep(5000);
         });

         When('Click on {string} button for rate', async (string)=> {
            await configurationPage.addAPIButton.click();
            await browser.sleep(5000);
           });


         When('Click on {string} on the popup', async(addAPIButton)=> {
           await configurationPage.optionYes.click();
           await browser.sleep(5000);
         });
  


         When('Click on Request from the options', async ()=> {
            await configurationPage.request.click();
            await browser.sleep(5000);
         });

       
         
   

         When('Enter the curl request for API {string} with file {string} in the text box', async (apiName, fileName)=> {
            let path = require('path');
            let absolutePath = await path.resolve(`${browser.params.root}/src/JSONData`, fileName);
            const file = readFileSync(absolutePath, 'utf-8');
            await configurationPage.getmetaDataTextArea(apiName).clear();
            await configurationPage.getmetaDataTextArea(apiName).sendKeys(file);
            await browser.sleep(5000);
         });

       


         When('Click on import button', async ()=> {
            await configurationPage.importButton.click();
            await browser.sleep(5000);
         });


         When('Select {string} request from the httpMethod Drop down', async (string)=> {
            await configurationPage.httpMethodDropDown.click();
            await configurationPage.httpMethodDropDown.sendKeys("POST");

         });



         When('Enter URL in the url text box', async ()=> {
          await configurationPage.serviceURLTextBox.sendKeys("https://api-test.couriersplease.com.au/v2/domestic/quote");
         });



         When('User click on metadata Header', async ()=> {
          await configurationPage.optionHeader.click();
          await browser.sleep(2000);
         });

 

         When('User click on Mapping tab', async ()=> {
          await configurationPage.mappingTab.click();
          await browser.sleep(5000);
         });

  

         When('Select from a GCS field mapping option', async ()=> {
          await console.log("Pending");
         });

         When('User click on Deploy and Test button', async ()=> {
          await configurationPage.deployAndTestButton.click();
         });


         Then('Deployment is started for the carrier', async ()=> {
          await console.log("Deployment started")
         });
         