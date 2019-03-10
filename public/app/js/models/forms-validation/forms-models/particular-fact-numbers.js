/**
 * @fileOverview Model for validating 'particular fact numbers' form
 * @namespace NikitosGolubev\Models\FormsValidation\FormsModels
 */

import FormsValidationModel from '../forms-validation-model';

/**
 * Model for validating 'particular fact numbers' form
 * @uses NikitosGolubev\Models\FormsValidation\FormsValidationModel
 */
export default class ParticularFactNumbersModel extends FormsValidationModel {
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
