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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
const protractor_1 = require("protractor");
class BasePage {
    constructor() {
        this.logoutLink = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'header-username')]"));
        this.signOutLink = protractor_1.element(protractor_1.by.xpath("//a[.='Sign Out']"));
        this.pickAccount = protractor_1.element(protractor_1.by.xpath("//div[@class='tile-container']//div[@class='table']"));
        this.dashboardLink = protractor_1.element(protractor_1.by.xpath("//a[.='Dashboard']"));
        this.header_CarrierRequest = protractor_1.element(protractor_1.by.css("h1"));
    }
    click(locater) {
        try {
            protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.elementToBeClickable(locater), 8000);
            locater.click();
        }
        catch (e) {
            console.log("Exception while clicking on the element " + e);
        }
    }
    clickByJs(locater) {
        try {
            protractor_1.browser.executeScript("arguments[0].click();", locater);
        }
        catch (e) {
            console.log("Exception on clocking by Js" + e);
        }
    }
    clickByMouseMove(locater) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.actions().
                    mouseMove(locater).
                    click().
                    perform();
            }
            catch (e) {
                console.log("Exception on clicking by Js" + e);
            }
        });
    }
    sendKeyByMouseMove(locater, value) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.actions().
                    mouseMove(locater).
                    click().
                    sendKeys(value).
                    perform();
            }
            catch (e) {
                console.log("Exception on clicking by Js" + e);
            }
        });
    }
    sendKey(locater, key) {
        try {
            protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.presenceOf(locater), 5000);
            locater.clear().then(() => {
                locater.sendKeys(key);
            });
        }
        catch (e) {
            console.log("Send Key failed " + e);
        }
    }
    waitForElementToBePresent(locater) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.presenceOf(locater), 15000);
            }
            catch (e) {
                console.error('Function Output : Element is not present.', e);
            }
        });
    }
    waitForURLContain(urlExpected, timeout) {
        try {
            const condition = protractor_1.browser.ExpectedConditions;
            protractor_1.browser.wait(condition.urlContains(urlExpected), timeout);
        }
        catch (e) {
            console.error('URL not contain text.', e);
        }
        ;
    }
    selectValueFromDropDown(option) {
        try {
            protractor_1.element.all(protractor_1.by.tagName("option")).each(function (item) {
                item.getAttribute("label").then(function (label) {
                    if (label == option)
                        item.click();
                });
            });
        }
        catch (e) {
            console.log("Exception in selecting values from Dropdown" + e);
        }
    }
    getCustomXpathForNavigationLink(link) {
        return protractor_1.element(protractor_1.by.xpath("//ul[@class='nav navbar-nav']/li/a[text()='" + link + "']"));
    }
    getElement(locater) {
        try {
            return protractor_1.element(protractor_1.by.xpath(locater));
        }
        catch (e) {
            console.log("Elemind is not found" + e);
        }
    }
    checkElementDisabled(locater) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if ((yield locater.getAttribute('disabled')) == "null") {
                    return false;
                }
                else
                    return true;
            }
            catch (e) {
                console.log("Elemind is not found" + e);
            }
        });
    }
    clickifNotSelected(locater) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield locater.isSelected().then(function (selected) {
                    if (!selected) {
                        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.elementToBeClickable(locater), 5000);
                        locater.click();
                    }
                });
            }
            catch (error) {
            }
        });
    }
    clickifNotSelectedByJs(locater) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield locater.isSelected().then(function (selected) {
                    if (!selected) {
                        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.elementToBeClickable(locater), 5000);
                        protractor_1.browser.executeScript("arguments[0].click();", locater);
                    }
                });
            }
            catch (error) {
            }
        });
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2Utb2JqZWN0cy9iYXNlLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTZFO0FBSzdFLE1BQWEsUUFBUTtJQVNqQjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNNLEtBQUssQ0FBQyxPQUFzQjtRQUMvQixJQUFJO1lBQ0Esb0JBQU8sQ0FBQyxJQUFJLENBQUMsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNoRixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbkI7UUFDRCxPQUFPLENBQUMsRUFBRTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDL0Q7SUFDTCxDQUFDO0lBRUQsU0FBUyxDQUFDLE9BQXNCO1FBQzVCLElBQUk7WUFDQSxvQkFBTyxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUMzRDtRQUNELE9BQU8sQ0FBQyxFQUFFO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNsRDtJQUNMLENBQUM7SUFFSyxnQkFBZ0IsQ0FBQyxPQUFzQjs7WUFDekMsSUFBSTtnQkFDQSxNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFO29CQUNuQixTQUFTLENBQUMsT0FBTyxDQUFDO29CQUNsQixLQUFLLEVBQUU7b0JBQ1AsT0FBTyxFQUFFLENBQUM7YUFDakI7WUFDRCxPQUFPLENBQUMsRUFBRTtnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO1FBQ0wsQ0FBQztLQUFBO0lBRUssa0JBQWtCLENBQUMsT0FBc0IsRUFBRSxLQUFhOztZQUMxRCxJQUFJO2dCQUNBLE1BQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUU7b0JBQ25CLFNBQVMsQ0FBQyxPQUFPLENBQUM7b0JBQ2xCLEtBQUssRUFBRTtvQkFDUCxRQUFRLENBQUMsS0FBSyxDQUFDO29CQUNmLE9BQU8sRUFBRSxDQUFDO2FBQ2pCO1lBQ0QsT0FBTyxDQUFDLEVBQUU7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNsRDtRQUNMLENBQUM7S0FBQTtJQUdELE9BQU8sQ0FBQyxPQUFzQixFQUFFLEdBQVc7UUFDdkMsSUFBSTtZQUNBLG9CQUFPLENBQUMsSUFBSSxDQUFDLHVCQUFVLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3RFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN0QixPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFDRCxPQUFPLENBQUMsRUFBRTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkM7SUFFTCxDQUFDO0lBRUsseUJBQXlCLENBQUMsT0FBc0I7O1lBQ2xELElBQUk7Z0JBQ0EsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNoRjtZQUNELE9BQU8sQ0FBQyxFQUFFO2dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkNBQTJDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDakU7UUFHTCxDQUFDO0tBQUE7SUFFRCxpQkFBaUIsQ0FBQyxXQUFtQixFQUFFLE9BQWU7UUFDbEQsSUFBSTtZQUNBLE1BQU0sU0FBUyxHQUFHLG9CQUFPLENBQUMsa0JBQWtCLENBQUM7WUFDN0Msb0JBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3RDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM3QztRQUFBLENBQUM7SUFDTixDQUFDO0lBRUQsdUJBQXVCLENBQUMsTUFBYztRQUNsQyxJQUFJO1lBQ0Esb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7Z0JBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSztvQkFDM0MsSUFBSSxLQUFLLElBQUksTUFBTTt3QkFDZixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFDLENBQUE7U0FDTDtRQUNELE9BQU8sQ0FBQyxFQUFFO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNsRTtJQUNMLENBQUM7SUFFRCwrQkFBK0IsQ0FBQyxJQUFZO1FBQ3hDLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFRCxVQUFVLENBQUMsT0FBZTtRQUN0QixJQUFJO1lBRUEsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNyQztRQUNELE9BQU8sQ0FBQyxFQUFFO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMzQztJQUNMLENBQUM7SUFJSyxvQkFBb0IsQ0FBQyxPQUFzQjs7WUFDN0MsSUFBSTtnQkFFQSxJQUFJLENBQUEsTUFBTSxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFJLE1BQU0sRUFBRTtvQkFDbEQsT0FBTyxLQUFLLENBQUM7aUJBQ2hCOztvQkFFRyxPQUFPLElBQUksQ0FBQzthQUNuQjtZQUNELE9BQU8sQ0FBQyxFQUFFO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDM0M7UUFDTCxDQUFDO0tBQUE7SUFDSyxrQkFBa0IsQ0FBQyxPQUFzQjs7WUFDM0MsSUFBSTtnQkFDQSxNQUFNLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxRQUFRO29CQUM5QyxJQUFJLENBQUMsUUFBUSxFQUFFO3dCQUNYLG9CQUFPLENBQUMsSUFBSSxDQUFDLHVCQUFVLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ2hGLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztxQkFFbkI7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUNELE9BQU8sS0FBSyxFQUFFO2FBRWI7UUFDTCxDQUFDO0tBQUE7SUFFSyxzQkFBc0IsQ0FBQyxPQUFzQjs7WUFDL0MsSUFBSTtnQkFDQSxNQUFNLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxRQUFRO29CQUM5QyxJQUFJLENBQUMsUUFBUSxFQUFFO3dCQUNYLG9CQUFPLENBQUMsSUFBSSxDQUFDLHVCQUFVLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ2hGLG9CQUFPLENBQUMsYUFBYSxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUUzRDtnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNOO1lBQ0QsT0FBTyxLQUFLLEVBQUU7YUFFYjtRQUNMLENBQUM7S0FBQTtDQUNKO0FBdEtELDRCQXNLQyJ9