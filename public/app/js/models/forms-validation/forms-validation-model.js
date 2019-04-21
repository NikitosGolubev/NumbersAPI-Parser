/**
 * @fileOverview Abstract model for validating forms
 * @namespace NikitosGolubev\Models\FormsValidation
 */

import Model from '../model';

/**
 * Abstract model for validating forms
 * @uses NikitosGolubev\Models\Model
 */
class FormsValidationModel extends Model {
    constructor() {
        super();
    }
    
    /**
     * Method which is responsible for form validation.
     * 
     * Should be redifened in each particular form model to
     * validate the particular fields of form.
     * This one serves for evaluating the general validation
     * result after validating fields and notifing the observers if
     * it's needed.
     * 
     * @param  {event} event Submit of form, or other event
     * @param {Array} validationResponses Validation responses of fields
     * @returns {Void}
     */
    validate(event, ...validationResponses) {
        let overallResult = true;

        // Getting overall result of validation
        // All responses should be positive to assess validation as positive
        for (let i = 0; i < validationResponses.length; i++) {
            if (!validationResponses[i].result) {
                overallResult = false;
                break;
            } 
        }

        // If validation failed, than notifing observers about this and preventing
        // form from being sent to server.
        if (!overallResult) {
            event.preventDefault();
            this.notifyObservers(validationResponses);
        }
    }
}

export default FormsValidationModel;
