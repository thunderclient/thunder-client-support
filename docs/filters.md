# Filters

- Function filters are useful to perform advanced data manipulation and the syntax is inspired from [Jinja Filters](https://jinja.palletsprojects.com/en/3.1.x/templates/#builtin-filters)
- The filters can be used in `Environment Variables` and `Tests`
- The filter syntax is `{{variable | filter1 | filter2...}}` or in **Tests** `json.items | filter1 | filter2...`
- if you like to use filters without a variable use @ sign `{{@ | filter1 | filter2}}`
- The Filters can be used in `Headers, Body, Query Params & Tests`

## Menu
- [Filters In Env Variable](#filters-in-env-var)
- [Filters In Tests](#filters-in-tests)
- [Built-In Filters](#built-in-filters)
- [Custom Filters](#custom-filters)
  - [Pre Request Script](#pre-req-filter)
  - [Post Request Script](#post-req-filter)
  - [Import Node Module](#import-node-module)
  - [Execute Requests](#execute-requests)
  - [Assertions using Scripting](#assertions)
  - [Delay Function](#delay)
  - [tc object types](#tc-object)
- [Feedback](#feedback)

<a name="filters-in-env-var"></a>

### Filters In Env Variable
- This is useful to modify the environment variable value before sending the request
- The filters can be used in `Query params, Headers, Auth & Body`
<img width="900" alt="Screenshot 2022-11-17 at 09 45 15" src="https://user-images.githubusercontent.com/8637550/202413000-abe18411-13a1-47c0-a612-f3bc585b5bb0.png">

<a name="filters-in-tests"></a>

### Filters In Tests
- This is useful for advanced use cases to test and set environment variables from the response.
<img width="900" alt="Screenshot 2022-11-17 at 09 56 57" src="https://user-images.githubusercontent.com/8637550/202415862-5e6d3712-a7c8-466b-8c7c-f91452ee4464.png">

<a name="built-in-filters"></a>

### Built-In Filters:

<table>
<tr>
   <td width="120px"><a href="#at">at</a></td>
   <td width="120px"><a href="#abs">abs</a></td> 
   <td width="120px"><a href="#add">add</a></td> 
   <td width="120px"><a href="#atob">atob</a></td> 
   <td width="120px"><a href="#btoa">btoa</a></td>   
   <td width="120px"><a href="#exec">exec</a></td>  
   <td width="120px"><a href="#first">first</a></td>
</tr>
<tr>
   <td><a href="#filter">filter</a></td>
   <td><a href="#format">format</a></td> 
   <td><a href="#hash">hash</a></td> 
   <td><a href="#hmac">hmac</a></td> 
   <td><a href="#isEmail">isEmail</a></td>
   <td><a href="#isUrl">isUrl</a></td>  
   <td><a href="#join">join</a></td> 
</tr>
<tr>
    <td><a href="#last">last</a></td> 
   <td><a href="#length">length</a></td> 
   <td><a href="#lower">lower</a></td> 
   <td><a href="#map">map</a></td> 
   <td><a href="#multiply">multiply</a></td>
   <td><a href="#parseJson">parseJSON</a></td> 
   <td><a href="#prop">prop</a></td>    
</tr>
<tr>
     <td><a href="#readFile">readFile</a></td> 
     <td><a href="#removeQuotes">removeQuotes</a></td>
     <td><a href="#removeSpaces">removeSpaces</a></td>
    <td><a href="#replace">replace</a></td>
   <td><a href="#setIfValue">setIfValue</a></td> 
   <td><a href="#slice">slice</a></td> 
   <td><a href="#split">split</a></td>
    
   

</tr>
<tr>
  <td><a href="#stringify">stringify</a></td>   
  <td><a href="#substring">substring</a></td>      
     <td><a href="#subtract">subtract</a></td> 
  <td><a href="#unique">unique</a></td>
   <td><a href="#upper">upper</a></td>
   <td><a href="#urlEncode">urlEncode</a></td> 
   <td><a href="#urlDecode">urlDecode</a></td> 
</tr>
</table>

<a name="at"></a>
#### at
- The filter will return element [at](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at) index, The syntax is in Tests `json.items | at(1)`
- if `json.items` value is `[2,6,8,9]` then
  - `json.items | at(1)` the result will be `6`
  - `json.items | at(-1)` the result will be `9`

<a name="abs"></a>
#### abs
- The syntax is `{{number | abs}}` 
- if `number` value is -7, then abs filter will return 7

<a name="add"></a>
#### add
- The syntax is `{{number | add(5)}}` or `{{number | add("variableName")}}`
- You can pass parameter value as number or env variable name
- e.g 1: if `number` value is 6, then add filter will return 11
- e.g 2: if `number` is 5 and `variable` is 8, then result is 13

<a name="atob"></a>
#### atob
- The filter will [decode](https://developer.mozilla.org/en-US/docs/Web/API/atob) the value, The syntax is `{{input | atob}}`
- if `input` value is `SGVsbG8gV29ybGQ=`, then result is `Hello World`

<a name="btoa"></a>
#### btoa
- The filter will Base64 [encode](https://developer.mozilla.org/en-US/docs/Web/API/btoa) the value, The syntax is `{{input | btoa}}`
- if `input` value is `Hello World`, then result is `SGVsbG8gV29ybGQ=`

<a name="exec"></a>
#### exec
- The filter will execute node command and return value, The syntax is `{{variable | exec("command")}}` or without a variable `{{@ | exec("command")}}`
- You can also pass variables as parameters e.g: `{{@ | exec("gcloud auth {0} {1}", "var1", "var2")}}`
- if `command` value is `node --version`, then result is `v16.15.0`

<a name="first"></a>
#### first
- The filter will return first element in array, The syntax in Tests `json.items | first`
- if `json.items` value is `[3,6,8,9]`, then result is `3`

<a name="filter"></a>
#### filter
- The filter will perform array filter operation, The syntax in Tests `json.items | filter(id>5)`
- The following operations are supported `>, >=, <, <=, =, !=, *=, ^=, $=`
- `*=` filters using contains operation
- `^=` filters using startsWith operation
- `$=` filters using endsWith operation

<a name="format"></a>
#### format
- The format filter useful to format the string output, The syntax is `{{variable | format("Hello {0}")}}`
- if `variable` value is `World`, then result is `Hello World`
- Using **multiple** variables `{{var1 | format("Hello {0} {1} {2}", "var2", "var3")}}`, the `{0}` is replaced with `var1` value, `{1}` with `var2` value, and `{2}` with `var3` value.
- if you are using in Tests tab to set env value, then you can use e.g `json.var1 | format("hello {0} {1}", "var2")` in left input

<a name="hash"></a>
#### hash
- The filter will create hash of the input, The syntax is `{{variable | hash("algorithm", "encoding")}}` or `{{variable | hash}}`
- @param - `algorithm`: The default value is `MD5`. The values supported are `SHA256`, `SHA512`, `SHA1`, `MD5`.
- @param - `encoding`: The default value is `base64`. The values supported are `hex`, `base64`.

<a name="hmac"></a>
#### hmac
- The filter will create hash of the input, The syntax is `{{variable | hmac("secret", "algorithm", "encoding")}}` or `{{variable | hmac("secret")}}`
- @param - `secret`: The name of the env variable where secret is saved.
- @param - `algorithm`: The default value is `SHA256`. The values supported are `SHA256`, `SHA512`, `SHA1`, `MD5`.
- @param - `encoding`: The default value is `base64`. The values supported are `hex`, `base64`.

<a name="isEmail"></a>
#### isEmail
- The filter will check the input is email or not return true or false, The syntax in Tests `json.email | isEmail`

<a name="isUrl"></a>
#### isUrl
- The filter will check the input is URL or not return true or false, The syntax in Tests `json.homepage | isUrl`

<a name="join"></a>
#### join
- The filter will join array with separator, The syntax is `{{variable | spilit(" ") | join("separator")}}` or in Tests `json.items | join`
- The default `separator` is comma `,` so you can use `json.items | join`
- if `variable` value is `Hello World`, then result is `Hello-World`

<a name="last"></a>
#### last
- The filter will return last element in array, The syntax is `json.items | last`
- if `json.items` value is `[3,6,8,9]`, then result is `9`

<a name="length"></a>
#### length
- The filter will return length of the `string` or `array`, The syntax is `{{variable | length}}`
- if `variable` value is `Hello World`, then result is `11`

<a name="lower"></a>
#### lower
- The filter will return lowercase of the string, The syntax is `{{variable | lower}}`
- if `variable` value is `Hello World`, then result is `hello world`

<a name="map"></a>
#### map
- The filter will return subset of properties, The syntax is `{{variable | map("id", "name")}}` or In Tests `json.items | map("id")`
- e.g 1: In Tests `json.items | map("id")` which result in `["123","534","56444"]`
- e.g 2: `json.items | map("id", "name")` which result in `[{"name":"test1", "id":"123}, {"name":"test2", "id":"534"}]`

<a name="multiply"></a>
#### multiply
- The syntax is `{{number | multiply(5)}}` or `{{number | multiply("variableName")}}`
- e.g 1: if `number` value is 6, then multiply filter will return 30
- e.g 2: if `number` is 5 and `variableName` is 8, then result is 40

<a name="parseJson"></a>
#### parseJSON
- The filter will convert string to JSON object. The syntax is `{{address | parseJSON}}`
- The filter can be used with other filters e.g: `{{address | parseJSON | prop("lat")}}`

<a name="prop"></a>
#### prop
- The filter will get property value of an object, The syntax in Tests `json.items | prop("id")`
- e.g 1: if `json.items` value is `[{"id":1005, "name":"boston"}]`, then `prop("id")` will return `1005`
- e.g 1: if array is `[{"id":1005, "name":"boston"}, {"id":1006, "name":"london"}]`, then `prop("id")` will return `1005,1006`

<a name="readFile"></a>
#### readFile
- The filter will read the contents of the file, The syntax is `{{pathVar | readFile}}` or `{{pathVar | readFile("base64")}}`
- Please create a Env variable with value as path of the file. The path can be `absolute` or `relative` path to workspace
- Relative path will work only if you enabled the setting `Save To Workspace`
- e.g 1: `{{pathVar | readFile}}` will read the file as text useful to read JSON files.
- e.g 2: `{{pathVar | readFile("base64")}}` will read the file as `base64` encoding useful to read image files.
- e.g 3: To use in the request body
  
```json
  {
    "data": "{{pathVar | readFile(\"base64\")}}"
  }
  ```


<a name="removeQuotes"></a>
#### removeQuotes
- The filter will remove quotes from the string, The syntax is `{{variable | removeQuotes}}`
- if `variable` value is `"Hell"o W'orld`, then result is `Hello World`

<a name="removeSpaces"></a>
#### removeSpaces
- The filter will remove spaces from the string, The syntax is `{{variable | removeSpaces}}`
- if `variable` value is `"Welcome Hello World`, then the result is `WelcomeHelloWorld`

<a name="replace"></a>
#### replace
- The filter will replace match with replace string, The syntax is `{{variable | replace("Hello", "NewValue")}}`
- if `variable` value is `Hello World`, then `replace("Hello", "New")` result is `New World`
- You can also pass single argument `{{variable | replace("Hello")}}`, which will replace with empty string

<a name="setIfValue"></a>
#### setIfValue
- The filter will set env variable only when input has value, The syntax in Tests `json.name | setIfValue`
- This filter is useful in `Tests` section, when `Set Env Variable` dropdown selected

<a name="slice"></a>
#### slice
- The filter will perform standard array [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) operation, The syntax is `{{variable | split(" ") | slice(1, 2)}}`
- if `variable` value is `welcome to thunder client`, then result is `["to"]`

<a name="split"></a>
#### split
- The filter will split the string using the separator, The syntax is `{{variable | split("separator")}}`
- if `variable` value is `Hello World`, then `split(" ")` result is `["Hello", "World"]`

<a name="stringify"></a>
#### stringify
- The filter will JSON stringify the object, The syntax is `{{variable | stringify}}`

<a name="substring"></a>
#### substring
- The filter will return substring of the input, The syntax is `{{variable | substring(start, end)}}`
- if `variable` value is `Hello World`, then `substring(-5)` result is `World`
- if you like pass `input.length - 5` then just pass `-5` value

<a name="subtract"></a>
#### subtract
- The syntax is `{{number | subtract(5)}}` or `{{number | subtract("variable")}}`
- e.g 1: if `number` value is 6, then add filter will return 1
- e.g 2: if `number` is 45 and `variable` is 8, then result is 37

<a name="unique"></a>
#### unique
- The filter will return unique elements in array, The syntax is `json.items | unique`
- if `json.items` value is `[3,8,9,6,8,9]`, then result is `[3,8,9,6]`

<a name="upper"></a>
#### upper
- The filter will return uppercase of the string, The syntax is `{{variable | upper}}`
- if `variable` value is `Hello World`, then result is `HELLO WORLD`

<a name="urlEncode"></a>
#### urlEncode
- The filter will [encode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) the string, The syntax is `{{queryParam1 | urlEncode}}`
- if `queryParam1` value is `hello+world`, then result is `hello%2Bworld`

<a name="urlDecode"></a>
#### urlDecode
- The filter will [decode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent) the string, The syntax is `{{queryParam1 | urlDecode}}`
- if `queryParam1` value is `hello%2Bworld`, then result is `hello+world`


<a name="custom-filters"></a>

## Custom Filters

**Step 1:** Create Javascript file with custom filters
- The sample custom filters javascript file [custom-filters.js](https://github.com/rangav/thunder-client-support/blob/master/docs/custom-filters.js)
- The `tc` object types file [tc-types.d.ts](https://github.com/rangav/thunder-client-support/blob/master/docs/tc-types.d.ts)

<img width="701" alt="custom-filter" src="https://user-images.githubusercontent.com/8637550/202422492-30ad7123-0964-40db-ba1c-31bbe67d57f4.png">

**Step 2:** Attach Custom filters JS files to `Collection Settings`
<img width="900" alt="col-sets" src="https://user-images.githubusercontent.com/8637550/202426659-972f5307-0b51-4100-b6bf-0f3fb2f33140.png">

**Step 3:** Use Custom filters in Request
<img width="900" alt="custom-filter-using" src="https://user-images.githubusercontent.com/8637550/202422840-76998a57-0cbf-46ef-9309-52965c72959c.png">

------
<a name="pre-req-filter"></a>

### Pre Request Script in PreRun Tab
- Run Custom Filter directly in `Pre-Run` tab as Pre Request Script, useful to set Env Variables
<img width="705" alt="Pre Req Filter" src="https://github.com/rangav/thunder-client-support/assets/8637550/07420d12-c9de-4efc-af3f-f85a47412cf2">

- This Custom Filter will not have any `arguments` and return `no value`
<img width="543" alt="Pre Filter Function" src="https://user-images.githubusercontent.com/8637550/205506079-395de0b6-593e-4fa9-b38a-31a1d6a1545a.png">

------

<a name="post-req-filter"></a>

### Post Request Script in Tests Tab
- Run Custom Filter directly in `Tests` tab as Post Request Script
- Useful to do clean-up tasks after request or set environment variables from the response for advanced use cases

<img width="705" alt="Post Req Script" src="https://github.com/rangav/thunder-client-support/assets/8637550/8b0769df-c796-4219-b4c9-a5c4fe36d9b0">

------

<a name="import-node-module"></a>

### Import Node Module (Beta)
- Now you can import any `node module` in [Custom Filters](https://github.com/rangav/thunder-client-support/blob/master/docs/custom-filters.js)
- This feature is still in `Beta`, not all modules are working
- e.g:   `var moment = await tc.loadModule("moment");`
<img width="762" alt="Screenshot 2022-12-04 at 17 33 03" src="https://user-images.githubusercontent.com/8637550/205506205-f01dd73d-d8b1-41eb-9f65-a0c88170d00f.png">

#### Use Node Modules to generate fake data
- You can use node libraries like [faker-js](https://www.npmjs.com/package/@faker-js/faker), or lightweight libraries [chance](https://www.npmjs.com/package/chance), [falso](https://www.npmjs.com/package/@ngneat/falso) to generate random data
- Create a Custom Filter and use it in `Pre Run` tab -> `Pre Request Script` to generate fake data.
- Example custom filter script
```js
async function fakeDataFilter() {
    // example code to load faker-js module
    console.log("loading faker-js module");
    var { faker } = await tc.loadModule("@faker-js/faker");
    console.log("faker Name: ", faker.person.firstName());
    tc.setVar("firstName", faker.person.firstName());

    // example code to load chance module
    var Chance = await tc.loadModule("chance");
    var chance = new Chance();
    console.log("Person Name: ", chance.name());
    tc.setVar("firstName", chance.name());

    // example code to load falso module
    console.log("loading falso module");
    var falso = await tc.loadModule("@ngneat/falso");
    var user = falso.randUser();
    console.log("user", user.firstName, user.lastName);
    tc.setVar("firstName", user.firstName);
}

module.exports = [fakeDataFilter];
```
------

<a name="execute-requests"></a>

### Send Requests from Script
- Execute existing requests using the API - `await tc.runRequest("reqId");`
- Useful for request chaining programmatically from the Pre or Post request script.
```js
async function testReq(){
   var result = await tc.runRequest("reqId");
   console.log(result);
}

module.exports = [testReq]
``` 
- Execute custom requests using the [Axios library](https://axios-http.com/docs/api_intro)
- Useful for executing custom requests programmatically from the Pre or Post request script.
```js
const axios = require('axios');

async function testReq(){
   const response = await axios.get("https://www.thunderclient.com/welcome");
   console.log(response);
}

module.exports = [testReq]
```

------

<a name="assertions"></a>
### Assertions using Scripting
- Please see the documentation to write assertions using scripting - [click here](https://github.com/rangav/thunder-client-support/blob/master/docs/script-assertions.md)
```js
var chai = require("chai");
var expect = chai.expect;
var assert = chai.assert;

async function testChaiFilter() {
    tc.test("Response code is 200", function () {
        assert.equal(tc.response.status, 200)
    })

    tc.test("Response code expect to be 200", function () {
        expect(tc.response.status).to.equal(200);
    })
}

module.exports = [testChaiFilter]
```
------

<a name="delay"></a>

### Delay Helper Function
- To delay the script execution use the API - `await tc.delay(1000);`
```js
async function testReq(){
   // delay for 5 seconds
   var result = await tc.delay(5000);
   console.log("delayed for 5 seconds");
}

module.exports = [testReq]
```
------
<a name="tc-object"></a>

### tc object types
- Refer to `tc` object types file  [tc-types.d.ts](https://github.com/rangav/thunder-client-support/blob/master/docs/tc-types.d.ts) for the methods and properties available.
- Copy the types file to you project and refer at the top for VS Code autocomplete suggestions
```
/// copy tc-types.d.ts file for vscode autocompletion on tc object
/// <reference path="./tc-types.d.ts" />
```

<a name="feedback"></a>
### Feedback
- Let us know if you have any suggestions for improvement and also need any additional built-in filters



