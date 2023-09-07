## Assertions using Scripting
This feature is useful to write test assertions using scripting. Developers can now use scripting to write assertions, based on the use case you can choose a scripting or GUI interface for assertions.



### Assertions without any library

```js

function testFilter() {
    let success = tc.response.status == 200;
    let json = tc.response.json;
    let containsThunder = json.message?.includes("thunder");

    tc.test("Response code is 200", success);
    tc.test("Response contains thunder word", containsThunder);

    // Assertions using function syntax
    tc.test("verifying multiple tests", function () {
            let success = tc.response.status == 200;
            let time = tc.response.time < 1000;
            return success && time;
    });
}

module.exports = [testFilter]
```

### Assertions using Node Assert library

```js
// using built-in node assert module
const assert = require("assert");

function testFilter() {
    console.log("test assertion filter");
    tc.test("Response code is 200", function () {
        assert.equal(tc.response.status, 200);
    })
}

module.exports = [testFilter]
```

### Assertions using Chai library

```js
var chai = require("chai");
var expect = chai.expect;
var assert = chai.assert;

function testChaiFilter() {
    tc.test("Response code is 200", function () {
        assert.equal(tc.response.status, 200)
    })

    tc.test("Response code expect to be 200", function () {
        expect(tc.response.status).to.equal(200);
    })
}

module.exports = [testChaiFilter]
```
