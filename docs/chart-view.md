# Chart View (Beta)
- The feature is useful for Response Data Visualisation
- Create charts or tables from response using `tc.chartHTML()` from the Tests tab scripting
- When you pass data to function `tc.chartHTML(templace, data)`, the data is available in `chart_data` global variable
- The feature is in Beta, please test and let us know feedback

```js
var template = `
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.8/handlebars.min.js"></script>

    <div id="output"></div>
    <script id="entry-template" type="text/x-handlebars-template">
          <div class="entry">
            <h2>{{first_name}}</h2>
            <div class="body">
              {{email}}
            </div>
          </div>
        </script>
    <script>
    
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);

    document.getElementById("output").innerHTML = template(chart_data[0]);
    </script>
`;
var data = tc.response.json.data;
tc.chartHTML(template, data);
```
