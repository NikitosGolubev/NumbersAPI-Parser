/**
 * @fileOverview Config file for 'num of facts' form
 * @namespace NikitosGolubev\Configs\Forms
 */

import Config from '../config';

/**
 * Config class for 'num of facts' form
 * @uses NikitosGolubev\Configs\Config
 */
export default class NumOfFactsConfig extends Config {
    /**
     * Selector which specifies 'num of facts' form
     * 
     * @const
     * @static
     * @type {String}
     */
    static get FORM_SELECTOR() {
        return '.js-num-of-facts-form';
    }

    /**
     * Selector for 'category' field
     * 
     * @const
     * @static
     * @type {String}
     */
    static get CATEGORY_FIELD_SELECTOR() {
        return '.js-num-of-facts-form__category';
    }

    /**
     * Selector for 'number of facts to parse' field
     * 
     * @const
     * @static
     * @type {String}
     */
    static get NUM_OF_FACTS_FIELD_SELECTOR() {
        return '.js-num-of-facts-form__num-of-facts';
    }
}
