<?php

namespace App\Http\Controllers\Parsing;

use Illuminate\Http\Request;
use App\Http\Controllers\Parsing\ParseController;
use App\Services\Validation\Commands\FieldValidationCommands\FactNumbersStorageValidationCommand;

/**
 * Responsible for handling data of 'Particular fact numbers to parse' form
 */
class ParticularFactNumbersController extends ParseController
{
    /**
     * @see parent::setGeneralValidation
     */
    protected function setGeneralValidation() {
        $this->setNumbersStorageValidation();
    }

    /**
     * Sets validation for 'chosen numbers to parse' param
     */
    private function setNumbersStorageValidation() {
        $this->setParamValidation(
            'numbers_storage',
            'The chosen numbers storage',
            function ($content, $subject, $cfg, $is_required) {
                return new FactNumbersStorageValidationCommand($content, $subject, $cfg, $is_required);
            }
        );
    }
}
