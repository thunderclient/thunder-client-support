/// version 1.3.1
/// copy tc-types.d.ts file for vscode autocompletion on tc object
/// <reference path="./tc-types.d.ts" />

// built-in node modules
const CryptoJS = require("crypto-js");
const { v4: uuid4 } = require("uuid");
const axios = require('axios');  // -- you can use async/await to make requests
// ---- All built-in node modules supported
// ajv, ajv-formats, assert, atob, axios, btoa, buffer, chai, crypto-js, fast-xml-parser, fs, http, https, papaparse, stream, tough-cookie, url

// ---- To load any additional node modules from npm
// await tc.loadModule("moduleName");  see example below.

var chai = require("chai");
var expect = chai.expect;
var assert = chai.assert;

async function appendString(input, param1) {

     // read a file
    var data = await tc.readFile(input);
    
    // execute a command
    var result = await tc.exec("echo testing");
    
    return `${input} ${data} ${result}`;
}

function customHmac(input) {
    console.log("running custom hmac");
    var secretValue = tc.getVar("secret");

    let encoded = CryptoJS.HmacSHA256(input, secretValue);
    return encoded.toString(CryptoJS.enc.Base64);
}

function preFilter1() {

    console.log("set env variable example");
    let uuid = uuid4();

    // ---- save to active environment
    tc.setVar("uuidFromScript", uuid);

    // ---- save to local environment
    // tc.setVar("uuidFromScript", uuid, "local");

    // ---- save to global environment
    // tc.setVar("uuidFromScript", uuid, "global");
}

async function customFilter(input) {
    console.log("Loading node module - moment");

    // ---- load any node module from npm registry
    // the first run will take few seconds as it needs to download the module from npm registry
    var moment = await tc.loadModule("moment");

    // ---- load specific version of moment
    // var moment = await tc.loadModule("moment", "2.29.1");

    return `${input} ${moment().format()}`;
}

async function testChaiFilter() {

    tc.test("Response code is 200", function () {
        assert.equal(tc.response.status, 200)
    })

    tc.test("Response code expect to be 200", function () {
        expect(tc.response.status).to.equal(200);
    })
}

module.exports = [customHmac, appendString, preFilter1, customFilter, testChaiFilter];

