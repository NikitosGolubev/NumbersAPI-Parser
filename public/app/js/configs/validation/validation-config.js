/**
 * @fileOverview Common validation config
 * @namespace NikitosGolubev\Configs\Validation
 */

import Config from '../config';

/**
 * Common validation config
 * @uses NikitosGolubev\Configs\Config
 */
export default class ValidationConfig extends Config {
    /**
     * Default message, which may appear if validation succeeded
     *
     * @const
     * @static
     * @type {String}
     */
    static get DEFAULT_SUCCESS_MESSAGE() {
        return 'Looks good!';
    }
    
    /**
     * Default message, which may appear if validation failed
     *
     * @const
     * @static
     * @type {String}
     */
    static get DEFAULT_FAIL_MESSAGE() {
        return 'Something wrong :(';
    }

    /**
     * Default message if field is empty
     *
     * @const
     * @static
     * @type {String}
     */
    static get EMPTY_FIELD_MESSAGE() {
        return 'Field is empty';
    }

    /**
     * Default message if integer is required but user passed invalid data type
     *
     * @const
     * @static
     * @type {String}
     */
    static get INTEGER_REQUIRED_MESSAGE() {
        return 'Pass <b>integer</b> please';
    }
}
