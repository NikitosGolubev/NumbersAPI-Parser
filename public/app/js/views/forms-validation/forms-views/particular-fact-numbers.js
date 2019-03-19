/**
 * @fileOverview View for 'particular fact numbers' form
 * @namespace NikitosGolubev\Views\FormsValidation\FormsViews
 */

import FormsValidationView from '../forms-validation-view';
import { $ } from '../../../services/functional/client/dom-service';
import ParticularFactNumbers from '../../../configs/forms/particular-fact-numbers-config';

/**
 * @uses NikitosGolubev\Views\FormsValidation\FormsValidationView
 * @uses NikitosGolubev\Services\Functional\Client\DomService
 * @uses NikitosGolubev\Configs\Forms\ParticularFactNumbersConfig
 */
export default class ParticularFactNumbersView extends FormsValidationView {
    constructor(model,  $failBehaviour = false, $successBehaviour = false) {
        super(model, $failBehaviour, $successBehaviour);
    }

    /**
     * @see FormsValidationView defineUI() method
     */
    defineUI() {
        this.form = $(ParticularFactNumbers.FORM_SELECTOR);
        this.addFactNumberBtn = $(ParticularFactNumbers.ADD_FACT_NUMBER_BTN_SELECTOR);
    }

    /**
     * Getter for 'form' element
     * @return {Object} DOM
     */
    getForm() { return this.form; }

    getAddFactNumberBtn() { return this.addFactNumberBtn; }
}
