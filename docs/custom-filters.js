/// version 1.2.1
/// copy tc-types.d.ts file for vscode autocompletion on tc object
/// <reference path="./tc-types.d.ts" />

// built-in node modules
const CryptoJS = require("crypto-js");
const { v4: uuid4 } = require("uuid");
const axios = require('axios');  // -- you can use async/await to make requests
// ---- more node modules supported
// tough-cookie, ajv, ajv-formats, papaparse, http, https, assert, buffer, stream, url

// ---- To load any additional node modules from npm
// await tc.loadModule("moduleName");  see example below.

function appendString(input, param1) {

    console.log("func testing:", input, param1);

    return `${input} ${param1}`;
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

module.exports = [customHmac, appendString, preFilter1, customFilter];

