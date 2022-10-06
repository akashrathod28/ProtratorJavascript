import { by, element, browser, ElementFinder, protractor } from "protractor";




export class BasePage {
    logoutLink: ElementFinder;
    signOutLink: ElementFinder;
    pickAccount:ElementFinder;
    dashboardLink: ElementFinder;
    header_CarrierRequest: ElementFinder;



    constructor() {
        this.logoutLink = element(by.xpath("//div[contains(@class,'header-username')]"));
        this.signOutLink = element(by.xpath("//a[.='Sign Out']"));
        this.pickAccount=element(by.xpath("//div[@class='tile-container']//div[@class='table']"));
        this.dashboardLink = element(by.xpath("//a[.='Dashboard']"));
        this.header_CarrierRequest = element(by.css("h1"));
    }
    public click(locater: ElementFinder) {
        try {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(locater), 8000);
            locater.click();
        }
        catch (e) {
            console.log("Exception while clicking on the element " + e);
        }
    }

    clickByJs(locater: ElementFinder) {
        try {
            browser.executeScript("arguments[0].click();", locater);
        }
        catch (e) {
            console.log("Exception on clocking by Js" + e);
        }
    }

    async clickByMouseMove(locater: ElementFinder) {
        try {
            await browser.actions().
                mouseMove(locater).
                click().
                perform();
        }
        catch (e) {
            console.log("Exception on clicking by Js" + e);
        }
    }

    async sendKeyByMouseMove(locater: ElementFinder, value: string) {
        try {
            await browser.actions().
                mouseMove(locater).
                click().
                sendKeys(value).
                perform();
        }
        catch (e) {
            console.log("Exception on clicking by Js" + e);
        }
    }


    sendKey(locater: ElementFinder, key: string) {
        try {
            browser.wait(protractor.ExpectedConditions.presenceOf(locater), 5000);
            locater.clear().then(() => {
                locater.sendKeys(key)
            });
        }
        catch (e) {
            console.log("Send Key failed " + e);
        }

    }

    async waitForElementToBePresent(locater: ElementFinder) {
        try {
            await browser.wait(protractor.ExpectedConditions.presenceOf(locater), 15000);
        }
        catch (e) {
            console.error('Function Output : Element is not present.', e);
        }


    }

    waitForURLContain(urlExpected: string, timeout: number) {
        try {
            const condition = browser.ExpectedConditions;
            browser.wait(condition.urlContains(urlExpected), timeout);
        } catch (e) {
            console.error('URL not contain text.', e);
        };
    }

    selectValueFromDropDown(option: string) {
        try {
            element.all(by.tagName("option")).each(function (item) {
                item.getAttribute("label").then(function (label) {
                    if (label == option)
                        item.click();
                })
            })
        }
        catch (e) {
            console.log("Exception in selecting values from Dropdown" + e);
        }
    }

    getCustomXpathForNavigationLink(link: string): ElementFinder {
        return element(by.xpath("//ul[@class='nav navbar-nav']/li/a[text()='" + link + "']"));
    }

    getElement(locater: string): ElementFinder {
        try {

            return element(by.xpath(locater));
        }
        catch (e) {
            console.log("Elemind is not found" + e);
        }
    }



    async checkElementDisabled(locater: ElementFinder) {
        try {

            if (await locater.getAttribute('disabled') == "null") {
                return false;
            }
            else
                return true;
        }
        catch (e) {
            console.log("Elemind is not found" + e);
        }
    }
    async clickifNotSelected(locater: ElementFinder) {
        try {
            await locater.isSelected().then(function (selected) {
                if (!selected) {
                    browser.wait(protractor.ExpectedConditions.elementToBeClickable(locater), 5000);
                    locater.click();

                }
            });
        }
        catch (error) {

        }
    }

    async clickifNotSelectedByJs(locater: ElementFinder) {
        try {
            await locater.isSelected().then(function (selected) {
                if (!selected) {
                    browser.wait(protractor.ExpectedConditions.elementToBeClickable(locater), 5000);
                    browser.executeScript("arguments[0].click();", locater);

                }
            });
        }
        catch (error) {

        }
    }
}