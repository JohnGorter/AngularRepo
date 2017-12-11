### Karma

* Run test: `karma start`
* Configure in `karma.conf.js` file

```js
module.exports = (config) => { // npm module syntax

  config.set({                 // Call set on the karma config object

    frameworks: ['jasmine'],   // Frameworks karma should load

    files: [ 'src/**/*.js',    // Target which files should be loaded next
             'test/**/*.js'],

    reporters: ['progress'],   // Choose which reporters you want

    browsers: ['Chrome'],      // Choose which browsers to run

    singleRun: false           // If false, watch files and rerun on change
  });
}
```  

  

  

  


  

  

  

  </code></pre>
</div>