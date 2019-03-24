/**
 * @fileOverview Validates fields from parse facts forms group
 * @namespace NikitosGolubev\Services\OOP\Client\Validation\FieldsValidation
 */

import FieldsValidationService from '../fields-validation-service';
import ValConf from '../../../../../configs/validation/parse-validation-config';
import ValidationService from '../../../validation/validation-service';

/**
 * Validates fields from parse facts forms group
 * @uses NikitosGolubev\Services\OOP\Client\Validation\FieldsValidationService
 * @uses NikitosGolubev\Configs\Validation\ParseValidationConfig as ValConf
 * @uses NikitosGolubev\Services\OOP\Validation\ValidationService
 */
export default class ParseFactsFieldsValidationService extends FieldsValidationService {
    constructor() {
        super();
        this.validator = new ValidationService;
    }

    /**
     * Validates category field (select)
     * @param  {Object} field field that should be validated
     * @param {String} $fieldName Naming for this field.
     * @return {Object} response
     */
    validateCategory(field, $fieldName = 'Category') {
        if (this.validator.isEmpty(field)) {
            return this.rb.fail($fieldName, ValConf.CATEGORY_NOT_SELECTED);
        }

        return this.rb.success($fieldName);
    }

    /**
     * Validate number of facts to parse field (text input)
     * @param  {Object} field DOM
     * @param {String} $fieldName Naming for this field.
     * @return {Object} response
     */
    validateNumOfFacts(field, $fieldName = 'Number of facts field') {
        if (this.validator.isEmpty(field)) {
            return this.rb.fail($fieldName, ValConf.EMPTY_FIELD_MESSAGE);
        }

        // If integer was passed
        if (!this.validator.isInt(field.value)) {
            return this.rb.fail($fieldName, ValConf.INTEGER_REQUIRED_MESSAGE);
        }

        if (!this.validator.isFitLimit(+field.value, 1, ValConf.MAX_NUM_ITEMS_TO_PARSE)) {
            return this.rb.fail($fieldName, ValConf.NUM_OF_FACTS_INVALID);
        }

        return this.rb.success($fieldName);
    }

    /**
     * Validates field where fact number should be passed.
     * Fact number - it's a number which might have an appropriate fact related
     * to this number.
     * 
     * @param  {Object} field DOM
     * @param {String} $fieldName Naming for this field.
     * @return {Object} response
     */
    validateFactNumber(field, $fieldName = 'Fact number field') {
        if (this.validator.isEmpty(field)) {
            return this.rb.fail($fieldName, ValConf.EMPTY_FIELD_MESSAGE);
        }

        if (!this.validator.isInt(field.value)) {
            return this.rb.fail($fieldName, ValConf.INTEGER_REQUIRED_MESSAGE);
        }

        if (!this.validator.isFitLimit(+field.value, ValConf.MIN_FACT_NUMBER, ValConf.MAX_FACT_NUMBER)) {
            return this.rb.fail($fieldName, ValConf.FACT_NUMBER_EXCEEDS_LIMIT);
        }

        return this.rb.success($fieldName);
    }

    /**
     * Calculates difference btw given numbers to parse and examines it
     * on if it's allowed or not.
     * 
     * @param  {Object} fromField DOM
     * @param  {Object} toField   DOM
     * @param {String} $fieldName Common naming for this fields.
     * @return {Object} response
     */
    validateFactNumberInRangeDifference(fromField, toField, $fieldName = 'Difference btw two fields') {
        let difference = Math.abs(+toField.value - +fromField.value);

        if (!this.validator.isFitLimit(difference, 0, ValConf.MAX_NUM_ITEMS_TO_PARSE)) {
            return this.rb.fail($fieldName, ValConf.NUM_OF_FACTS_INVALID);
        }

        return this.rb.success($fieldName, '', {secondField: toField});
    }

    /**
     * Validation for field where user passes fact number to parse and
     * then this number saves in numbers storage.
     * 
     * @param  {Object} factNumberField DOM
     * @param  {Object} numbersStorageField DOM
     * @param {String} $fieldName Naming for this field.
     * @return {Object} response
     */
    validateFactNumberNS(factNumberField, numbersStorageField, $fieldName = "Fact number field") {
        // Default validation of fact number field
        let baseValidation = this.validateFactNumber(factNumberField);

        // If validation succeded, so there's a point to go further
        // Otherwise return an validation failure
        if (baseValidation.result) {
            // Validation area
            
            // If there're any numbers in numbers storage
            if (numbersStorageField.value) {
                let numbersStorageData = JSON.parse(numbersStorageField.value);
                let factNumber = +factNumberField.value;
                // Checking if passed number is unique or not
                if (this.validator.inArray(factNumber, numbersStorageData)) {
                    return this.rb.fail($fieldName, ValConf.DUBLICATED_FACT_NUMBER);
                }
            }

        } else return baseValidation;

        return this.rb.success($fieldName);
    }

    /**
     * Validates numbers field storage which contains particular numbers
     * which facts should be parsed. Verifies if user hasn't passed too much
     * facts or too less.
     * 
     * @param  {Object} field DOM
     * @param  {Number} $furtherAddedNumOfNumbers Number of facts that would be added.
     * If there any facts would be added further, so
     * it's needed to check now, if num of them would be appropriate then.
     * @param {String} $fieldName Naming for this field.
     * 
     * @return {Object} response
     */
    validateNumbersStorrage(field, $furtherAddedNumOfNumbers = 0, $fieldName = "Numbers storage") {
        let fieldData = [];
        // it's assumed that fact numbers are stored in array which was serrialized in string
        // So if there no value, than nothing were passed, so to not get
        // error from JSON.parse, It worth to check it first
        if (field.value) {
            fieldData = JSON.parse(field.value);
        }

        // Adjusting length to which it might become further
        let numOfNumbers = fieldData.length + $furtherAddedNumOfNumbers;

        // Not less than 1 and not more than MAX_NUM_ITEMS_TO_PARSE
        if (!this.validator.isFitLimit(numOfNumbers, 1, ValConf.MAX_NUM_ITEMS_TO_PARSE)) {
            return this.rb.fail($fieldName, ValConf.NUM_OF_FACTS_INVALID);
        }

        return this.rb.success($fieldName); 
    }
}
