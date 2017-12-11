### Setup

* Create an index.html
* Choose between TypeScript, Dart and vanilla JS <!-- .element: class="fragment" data-fragment-index="1" -->
  * TypeScript is recommended <!-- .element: class="fragment" data-fragment-index="2" -->
* Add libraries <!-- .element: class="fragment" data-fragment-index="3" -->
  * Shim and Reflect: Essential ES6 features, like Promise <!-- .element: class="fragment" data-fragment-index="4" -->
  * Zone.js: Angular's change detection works by executing code in a zone <!-- .element: class="fragment" data-fragment-index="5" -->
  * System.js: For modular loading <!-- .element: class="fragment" data-fragment-index="6" -->
* Bootstrap <!-- .element: class="fragment" data-fragment-index="7" -->

  Recommended: Follow your first project <!-- .element: class="fragment" data-fragment-index="8" -->
  [Angular quickstart guide](https://angular.io/docs/js/latest/quickstart.html) <!-- .element: class="fragment" data-fragment-index="8" -->

---

### Angular CLI

* https://github.com/angular/angular-cli
* Provides a command line interface for working with Angular
* Maintained by the Angular team
* Works with webpack instead of SystemJS.
* Forces the [Angular style guide](https://angular.io/docs/ts/latest/guide/style-guide.html) <!--.element target="__blank"--> out of the box

```bash
 npm install --global @angular/cli # or: npm i -g @angular/cli
ng new my-project
cd my-project
npm start
```

---

### Other setups

There are community efforts to make the setup easier for you. Specifically to provide you with a full setup, including unittests with coverage and end-to-end testing

* [Angular seed](https://github.com/mgechev/angular-seed), by Minko Gechev. Works with SystemJS.
* [Angular Starter](https://github.com/antonybudianto/angular-starter), by Antony Budianto.

These contain unittests and end-to-end tests out of the box.

And there are a lot more. Checkout [Helpful Angular 2+ repos](https://www.reddit.com/r/Angular2/comments/5rj14a/helpful_angular_2_github_repos_curated_through)