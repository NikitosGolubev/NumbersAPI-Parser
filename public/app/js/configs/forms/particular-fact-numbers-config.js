/**
 * @fileOverview Config file for 'particular fact numbers' form
 * @namespace NikitosGolubev\Configs\Forms
 */

import Config from '../config';

/**
 * Config class for 'particular fact numbers' form
 * @uses NikitosGolubev\Configs\Config
 */
export default class ParticularFactNumbersConfig extends Config {
    /**
     * Selector which specifies 'particular fact numbers' form
     * 
     * @const
     * @static
     * @type {String}
     */
    static get FORM_SELECTOR() {
        return '.js-particular-fact-numbers-form';
    }

    /**
     * @const
     * @static
     * @type {String}
     */
    static get NUMBERS_STORAGE_FIELD_SELECTOR() {
        return '.js-particular-fact-numbers-form__numbers-storage-field';
    }

    /**
     * @const
     * @static
     * @type {String}
     */
    static get FACT_NUMBER_FIELD_SELECTOR() {
        return '.js-particular-fact-numbers-form__fact-number-field';
    }

    /**
     * @const
     * @static
     * @type {String}
     */
    static get ADD_FACT_NUMBER_BTN_SELECTOR() {
        return '.js-particular-fact-numbers-form__add-fact-number'
    }

    /**
     * @const
     * @static
     * @type {String}
     */
    static get NUMEBRS_STORAGE_BOX_SELECTOR() {
        return '.js-particular-fact-numbers-form__numbers-storage-box';
    }
}
