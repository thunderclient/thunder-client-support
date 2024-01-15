# Advances Use Cases
- For advanced use cases you can use `filters` or `scripting` to perform custom functionality.

## Menu
- [Filters](#filters)
  - [Filters In Env Variable](#filters-in-env-var)
  - [Filters In Tests](#filters-in-tests)
  - [Built-In Filters](#built-in-filters)
- [Scripting](#scripting)
- [Inline Scripting](#inline-scripting)
  - [Pre Request Script](#pre-req-script)
  - [Post Request Script](#post-req-script)
  - [Import Node Module](#import-node-module)
  - [Import JS Files](#import-js-files)
  - [Execute CLI Command](#cli-command)
  - [Execute Requests](#execute-requests)
  - [Assertions using Scripting](#assertions)
  - [Delay Function](#delay)
- [Custom Filters](#custom-filters)
- [Feedback](#feedback)

<a name="filters"></a>
## Filters

- Function filters are useful to perform advanced data manipulation and the syntax is inspired from [Jinja Filters](https://jinja.palletsprojects.com/en/3.1.x/templates/#builtin-filters)
- The filters can be used in `Environment Variables` and `Tests`
- The filter syntax is `{{variable | filter1 | filter2...}}` or in **Tests** `json.items | filter1 | filter2...`
- If you like to use filters without a variable use @ sign `{{@ | filter1 | filter2}}`
- The Filters can be used in `Headers, Body, Query Params & Tests`

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
    <td><a href="#setNull">setNull</a></td> 
   <td><a href="#slice">slice</a></td> 
   
    
   

</tr>
<tr>
  <td><a href="#split">split</a></td>
  <td><a href="#stringify">stringify</a></td>   
  <td><a href="#substring">substring</a></td>      
     <td><a href="#subtract">subtract</a></td> 
  <td><a href="#unique">unique</a></td>
   <td><a href="#upper">upper</a></td>
   <td><a href="#urlEncode">urlEncode</a></td> 
</tr>
<tr>
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

<a name="setNull"></a>
#### setNull
- The filter will set env variable value to null when the property value is null (by default null value is set as empty). The syntax in Tests `json.name | setNull`
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


<a name="scripting"></a>

# Scripting
There are two ways you can write custom scripting in Thunder Client for advanced use cases.
1. **Inline Scripting:** You can write javascript code inside the Thunder Client views.
2. **Custom Filters(External JS Files):** You can write code in separate javascript files and attach it to a collection.

## Inline Scripting

### Global Variables
- The global variables available are `tc`, `expect`, `assert`, `btoa`, and `atob`.
- `tc` is the main [object](https://github.com/rangav/thunder-client-support/blob/master/docs/tc-types.d.ts) for all API access.
- [Chai](https://www.chaijs.com/api/bdd/) library `expect` and `assert` for assertions.
- `btoa` and `atob` to base64 encoding and decoding.

### Built in Modules
- `ajv`, `ajv-formats`, `assert`, `atob`, `axios`, `btoa`, `buffer`, `chai`, `crypto-js`, `fast-xml-parser`, `fs`, `http`, `https`, `papaparse`, `stream`, `tough-cookie`, `url`
- To use built-in modules -  `var axios = require("axios");`

<a name="pre-req-script"></a>

### Pre Request Script
- Run Pre Request script from `Pre Run` -> `Scripting` tab, useful to set Env Variables
<img width="752" alt="pre-request-scripting" src="https://github.com/rangav/thunder-client-support/assets/8637550/3b561ec0-8657-4060-8b69-c5f5992b6dec">

------

<a name="post-req-script"></a>

### Post Request Script
- Run the Post Request script from `Tests` -> `Scripting` tab
- Useful to do clean-up tasks, set environment variables from the response and assertions

<img width="752" alt="post-request-script" src="https://github.com/rangav/thunder-client-support/assets/8637550/efb91e5d-9d0f-492b-a82d-e4bad356f655">


------

<a name="import-node-module"></a>

### Import Node Module (Beta)
- Now you can import any `node module`
- This feature is still in `Beta`, not all modules are working
- e.g:   `var moment = await tc.loadModule("moment");`
```js
console.log("load node module");

var moment = await tc.loadModule("moment")

console.log(moment().format());
tc.setVar("date", moment().format());
```

#### Use Node Modules to generate fake data
- You can use node libraries like [faker-js](https://www.npmjs.com/package/@faker-js/faker), or lightweight libraries [chance](https://www.npmjs.com/package/chance), [falso](https://www.npmjs.com/package/@ngneat/falso) to generate random data
- Use `Pre Run` tab -> `Scripting` tab to generate fake data using code.
- Example custom script
```js
    // example code to load faker-js module
    var { faker } = await tc.loadModule("@faker-js/faker");
    tc.setVar("firstName", faker.person.firstName());

    // example code to load chance module
    var Chance = await tc.loadModule("chance");
    var chance = new Chance();
    tc.setVar("firstName", chance.name());

    // example code to load falso module
    var falso = await tc.loadModule("@ngneat/falso");
    var user = falso.randUser();
    tc.setVar("firstName", user.firstName);
```
**NOTE**
```js
 // to save Env value to Active Environment
 tc.setVar("firstName", faker.person.firstName());

// If you do not want to save to the Environment file
// then use the request scope
 tc.setVar("firstName", faker.person.firstName(), "request");
```
-----
<a name="import-js-files"></a>

### Import Functions from js files
- You can import functions from other js files. Useful for code re-use and check-in to your git repo.
- The path should be relative to workspace if you use Git-Sync, otherwise use full-path. 
- You can right click on the file and choose `Copy Path` or `Copy Relative Path` accordingly 

```js
// test-import.js file
function helloWorld(){
   return "hello world";
}

module.exports = {
  helloWorld
}
```
- From request Inline script import js file using `require`
```js

var {helloWorld} = require("thunder-tests/test-import.js");
var result = helloWorld();
console.log(result);
```

- You can also save the path in the `Environment variable`, so you don't have to change the path in every request if you move the file to different folder.
```js
var scriptPath = tc.getVar("scriptPath");
var {helloWorld} = require(scriptPath);
var result = helloWorld();
console.log(result);
```
-----
<a name="cli-command"></a>

### Execute CLI Command
To execute a CLI command and get response use exec helper function
```js
var result = await tc.exec("command");
```

------

<a name="execute-requests"></a>

### Send Requests from Script
- Execute existing requests using the API - `await tc.runRequest("reqId");`
- Useful for request chaining programmatically from the Pre or Post request script.
```js
var result = await tc.runRequest("reqId");
console.log(result);
``` 
- Execute custom requests using the [Axios library](https://axios-http.com/docs/api_intro)
- Useful for executing custom requests programmatically from the Pre or Post request script.
```js
const axios = require('axios');

const response = await axios.get("https://www.thunderclient.com/welcome");
console.log(response);

```
### Retry Request
- Use this sample code in `Post Request Script` and modify it as per your requirements

```js
let incrementCount = tc.getVar('incrementCount') || 0;
let code = tc.response.status;

if(incrementCount <= 3 && code !== 200)
{
      incrementCount = incrementCount + 1
      tc.setVar('incrementCount', incrementCount)
      console.log(incrementCount);

      await tc.delay(incrementCount * 5000); // exponential delay of 5 secs
      await tc.runRequest(tc.request.id);
}
```

------

<a name="assertions"></a>
## Assertions using Scripting

#### Assertions without any library

```js
let success = tc.response.status == 200;
tc.test("Response code is 200", success);

// Assertions using function syntax
tc.test("verifying multiple tests", function () {
        let success = tc.response.status == 200;
        let time = tc.response.time < 1000;
        return success && time;
});
```
#### Assertions using Chai library
- `expect` and `assert` functions are available as global variables
```js
tc.test("Response code expect to be 200", function () {
    expect(tc.response.status).to.equal(200);
})

tc.test("Response code is 200", function () {
    assert.equal(tc.response.status, 200)
})
```
------

<a name="delay"></a>

### Delay Helper Function
- To delay the script execution use the API - `await tc.delay(1000);`
```js
// delay for 5 seconds
await tc.delay(5000);
console.log("delayed for 5 seconds");
```
------


<a name="custom-filters"></a>
# Customer Filters
- If you like to use `external` javascript files for scripting, then you can use the Custom Filters feature.
- Please see [documentation](https://github.com/rangav/thunder-client-support/blob/master/docs/custom-filters.md) to create customer filters.


<a name="feedback"></a>
# Feedback
- Let us know if you have any suggestions for improvement and also need any additional built-in filters




