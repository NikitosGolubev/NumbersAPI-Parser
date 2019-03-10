/**
 * @fileOverview View for 'particular fact numbers' form
 * @namespace NikitosGolubev\Views\FormsValidation\FormsViews
 */

import FormsValidationView from '../forms-validation-view';
import { $ } from '../../../services/functional/dom-service';

/**
 * @uses NikitosGolubev\Views\FormsValidation\FormsValidationView
 * @uses NikitosGolubev\Services\Functional\DomService
 */
export default class ParticularFactNumbersView extends FormsValidationView {
    constructor(model,  $failBehaviour = false, $successBehaviour = false) {
        super(model, $failBehaviour, $successBehaviour);
    }

    /**
     * @see FormsValidationView defineUI() method
     */
    defineUI() {
        this.form = $('.js-particular-fact-numbers-form');
    }

    /**
     * Getter for 'form' element
     * @return {[type]} [description]
     */
    getForm() { return this.form; }
}
