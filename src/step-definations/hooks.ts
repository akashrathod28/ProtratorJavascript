import { After, Before, Status } from "cucumber";
import { browser } from "protractor";
import { LoginPage } from "../page-objects/login-page";
import chai from "chai";


var expect = chai.expect;
let loginPage = new LoginPage();
//Before(async function (scenario) {
//browser.restart();
//});


After(async function (scenario) {
  // This hook will be executed before scenarios tagged with @foo
  console.log("Test is completed");
  if (scenario.result.status === Status.PASSED || scenario.result.status === Status.FAILED) 
  {
    //code to take screesnhot
    const screenshot = await browser.takeScreenshot();

    this.attach(screenshot, "image/png");
    //await  browser.executeScript('window.localStorage.clear();');
    //await browser.executeScript('window.sessionStorage.clear();');
    //await browser.driver.manage().deleteAllCookies();
    //browser.close();
    
  }
 
});