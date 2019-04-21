/**
 * @fileOverview Interface for forms validations
 * @namespace NikitosGolubev\Controllers\FormsValidation
 */

import Controller from '../controller';

/**
 * Provides API to validate forms
 * @uses NikitosGolubev\Controllers\Controller
 */
class FormsValidationController extends Controller {
    constructor(model, view) { super(model, view); }

    /**
     * Abstract method which attaches to form and validates it when some event happens
     * @param  {object} event Event Object
     */
    validate(event) {
        throw new Error('This is abstract method of interface!');
    }
}

export default FormsValidationController;
