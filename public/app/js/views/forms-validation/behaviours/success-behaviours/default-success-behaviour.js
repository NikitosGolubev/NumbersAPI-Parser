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
     * @param {Object} fieldValResult Fields validation response
     * @return {Void}
     */
    success(fieldValResult) {
        // Not touching anything. If validation succeded, just leave the field in
        // the state it was. 
    }
}

export default DefaultSuccessBehaviour;
