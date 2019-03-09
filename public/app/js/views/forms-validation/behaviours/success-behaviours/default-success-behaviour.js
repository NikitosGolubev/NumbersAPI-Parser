/**
 * @fileOverview Default Success Behaviour
 * @namespace NikitosGolubev\Views\FormsValidation\Behaviours\SuccessBehaviours
 */

import SuccessBehaviourInterface from "./success-behaviour-interface";

/**
 * Describes actions that should be taken by default if fields validation succeeded
 * @uses NikitosGolubev\Views\FormsValidation\Behaviours\SuccessBehaviours\SuccessBehaviourInterface
 */
class DefaultSuccessBehaviour extends SuccessBehaviourInterface {
    /**
     * @see SuccessBehaviourInterface success() method
     * @param {Object} fieldBlock DOM object with field-block which element(-s) was validated
     * @return {Void}
     */
    success(fieldBlock) {

    }
}
