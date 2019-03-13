/**
 * @fileOverview Model for validating 'num of facts' form
 * @namespace NikitosGolubev\Models\FormsValidation\FormsModels
 */

import FormsValidationModel from '../forms-validation-model';
import ParseFactsFieldsValidationService from '../../../services/oop/client/validation/fields-validation/parse-facts-fields-validation-service';
import { $ } from '../../../services/functional/client/dom-service';
import NumOfFactsConfig from '../../../configs/forms/num-of-facts-config';

/**
 * Model for validating 'num of facts' form
 * @uses NikitosGolubev\Models\FormsValidation\FormsValidationModel
 * @uses NikitosGolubev\Services\OOP\Client\Validation\FieldsValidation\ParseFactsFieldsValidationService
 * @uses NikitosGolubev\Services\Functional\Client\DomService
 * @uses NikitosGolubev\Configs\Forms\NumOfFactsConfig
 */
export default class NumOfFactsModel extends FormsValidationModel {
    constructor() {
        super();
        this.validator = new ParseFactsFieldsValidationService;
        this.categoryField = $(NumOfFactsConfig.CATEGORY_FIELD_SELECTOR);
        this.numOfFactsField = $(NumOfFactsConfig.NUM_OF_FACTS_FIELD_SELECTOR);
    }

    /**
     * @see FormsValidationModel validate() method
     */
    validate(event) {
        console.log(this.validator.validateCategory(this.categoryField));
        console.log(this.validator.validateNumOfFacts(this.numOfFactsField));
        event.preventDefault();
    }
}
