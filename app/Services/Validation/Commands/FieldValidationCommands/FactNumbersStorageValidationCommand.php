<?php
/**
 * @package App\Services\Validation\Commands\FieldValidationCommands
 */

namespace App\Services\Validation\Commands\FieldValidationCommands;

use App\Services\Validation\Commands\FieldValidationCommands\FieldValidationCommand;
use App\Services\Validation\SimpleVal;

/**
 * Validates fact numbers storage - particularly chosen numbers to parse
 */
class FactNumbersStorageValidationCommand extends FieldValidationCommand {
    /**
     * Validates data.
     *
     * Assumed that $this->content is JSON ENCODED ARRAY WITH NUMBERS
     * 
     * @see Command::execute
     */
    public function execute() {
        // Emptiness check
        $is_empty = SimpleVal::isEmpty($this->content, $this->isRequired);
        
        if ($is_empty === true) {
            return $this->fail($this->cfg['DEFAULT_EMPTINESS_MESSAGE']);
        } elseif ($is_empty === -1) {
            return $this->success($this->cfg['DEFAULT_SUCCESS_MESSAGE']);
        }

        // Checks if particularly array given or not
        if (!SimpleVal::isJSONArray($this->content)) {
            return $this->fail($this->cfg['JSON_ARRAY_ONLY_MESSAGE']);
        }

        $numbers_arr = json_decode($this->content);

        // Checks whether array contains any duplicates or not
        if (SimpleVal::hasDuplicatesInArr($numbers_arr)) {
            return $this->fail($this->cfg['NOT_UNIQUE_VALUES_MESSAGE']);
        }

        // Checks whether arrays' length fulfills some limit
        if (!SimpleVal::isFitLimit(
            count($numbers_arr),
            $this->cfg['MIN_NUM_TO_PARSE'],
            $this->cfg['MAX_NUM_TO_PARSE'])
        ) {
            return $this->fail($this->cfg['INVALID_NUMBERS_GAP_MESSAGE']);
        }

        // Checks whether array contains ONLY integers or not
        foreach ($numbers_arr as $item) {
            if (!SimpleVal::isInteger($item)) {
                return $this->fail($this->cfg['INTEGERS_ONLY_MESSAGE']);
            }
        }

        // Checks whether array contains integers which fulfull the limit.
        foreach ($numbers_arr as $number) {
            if (!SimpleVal::isFitLimit(
                $number,
                $this->cfg['MIN_FACT_NUMBER'],
                $this->cfg['MAX_FACT_NUMBER'])
            ) {
                return $this->fail($this->cfg['INVALID_FACT_NUMBER_LIMIT_MESSAGE']);
            }
        }

        return $this->success($this->cfg['DEFAULT_SUCCESS_MESSAGE']);
    }
}
