"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationPage = void 0;
const protractor_1 = require("protractor");
const base_page_1 = require("./base-page");
class ConfigurationPage extends base_page_1.BasePage {
    constructor() {
        super();
        this.configurationPageIndentifier = protractor_1.element(protractor_1.by.xpath("//li[contains(text(),'Configure Carrier')]"));
        this.rateShopLink = protractor_1.element(protractor_1.by.xpath("//ol//span[text()=' Rate Shop ']"));
        this.rateLink = protractor_1.element(protractor_1.by.xpath("//li[3]//span[@class='progress-title btn btn-link']"));
        this.shipmentLink = protractor_1.element(protractor_1.by.xpath("//li[4]//span[@class='progress-title btn btn-link']"));
        this.cancelLink = protractor_1.element(protractor_1.by.xpath("//li[5]//span[@class='progress-title btn btn-link']"));
        this.deployAndTestLink = protractor_1.element(protractor_1.by.xpath("//li[6]//span[@class='progress-title btn btn-link']"));
        this.addAPIButton = protractor_1.element(protractor_1.by.xpath("//button[@auto_id='config_onboard_api_RATE_SHOP_button_addAPI']"));
        this.addAPIButtonRate = protractor_1.element(protractor_1.by.xpath("//button[@auto_id='config_onboard_api_CALCULATE_RATE_button_addAPI']"));
        this.saveButton = protractor_1.element(protractor_1.by.xpath("//button[@auto_id='config_onboard_api_RATE_SHOP_button_save']"));
        this.optionYes = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-primary']"));
        this.request = protractor_1.element(protractor_1.by.xpath("//ngb-accordion[@class='accordion accordion-ripple']//button[contains(.,'Request')]"));
        this.metaDataTextArea = protractor_1.element(protractor_1.by.xpath("//app-ingest-body[@auto_id='config_onboard_api_request_ingest_curl_RATE_SHOP_0']/div/textarea"));
        this.importButton = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-sm btn-primary mt-4']"));
        this.httpMethodDropDown = protractor_1.element(protractor_1.by.xpath("//select[@class='form-control ng-untouched ng-pristine ng-valid']"));
        this.serviceURLTextBox = protractor_1.element(protractor_1.by.xpath("//textarea[@class='form-control ng-untouched ng-pristine ng-valid']"));
        this.optionHeader = protractor_1.element(protractor_1.by.xpath("//div[@class='mat-tab-label-content' and contains(.,'Headers')]"));
        this.mappingTab = protractor_1.element(protractor_1.by.xpath("//div[@class='mat-tab-label-content' and contains(.,'Mapping')]"));
        this.optionMetadata = protractor_1.element(protractor_1.by.xpath("//div[@class='mat-tab-label-content' and contains(.,'Meta Data')]"));
        this.addToMapButton = protractor_1.element(protractor_1.by.xpath("//button[contains(.,'Add to Map')]"));
        this.valueConversionDropDown = protractor_1.element(protractor_1.by.xpath("//app-type-conversions/div/div/select"));
        this.saveMapping = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-primary']"));
        this.defineAConstant = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-primary btn-sm']"));
        this.constantValueField = protractor_1.element(protractor_1.by.xpath("//p[text()='Constant Value']//..//div//input"));
        this.IwantToPerfromSelect = protractor_1.element(protractor_1.by.xpath("//select/option[contains(.,' Abs')]/parent::*"));
        this.computeValueType1 = protractor_1.element(protractor_1.by.xpath("//app-value-from-function[@class='ng-star-inserted']//div[2]//div[@class='col-3']/select[@class='form-control form-control-sm ng-untouched ng-pristine ng-valid']"));
        this.computeValueField1 = protractor_1.element(protractor_1.by.xpath("//app-value-from-function[@class='ng-star-inserted']//div[@class='col']/div[2]//select[@class='form-control form-control-sm ng-untouched ng-pristine ng-valid ng-star-inserted']"));
        this.computeValueFieldConverterType1 = protractor_1.element(protractor_1.by.xpath("//app-value-from-function[@class='ng-star-inserted']//div[2]//select[@class='form-control form-control-sm ng-untouched ng-pristine ng-valid']"));
        this.computeValueType2 = protractor_1.element(protractor_1.by.xpath("//app-value-from-function[@class='ng-star-inserted']//div[@class='col-3']/select[@class='form-control form-control-sm ng-untouched ng-pristine ng-valid']"));
        this.computeValueField1 = protractor_1.element(protractor_1.by.xpath("//app-value-from-function[@class='ng-star-inserted']//div[3]//select[@class='form-control form-control-sm ng-untouched ng-pristine ng-valid ng-star-inserted']"));
        this.computeValueFieldConverterType1 = protractor_1.element(protractor_1.by.xpath("//app-value-from-function[@class='ng-star-inserted']//div[2]//select[@class='form-control form-control-sm ng-untouched ng-pristine ng-valid']"));
        this.addArgumentButton = protractor_1.element(protractor_1.by.xpath("//button[contains(.,'Argument')]"));
        this.addThisFunctionButton = protractor_1.element(protractor_1.by.xpath("//button[contains(.,'Add this Function')]"));
        this.computeConstant = protractor_1.element(protractor_1.by.xpath("//label[.='Constant']/parent::div/following-sibling::div/input"));
        this.computeFunctionIdentifier = protractor_1.element(protractor_1.by.xpath("//label[text()='Function Identifier']/parent::div/select/option[contains(.,'Concatenation-0')]"));
        this.completeAndMap = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-sm btn-primary']"));
        //this.completeAndMap=element(by.xpath("//div[@class='row mb-4']/div[@class='col-3']"));
        this.previewTextArea = protractor_1.element(protractor_1.by.xpath("//h2[contains(.,'SubSystem Request')]/following-sibling::div/textarea"));
        this.previewTextAreaResponse = protractor_1.element(protractor_1.by.xpath(" //h4[contains(.,'Carrier Response #1')]//following-sibling::div/textarea"));
        this.previewButton = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Preview')]"));
        this.responsePreviewButton = protractor_1.element(protractor_1.by.xpath("//button[@auto_id='config_response_button_get_preview']"));
        this.responseButton = protractor_1.element(protractor_1.by.xpath("//button[contains(.,'Response')] "));
        this.responseBodyTextArea = protractor_1.element(protractor_1.by.xpath("//app-ingest-body/div/textarea"));
        this.responseImportButton = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-sm btn-primary mt-4']"));
        this.mappingDownloadConfirmation = protractor_1.element(protractor_1.by.xpath("//app-confirm-modal//button[@class='btn btn-secondary']"));
        this.responseRepatingElement = protractor_1.element(protractor_1.by.xpath("(//div[@auto_id='config_onboard_api_tree_button_toggle_repeat_RATE_SHOP']/i)[1]"));
        this.surcharges_surcharge_0_fee = protractor_1.element(protractor_1.by.xpath("(//div[contains(.,'fee')]/button[@auto_id='config_onboard_api_tree_button_select_node_undefined']/i)[1]"));
        this.data_0_calculated_fuel_charge = protractor_1.element(protractor_1.by.xpath("//app-construct-response-map[@class='ng-star-inserted']//div[3]//mat-tree-node[6]//i[@class='pbi-icon-mini pbi-hubvis-query-selection']"));
        this.addRule = protractor_1.element(protractor_1.by.xpath("//button[text()=' Rule ']"));
        this.selectField = protractor_1.element(protractor_1.by.xpath("//div[@role='combobox']//input[@type='text']"));
        this.selectOperator = protractor_1.element(protractor_1.by.xpath("//select/option[contains(.,' eq')]/parent::*"));
        this.valueField = protractor_1.element(protractor_1.by.xpath("//div/input[@role='combobox']"));
        this.responseBodyTextArea = protractor_1.element(protractor_1.by.xpath("//h4[contains(.,'Carrier Response #1 ')]/following-sibling::div/textarea"));
        this.addOptionButton = protractor_1.element(protractor_1.by.xpath("//button[contains(.,'Add Options')]"));
        this.addShipmetOptionButton = protractor_1.element(protractor_1.by.xpath("//button[text()='Add']"));
        this.shipmentCancelManifestKey = protractor_1.element(protractor_1.by.xpath("//h4[contains(.,'Select a carrier key that is used for')]/parent::div/following-sibling::div/div/div/select"));
        this.shipmentQueyParamconsignmentNumber = protractor_1.element(protractor_1.by.xpath("//div[contains(.,'consignmentNumber')]/button/i"));
        this.selectContentForShipment = protractor_1.element(protractor_1.by.xpath("//span[contains(.,'Standard JSON or XML')]"));
        this.deployAndTestButton = protractor_1.element(protractor_1.by.xpath("//button[contains(.,' Deploy & Test ')]"));
        //div[contains(.,' fromSuburb')]/button[@auto_id='config_onboard_api_tree_button_select_node_RATE_SHOP']/i
        //div[contains(.,'Accept')]/button[@auto_id='config_onboard_api_request_tree_headers_RATE_SHOP_0']/i
        //div[contains(.,'Accept')]/button[@auto_id='config_onboard_api_tree_button_select_node_undefined']/i
     }
    getTabOnConfigurationPage(tabName) {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='mat-tab-label-content' and contains(.,'" + tabName + "')]"));
    }
    getHeaderOption(seq) {
        return protractor_1.element(protractor_1.by.xpath("//table[@class='table table-sm table-borderless']//tr[" + seq + "]//td[1]"));
    }
    getCarrierBodyFileldSelected(fileldName, apiName) {
        return protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'" + fileldName + "')]"));
        //div[contains(.,'"+fileldName+"')]/button[@auto_id='config_onboard_api_tree_button_select_node_"+apiName+"']/i
    }
    getCarrierHeaderFileldSelected(fileldName) {
        return protractor_1.element(protractor_1.by.xpath("//app-com-tree[contains(@auto_id,'config_onboard_api_request_tree_headers')]//div[contains(text(),'" + fileldName + "')]"));
        //div[contains(.,'"+fileldName+"')]/button[@auto_id='config_onboard_api_tree_button_select_node_undefined']/i
    }
    getMappingType(fileldName) {
        return protractor_1.element(protractor_1.by.xpath("//mat-radio-button[contains(.,'" + fileldName + "')]"));
    }
    getGCSField(fileldName) {
        return protractor_1.element(protractor_1.by.xpath("//app-com-tree[contains(@auto_id,'config_onboard_api_request_tree_source_body')]//div[contains(.,'" + fileldName + "')]"));
    }
    getGCSTopField(fileldName) {
        return protractor_1.element(protractor_1.by.xpath("//app-com-tree[contains(@auto_id,'config_onboard_api_request_tree_source_body')]//mat-tree-node/p[contains(.,'" + fileldName + "')]"));
    }
    getGCSHirerchyField(topField, lowElement) {
        return protractor_1.element(protractor_1.by.xpath("//mat-tree-node[contains(.,'" + topField + "')]/following-sibling::mat-tree-node[contains(.,'" + lowElement + "')][1]"));
    }
    getGCSHirerchyFieldAtSeq(topField, lowElement, seq) {
        return protractor_1.element(protractor_1.by.xpath("(//mat-tree-node[contains(.,'" + topField + "')]/following-sibling::mat-tree-node[contains(.,'" + lowElement + "')]/div[@class='child']/button/i)[" + seq + "]"));
    }
    getComputeField(seq) {
        return protractor_1.element(protractor_1.by.xpath("(//label[text()='Field']/parent::div/select)[" + seq + "]"));
    }
    getComputeFieldTypeConversion(seq) {
        return protractor_1.element(protractor_1.by.xpath("(//app-value-from-function//div[1]/select)[" + seq + "]"));
    }
    getComputeFieldType(seq) {
        return protractor_1.element(protractor_1.by.xpath("(//label[text()='Type']/parent::div/select)[" + seq + "]"));
        //mat-tree-node/descendant::p[text()='surcharge']
    }
    getAddAPIButton(apiName) {
        return protractor_1.element(protractor_1.by.xpath("//button[@auto_id='config_onboard_api_" + apiName + "_button_addAPI']"));
    }
    getmetaDataTextArea(apiName) {
        return protractor_1.element(protractor_1.by.xpath("(//textarea)[1]"));
    }
    getCompletMappingSaveButton(apiName) {
        return protractor_1.element(protractor_1.by.xpath("//button[@auto_id='config_onboard_api_" + apiName + "_button_save']"));
    }
    getResponseRepetingElement(apiName) {
        return protractor_1.element(protractor_1.by.xpath("(//div[contains(@auto_id,'config_onboard_api_tree_button_toggle_repeat')]/i) [1]"));
    }
    getResponseGCSfield(attribute, seq) {
        return protractor_1.element(protractor_1.by.xpath("(//div[contains(text(),'" + attribute + "')])[" + seq + "]"));
        // (//div[contains(.,'"+ attribute+"')]/button[@auto_id='config_onboard_api_tree_button_select_node_undefined']/i)["+seq+"]"));
    }
    getResponseCarrierField(attribute, apiName, seq) {
        return protractor_1.element(protractor_1.by.xpath("(//div[contains(text(),'" + attribute + "')])[" + seq + "]"));
        // (//div[contains(.,'"+attribute+"')])["+seq+"]"));
    }
    getcomputeValueType(option, seq) {
        return protractor_1.element(protractor_1.by.xpath("(//select/option[contains(.,'" + option + "')])[" + seq + "]"));
    }
    getcomputeValueField(option, seq) {
        return protractor_1.element(protractor_1.by.xpath("(//select/optgroup/option[contains(.,'" + option + "')])[" + seq + "]"));
    }
    getcomputeValueConversion(option, seq) {
        return protractor_1.element(protractor_1.by.xpath("(//select/option[contains(.,'" + option + "')])[" + seq + "]"));
    }
    getShipmentOption(option) {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(.,'" + option + "')]/preceding-sibling::span"));
    }
    getComputePerformAction(option) {
        return protractor_1.element(protractor_1.by.xpath("//select/option[contains(.,'" + option + "')]"));
    }
}
exports.ConfigurationPage = ConfigurationPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2Utb2JqZWN0cy9jb25maWd1cmF0aW9uLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXNEO0FBQ3RELDJDQUF1QztBQUV2QyxNQUFhLGlCQUFrQixTQUFRLG9CQUFRO0lBeUUvQztRQUVHLEtBQUssRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLDRCQUE0QixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLFlBQVksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLFVBQVUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxpQkFBaUIsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlFQUFpRSxDQUFDLENBQUMsQ0FBQztRQUN2RyxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNFQUFzRSxDQUFDLENBQUMsQ0FBQTtRQUMvRyxJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENB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