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
        let categoryVal = this.validator.validateCategory(this.categoryField);
        let fromFieldVal = this.validator.validateFactNumber(this.fromField, 'TO field');
        let toFieldVal = this.validator.validateFactNumber(this.toField, 'FROM field');

        let differenceVal = {};
        if (fromFieldVal.result && toFieldVal.result) {
            differenceVal = this.validator
            .validateFactNumberInRangeDifference(this.fromField, this.toField);
        }

        // Building validation responses array, because we need an opportunity
        // to add or avoid adding the differenceVal object depend on if 
        // the validation on difference was performed or not.
        let validationResponses = [categoryVal, fromFieldVal, toFieldVal];
        if (Object.keys(differenceVal).length > 0) validationResponses.push(differenceVal);

        super.validate(event, ...validationResponses);
    }
}
