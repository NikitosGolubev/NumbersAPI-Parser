/**
 * @fileOverview Fail Behaviour Interface
 * @namespace NikitosGolubev\Views\FormsValidation\Behaviours\FailBehaviours;
 */

/**
 * Describes an interface, for behaviour if validation failed.
 * Strategy pattern.
 */
class FailBehaviourInterface {
    /**
     * Actions that should be performed if validation of some field failed.
     * @param {Mixed|Void} data Data which comes for providing validation response
     */
    fail(data) {
        throw new Error("It's abstract method from interface. Requires implementation.");
    }
}

export default FailBehaviourInterface;
