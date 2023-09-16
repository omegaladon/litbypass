// ==UserScript==
// @name         Litbypass
// @namespace    https://tyruschuang.com
// @version      0.1
// @description  Bypass litcharts paywalled content.
// @author       Tyrus Chuang
// @match        https://www.litcharts.com/lit/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const blurredElements = document.querySelectorAll('.blur');
    blurredElements.forEach((element) => {
        element.classList.remove('blur');
    });

})();