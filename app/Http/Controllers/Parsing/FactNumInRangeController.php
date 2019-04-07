<?php

namespace App\Http\Controllers\Parsing;

use Illuminate\Http\Request;
use App\Http\Controllers\Parsing\ParseController;
use App\Services\Validation\Commands\FieldValidationCommands\CategoryValidationCommand;
use App\Services\Validation\Commands\FieldValidationCommands\FactNumberValidationCommand;
use App\Services\Validation\Commands\FieldValidationCommands\FactNumbersDifferenceValidationCommand;

/**
 * Responsible for handling data of 'Range of fact numbers to parse' form
 */
class FactNumInRangeController extends ParseController
{
    /**
     * @see parent::setGeneralValidation
     */
    protected function setGeneralValidation() {
        $this->setCategoryValidation();
        $this->setFromFactNumberValidation();
        $this->setToFactNumberValidation();
        $this->setFactNumbersDifferenceValidation();
    }

    /**
     * Sets validation for 'category' param
     */
    private function setCategoryValidation() {
        $this->setParamValidation(
            'category',
            $this->cfg['CATEGORY_SUBJECT'],
            function ($content, $subject, $cfg, $is_required) {
                return new CategoryValidationCommand($content, $subject, $cfg, $is_required);
            }
        );
    }

    /**
     * Sets validation for 'parse facts FROM fact number' param
     */
    private function setFromFactNumberValidation() {
        $this->setParamValidation(
            'from',
            '"FROM" fact number',
            function ($content, $subject, $cfg, $is_required) {
                return new FactNumberValidationCommand($content, $subject, $cfg, $is_required);
            }
        );
    }

    /**
     * Sets validation for 'parse facts TO fact number' param
     */
    private function setToFactNumberValidation() {
        $this->setParamValidation(
            'to',
            '"TO" fact number',
            function ($content, $subject, $cfg, $is_required) {
                return new FactNumberValidationCommand($content, $subject, $cfg, $is_required);
            }
        );
    }

    /**
     * Validates difference btw given numbers
     */
    private function setFactNumbersDifferenceValidation() {
        $this->setDataValidation(
            ['from' => $this->request->input('from'), 'to' => $this->request->input('to')],
            'Difference btw "FROM" and "TO" fact numbers',
            function ($content, $subject, $cfg, $is_required) {
                return new FactNumbersDifferenceValidationCommand($content, $subject, $cfg, $is_required);
            }
        );
    }
}
