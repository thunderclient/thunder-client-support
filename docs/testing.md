## Testing

<img width="850" alt="Thunder Client" src="https://github.com/rangav/thunder-client-support/blob/master/images/thunder-client-tests-v2.png">

- We need to write a lot of boilerplate code in Postman and other clients to do basic testing using scripting (like status code equals `200`). So we implemented GUI-based tests, where you can select a couple of dropdowns to do most standard tests easily, without any scripting knowledge.
- Tests can be done for strings, numbers, count, and type checking.
- Json schema validation.
- Re-arrange tests order using drag & drop.

### Test Arrays

<img width="1578" alt="ArrayTests" src="https://user-images.githubusercontent.com/8637550/203997869-b12bee5e-6fff-4e86-a45f-22a43011bb4a.png">

#### Array Filters
- Array can tested using array filters
- The following filter operations are supported `*, =, !=, <=, <, >=, >, *=, ^=, $=`
- `*=` filters using `contains` operation
- `^=` filters using `startsWith` operation
- `$=` filters using `endsWith` operation
- To access array items from the end use negative index number `json.items[-2].id`

#### Function Filters
- For advanced operations you can use [Function Filters](https://github.com/rangav/thunder-client-support/blob/master/docs/filters.md#filters-in-env-var)
- For custom functionality you can also create [Custom Filters](https://github.com/rangav/thunder-client-support/blob/master/docs/filters.md#custom-filters)


## Set Env Variable
- You can save response data to Env Variables [details here](https://github.com/rangav/thunder-client-support#setenv)

## Custom Scripting in Tests
- For Advanced use-cases you can use [Function Filters & Custom Filters](https://github.com/rangav/thunder-client-support/blob/master/docs/filters.md#filters-in-tests)

## Xml Testing


<img width="1165" alt="Screenshot 2022-12-16 at 11 45 39" src="https://user-images.githubusercontent.com/8637550/208091563-b3fdfd76-5a31-47f3-b753-b23caae6bb96.png">

### Steps to Test Xml
1. When the response of the request is xml, the menu will show `Convert To Json` option
2. Click `Convert To Json` to see json converted value in `Output` window
3. Now you can see json and perform tests using `Json Query` dropdown option
4. You can also use `Set Env Variable` dropdown option to save response properties to environment.
5. Execute the request again after adding tests to see the results


