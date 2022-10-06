"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateShop = void 0;
const protractor_1 = require("protractor");
const base_page_1 = require("./base-page");
class RateShop extends base_page_1.BasePage {
    constructor() {
        super();
        this.rateShopLink = protractor_1.element(protractor_1.by.xpath("//li[2]//span[@class='progress-title btn btn-link']"));
        this.addAPIButton = protractor_1.element(protractor_1.by.xpath("//button[@auto_id='config_onboard_api_RATE_SHOP_button_addAPI']"));
        this.optionYes = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-primary']"));
        this.request = protractor_1.element(protractor_1.by.xpath("//ngb-accordion[@class='accordion accordion-ripple']//button[contains(.,'Request')]"));
        this.metaDataTextArea = protractor_1.element(protractor_1.by.xpath("//textarea[@class='form-control ng-pristine ng-valid ng-touched']"));
        this.importButton = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-sm btn-primary mt-4']"));
        this.httpMethodDropDown = protractor_1.element(protractor_1.by.xpath("//select[@class='form-control ng-untouched ng-pristine ng-valid']"));
        this.serviceURLTextBox = protractor_1.element(protractor_1.by.xpath("//textarea[@class='form-control ng-untouched ng-pristine ng-valid']"));
        this.optionHeader = protractor_1.element(protractor_1.by.xpath(""));
    }
}
exports.RateShop = RateShop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJlLVJhdGVTaG9wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2Utb2JqZWN0cy9jb25maWd1cmUtUmF0ZVNob3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXNEO0FBQ3RELDJDQUF1QztBQUV2QyxNQUFhLFFBQVMsU0FBUSxvQkFBUTtJQW9CdEM7UUFFRyxLQUFLLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDLENBQUM7UUFDdkcsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxPQUFPLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFGQUFxRixDQUFDLENBQUMsQ0FBQztRQUN0SCxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1FQUFtRSxDQUFDLENBQUMsQ0FBQztRQUM3RyxJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLGtCQUFrQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDLENBQUM7UUFDL0csSUFBSSxDQUFDLGlCQUFpQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDLENBQUM7UUFDaEgsSUFBSSxDQUFDLFlBQVksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQU92QyxDQUFDO0NBRUE7QUF4Q0QsNEJBd0NDIn0=