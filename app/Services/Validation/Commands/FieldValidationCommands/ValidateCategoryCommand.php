<?php

namespace App\Services\Validation\Commands\FieldValidationCommands;

use App\Services\Validation\Commands\FieldValidationCommands\FieldValidationCommand;

class ValidateCategoryCommand extends FieldValidationCommand {
    public function execute() {
        if (!$this->content) {
            return $this->fail($this->cfg['DEFAULT_EMPTINESS_MESSAGE']);
        }

        if (!in_array($this->content, $this->cfg['CATEGORIES'])) {
            return $this->fail($this->cfg['INVALID_CATEGORY_MESSAGE']);
        }

        return $this->success($this->cfg['DEFAULT_SUCCESS_MESSAGE']);
    }
}
