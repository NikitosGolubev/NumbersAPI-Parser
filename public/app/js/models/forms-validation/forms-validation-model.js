/**
 * @fileOverview Abstract model for validating forms
 * @namespace NikitosGolubev\Models\FormsValidation
 */

import Model from '../model';

/**
 * Abstract model for validating forms
 * @uses NikitosGolubev\Models\Model
 */
export default class FormsValidationModel extends Model {
    constructor() {
        super();
    }
    
    /**
     * Method which is responsible for form validation
     * @param  {event} event Event Object
     * @returns {Void}
     */
    validate(event) {
        throw new Error('This is abstract method which requires implementation.');
    }
}
