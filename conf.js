<<<<<<< HEAD

var HtmlReporter = require('protractor-beautiful-reporter');
 
exports.config={
    seleniumAddress:'http://localhost:4444/wd/hub',
    specs:['spec.js'],
    multiCapabilities : [
        {
            browserName : 'firefox'
        }
        

    ],
    // onPrepare: function(){ //configure junit xml report

    //     var jasmineReporters = require('jasmine-reporters');
    //     jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
    //        consolidateAll: true,
    //        filePrefix: 'guitest-xmloutput',
    //        savePath: 'reports'
    //     }));

    // },
    // karma.conf.js
    
  
    onPrepare: function() {
          // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
          jasmine.getEnv().addReporter(new HtmlReporter({
             baseDirectory: 'tmp/screenshots'
          }).getJasmine2Reporter());
    }
};

=======

var HtmlReporter = require('protractor-beautiful-reporter');
 
exports.config={
    seleniumAddress:'http://localhost:4444/wd/hub',
    specs:['spec.js'],
    multiCapabilities : [
        {
            browserName : 'firefox'
        }
        

    ],
    // onPrepare: function(){ //configure junit xml report

    //     var jasmineReporters = require('jasmine-reporters');
    //     jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
    //        consolidateAll: true,
    //        filePrefix: 'guitest-xmloutput',
    //        savePath: 'reports'
    //     }));

    // },
    // karma.conf.js
    
  
    onPrepare: function() {
          // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
          jasmine.getEnv().addReporter(new HtmlReporter({
             baseDirectory: 'tmp/screenshots'
          }).getJasmine2Reporter());
    }
};

>>>>>>> 757c60d396a757493a365df7436a594021282274
