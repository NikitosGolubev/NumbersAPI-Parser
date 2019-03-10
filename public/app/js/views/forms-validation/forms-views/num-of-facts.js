/**
 * @fileOverview View for 'num of facts' form
 * @namespace NikitosGolubev\Views\FormsValidation\FormsViews
 */

import FormsValidation from '../forms-validation';
import { $ } from '../../../services/functional/dom-service';

/**
 * @uses NikitosGolubev\Views\FormsValidation\FormsValidation
 * @uses NikitosGolubev\Services\Functional\DomService
 */
export default class NumOfFactsView extends FormsValidation {
    constructor(model,  $failBehaviour = false, $successBehaviour = false) {
        super(model, $failBehaviour, $successBehaviour);
    }

    /**
     * @see FormsValidation defineUI() method
     */
    defineUI() {
        this.form = $('.js-num-of-facts-form');
    }

    /**
     * Getter for 'form' element
     * @return {[type]} [description]
     */
    getForm() { return this.form; }
}
