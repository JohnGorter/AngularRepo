### Page Objects

* Use page objects to isolate *all interactions with the page*
* When the HTML of your page evolves, your tests remain untouched
* PageObject methods make specs easier to read:

    `homePage.firstItem();`

    vs

    `element.all(by.css('app-root li')).first();`