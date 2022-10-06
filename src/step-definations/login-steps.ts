import { Given, When, Then } from "cucumber";
import { browser, element, by } from "protractor"
import { LoginPage } from "../page-objects/login-page";
import { DashboardPage } from "../page-objects/dashboard-page";
import chai from "chai";
var expect = chai.expect;
let loginPage = new LoginPage();
let dashBoardPage = new DashboardPage();




When('User enter invalid Username and Password', async () => {
  await loginPage.sendKey(loginPage.txtUsername, "abcd");
  await loginPage.sendKey(loginPage.txtPassword, "abcd");

});


Then('System show {string} message on the login page', async (errorMessage) => {
  await browser.sleep(5000);
  await loginPage.invalidUserText.getText().then(function (text) {
    expect(text).to.equal(errorMessage);
  });
});


