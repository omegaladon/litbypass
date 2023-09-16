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

    const aplusDialogs = document.querySelectorAll('.a-plus-dialog, .a-plus');
    aplusDialogs.forEach((dialog) => {
        dialog.remove();
    });

    const blurs = document.querySelectorAll('.blurred-text, .btn-blurred');
    blurs.forEach((element) => {
        element.classList.remove('blurred-text');
        element.classList.remove('btn-blurred');
    });

    const paywallButtons = document.querySelectorAll('.analysis-text-dialog');
    paywallButtons.forEach((button) => {
        button.remove();
    })

})();