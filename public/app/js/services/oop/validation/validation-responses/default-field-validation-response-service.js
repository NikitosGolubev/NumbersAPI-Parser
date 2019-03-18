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
    setMainField(field) {
        this.response.mainField = field;
    }

    /**
     * Setting additional, not essential properties
     * @param {Object} propertiesObj
     */
    setAdditionalProperties(propertiesObj) {
        for (let key in propertiesObj) {
           this.response[key] = propertiesObj[key];
        }
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
     * @param {Object} $addPropertiesObj Additional properties to pass to response
     * @return {Object} response
     */
    build(result, message, field, $addPropertiesObj = false) {
        this.setMainField(field);
        if ($addPropertiesObj) this.setAdditionalProperties($addPropertiesObj);

        return super.build(result, message);
    }

    /**
     * Forms success response of field validation
     * 
     * @param  {Object}  field DOM
     * @param  {Boolean|String} $message
     * @param {Object} $addPropertiesObj Additional properties to pass to response
     * @return {Object} response
     */
    success(field, $message = false, $addPropertiesObj = false) {
        if (!$message) $message = ValidationConfig.DEFAULT_SUCCESS_MESSAGE;
        return this.build(true, $message, field, $addPropertiesObj);
    }

    /**
     * Forms fail response of field validation
     * 
     * @param  {Object}  field DOM
     * @param  {Boolean|String} $message
     * @param {Object} $addPropertiesObj Additional properties to pass to response
     * @return {Object} response
     */
    fail(field, $message = false, $addPropertiesObj = false) {
        if (!$message) $message = ValidationConfig.DEFAULT_FAIL_MESSAGE;
        return this.build(false, $message, field, $addPropertiesObj);
    }
}
