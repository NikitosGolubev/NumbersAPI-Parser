/**
 * @fileOverview View for 'num of facts' form
 * @namespace NikitosGolubev\Views\FormsValidation\FormsViews
 */

import FormsValidationView from '../forms-validation-view';
import { $ } from '../../../services/functional/client/dom-service';
import NumOfFactsConfig from '../../../configs/forms/num-of-facts-config';

/**
 * @uses NikitosGolubev\Views\FormsValidation\FormsValidationView
 * @uses NikitosGolubev\Services\Functional\Client\DomService
 * @uses NikitosGolubev\Configs\Forms\NumOfFactsConfig
 */
export default class NumOfFactsView extends FormsValidationView {
    constructor(model,  $failBehaviour = false, $successBehaviour = false) {
        super(model, $failBehaviour, $successBehaviour);
    }

    /**
     * @see FormsValidationView defineUI() method
     */
    defineUI() {
        this.form = $(NumOfFactsConfig.FORM_SELECTOR);
    }

    /**
     * Getter for 'form' element
     * @return {Object} DOM
     */
    getForm() { return this.form; }
}
