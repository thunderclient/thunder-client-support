# Filters

- Function filters are useful to perform advanced data manipulation and the syntax is inspired from [Jinja Filters](https://jinja.palletsprojects.com/en/3.1.x/templates/#builtin-filters)
- The filters can be used in `Environment Variables` and `Tests`
- The filter syntax is `{{variable | filter1 | filter2...}}` or in **Tests** `json.items | filter1 | filter2...`
- if you like to use filters without a variable use @ sign `{{@ | filter1 | filter2}}`

## Menu
- [Filters In Env Variable](#filters-in-env-var)
- [Filters In Tests](#filters-in-tests)
- [Built-In Filters](#built-in-filters)
- [Custom Filters](#custom-filters)
- [Feedback](#feedback)

<a name="filters-in-env-var"></a>

#### Filters In Env Variable
- This is similar to `pre-request` scripting
- The filters can be used in query params, headers, Auth & body
<img width="900" alt="Screenshot 2022-11-17 at 09 45 15" src="https://user-images.githubusercontent.com/8637550/202413000-abe18411-13a1-47c0-a612-f3bc585b5bb0.png">

<a name="filters-in-tests"></a>

#### Filters In Tests
- This is similar to `post-request` scripting
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
   <td><a href="#removeQuotes">removeQuotes</a></td> 
   <td><a href="#replace">replace</a></td>
   
</tr>
<tr>
   <td><a href="#setIfValue">setIfValue</a></td> 
   <td><a href="#slice">slice</a></td> 
   <td><a href="#split">split</a></td>
   <td><a href="#stringify">stringify</a></td>    
   <td><a href="#substring">substring</a></td>      
   <td><a href="#subtract">subtract</a></td> 
   <td><a href="#upper">upper</a></td> 
</tr>
</table>

<a name="at"></a>
#### at
- The filter will return element at index, The syntax is in Tests `json.items | at(1)`
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
- The filter will decode the value, The syntax is `{{input | atob}}`
- if `input` value is `SGVsbG8gV29ybGQ=`, then result is `Hello World`

<a name="btoa"></a>
#### btoa
- The filter will encode the value, The syntax is `{{input | btoa}}`
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
- The following operations are supported `>, >=, <, <=, =, *=, ^=, $=`

<a name="format"></a>
#### format
- The format filter useful to format the string output, The syntax is `{{variable | format("Hello {0}")}}`
- if `variable` value is `World`, then result is `Hello World`
- Using **multiple** variables `{{var1 | format("Hello {0} {1} {2}", "var2", "var3")}}`, the `{0}` is replaced with `var1` value, `{1}` with `var2` value, and `{2}` with `var3` value.

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
- e.g 1: if `number` value is 6, then add filter will return 30
- e.g 2: if `number` is 5 and `variableName` is 8, then result is 40
- 
<a name="removeQuotes"></a>
#### removeQuotes
- The filter will remove quotes of the string, The syntax is `{{variable | removeQuotes}}`
- if `variable` value is `"Hell"o World`, then result is `hello world`

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
- The filter will perform standard array slice operation, The syntax is `{{variable | spilit(" ") | slice(1, 2)}}`
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

<a name="upper"></a>
#### upper
- The filter will return uppercase of the string, The syntax is `{{variable | upper}}`
- if `variable` value is `Hello World`, then result is `HELLO WORLD`


<a name="custom-filters"></a>

## Custom Filters

- Create Javascript file with custom filters
- The sample custom filters javascript file [custom-filters.js](https://github.com/rangav/thunder-client-support/blob/master/docs/custom-filters.js)
- The `tc` object types file [tc-types.d.ts](https://github.com/rangav/thunder-client-support/blob/master/docs/tc-types.d.ts)
<img width="701" alt="custom-filter" src="https://user-images.githubusercontent.com/8637550/202422492-30ad7123-0964-40db-ba1c-31bbe67d57f4.png">

- Attach Custom filters JS files to `Collection Settings`
<img width="900" alt="col-sets" src="https://user-images.githubusercontent.com/8637550/202426659-972f5307-0b51-4100-b6bf-0f3fb2f33140.png">

- Use Custom filters in Request
<img width="900" alt="custom-filter-using" src="https://user-images.githubusercontent.com/8637550/202422840-76998a57-0cbf-46ef-9309-52965c72959c.png">


<a name="feedback"></a>
### Feedback
- Let us know if you have any suggestions for improvement and also need any additional built-in filters



