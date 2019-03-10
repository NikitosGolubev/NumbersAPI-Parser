/**
 * @fileOverview Validation controller of "number of facts" form
 * @namespace NikitosGolubev\Controllers\FormsValidation\Index
 */

import FormsValidationController from '../forms-validation-controller';
import NumOfFactsView from '../../../views/forms-validation/forms-views/num-of-facts';
import TestModel from '../../../models/test-model';

/**
 * Provides API to validate "number of facts" form on index page
 * @uses NikitosGolubev\Controllers\FormsValidation\FormsValidationController
 * @uses NikitosGolubev\Views\FormsValidation\FormsViews\NumOfFactsView
 */
export default class NumOfFactsController extends FormsValidationController {
    constructor() {
        let model = new TestModel;
        let view = new NumOfFactsView(model);
        super(model, view);
    }

    /**
     * @see FormsValidationController validate() method
     */
    validate(event) {
        console.log(event);
        event.preventDefault();
    }
}
