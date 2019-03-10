/**
 * @fileOverview Model for validating 'fact number in range' form
 * @namespace NikitosGolubev\Models\FormsValidation\FormsModels
 */

import FormsValidationModel from '../forms-validation-model';

/**
 * Model for validating 'fact number in range' form
 * @uses NikitosGolubev\Models\FormsValidation\FormsValidationModel
 */
export default class FactNumInRangeModel extends FormsValidationModel {
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
