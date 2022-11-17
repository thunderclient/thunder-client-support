// This is sample example file to create custom filters

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

module.exports = [customHmac, appendString];


