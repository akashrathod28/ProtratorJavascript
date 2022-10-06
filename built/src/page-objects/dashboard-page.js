"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardPage = void 0;
const protractor_1 = require("protractor");
const base_page_1 = require("./base-page");
class DashboardPage extends base_page_1.BasePage {
    constructor() {
        super();
        this.text_Dashboard = protractor_1.element(protractor_1.by.css(".nav-link[routerlink='/home']"));
        this.text_Welcome = protractor_1.element(protractor_1.by.css("h1"));
        this.text_CarrierCount = protractor_1.element(protractor_1.by.css(".data-widget-1 .data-description"));
        this.numText_CarrierCount = protractor_1.element(protractor_1.by.css(".data-widget-1 .data-value"));
        this.text_ReadyToConfigure = protractor_1.element(protractor_1.by.css(".data-widget-2 .data-description"));
        this.numText_ReadyToConfigure = protractor_1.element(protractor_1.by.css(".data-widget-2 .data-value"));
        this.text_CarrierCountCSP = protractor_1.element(protractor_1.by.css(".data-widget-3 .data-description"));
        this.numText_carrierCountCSP = protractor_1.element(protractor_1.by.css(".data-widget-3 .data-value"));
        this.button_SubmitCarrierRequest = protractor_1.element(protractor_1.by.xpath("//button[@auto_id='dash-submit']"));
        this.input_Search = protractor_1.element(protractor_1.by.xpath("//input[@class='form-control']"));
        this.th_CarrierName = protractor_1.element(protractor_1.by.xpath("//th[contains(.,'Carrier Name (ID)')]"));
        this.th_OriginCountry = protractor_1.element(protractor_1.by.xpath("//th[contains(.,'Origin Country')]"));
        this.th_ConfigVersion = protractor_1.element(protractor_1.by.xpath("//th[contains(.,'Config Version')]"));
        this.th_Status = protractor_1.element(protractor_1.by.xpath("//th[contains(.,'Status')]"));
        this.th_Action = protractor_1.element(protractor_1.by.xpath("//th[@class='text-right']"));
        this.tbody_CarrierDataTable = protractor_1.element(protractor_1.by.css(".p-datatable-tbody"));
        this.navigate_CarrierBasicInformation = protractor_1.element(protractor_1.by.xpath("//li[1]//span[@class='progress-title btn btn-link']"));
        this.navigation_CarrierFeature = protractor_1.element(protractor_1.by.xpath("//ol[@class='progress-tracker progress-tracker--text progress-tracker--vertical']//span[@class='progress-text']/span[contains(.,'Carrier Features')]"));
        this.navigation_AdditionalFeature = protractor_1.element(protractor_1.by.xpath("//li[3]//span[@class='progress-title btn btn-link']"));
        this.navigation_CarrierDefault = protractor_1.element(protractor_1.by.xpath("//li[4]//span[@class='progress-title btn btn-link']"));
        this.navigation_CarrierService = protractor_1.element(protractor_1.by.xpath("//li[5]//span[@class='progress-title btn btn-link']"));
        this.navigation_AdditionalQuestions = protractor_1.element(protractor_1.by.xpath("//li[6]//span[@class='progress-title btn btn-link']"));
        this.totalCarrier = protractor_1.element(protractor_1.by.xpath("(//div[@class='card'])[1]"));
        this.availableToOnboard = protractor_1.element(protractor_1.by.xpath("(//div[@class='card'])[2]"));
        this.onboardedviacsp = protractor_1.element(protractor_1.by.xpath("(//div[@class='card'])[3]"));
        this.viewButton = protractor_1.element(protractor_1.by.xpath("//td[contains(.,'OnTrac Inc.')]//following-sibling::td//button"));
        this.searchCarrier = protractor_1.element(protractor_1.by.xpath("//input[@auto_id='dash-search']"));
        this.listedCarrier = protractor_1.element(protractor_1.by.xpath("//td[contains(.,'AusPost-QA')]"));
        this.burttonCarrierView = protractor_1.element(protractor_1.by.xpath("//td[contains(.,'AusPost-QA')]//..//button"));
        this.buttonUserName = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'header-username')]"));
        this.buttonProfile = protractor_1.element(protractor_1.by.xpath("//a[@href='/profile']"));
        this.buttonExportAuspost = protractor_1.element(protractor_1.by.xpath("//p[contains(.,'auspost')]//..//button[contains(.,'Export')]"));
        this.resumeButton = protractor_1.element(protractor_1.by.xpath("//tbody[@class='p-datatable-tbody']/tr[1]//button[@class='btn btn-link btn-request1 ng-star-inserted']"));
        this.reviewButton = protractor_1.element(protractor_1.by.xpath("//tbody[@class='p-datatable-tbody']/tr[1]//button[@class='btn btn-link btn-request1 ng-star-inserted']"));
        this.tableGridCarrierName = protractor_1.element.all(protractor_1.by.xpath("//tbody[@class='p-datatable-tbody']/tr//p[@class='uppercase ng-star-inserted']"));
        this.tableGridCarrierStatus = protractor_1.element.all(protractor_1.by.xpath("//tbody//td[5]"));
        this.tableGridCarrierAction = protractor_1.element.all(protractor_1.by.xpath("//tbody[@class='p-datatable-tbody']/tr//button[@class='btn btn-link btn-request1 ng-star-inserted']"));
        this.carrierTable = protractor_1.element(protractor_1.by.xpath("//table[@role='grid']"));
        this.carrierTableHeaderCarrierName = protractor_1.element(protractor_1.by.xpath("//table[@role='table']//th[1]"));
        this.carrierTableHeaderOriginCountry = protractor_1.element(protractor_1.by.xpath("//table[@role='table']//th[2]"));
        this.carrierTableHeaderEnviornment = protractor_1.element(protractor_1.by.xpath("//table[@role='table']//th[3]"));
        this.carrierTableHeaderConfigVersion = protractor_1.element(protractor_1.by.xpath("//table[@role='table']//th[3]"));
        this.carrierTableHeaderStatus = protractor_1.element(protractor_1.by.xpath("//table[@role='table']//th[4]"));
        this.carrierTableHeaderAction = protractor_1.element(protractor_1.by.xpath("//table[@role='table']//th[5]"));
        this.carrierVersion = protractor_1.element(protractor_1.by.xpath("//table//tr//td[contains(.,'CSP-UI-Test15')]//span[1]"));
        this.carrierGroup = protractor_1.element(protractor_1.by.xpath("//table//tr//td[contains(.,'CSP-UI-Test15')]//span[2]"));
        this.actionButton = protractor_1.element(protractor_1.by.xpath("//table//tr//td[contains(.,'CSP-UI-Test15')]/following-sibling::td/button"));
        this.saveAndExit = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-primary btn-block']"));
        this.donotsaveAndExit = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-outline-secondary btn-block']"));
    }
    getListedCarrier(name) {
        return protractor_1.element(protractor_1.by.xpath("//td[contains(.,'" + name + "')]"));
    }
    getButtonCarrierView(name) {
        return protractor_1.element(protractor_1.by.xpath("//td[contains(.,'" + name + "')]//..//button"));
    }
    getWebTableLink(carrierName, buttonText) {
        return protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'" + carrierName + "')]//parent::td//following-sibling::td[@class='text-right']//button[contains(text(),'" + buttonText + "')]"));
    }
    getActionButton(carrierName) {
        return protractor_1.element(protractor_1.by.xpath("(//td[contains(.,'" + carrierName + "')])[1]/following-sibling::td/button"));
    }
    getCarrierVersion(carrierName) {
        return protractor_1.element(protractor_1.by.xpath("//table//tr//td[contains(.,'" + carrierName + "')]//sup"));
    }
    getCarrierGroup(carrierName) {
        return protractor_1.element(protractor_1.by.xpath("//table//tr//td[contains(.,'" + carrierName + "')]//span[1]"));
    }
}
exports.DashboardPage = DashboardPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZS1vYmplY3RzL2Rhc2hib2FyZC1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUEyRTtBQUMzRSwyQ0FBdUM7QUFFdkMsTUFBYSxhQUFjLFNBQVEsb0JBQVE7SUFxRHhDO1FBQ0csS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsd0JBQXdCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsdUJBQXVCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsMkJBQTJCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLHNCQUFzQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGdDQUFnQyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLENBQUM7UUFDL0csSUFBSSxDQUFDLHlCQUF5QixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzSkFBc0osQ0FBQyxDQUFDLENBQUM7UUFDek0sSUFBSSxDQUFDLDRCQUE0QixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLENBQUM7UUFDM0csSUFBSSxDQUFDLHlCQUF5QixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLHlCQUF5QixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLDhCQUE4QixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLENBQUM7UUFFN0csSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDLENBQUM7UUFDdEcsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsOERBQThELENBQUMsQ0FBQyxDQUFDO1FBQzdHLElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdHQUF3RyxDQUFDLENBQUMsQ0FBQztRQUM5SSxJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3R0FBd0csQ0FBQyxDQUFDLENBQUM7UUFDOUksSUFBSSxDQUFDLG9CQUFvQixHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0ZBQWdGLENBQUMsQ0FBQyxDQUFDO1FBQ2xJLElBQUksQ0FBQyxzQkFBc0IsR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsc0JBQXNCLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxR0FBcUcsQ0FBQyxDQUFDLENBQUM7UUFDekosSUFBSSxDQUFDLFlBQVksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyw2QkFBNkIsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQywrQkFBK0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyw2QkFBNkIsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQywrQkFBK0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyx3QkFBd0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyx3QkFBd0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxjQUFjLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLFlBQVksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkVBQTJFLENBQUMsQ0FBQyxDQUFDO1FBQ2pILElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsZ0JBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsSUFBWTtRQUMxQixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsb0JBQW9CLENBQUMsSUFBWTtRQUM5QixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFHRCxlQUFlLENBQUMsV0FBbUIsRUFBRSxVQUFrQjtRQUNwRCxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsR0FBQyxXQUFXLEdBQUMsdUZBQXVGLEdBQUMsVUFBVSxHQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDekssQ0FBQztJQUNELGVBQWUsQ0FBQyxXQUFtQjtRQUNoQyxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsR0FBQyxXQUFXLEdBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFBO0lBQ3BHLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxXQUFtQjtRQUNsQyxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsR0FBQyxXQUFXLEdBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsZUFBZSxDQUFDLFdBQW1CO1FBQ2hDLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhCQUE4QixHQUFDLFdBQVcsR0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7Q0FDSDtBQWxJRCxzQ0FrSUMifQ==