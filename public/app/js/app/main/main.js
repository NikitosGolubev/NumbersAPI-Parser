/**
 * @fileOverview Main file, performs basic, commom opperations
 * @namespace NikitosGolubev
 */

const domOptimizer = require('../../changers/dom-optimizer').domOptimizer;

window.addEventListener('load', starterWorker);

function starterWorker() {
    domOptimizer.fixTargetBlank();
}