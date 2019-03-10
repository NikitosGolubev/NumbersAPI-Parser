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
export default class FormsValidation extends View {
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
     * @param {Map} validationData Map with following structure:
     *     [[validationBlockObjDOM: validationResultBool]]
     * @return {Void}
     */
    update(validationData) {
        
    }

    /**
     * Abstract method where UI for each form should be defined
     * @return {Void}
     */
    defineUI() {
        throw new Error(`It's abstract method, which requires implementation!`);
    }
}
