/**
 * @fileOverview Base validation service
 * @namespace NikitosGolubev\Services\OOP\Validation;
 */

/**
 * Base validation service.
 * It's API shouldn't depend on particular fields.
 * Other words, the methods from this class may be applied
 * for validation of vast range of fields.
 */
export default class ValidationService {
    /**
     * Checks if fields value is set or not.
     * @param  {Object}  field DOM
     * @return {Boolean}
     */
    isEmpty(field) {
        if (!field.value && !(field.value === '0' || field.value === 0)) {
            return true;
        }
        return false;
    }

    /**
     * Checks if number fits the particular limit
     * @param  {Number} number
     * @param  {Number}  $startLimit min
     * @param  {Number}  $endLimit max
     * @return {Boolean}
     */
    isFitLimit(number, $startLimit = -99999999, $endLimit = 99999999) {
        if (number < $startLimit || number > $endLimit) {
            return false;
        }
        return true;
    }

    /**
     * Checks if some value is an integer
     * @param  {Mixed}  val
     * @return {Boolean}
     */
    isInt(val) {
        return Number.isInteger(+val);
    }
}
