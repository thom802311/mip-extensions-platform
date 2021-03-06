/**
 * @file mip-hs-like 组件
 * @author
 */

define(function (require) {
    'use strict';

    var customElement = require('customElement').create();

    /**
     * 第一次进入可视区回调，只会执行一次
     */
    customElement.prototype.firstInviewCallback = function () {
        // TODO
        var add = document.querySelector('.add');
        add.onclick = function () {
            var num = document.querySelector('.num');
            num.innerText++;
        };
    };

    return customElement;
});
