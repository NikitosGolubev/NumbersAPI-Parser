/**
 * @fileOverview Model for validating 'num of facts' form
 * @namespace NikitosGolubev\Models\FormsValidation\FormsModels
 */

import FormsValidationModel from '../forms-validation-model';
import ParseFactsFieldsValidationService from '../../../services/oop/client/validation/fields-validation/parse-facts-fields-validation-service';
import { $ } from '../../../services/functional/client/dom-service';
import FormConf from '../../../configs/forms/num-of-facts-config';

/**
 * Model for validating 'num of facts' form
 * @uses NikitosGolubev\Models\FormsValidation\FormsValidationModel
 * @uses NikitosGolubev\Services\OOP\Client\Validation\FieldsValidation\ParseFactsFieldsValidationService
 * @uses NikitosGolubev\Services\Functional\Client\DomService
 * @uses NikitosGolubev\Configs\Forms\NumOfFactsConfig as FormConf
 */
class NumOfFactsModel extends FormsValidationModel {
    constructor() {
        super();
        this.validator = new ParseFactsFieldsValidationService;
        this.categoryField = $(FormConf.CATEGORY_FIELD_SELECTOR);
        this.numOfFactsField = $(FormConf.NUM_OF_FACTS_FIELD_SELECTOR);
    }

    /**
     * @see FormsValidationModel validate() method
     */
    validate(event) {
        let categoryVal =  this.validator.validateCategory(this.categoryField);
        let numOfFactsVal = this.validator.validateNumOfFacts(this.numOfFactsField);
        super.validate(event, categoryVal, numOfFactsVal);
    }
}

export default NumOfFactsModel;
