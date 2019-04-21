/**
 * @fileOverview Validation controller of "particular fact numbers" form
 * @namespace NikitosGolubev\Controllers\FormsValidation\Index
 */

import FormsValidationController from '../forms-validation-controller';
import ParticularFactNumbersModel from '../../../models/forms-validation/forms-models/particular-fact-numbers';
import ParticularFactNumbersView from '../../../views/forms-validation/forms-views/particular-fact-numbers';
import { findParentByClassName } from '../../../services/functional/client/dom-service';

/**
 * Provides API to validate "particular fact numbers" form on index page
 * 
 * @uses NikitosGolubev\Controllers\FormsValidation\FormsValidationController
 * @uses NikitosGolubev\Models\FormsValidation\FormsModels\ParticularFactNumbersModel
 * @uses NikitosGolubev\Views\FormsValidation\FormsViews\ParticularFactNumbersView
 * @uses NikitosGolubev\Services\Functional\Client\DomService
 */
class ParticularFactNumbersController extends FormsValidationController {
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

    /**
     * Manages the validation of subform which adds factNumbers to container
     * @param  {Object} event
     * @return {Void}
     */
    validateFactNumberSubForm(event) {
        this.model.validateFactNumberSubForm(event);
    }

    /**
     * Removes number to parse from numbers storage.
     * 
     * @param  {Object} event
     * @return {Void}
     */
    removeNumber(event) {
        let obj = event.target;
        let removeBtnClassName = this.view.getRemoveNumberBtnClassName();
        if (obj.classList.contains(removeBtnClassName)) {
            let numberContainerClassName = this.view.getNumberContainerClassName();
            // Getting number container (inside numbers storage box)
            let numberContainer = findParentByClassName(obj, numberContainerClassName);
            this.view.removeNumber(numberContainer);
        }
    }
}

export default ParticularFactNumbersController;
