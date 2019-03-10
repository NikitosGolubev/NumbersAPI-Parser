/**
 * @fileOverview Model for validating 'num of facts' form
 * @namespace NikitosGolubev\Models\FormsValidation\FormsModels
 */

import FormsValidationModel from '../forms-validation-model';

/**
 * Model for validating 'num of facts' form
 * @uses NikitosGolubev\Models\FormsValidation\FormsValidationModel
 */
export default class NumOfFactsModel extends FormsValidationModel {
    constructor() {
        super();
    }

    /**
     * @see FormsValidationModel validate() method
     */
    validate(event) {
        console.log(event);
        event.preventDefault();
    }
}
