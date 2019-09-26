<<<<<<< HEAD
//import { browser } from "protractor";



describe('Enter username',function()
{
    var i = 1;
    var search  = element(by.xpath('//div[@class="VlcLAe"]//input[contains(@class, "gNO89b")] '));
    var keySearch = element(by.xpath('//*[contains(@class, "gLFyf gsfi")]'));
    var text1 = element(by.xpath('//div[@id="sbfrm_l"]//div[@id="resultStats  "]'));
    
    beforeEach(function(){
        
        console.log('before each : '+i++);
    });

    it('should lunch google',function()
    {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.google.com/');
    });

    it('should enter value for search',function()
    {
        keySearch.sendKeys('Hi');
    });

    it('should click on search',function()
    {
        search.click();
    });

    it('should calculate time',function()
    {
        browser.driver.sleep(1000);
        text1.getText().then(function (text) {
            console.log("rathoda  :  "+text);
        });
   
    });

=======
//import { browser } from "protractor";



describe('Enter username',function()
{
    var i = 1;
    var search  = element(by.xpath('//div[@class="VlcLAe"]//input[contains(@class, "gNO89b")] '));
    var keySearch = element(by.xpath('//*[contains(@class, "gLFyf gsfi")]'));
    var text1 = element(by.xpath('//div[@id="sbfrm_l"]//div[@id="resultStats  "]'));
    
    beforeEach(function(){
        
        console.log('before each : '+i++);
    });

    it('should lunch google',function()
    {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.google.com/');
    });

    it('should enter value for search',function()
    {
        keySearch.sendKeys('Hi');
    });

    it('should click on search',function()
    {
        search.click();
    });

    it('should calculate time',function()
    {
        browser.driver.sleep(1000);
        text1.getText().then(function (text) {
            console.log("rathoda  :  "+text);
        });
   
    });

>>>>>>> 757c60d396a757493a365df7436a594021282274
});