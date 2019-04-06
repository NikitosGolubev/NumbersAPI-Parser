<?php

namespace App\Services\Validation\Commands\FieldValidationCommands;

use App\Services\Validation\Commands\FieldValidationCommands\FieldValidationCommand;
use App\Services\Validation\SimpleVal;

class ValidateCategoryCommand extends FieldValidationCommand {
    public function execute() {
        $is_empty = SimpleVal::isEmpty($this->content, $this->isRequired);
        
        if ($is_empty === true) {
            return $this->fail($this->cfg['DEFAULT_EMPTINESS_MESSAGE']);
        } elseif ($is_empty === -1) {
            return $this->success($this->cfg['DEFAULT_SUCCESS_MESSAGE']);
        }

        if (!in_array($this->content, $this->cfg['CATEGORIES'])) {
            return $this->fail($this->cfg['INVALID_CATEGORY_MESSAGE']);
        }

        return $this->success($this->cfg['DEFAULT_SUCCESS_MESSAGE']);
    }
}
