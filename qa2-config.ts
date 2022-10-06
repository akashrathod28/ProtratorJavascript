import {Config, Capabilities,browser} from "protractor";
import { format } from "path";
import * as reporter from "cucumber-html-reporter";


export let config:Config ={
  allScriptsTimeout: 1100000,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName:'chrome',
        'chromeOptions': {
        'args': ["incognito"]
      
    }
    },
    
    specs: ['../src/features/*.feature'],
    cucumberOpts: {
        // require step definitions
        tags:"@run5",
        format:'json:./reports/cucumberreport.json',
        require: [
          './src/step-definations/*.js' // accepts a glob
        ]
      },
      params: {
        //  baseUrl: 'https://dev43049.service-now.com/navpage.do'
            baseUrl: 'https://com-web-ui-qa2.cms.pc.com/home',
            basePath: 'https://com-server-core-qa2.csm.pc.com:443',
            userName:'qa-automation@pc.com',
            password:'Y@A9ze',
            root: process.cwd()
        },
      

      onComplete: () =>{
        var options = {
          theme: 'bootstrap',
          jsonFile: './reports/cucumberreport.json',
          output: './reports/cucumber_report.html',
          reportSuiteAsScenarios: true,
          launchReport: true,
          metadata: {
              "App Version":"0.3.2",
              "Test Environment": "QA",
              "Browser": "Chrome  54.0.2840.98",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
      };
   
      reporter.generate(options);


      },
      onPrepare: async () => {
      
    
        // Set browser window width to 1200 and height to 900px
        browser.driver.manage().window().maximize();
        //await browser.waitForAngularEnabled(false);
      }
}
