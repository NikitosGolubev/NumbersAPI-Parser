<?php

namespace App\Http\Controllers\Parsing;

use Illuminate\Http\Request;
use App\Http\Controllers\Parsing\ParseController;
use App\Services\Validation\Commands\FieldValidationCommands\ValidateCategoryCommand;
use App\Services\Validation\Commands\FieldValidationCommands\NumFactsToParseValidationCommand;

/**
 * Responsible for handling data of 'Number of facts to parse' form
 */
class NumOfFactsController extends ParseController
{
    /**
     * @see parent::setGeneralValidation
     */
    protected function setGeneralValidation() {

        $this->setCategoryValidation();
        $this->setNumFactsToParseValidation();
        
    }

    /**
     * Sets validation for 'category' field
     */
    private function setCategoryValidation() {
        $this->setParamValidation(
            'category',
            $this->cfg['CATEGORY_SUBJECT'],
            function ($content, $subject, $cfg, $is_required) {
                return new ValidateCategoryCommand($content, $subject, $cfg, $is_required);
            }
        );
    }

    /**
     * Sets validation for 'number of facts to parse' field
     */
    private function setNumFactsToParseValidation() {
        $this->setParamValidation(
            'num_facts',
            $this->cfg['NUM_OF_FACTS_SUBJECT'],
            function ($content, $subject, $cfg, $is_required) {
                return new NumFactsToParseValidationCommand($content, $subject, $cfg, $is_required);
            }
        );
    }
}
