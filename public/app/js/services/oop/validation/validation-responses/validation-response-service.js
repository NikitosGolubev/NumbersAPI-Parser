/**
 * @fileOverview Base validation response service
 * @namespace NikitosGolubev\Services\OOP\Validation\ValidationResponses;
 */

/**
 * Base validation response, may be inheritated by other valid. responses
 */
export default class ValidationResponseService {
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
        return this.response;
    }
}
