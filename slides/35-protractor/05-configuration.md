### Configuration

* Configure in `protractor.conf.js` file

```
module.exports.config = {     // Export the config object as a node module

  directConnect: true,        // Use ChromeDriver directly instead of Selenium

  capabilities: {             // Set the capabilities (browser) for webdriver.js
    'browserName': 'chrome'
  },

  framework: 'jasmine',       // Configure test framework to use

  specs: [                    // Point to the test files here
    'test/helpers/**/*.js',
    'test/ui/**/*.js' ],

  jasmineNodeOpts: {          // Add jasmine/node/cucubumer specific settings
    defaultTimeoutInterval: 30000
  },

  useAllAngular2AppRoots: true  // Signal protractor that we're using angular 2
};
```
<!-- .element: class="stretch" -->