## Testing

<img width="850" alt="Thunder Client" src="https://github.com/rangav/thunder-client-support/blob/master/images/thunder-client-tests-v2.png">

- We need to write a lot of boilerplate code in Postman and other clients to do basic testing using scripting (like status code equals `200`). So we implemented GUI-based tests, where you can select a couple of dropdowns to do most standard tests easily, without any scripting knowledge.
- Tests can be done for strings, numbers, count, and type checking.
- Json schema validation.
- Re-arrange tests order using drag & drop.

#### Test Arrays
- Test array data in response using array filters [details here](https://github.com/rangav/thunder-client-support/blob/master/docs/array-testing.md)

#### Set Env Variable
- You can save response data to Env Variables [details here](https://github.com/rangav/thunder-client-support#setenv)

#### Custom Scripting in Tests
- For Advanced use-cases you can use [Function Filters & Custom Filters](https://github.com/rangav/thunder-client-support/blob/master/docs/filters.md#filters-in-tests)

#### Xml Testing
- To perform tests and save response data to environment [click here](https://github.com/rangav/thunder-client-support/blob/master/docs/xml-testing.md)
