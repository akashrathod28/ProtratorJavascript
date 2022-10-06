"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrierBasicInfoPage = void 0;
const protractor_1 = require("protractor");
const base_page_1 = require("./base-page");
class CarrierBasicInfoPage extends base_page_1.BasePage {
    constructor() {
        super();
        this.basicInfoQuestion = protractor_1.element(protractor_1.by.xpath("//li[@class='progress-step is-active ng-star-inserted']//span[@class='progress-title btn btn-link']"));
        this.carrierName = protractor_1.element(protractor_1.by.xpath("//input[@id='carrierName']"));
        this.originCountry = protractor_1.element(protractor_1.by.xpath("//select[@id='originCountryCode']"));
        this.addressline1 = protractor_1.element(protractor_1.by.xpath("//input[@id='line1']"));
        this.addressline2 = protractor_1.element(protractor_1.by.xpath("//input[@id='address2']"));
        this.city = protractor_1.element(protractor_1.by.xpath("//div[@class='col-lg-8']/div[@class='row']/div[1]//input[@class='form-control ng-untouched ng-pristine ng-valid']"));
        this.state = protractor_1.element(protractor_1.by.xpath("//input[@id='state']"));
        this.zip = protractor_1.element(protractor_1.by.xpath("//input[@id='zip']"));
        this.country = protractor_1.element(protractor_1.by.xpath("//select[@id='countryCode']"));
        this.contactType = protractor_1.element(protractor_1.by.xpath("//select[@class='form-control ng-pristine ng-valid ng-touched']"));
        this.contactName = protractor_1.element(protractor_1.by.css("[placeholder='Jonathan Smith']"));
        this.contactTitle = protractor_1.element(protractor_1.by.css("[placeholder='IT Manager']"));
        this.contactPhoneNumber = protractor_1.element(protractor_1.by.css("[placeholder='(555)555-5555']"));
        this.contactEmail = protractor_1.element(protractor_1.by.css("[placeholder='jonathan.smith@contact-email.com']"));
        this.contactadd = protractor_1.element(protractor_1.by.css(".pbi-add-circle"));
        this.nextbutton = protractor_1.element(protractor_1.by.css(".mat-ripple"));
        this.carrierIdentifier = protractor_1.element(protractor_1.by.xpath("//span[@class='header-margin-left']"));
    }
}
exports.CarrierBasicInfoPage = CarrierBasicInfoPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNJbmZvcm1hdGlvbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2Utb2JqZWN0cy9iYXNpY0luZm9ybWF0aW9uLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXdEO0FBQ3hELDJDQUF1QztBQUV2QyxNQUFhLG9CQUFxQixTQUFRLG9CQUFRO0lBcUIvQztRQUNHLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxR0FBcUcsQ0FBQyxDQUFDLENBQUM7UUFDbEosSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUE7UUFDM0QsSUFBSSxDQUFDLFlBQVksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxJQUFJLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1IQUFtSCxDQUFDLENBQUMsQ0FBQztRQUNqSixJQUFJLENBQUMsS0FBSyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDLENBQUM7UUFDdEcsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsa0JBQWtCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLFVBQVUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGlCQUFpQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUM7SUFHbkYsQ0FBQztDQUVIO0FBNUNELG9EQTRDQyJ9