/**
 * @fileOverview Success Behaviour Interface
 * @namespace NikitosGolubev\Views\FormsValidation\Behaviours\SuccessBehaviours;
 */

/**
 * Describes an interface, for behaviour if validation succeeded.
 * Strategy pattern.
 */
export default class SuccessBehaviourInterface {
    /**
     * Actions that should be performed if validation of some field succeeded.
     * @param {Mixed|Void} data Data which comes for providing validation response
     */
    success(fieldBlock) {
        throw new Error("It's abstract method from interface. Requires implementation.");
    }
}
