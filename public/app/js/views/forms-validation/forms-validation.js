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
class FormsValidation extends View {
    constructor(model, $failBehaviour = false, $successBehaviour = false) {
        this.model = model;

        if (!$failBehaviour) $failBehaviour = new DefaultFailBehaviour;
        this.failBehaviour = $failBehaviour;
        if (!$successBehaviour) $successBehaviour = new DefaultSuccessBehaviour;
        this.successBehaviour = $successBehaviour;

        model.registerObserver(this);
    }

    /**
     * @see View update() method
     * @param  {validationData} validationData Map with following structure:
     *     [[validationBlockObjDOM: validationResultBool]]
     * @return {Void}
     */
    update(validationData) {
        
    }
}
