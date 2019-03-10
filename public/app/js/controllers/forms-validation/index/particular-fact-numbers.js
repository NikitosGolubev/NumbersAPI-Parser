/**
 * @fileOverview Validation controller of "particular fact numbers" form
 * @namespace NikitosGolubev\Controllers\FormsValidation\Index
 */

import FormsValidationController from '../forms-validation-controller';
import ParticularFactNumbersModel from '../../../models/forms-validation/forms-models/particular-fact-numbers';
import ParticularFactNumbersView from '../../../views/forms-validation/forms-views/particular-fact-numbers';

/**
 * Provides API to validate "particular fact numbers" form on index page
 * 
 * @uses NikitosGolubev\Controllers\FormsValidation\FormsValidationController
 * @uses NikitosGolubev\Models\FormsValidation\FormsModels\ParticularFactNumbersModel
 * @uses NikitosGolubev\Views\FormsValidation\FormsViews\ParticularFactNumbersView
 */
export default class ParticularFactNumbersController extends FormsValidationController {
    constructor() {
        let model = new ParticularFactNumbersModel;
        let view = new ParticularFactNumbersView(model);
        super(model, view);
    }

    /**
     * @see FormsValidationController validate() method
     */
    validate(event) {
        this.model.validate(event);
    }
}
