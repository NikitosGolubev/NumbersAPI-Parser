/**
 * @fileOverview Validation api particularly for parse forms
 * @namespace NikitosGolubev\Services\OOP\Validation\ConcreteValidation
 */

import ValidationService from '../validation-service';
import ValConf from '../../../../configs/validation/parse-validation-config';

/**
 * Validation api particularly for parse forms
 * @uses NikitosGolubev\Services\OOP\Validation\ValidationService
 * @uses NikitosGolubev\Configs\Validation\ParseValidationConfig as ValConf
 */
export default class ParseFactsValidationService extends ValidationService {
    isFactNumberAppropriate(field) {
        if (!this.isInt(field.value)) return false;
        if (!this.isFitLimit(+field.value, ValConf.MIN_FACT_NUMBER, ValConf.MAX_FACT_NUMBER)) {
            return false;
        }
        return true;
    }
}
