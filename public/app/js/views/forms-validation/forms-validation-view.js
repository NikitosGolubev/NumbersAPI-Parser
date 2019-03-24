/**
 * @fileOverview Forms validation view
 * @namespace NikitosGolubev\Views\FormsValidation
 */

import View from '../view';
import DefaultFailBehaviour from './behaviours/fail-behaviours/default-fail-behaviour'
import DefaultSuccessBehaviour from './behaviours/success-behaviours/default-success-behaviour'

/**
 * Responsible for showing validation result to user.
 * Observer of model.
 *
 * @uses NikitosGolubev\Views\View
 * @uses NikitosGolubev\Views\FormsValidation\Behaviours\FailBehaviours\DefaultFailBehaviour
 * @uses NikitosGolubev\Views\FormsValidation\Behaviours\SuccessBehaviours\DefaultSuccessBehaviour
 */
export default class FormsValidationView extends View {
    constructor(model, $failBehaviour = false, $successBehaviour = false) {
        super();
        this.model = model;

        if (!$failBehaviour) $failBehaviour = new DefaultFailBehaviour;
        this.failBehaviour = $failBehaviour;
        if (!$successBehaviour) $successBehaviour = new DefaultSuccessBehaviour;
        this.successBehaviour = $successBehaviour;

        this.defineUI();
        this.model.registerObserver(this);
    }

    /**
     * @see View update() method
     * @param {Array} valData Array with fields validation responses
     * @return {Void}
     */
    update(valData) {
        for (let i = 0; i < valData.length; i++) {
            if (valData[i].result) this.successBehaviour.success(valData[i]);
            else this.failBehaviour.fail(valData[i]);
        }
    }

    /**
     * Abstract method where UI for each form should be defined
     * @return {Void}
     */
    defineUI() {
        throw new Error(`It's abstract method, which requires implementation!`);
    }
}
