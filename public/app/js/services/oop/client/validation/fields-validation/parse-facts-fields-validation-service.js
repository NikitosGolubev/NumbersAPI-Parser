/**
 * @fileOverview Validates fields from parse facts forms group
 * @namespace NikitosGolubev\Services\OOP\Client\Validation\FieldsValidation
 */

import FieldsValidationService from '../fields-validation-service';
import ValConf from '../../../../../configs/validation/parse-validation-config';
import ParseFactsValidationService from '../../../validation/concrete-validation/parse-facts-validation-service';

/**
 * Validates fields from parse facts forms group
 * @uses NikitosGolubev\Services\OOP\Client\Validation\FieldsValidationService
 * @uses NikitosGolubev\Configs\Validation\ParseValidationConfig as ValConf
 * @uses NikitosGolubev\Services\OOP\Validation\ConcreteValidation\ParseFactsValidationService
 */
export default class ParseFactsFieldsValidationService extends FieldsValidationService {
    constructor() {
        super();
        this.validator = new ParseFactsValidationService;
    }

    /**
     * Validates category field (select)
     * @param  {Object} field field that should be validated
     * @return {Object} response
     */
    validateCategory(field) {
        if (this.validator.isEmpty(field)) {
            return this.rb.fail(field, ValConf.CATEGORY_NOT_SELECTED);
        }

        return this.rb.success(field);
    }

    /**
     * Validate number of facts to parse field (text input)
     * @param  {Object} field DOM
     * @return {Object} response
     */
    validateNumOfFacts(field) {
        if (this.validator.isEmpty(field)) {
            return this.rb.fail(field, ValConf.EMPTY_FIELD_MESSAGE);
        }

        // If integer was passed
        if (!this.validator.isInt(field.value)) {
            return this.rb.fail(field, ValConf.INTEGER_REQUIRED_MESSAGE);
        }

        if (!this.validator.isFitLimit(+field.value, 1, ValConf.MAX_NUM_ITEMS_TO_PARSE)) {
            return this.rb.fail(field, ValConf.NUM_OF_FACTS_INVALID);
        }

        return this.rb.success(field);
    }

    /**
     * Validates field where fact number should be passed.
     * Fact number - it's a number which might have an appropriate fact related
     * to this number.
     * 
     * @param  {Object} field DOM
     * @return {Object} response
     */
    validateFactNumber(field) {
        if (this.validator.isEmpty(field)) {
            return this.rb.fail(field, ValConf.EMPTY_FIELD_MESSAGE);
        }

        if (!this.validator.isInt(field.value)) {
            return this.rb.fail(field, ValConf.INTEGER_REQUIRED_MESSAGE);
        }

        if (!this.validator.isFitLimit(+field.value, ValConf.MIN_FACT_NUMBER, ValConf.MAX_FACT_NUMBER)) {
            return this.rb.fail(field, ValConf.FACT_NUMBER_EXCEEDS_LIMIT);
        }

        return this.rb.success(field);
    }

    /**
     * Calculates difference btw given numbers to parse and examines it
     * on if it's allowed or not.
     * 
     * @param  {Object} fromField DOM
     * @param  {Object} toField   DOM
     * @return {Object} response
     */
    validateFactNumberInRangeDifference(fromField, toField) {
        let difference = Math.abs(+toField.value - +fromField.value);

        if (!this.validator.isFitLimit(difference, 0, ValConf.MAX_NUM_ITEMS_TO_PARSE)) {
            return this.rb.fail(fromField, ValConf.NUM_OF_FACTS_INVALID, {
                secondField: toField
            });
        }

        return this.rb.success(fromField, '', {secondField: toField});
    }


    /**
     * Validates numbers field storage which contains particular numbers
     * which facts should be parsed. Verifies if user hasn't passed too much
     * facts. (more than allowed)
     * 
     * @param  {Object} field DOM
     * @param  {Number} $furtherAddedNumOfNumbers Number of facts that would be added.
     * If there any facts would be added further, so
     * it's needed to check now, if num of them would be appropriate then.
     * 
     * @return {Object} response
     */
    validateNumbersStorrage(field, $furtherAddedNumOfNumbers = 0) {
        let fieldData = [];
        // it's assumed that fact numbers are stored in array which was serrialized in string
        // So if there no value, than nothing were passed, so to not get
        // error from JSON.parse, It worth to check it first
        if (field.value) {
            fieldData = JSON.parse(field.value);
        }

        // Adjusting length to which it might become further
        let numOfNumbers = fieldData.length + $furtherAddedNumOfNumbers;

        if (numOfNumbers > ValConf.MAX_NUM_ITEMS_TO_PARSE) {
            return this.rb.fail(field, ValConf.NUM_OF_FACTS_INVALID);
        }

        return this.rb.success(field); 
    }
}
