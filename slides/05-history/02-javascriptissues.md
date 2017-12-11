### Working with JavaScript has issues

* A lot of JavaScript code involves updating the DOM, thus interweaving business logic and UI logic
* Code gets bloated really fast. These bits of code do not make most developers happy:
  ```js
  var td = document.getElementsByTagName('td');
  var textnode = document.createTextNode('Hi');
  td.appendChild(textnode);
  ```
  ```js
  var elem = document.createElement('div');
  elem.setAttribute('class', 'special');
  
  ```
  ```js
  var elem = document.getElementById('main-menu');
  elem.setAttribute('style', 'display: none;');
  ```