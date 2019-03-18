/**
 * @fileOverview Config file for 'fact number in range' form
 * @namespace NikitosGolubev\Configs\Forms
 */

import Config from '../config';

/**
 * Config class for 'fact number in range' form
 * @uses NikitosGolubev\Configs\Config
 */
export default class FactNumInRangeConfig extends Config {
    /**
     * Selector which specifies 'num of facts' form
     * 
     * @const
     * @static
     * @type {String}
     */
    static get FORM_SELECTOR() {
        return '.js-fact-num-in-range-form';
    }

    /**
     * Selector for 'category' field
     * 
     * @const
     * @static
     * @type {String}
     */
    static get CATEGORY_FIELD_SELECTOR() {
        return '.js-fact-num-in-range-form__category';
    }

    /**
     * Selector for 'from number' field
     * 
     * @const
     * @static
     * @type {String}
     */
    static get FROM_FIELD_SELECTOR() {
        return '.js-fact-num-in-range-form__from';
    }

    /**
     * Selector for 'to number' field
     * 
     * @const
     * @static
     * @type {String}
     */
    static get TO_FIELD_SELECTOR() {
        return '.js-fact-num-in-range-form__to';
    }
}
