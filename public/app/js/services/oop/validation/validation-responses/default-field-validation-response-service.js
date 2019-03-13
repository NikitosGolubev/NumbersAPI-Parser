/**
 * @fileOverview Default response generation for fields validation
 * @namespace NikitosGolubev\Services\OOP\Validation\ValidationResponses
 */

import ValidationResponseService from './validation-response-service';
import ValidationConfig from '../../../../configs/validation/validation-config';

/**
 * Default response generation for fields validation
 * @uses NikitosGolubev\Services\OOP\Validation\ValidationResponses\ValidationResponseService
 * @uses NikitosGolubev\Configs\Validation\ValidationConfig
 */
export default class DefaultFieldValidationResponseService extends ValidationResponseService {
    constructor() {
        super();
    }

    /**
     * Fields that was validated
     * @param {Object} field DOM
     */
    setField(field) {
        this.response.field = field;
    }

    /**
     * @example Expected response:
     * {
     *     super.response,
     *     field: {Dom object with validated field}   
     * }
     * 
     * @see ValidationResponseService
     * @param  {field} field Field that was validated
     * @return {Object} response
     */
    build(result, message, field) {
        this.setField(field);
        super.build(result, message);
        return this.response;
    }

    /**
     * Forms success response of field validation
     * 
     * @param  {Object}  field DOM
     * @param  {Boolean|String} $message
     * @return {Object} response
     */
    success(field, $message = false) {
        if (!$message) $message = ValidationConfig.DEFAULT_SUCCESS_MESSAGE;
        return this.build(true, $message, field);
    }

    /**
     * Forms fail response of field validation
     * 
     * @param  {Object}  field DOM
     * @param  {Boolean|String} $message
     * @return {Object} response
     */
    fail(field, $message = false) {
        if (!$message) $message = ValidationConfig.DEFAULT_FAIL_MESSAGE;
        return this.build(false, $message, field);
    }
}
