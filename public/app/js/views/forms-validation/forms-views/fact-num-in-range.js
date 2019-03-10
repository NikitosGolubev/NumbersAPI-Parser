/**
 * @fileOverview View for 'fact number in range' form
 * @namespace NikitosGolubev\Views\FormsValidation\FormsViews
 */

import FormsValidation from '../forms-validation';
import { $ } from '../../../services/functional/dom-service';

/**
 * @uses NikitosGolubev\Views\FormsValidation\FormsValidation
 * @uses NikitosGolubev\Services\Functional\DomService
 */
export default class FactNumInRangeView extends FormsValidation {
    constructor(model,  $failBehaviour = false, $successBehaviour = false) {
        super(model, $failBehaviour, $successBehaviour);
    }

    /**
     * @see FormsValidation defineUI() method
     */
    defineUI() {
        this.form = $('.js-fact-num-in-range-form');
    }

    /**
     * Getter for 'form' element
     * @return {[type]} [description]
     */
    getForm() { return this.form; }
}
