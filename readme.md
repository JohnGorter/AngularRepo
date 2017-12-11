# How-to

Deze presentatie is geschikt gemaakt voor de kc-cli voor het hosten en printen van reveal.js presentaties.

```bash
# Eenmalig:
npm i -g @infosupport/kc-cli @infosupport/generator-kc gulp-cli phantomjs-prebuilt yo bower

# Een nieuwe presenatie maken of een oude bijwerken:
kc init
kc install

# Na een verse clone:
kc install

# Nu aan het werk:
kc serve
kc print
```

# Instructor preparation

Below is a list of videos/articles that had an impact on the material for this course.

* Pipes
  * https://angular-2-training-book.rangle.io/handout/pipes/stateful_and_async_pipes.html
* Forms:
  * http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/
  * (submit) vs (ngSubmit) and more in-depth insights
    http://blog.thoughtram.io/angular/2016/03/21/template-driven-forms-in-angular-2.html 
  * Template vs model driven
    http://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/
  * And also: https://angular.io/docs/ts/latest/guide/forms.html
    At the time of writing, that's the only one that actually mentions <input #c="ngModel">
* Change detection: 
  * http://blog.thoughtram.io/angular/2016/02/01/zones-in-angular-2.html - note that this does cover an older version of Zone.js. Syntax has changed.
  * http://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html
  * https://www.youtube.com/watch?v=CUxD91DWkGM
* Observables vs promises:
  * https://egghead.io/lessons/rxjs-rxjs-observables-vs-promises
  * https://coryrylan.com/blog/angular-2-observable-data-services
* Router:
  * http://victorsavkin.com/post/145672529346/angular-router
  * http://blog.thoughtram.io/angular/2016/06/14/routing-in-angular-2-revisited.html
  * https://angular.io/generated/live-examples/router/eplnkr.html
* DI:
  * http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html
  * http://nicholasjohnson.com/blog/how-angular2-di-works-with-typescript/
* Testen:
  * https://medium.com/google-developer-experts/angular-2-unit-testing-with-jasmine-defe20421584#.q3xz60bob
  * http://www.syntaxsuccess.com/viewarticle/angular-2.0-unit-testing

# Background information

When developing material for this course, the following was kept in mind:

* Don't just copy material directly from the tutorial/official docs.
* Don't use your own name when giving examples.
* When giving examples, try to give pragmatic, real-world and ease-to-understand examples. Just showing the syntax is not enough.
* This is not an upgrade from the AngularJS course. There's a comparison between the two at the end, but other than that, AngularJS is not mentioned. Feel free to reference it in your talk, it's just not in the material.
* Changes happen often in web land. This material is to support the global story, it's not a complete reference guide.
* Don't give descriptions to URL's on slides. On the student PDF, the link will not be visible.

## Todos

Verder: 
* Testing
* TypeScript
* server-side rendering
* immutablejs
* Angular vanuit WebWorkers