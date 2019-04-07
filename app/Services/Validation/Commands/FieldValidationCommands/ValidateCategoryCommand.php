<?php
/**
 * @package App\Services\Validation\Commands\FieldValidationCommands
 */

namespace App\Services\Validation\Commands\FieldValidationCommands;

use App\Services\Validation\Commands\FieldValidationCommands\FieldValidationCommand;
use App\Services\Validation\SimpleVal;

/**
 * Validates category field
 * @uses App\Services\Validation\SimpleVal
 */
class ValidateCategoryCommand extends FieldValidationCommand {
    /**
     * Validates data.
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

        // Checks if category exists
        if (!in_array($this->content, $this->cfg['CATEGORIES'])) {
            return $this->fail($this->cfg['INVALID_CATEGORY_MESSAGE']);
        }

        return $this->success($this->cfg['DEFAULT_SUCCESS_MESSAGE']);
    }
}
