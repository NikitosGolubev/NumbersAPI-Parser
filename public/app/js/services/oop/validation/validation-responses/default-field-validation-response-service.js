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
class DefaultFieldValidationResponseService extends ValidationResponseService {
    constructor() {
        super();
    }

    /**
     * Fields name that was validated
     * @param {String} fieldName
     */
    setFieldName(fieldName) {
        this.response.fieldName = fieldName;
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
     *     fieldName: {String with field name}   
     * }
     * 
     * @see ValidationResponseService
     * @param  {String} fieldName Field that was validated
     * @param {Object} $addPropertiesObj Additional properties to pass to response
     * @return {Object} response
     */
    build(result, message, fieldName, $addPropertiesObj = false) {
        this.setFieldName(fieldName);
        if ($addPropertiesObj) this.setAdditionalProperties($addPropertiesObj);

        return super.build(result, message);
    }

    /**
     * Forms success response of field validation
     * 
     * @param  {String} fieldName
     * @param  {Boolean|String} $message
     * @param {Object} $addPropertiesObj Additional properties to pass to response
     * @return {Object} response
     */
    success(fieldName, $message = false, $addPropertiesObj = false) {
        if (!$message) $message = ValidationConfig.DEFAULT_SUCCESS_MESSAGE;
        return this.build(true, $message, fieldName, $addPropertiesObj);
    }

    /**
     * Forms fail response of field validation
     * 
     * @param  {String} fieldName
     * @param  {Boolean|String} $message
     * @param {Object} $addPropertiesObj Additional properties to pass to response
     * @return {Object} response
     */
    fail(fieldName, $message = false, $addPropertiesObj = false) {
        if (!$message) $message = ValidationConfig.DEFAULT_FAIL_MESSAGE;
        return this.build(false, $message, fieldName, $addPropertiesObj);
    }
}

export default DefaultFieldValidationResponseService;
