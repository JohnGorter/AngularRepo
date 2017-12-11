### Using pipes

* Use a `|` after the name of the variable
* Pass variables seperated by `:`

```html
<p>The date of today is: {{today}}</p> 
<!-- The date of today is: Thu Jun 16 2016 14:45:53 GMT+0200 (Romance Daylight Time) -->
<p>The formatted date of today is: {{today | date}}</p> 
<!-- The formatted date of today is: ‎Jun‎ ‎16‎, ‎2016 -->
<p>The formatted date of today is: {{today | date : 'short'}}</p> 
<!-- The formatted date of today is: ‎Jun‎ ‎16‎, ‎2016 -->
```