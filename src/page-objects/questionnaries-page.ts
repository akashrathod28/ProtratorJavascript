import { by, element, browser, ElementFinder } from "protractor";
import { DashboardPage } from "./dashboard-page"
import { BasePage } from "./base-page";

export class QuestionariesPage extends BasePage {

    radioTypeCarrierAPI: ElementFinder;
    radioAPIServiceTypwRest: ElementFinder;
    checkboxNameAPISupportedRate: ElementFinder;
    checkboxAPISupportedShip: ElementFinder;
    checkboxAPISupportedCancel: ElementFinder;
    checkboxAPISupportedManifest: ElementFinder;
    radioReturnsSupportedYes: ElementFinder
    radioReturnsSupportedNo: ElementFinder
    radioInternationalSupportedYes: ElementFinder
    radioInternationalSupportedNo: ElementFinder
    checkboxLabelFormatPDF: ElementFinder
    checkboxLabelFormatPNG: ElementFinder
    checkboxLabelFormatGIF: ElementFinder
    checkboxLabelFormatZPL2: ElementFinder
    checkboxLabelSizeDOC_4x6: ElementFinder
    checkboxLabelSizeDOC_8x11: ElementFinder
    checkboxLabelContentTypeURL: ElementFinder
    checkboxLabelContentTypeBase64: ElementFinder
    inputDomesticServicesNameID1: ElementFinder
    inputDomesticServicesBrandedName1: ElementFinder
    inputDomesticServicesAddMore: ElementFinder
    inputSpecialServicesNameID1: ElementFinder
    inputSpecialServicesBrandedName1: ElementFinder
    inputSpecialServicesAddMore: ElementFinder
    inputParcelTypesNameID1: ElementFinder
    inputParcelTypesBrandedName1: ElementFinder
    inputParcelTypesAddMore: ElementFinder
    inputCarrierSupportContact: ElementFinder
    buttonContinue: ElementFinder
    checkboxAPISupportedRate: ElementFinder
    checkboxAPISupportedRateInput: ElementFinder

    constructor() {
        super()
        this.radioTypeCarrierAPI = element(by.xpath("//mat-radio-button[contains(.,'API')]"));
        this.radioAPIServiceTypwRest = element(by.xpath("//mat-radio-button[contains(.,'REST')]"));
        this.checkboxNameAPISupportedRate = element(by.xpath("//mat-checkbox[contains(.,'Rate')]"));
        this.checkboxAPISupportedRate = element(by.xpath("//mat-checkbox[contains(.,'Rate')]//input//.."));
        this.checkboxAPISupportedRateInput = element(by.xpath("//mat-checkbox[contains(.,'Rate')]//input"));
        this.checkboxAPISupportedShip = element(by.xpath("//mat-checkbox[contains(.,'Ship')]"));
        this.checkboxAPISupportedCancel = element(by.xpath("//mat-checkbox[contains(.,'Cancel')]"));
        this.checkboxAPISupportedManifest = element(by.xpath("//mat-checkbox[contains(.,'Manifest')]"));
        this.radioReturnsSupportedYes = element(by.xpath("//p[contains(.,'Returns Supported')]/..//mat-radio-button[contains(.,'Yes')]"));
        this.radioReturnsSupportedNo = element(by.xpath("//p[contains(.,'Returns Supported')]/..//mat-radio-button[contains(.,'No')]"));
        this.radioInternationalSupportedYes = element(by.xpath("//p[contains(.,'International Supported')]/..//mat-radio-button[contains(.,'Yes')] "));
        this.radioInternationalSupportedNo = element(by.xpath("//p[contains(.,'International Supported')]/..//mat-radio-button[contains(.,'No')] "));
        this.checkboxLabelFormatPDF = element(by.xpath("//mat-checkbox[contains(.,'PDF')]"));
        this.checkboxLabelFormatPNG = element(by.xpath("//mat-checkbox[contains(.,'PNG')]"));
        this.checkboxLabelFormatGIF = element(by.xpath("//mat-checkbox[contains(.,'GIF')]"));
        this.checkboxLabelFormatZPL2 = element(by.xpath("//mat-checkbox[contains(.,'ZPL2')]"));

        this.checkboxLabelSizeDOC_4x6 = element(by.xpath("//mat-checkbox[contains(.,'DOC_4x6')]"));
        this.checkboxLabelSizeDOC_8x11 = element(by.xpath("//mat-checkbox[contains(.,'DOC_8x11')]"));

        this.checkboxLabelContentTypeURL = element(by.xpath("//mat-checkbox[contains(.,'URL')]"));
        this.checkboxLabelContentTypeBase64 = element(by.xpath("//mat-checkbox[contains(.,'BASE64')]"));

        this.inputDomesticServicesNameID1 = element(by.xpath("//h5[contains(.,'DOMESTIC SERVICES')]//following-sibling::div//tr[1]/td[1]/input"));
        this.inputDomesticServicesBrandedName1 = element(by.xpath("//h5[contains(.,'DOMESTIC SERVICES')]//following-sibling::div//tr[1]/td[2]/input"));
        this.inputDomesticServicesAddMore = element(by.xpath("//h5[contains(.,'DOMESTIC SERVICES')]//following-sibling::div//td[1]/button"));

        this.inputSpecialServicesNameID1 = element(by.xpath("//h5[contains(.,'SPECIAL SERVICES')]//following-sibling::div//tr[1]/td[1]/input"));
        this.inputSpecialServicesBrandedName1 = element(by.xpath("//h5[contains(.,'SPECIAL SERVICES')]//following-sibling::div//tr[1]/td[2]/input"));
        this.inputSpecialServicesAddMore = element(by.xpath("//h5[contains(.,'SPECIAL SERVICES')]//following-sibling::div//td[1]/button"));

        this.inputCarrierSupportContact = element(by.xpath("//li[@class='p-chips-input-token']/input[1]"));

        this.inputParcelTypesNameID1 = element(by.xpath("//h5[contains(.,'PARCEL TYPES')]//following-sibling::div//tr[1]/td[1]/input"));
        this.inputParcelTypesBrandedName1 = element(by.xpath("//h5[contains(.,'PARCEL TYPES')]//following-sibling::div//tr[1]/td[2]/input"));
        this.inputParcelTypesAddMore = element(by.xpath("//h5[contains(.,'PARCEL TYPES')]//following-sibling::div//td[1]/button"));
        this.buttonContinue = element(by.xpath("//div[@aria-expanded='true']//button[contains(.,'Continue')]"));


    }

}