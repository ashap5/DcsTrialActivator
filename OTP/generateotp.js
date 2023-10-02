// ==UserScript==
// @name         Inject OTP Generation Script with Dependencies
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Injects OTP generation code and dependencies into the page
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Define the OTP generation code
    const otpGenerationCode = `
        const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD';
        const token = window.otplib.authenticator.generate(secret);
        console.log(token);
    `;

    // Define the URLs for the external dependencies
    const bufferScriptURL = 'https://unpkg.com/@otplib/preset-browser@^12.0.0/buffer.js';
    const indexScriptURL = 'https://unpkg.com/@otplib/preset-browser@^12.0.0/index.js';

    // Function to load and inject scripts into the head of the page
    function loadAndInjectScript(scriptURL, callback) {
        const script = document.createElement('script');
        script.src = scriptURL;
        script.onload = callback;
        document.head.appendChild(script);
    }

    // Function to inject OTP generation code once dependencies are loaded
    function injectOTPCode() {
        const otpScript = document.createElement('script');
        otpScript.type = 'text/javascript';
        otpScript.textContent = otpGenerationCode;
        document.head.appendChild(otpScript);
    }

    // Load the external script dependencies first and then inject OTP code
    loadAndInjectScript(bufferScriptURL, function() {
        loadAndInjectScript(indexScriptURL, function() {
            injectOTPCode();
        });
    });
})();
