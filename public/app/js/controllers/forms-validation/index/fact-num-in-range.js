/**
 * @fileOverview Validation controller of "fact numbers in range" form
 * @namespace NikitosGolubev\Controllers\FormsValidation\Index
 */

import FormsValidationController from '../forms-validation-controller';
import FactNumInRangeView from '../../../views/forms-validation/forms-views/fact-num-in-range';
import TestModel from '../../../models/test-model';

/**
 * Provides API to validate "fact numbers in range" form on index page
 * @uses NikitosGolubev\Controllers\FormsValidation\FormsValidationController
 * @uses NikitosGolubev\Views\FormsValidation\FormsViews\FactNumInRangeView
 */
export default class FactNumInRangeController extends FormsValidationController {
    constructor() {
        let model = new TestModel;
        let view = new FactNumInRangeView(model);
        super(model, view);
    }

    /**
     * @see FormsValidationController validate() method
     */
    validate(event) {

    }
}
