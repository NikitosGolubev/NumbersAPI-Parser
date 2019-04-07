<?php
/**
 * @package App\Services\Validation\Commands\FieldValidationCommands
 */

namespace App\Services\Validation\Commands\FieldValidationCommands;

use \Error;
use App\Services\Validation\Commands\FieldValidationCommands\FieldValidationCommand;
use App\Services\Validation\SimpleVal;

/**
 * Validates absolute diffrence btw two given fact numbers
 */
class FactNumbersDifferenceValidationCommand extends FieldValidationCommand {
    /**
     * Validates data.
     *
     * $this->content EXPECTED TO BE AN ARRAY WITH FOLLOWING STRUCTURE:
     * ["from" => someFactNumber1, "to" => someFactNumber2]
     *
     * @throws Error If inappropriate initial data provided
     * @see Command::execute
     */
    public function execute() {
        // if programmer provided inappropriate data
        if (!is_array($this->content)) {
            throw new Error('Given data EXPECTED TO BE AN ARRAY WITH FOLLOWING STRUCTURE: ["from" => somevalue1, "to" => somevalue2]');
        }

        // If whether 'from' or 'to' params are empty        
        if (!isset($this->content['from']) || !isset($this->content['to'])) {
            return $this->fail($this->cfg['DEFAULT_EMPTINESS_MESSAGE']);
        }

        // if provided data are NOT integers
        if (
            !SimpleVal::isInteger($this->content['from']) ||
            !SimpleVal::isInteger($this->content['to'])
        ) {
            return $this->fail($this->cfg['INTEGERS_ONLY_MESSAGE']);
        }

        // Calculating absolute difference btw given fact numbers
        $difference = abs($this->content['from'] - $this->content['to']);
        // Checking if diffrence fit the limit [0, toGiven]
        // Starting with zero, cuz assumed if two provided numbers are equal(for instance)
        // 100 and 100, than 1 fact may be parsed (related to 100).
        if (!SimpleVal::isFitLimit(
            $difference,
            0,
            $this->cfg['MAX_NUM_TO_PARSE']
        )) {
            return $this->fail($this->cfg['INVALID_FACT_NUMBER_LIMIT_MESSAGE']);
        }

        return $this->success($this->cfg['DEFAULT_SUCCESS_MESSAGE']);
    }
}
