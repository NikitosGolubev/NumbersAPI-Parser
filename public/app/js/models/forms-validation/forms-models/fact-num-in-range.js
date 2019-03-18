/**
 * @fileOverview Model for validating 'fact number in range' form
 * @namespace NikitosGolubev\Models\FormsValidation\FormsModels
 */

import FormsValidationModel from '../forms-validation-model';
import ParseFactsFieldsValidationService from '../../../services/oop/client/validation/fields-validation/parse-facts-fields-validation-service';
import { $ } from '../../../services/functional/client/dom-service';
import FormConf from '../../../configs/forms/fact-num-in-range-config';

/**
 * Model for validating 'fact number in range' form
 * @uses NikitosGolubev\Models\FormsValidation\FormsValidationModel
 * @uses NikitosGolubev\Services\OOP\Client\Validation\FieldsValidation\ParseFactsFieldsValidationService
 * @uses NikitosGolubev\Services\Functional\Client\DomService
 * @uses NikitosGolubev\Configs\Forms\FactNumInRangeConfig as FormConf
 */
export default class FactNumInRangeModel extends FormsValidationModel {
    constructor() {
        super();
        this.validator = new ParseFactsFieldsValidationService;
        this.categoryField = $(FormConf.CATEGORY_FIELD_SELECTOR);
        this.fromField = $(FormConf.FROM_FIELD_SELECTOR);
        this.toField = $(FormConf.TO_FIELD_SELECTOR);
    }

    /**
     * @see FormsValidationModel validate() method
     */
    validate(event) {
        console.log(this.validator.validateCategory(this.categoryField));

        let fromFieldResponse = this.validator.validateFactNumber(this.fromField);
        let toFieldResponse = this.validator.validateFactNumber(this.toField);
        console.log(fromFieldResponse);
        console.log(toFieldResponse);

        let differenceResponse = {};
        if (fromFieldResponse.result && toFieldResponse.result) {
            differenceResponse = this.validator
            .validateFactNumberInRangeDifference(this.fromField, this.toField);
            console.log(differenceResponse);
        }

        event.preventDefault();
    }
}
