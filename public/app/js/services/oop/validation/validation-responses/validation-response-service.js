/**
 * @fileOverview Base validation response service
 * @namespace NikitosGolubev\Services\OOP\Validation\ValidationResponses;
 */

import { cloneDeep } from 'lodash';

/**
 * Base validation response, may be inheritated by other valid. responses
 * @using cloneDeep() form lodash
 */
class ValidationResponseService {
    constructor() {
        /**
         * Response storage
         * @type {Object}
         */
        this.response = {};
    }

    /**
     * Setting result of validation
     * @param {Boolean} result true - success, false - failure
     */
    setResult(result) {
        this.response.result = result;
    }

    /**
     * Setting message which describes validation response
     * @param {String} message
     */
    setMessage(message) {
        this.response.message = message;
    }

    /**
     * Building response
     *
     * @example Expected response:
     * {
     *     result: true|false,
     *     message: 'your message'
     * }
     * 
     * @param  {Boolean} result
     * @param  {String} message
     * @return {Object} validation response
     */
    build(result, message) {
        this.setResult(result);
        this.setMessage(message);
        
        // Deeply cloning response object to prevent
        // single response being common for separate fields
        let response = cloneDeep(this.response);
        return response;
    }
}

export default ValidationResponseService;
