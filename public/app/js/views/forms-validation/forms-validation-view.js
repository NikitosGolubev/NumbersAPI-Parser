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
        // Just looping backwards. Why so?
        // Because toasts about validation results appears one ABOVE other
        // and as valData normally consists of fields ordered by their position in
        // form, to make validation result more understandable I need to do this here.
        // Fields position in form: (1st 2nd 3rd ...)
        // Toasts with messagies position WITHOUT backward loop: (3rd, 2nd, 1st ...)
        // WITH backward loop (1st 2nd 3rd ...) <- Exactly the thing I need
        // I KNOW IT'S BAD SOLUTION, BUT I'VE NO CLUE HOW TO FIX IT FAST.
        // And it's not so crucial here btw.
        // Opened issue on GitHub: https://github.com/marcelodolza/iziToast/issues/170
        for (let i = (valData.length - 1); i >= 0; i--) {
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
