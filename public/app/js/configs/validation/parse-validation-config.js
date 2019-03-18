/**
 * @fileOverview Config for parse validation forms 
 * @namespace NikitosGolubev\Configs\Validation
 */

import ValidationConfig from './validation-config';

/**
 * Config for parse validation forms
 * @uses NikitosGolubev\Configs\Validation\ValidationConfig
 */
export default class ParseValidationConfig extends ValidationConfig {
    /**
     * Returns min value of fact number that could be parsed
     * 
     * @const
     * @static
     * @type {Integer}
     */
    static get MIN_FACT_NUMBER() {
        return 0;
    }

    /**
     * Returns max value of fact number that could be parsed
     * 
     * @const
     * @static
     * @type {Integer}
     */
    static get MAX_FACT_NUMBER() {
        return 9999;
    }

    /**
     * Returns max amount of numbers that could be parsed at single request
     * 
     * @const
     * @static
     * @type {Integer}
     */
    static get MAX_NUM_ITEMS_TO_PARSE() {
        return 100;
    }

    /**
     * Message that shows to user if he has't selected the category of
     * parsed facts.
     *
     * @const
     * @static
     * @type {String}
     */
    static get CATEGORY_NOT_SELECTED() {
        return 'Select the category';
    }

    /**
     * Number of facts to parse per single request invalid message
     *
     * @const
     * @static
     * @type {String}
     */
    static get NUM_OF_FACTS_INVALID() {
        return `You can't parse more <b>${this.MAX_NUM_ITEMS_TO_PARSE}</b> facts and less than <b>0</b>.`;
    }

    /**
     * Message which says that user typed the fact number which is below or above
     * valid value.
     *
     * @const
     * @static
     * @type {String}
     */
    static get FACT_NUMBER_EXCEEDS_LIMIT() {
        return `Align with limit: ${this.MIN_FACT_NUMBER} - ${this.MAX_FACT_NUMBER}`;
    }
}
