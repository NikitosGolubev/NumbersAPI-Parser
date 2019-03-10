/**
 * @fileOverview Validation controller of "number of facts" form
 * @namespace NikitosGolubev\Controllers\FormsValidation\Index
 */

import FormsValidationController from '../forms-validation-controller';
import NumOfFactsModel from '../../../models/forms-validation/forms-models/num-of-facts';
import NumOfFactsView from '../../../views/forms-validation/forms-views/num-of-facts';

/**
 * Provides API to validate "number of facts" form on index page
 * 
 * @uses NikitosGolubev\Controllers\FormsValidation\FormsValidationController
 * @uses NikitosGolubev\Models\FormsValidation\FormsModels\NumOfFactsModel
 * @uses NikitosGolubev\Views\FormsValidation\FormsViews\NumOfFactsView
 */
export default class NumOfFactsController extends FormsValidationController {
    constructor() {
        let model = new NumOfFactsModel;
        let view = new NumOfFactsView(model);
        super(model, view);
    }

    /**
     * @see FormsValidationController validate() method
     */
    validate(event) {
        this.model.validate(event);
    }
}
