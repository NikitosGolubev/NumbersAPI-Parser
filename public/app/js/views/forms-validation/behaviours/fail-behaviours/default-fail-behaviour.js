/**
 * @fileOverview Default Fail Behaviour
 * @namespace NikitosGolubev\Views\FormsValidation\Behaviours\FailBehaviours
 */

import FailBehaviourInterface from "./fail-behaviour-interface";

/**
 * Describes actions that should be taken by default if fields validation failed
 * @uses NikitosGolubev\Views\FormsValidation\Behaviours\FailBehaviours\FailBehaviourInterface
 */
class DefaultFailBehaviour extends FailBehaviourInterface {
    /**
     * @see FailBehaviourInterface fail() method
     * @param {Object} fieldBlock DOM object with field-block which element(-s) was validated
     * @return {Void}
     */
    fail(fieldBlock) {

    }
}
