"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrierPage = void 0;
const protractor_1 = require("protractor");
const base_page_1 = require("./base-page");
class CarrierPage extends base_page_1.BasePage {
    constructor() {
        super();
        this.carrierNameAusPostQA = protractor_1.element(protractor_1.by.xpath("//h1[.='AusPost-QA']"));
        this.buttonGrid = protractor_1.element(protractor_1.by.xpath("//div[@class='d-flex justify-content-start mt-5']//button"));
        this.onboardingbutton = protractor_1.element(protractor_1.by.xpath("//div[@class='d-flex justify-content-start mt-5']//button[contains(.,'Onboard')]"));
        this.duplicatebutton = protractor_1.element(protractor_1.by.xpath("//div[@class='d-flex justify-content-start mt-5']//button[contains(.,'Duplicate')]"));
        this.editButton = protractor_1.element(protractor_1.by.xpath("//div[@class='d-flex justify-content-start mt-5']//button[contains(.,'Edit')]"));
    }
}
exports.CarrierPage = CarrierPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycmllci1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2Utb2JqZWN0cy9jYXJyaWVyLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXNEO0FBQ3RELDJDQUF1QztBQUV2QyxNQUFhLFdBQVksU0FBUSxvQkFBUTtJQVV6QztRQUVHLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLG9CQUFvQixHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFVBQVUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkRBQTJELENBQUMsQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0ZBQWtGLENBQUMsQ0FBQyxDQUFDO1FBQzVILElBQUksQ0FBQyxlQUFlLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9GQUFvRixDQUFDLENBQUMsQ0FBQztRQUM3SCxJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrRUFBK0UsQ0FBQyxDQUFDLENBQUM7SUFHdEgsQ0FBQztDQUVBO0FBdEJELGtDQXNCQyJ9