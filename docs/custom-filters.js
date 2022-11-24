/// version 1.1
/// This is sample file to create custom filters
/// <reference path="./tc-types.d.ts" />

const CryptoJS = require("crypto-js");
const { v4: uuid4 } = require("uuid");
// var papa = require("papaparse");
// var url = require('url');

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

function randomName(input) {

    console.log("random Name filter:", input);
    let uuid = uuid4();

    // ---- save to active environment
    tc.setVar("uuidFromScript", uuid);

    // ---- save to local environment
    // tc.setVar("uuidFromScript", uuid, "local");

    // ---- save to global environment
    // tc.setVar("uuidFromScript", uuid, "global");

    return `${uuid}`;
}

module.exports = [customHmac, appendString, randomName];

