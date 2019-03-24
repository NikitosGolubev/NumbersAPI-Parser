/**
 * @fileOverview Default Fail Behaviour
 * @namespace NikitosGolubev\Views\FormsValidation\Behaviours\FailBehaviours
 */

import FailBehaviourInterface from "./fail-behaviour-interface";
import iziToast from "izitoast";

/**
 * Describes actions that should be taken by default if fields validation failed
 * @uses NikitosGolubev\Views\FormsValidation\Behaviours\FailBehaviours\FailBehaviourInterface
 */
export default class DefaultFailBehaviour extends FailBehaviourInterface {
    /**
     * @see FailBehaviourInterface fail() method
     * @param {Object} fieldValResult Fields validation responsed
     * @return {Void}
     */
    fail(fieldValResult) {
        iziToast.error({
            title: `${fieldValResult.fieldName}:`,
            message: fieldValResult.message,
            position: 'topRight',
            transitionOut: 'fadeOutDown',
            transitionIn: 'bounceInRight',
            timeout: 5000
        });
    }
}
