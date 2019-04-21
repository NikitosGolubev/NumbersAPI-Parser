/**
 * @fileOverview Model for validating 'particular fact numbers' form
 * @namespace NikitosGolubev\Models\FormsValidation\FormsModels
 */

import FormsValidationModel from '../forms-validation-model';
import ParseFactsFieldsValidationService from '../../../services/oop/client/validation/fields-validation/parse-facts-fields-validation-service';
import { $ } from '../../../services/functional/client/dom-service';
import FormConf from '../../../configs/forms/particular-fact-numbers-config';

/**
 * Model for validating 'particular fact numbers' form
 * @uses NikitosGolubev\Models\FormsValidation\FormsValidationModel
 * @uses NikitosGolubev\Services\OOP\Client\Validation\FieldsValidation\ParseFactsFieldsValidationService
 * @uses NikitosGolubev\Services\Functional\Client\DomService
 * @uses NikitosGolubev\Configs\Forms\ParticularFactNumbersConfig as FormConf
 */
class ParticularFactNumbersModel extends FormsValidationModel {
    constructor() {
        super();
        this.validator = new ParseFactsFieldsValidationService;

        /**
         * Numbers storage (subform) observers
         * @type {Array}
         */
        this.NSObservers = [];

        this.factNumberField = $(FormConf.FACT_NUMBER_FIELD_SELECTOR);
        this.numbersStorageField = $(FormConf.NUMBERS_STORAGE_FIELD_SELECTOR);
    }

    /**
     * @see Model.registerObserver()
     */
    registerNSObserver(observer) {
        this.registerObserver(observer, this.NSObservers);
    }

    /**
     * @see Model.removeObserver()
     */
    removeNSObserver(observer) {
        this.removeObserver(observer, this.NSObservers);
    }

    /**
     * @see Model.notifyObservers()
     */
    notifyNSObservers(data) {
        this.notifyObservers(data, this.NSObservers, "updateNS");
    }

    /**
     * @see FormsValidationModel validate() method
     */
    validate(event) {
        let numbersStorageVal = this.validator.validateNumbersStorrage(this.numbersStorageField);
        super.validate(event, numbersStorageVal);
    }

    /**
     * Validates subform which adds fact numbers to parse into container.
     * @param  {Object} event
     * @return {Void}
     */
    validateFactNumberSubForm(event) {
        let factNumberVal = this.validator.validateFactNumberNS(this.factNumberField, this.numbersStorageField);
        let numbersStorageVal = this.validator.validateNumbersStorrage(this.numbersStorageField, 1);

        if (factNumberVal.result && numbersStorageVal.result) {
            let factNumber = +this.factNumberField.value;
            this.notifyNSObservers(factNumber);
        } else {
            super.validate(event, factNumberVal, numbersStorageVal);
        }
    }
}

export default ParticularFactNumbersModel;
