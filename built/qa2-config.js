"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.config = void 0;
const protractor_1 = require("protractor");
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    allScriptsTimeout: 1100000,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
            'args': ["incognito"]
        }
    },
    specs: ['../src/features/*.feature'],
    cucumberOpts: {
        // require step definitions
        tags: "@run5",
        format: 'json:./reports/cucumberreport.json',
        require: [
            './src/step-definations/*.js' // accepts a glob
        ]
    },
    params: {
        //  baseUrl: 'https://dev43049.service-now.com/navpage.do'
        baseUrl: 'https://com-web-ui.pc.com/home',
        basePath: 'https://com-server.pc.com:443',
        userName: 'qa-automation@pb.com',
        password: 'Y@A9ze',
        root: process.cwd()
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './reports/cucumberreport.json',
            output: './reports/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "QA",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    },
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
        // Set browser window width to 1200 and height to 900px
        protractor_1.browser.driver.manage().window().maximize();
        //await browser.waitForAngularEnabled(false);
    })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicWEyLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3FhMi1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF3RDtBQUV4RCxpRUFBbUQ7QUFHeEMsUUFBQSxNQUFNLEdBQVM7SUFDeEIsaUJBQWlCLEVBQUUsT0FBTztJQUMxQixrREFBa0Q7SUFDaEQsYUFBYSxFQUFDLElBQUk7SUFDbEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFDLFFBQVE7UUFDcEIsZUFBZSxFQUFFO1lBQ2pCLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQztTQUV4QjtLQUNBO0lBRUQsS0FBSyxFQUFFLENBQUMsMkJBQTJCLENBQUM7SUFDcEMsWUFBWSxFQUFFO1FBQ1YsMkJBQTJCO1FBQzNCLElBQUksRUFBQyxPQUFPO1FBQ1osTUFBTSxFQUFDLG9DQUFvQztRQUMzQyxPQUFPLEVBQUU7WUFDUCw2QkFBNkIsQ0FBQyxpQkFBaUI7U0FDaEQ7S0FDRjtJQUNELE1BQU0sRUFBRTtRQUNOLDBEQUEwRDtRQUN0RCxPQUFPLEVBQUUsaURBQWlEO1FBQzFELFFBQVEsRUFBRSxxREFBcUQ7UUFDL0QsUUFBUSxFQUFDLDBCQUEwQjtRQUNuQyxRQUFRLEVBQUMsY0FBYztRQUN2QixJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRTtLQUN0QjtJQUdILFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDZixJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSwrQkFBK0I7WUFDekMsTUFBTSxFQUFFLGdDQUFnQztZQUN4QyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUMsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNKLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRzNCLENBQUM7SUFDRCxTQUFTLEVBQUUsR0FBUyxFQUFFO1FBR3BCLHVEQUF1RDtRQUN2RCxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1Qyw2Q0FBNkM7SUFDL0MsQ0FBQyxDQUFBO0NBQ04sQ0FBQSJ9