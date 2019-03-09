/**
 * @fileOverview Validation controller of "number of facts" form
 * @namespace NikitosGolubev\Controllers\FormsValidation\Index
 */

import FormsValidationController from '../forms-validation-controller';

/**
 * Provides API to validate "number of facts" form on index page
 * @uses NikitosGolubev\Controllers\FormsValidation\FormsValidationController
 */
export default class NumOfFacts extends FormsValidationController {
    constructor() {
    	let model = new Model;
        let view = new View(model);
        super(model, view);
    }

    /**
     * @see FormsValidationController validate() method
     */
    validate(event) {

    }
}
