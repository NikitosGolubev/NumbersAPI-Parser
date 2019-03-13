/**
 * @fileOverview Base fields validation service
 * @namespace NikitosGolubev\Services\OOP\Client\Validation
 */

import DefaultFieldValidationResponseService from '../../validation/validation-responses/default-field-validation-response-service';

/**
 * Base fields validation service, should be inheritated by concrete
 * fields validation services.
 * @uses NikitosGolubev\Services\OOP\Validation\ValidationResponses\DefaultFieldValidationResponseService
 */
export default class FieldsValidationService {
    constructor() {
        /**
         * Service which produces response for field validation
         * @type {Object}
         */
        this.rb = new DefaultFieldValidationResponseService;
    }

    /**
     * Sets new response builder for fields validation
     * @param {Object} responseBuilder
     */
    setResponseBuilder(responseBuilder) {
        this.rb = responseBuilder;
    }

    /**
     * Sets particular validator to examine fields
     * @param {Object} validator
     */
    setValidator(validator) {
        this.validator = validator;
    }
}
