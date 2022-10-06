import { Given, When, Then } from "cucumber";
import { browser, element, by, WebElement } from "protractor"
import { LoginPage } from "../page-objects/login-page";
import { DashboardPage } from "../page-objects/dashboard-page";
import chai from "chai";
var expect = chai.expect;
let loginPage = new LoginPage();
let dashBoardPage = new DashboardPage();

Given('User is on the Login Page', async () => {
  await browser.waitForAngularEnabled(false);
  await browser.get(browser.params.baseUrl);
  //await  browser.executeScript('window.localStorage.clear();');
  //await browser.executeScript('window.sessionStorage.clear();');
  //await browser.driver.manage().deleteAllCookies();
  await browser.sleep(8000);
  await loginPage.waitForURLContain("login", 100000);
  await browser.sleep(8000);
  

});

Given('User click on CSP icon', async () => {
  await loginPage.click(loginPage.txtCSP);

});

When('User enter valid Username', async () => {
  //await loginPage.sendKey(loginPage.txtUsername, browser.params.userName);
  //await loginPage.sendKey(loginPage.txtPassword, browser.params.password);
  //await browser.sleep(8000);
  await loginPage.txtUsername.sendKeys(browser.params.userName);
  //browser.sleep(5000);
  

});

When('User click on next button', async () => {
  await loginPage.nextButton.click();
  await browser.sleep(5000);
  

});

When('User enter valid Password', async () => {
  await loginPage.txtPassword.clear();
  await loginPage.txtPassword.sendKeys(browser.params.password);
  await browser.sleep(5000);

});

Given('User select other user from user selection', async () => {
  await loginPage.useAnotherUser.click();
  await browser.sleep(5000);
});

When('User enter invalid Username', async () => {
  await browser.sleep(5000);
  await loginPage.txtUsername.sendKeys("abcd@pb.com");

});

When('User enter invalid Password', async () => {
  await loginPage.txtPassword.clear();
  await loginPage.txtPassword.sendKeys("123456");

});

When('Click on Login button', async () => {
  await loginPage.btnLogin.click();

});

;
Then('User is landed on the dashboard page', async () => {
  await browser.sleep(8000);
  await dashBoardPage.waitForURLContain("home", 20000);
  await browser.sleep(5000);
  await dashBoardPage.waitForElementToBePresent(dashBoardPage.text_Welcome);
  await dashBoardPage.dashboardLink.getText().then(function (text) {
    expect(text).to.equal("Dashboard");
  });
});

Then('System show username error {string} message on the login page', async (errorMessage) => {
  await browser.sleep(5000);
  await loginPage.userNameError.getText().then(function (text) {
    expect(text).contains(errorMessage);
  });
});

Then('System show password error {string} message on the login page', async (errorMessage) => {
  await browser.sleep(5000);
  await loginPage.passwordError.getText().then(function (text) {
    expect(text).contains(errorMessage);
  });
});




When('User Click on logout button', async () => {
  await loginPage.logoutLink.click();
  await loginPage.signOutLink.click();
  await browser.sleep(5000);
  await loginPage.pickAccount.click();
  await browser.sleep(5000);

});

Then('User is landed on Logout page', async () => {
  browser.waitForAngularEnabled(false);
  await loginPage.waitForURLContain("bye", 5000);
  await browser.getCurrentUrl().then(function (url) {
    console.log("Current url is " + url);
    expect(url).contain("bye");
  });
});

Then('User is landed on Login page', async () => {
  browser.waitForAngularEnabled(false);
  await loginPage.waitForURLContain("login", 5000);
  await browser.getCurrentUrl().then(function (url) {
    console.log("Current url is " + url);
    expect(url).contain("login");
  });

});