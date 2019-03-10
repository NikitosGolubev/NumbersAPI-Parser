/**
 * @fileOverview View for 'particular fact numbers' form
 * @namespace NikitosGolubev\Views\FormsValidation\FormsViews
 */

import FormsValidation from '../forms-validation';
import { $ } from '../../../services/functional/dom-service';

/**
 * @uses NikitosGolubev\Views\FormsValidation\FormsValidation
 * @uses NikitosGolubev\Services\Functional\DomService
 */
export default class ParticularFactNumbersView extends FormsValidation {
    constructor(model,  $failBehaviour = false, $successBehaviour = false) {
        super(model, $failBehaviour, $successBehaviour);
    }

    /**
     * @see FormsValidation defineUI() method
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
