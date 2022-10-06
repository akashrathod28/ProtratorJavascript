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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const login_page_1 = require("../page-objects/login-page");
const dashboard_page_1 = require("../page-objects/dashboard-page");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let loginPage = new login_page_1.LoginPage();
let dashBoardPage = new dashboard_page_1.DashboardPage();
cucumber_1.Given('User is on the Login Page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.get(protractor_1.browser.params.baseUrl);
    //await  browser.executeScript('window.localStorage.clear();');
    //await browser.executeScript('window.sessionStorage.clear();');
    //await browser.driver.manage().deleteAllCookies();
    yield protractor_1.browser.sleep(8000);
    yield loginPage.waitForURLContain("login", 100000);
    yield protractor_1.browser.sleep(8000);
}));
cucumber_1.Given('User click on CSP icon', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.click(loginPage.txtCSP);
}));
cucumber_1.When('User enter valid Username', () => __awaiter(void 0, void 0, void 0, function* () {
    //await loginPage.sendKey(loginPage.txtUsername, browser.params.userName);
    //await loginPage.sendKey(loginPage.txtPassword, browser.params.password);
    //await browser.sleep(8000);
    yield loginPage.txtUsername.sendKeys(protractor_1.browser.params.userName);
    //browser.sleep(5000);
}));
cucumber_1.When('User click on next button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.nextButton.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('User enter valid Password', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.txtPassword.clear();
    yield loginPage.txtPassword.sendKeys(protractor_1.browser.params.password);
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Given('User select other user from user selection', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.useAnotherUser.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.When('User enter invalid Username', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield loginPage.txtUsername.sendKeys("abcd@pb.com");
}));
cucumber_1.When('User enter invalid Password', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.txtPassword.clear();
    yield loginPage.txtPassword.sendKeys("123456");
}));
cucumber_1.When('Click on Login button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.btnLogin.click();
}));
;
cucumber_1.Then('User is landed on the dashboard page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(8000);
    yield dashBoardPage.waitForURLContain("home", 20000);
    yield protractor_1.browser.sleep(5000);
    yield dashBoardPage.waitForElementToBePresent(dashBoardPage.text_Welcome);
    yield dashBoardPage.dashboardLink.getText().then(function (text) {
        expect(text).to.equal("Dashboard");
    });
}));
cucumber_1.Then('System show username error {string} message on the login page', (errorMessage) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield loginPage.userNameError.getText().then(function (text) {
        expect(text).contains(errorMessage);
    });
}));
cucumber_1.Then('System show password error {string} message on the login page', (errorMessage) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield loginPage.passwordError.getText().then(function (text) {
        expect(text).contains(errorMessage);
    });
}));
cucumber_1.When('User Click on logout button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.logoutLink.click();
    yield loginPage.signOutLink.click();
    yield protractor_1.browser.sleep(5000);
    yield loginPage.pickAccount.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('User is landed on Logout page', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.waitForAngularEnabled(false);
    yield loginPage.waitForURLContain("bye", 5000);
    yield protractor_1.browser.getCurrentUrl().then(function (url) {
        console.log("Current url is " + url);
        expect(url).contain("bye");
    });
}));
cucumber_1.Then('User is landed on Login page', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.waitForAngularEnabled(false);
    yield loginPage.waitForURLContain("login", 5000);
    yield protractor_1.browser.getCurrentUrl().then(function (url) {
        console.log("Current url is " + url);
        expect(url).contain("login");
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0ZXAtZGVmaW5hdGlvbnMvY29tbW9uLXN0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUE2RDtBQUM3RCwyREFBdUQ7QUFDdkQsbUVBQStEO0FBQy9ELGdEQUF3QjtBQUN4QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksU0FBUyxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO0FBQ2hDLElBQUksYUFBYSxHQUFHLElBQUksOEJBQWEsRUFBRSxDQUFDO0FBRXhDLGdCQUFLLENBQUMsMkJBQTJCLEVBQUUsR0FBUyxFQUFFO0lBQzVDLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLCtEQUErRDtJQUMvRCxnRUFBZ0U7SUFDaEUsbURBQW1EO0lBQ25ELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxTQUFTLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFHNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsd0JBQXdCLEVBQUUsR0FBUyxFQUFFO0lBQ3pDLE1BQU0sU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFMUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywyQkFBMkIsRUFBRSxHQUFTLEVBQUU7SUFDM0MsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMx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