<?php

namespace App\Http\Controllers\Parsing;

use Illuminate\Http\Request;
use App\Http\Controllers\Parsing\FactsParsingController;
use App\Services\Validation\Commands\FieldValidationCommands\CategoryValidationCommand;
use App\Services\Validation\Commands\FieldValidationCommands\FactNumberValidationCommand;
use App\Services\Validation\Commands\FieldValidationCommands\FactNumbersDifferenceValidationCommand;

/**
 * Responsible for handling data of 'Range of fact numbers to parse' form
 */
class FactNumInRangeController extends FactsParsingController
{
    // Request params
    private $categoryPrm;
    private $fromFactNumberPrm;
    private $toFactNumberPrm;

    /**
     * @see parent::defineParams()
     */
    protected function defineParams() {
        $this->categoryPrm = $this->request->input('category');
        $this->fromFactNumberPrm = $this->request->input('from');
        $this->toFactNumberPrm = $this->request->input('to');
    }

    /**
     * @see parent::setGeneralValidation()
     */
    protected function setGeneralValidation() {
        $this->setCategoryValidation();
        $this->setFromFactNumberValidation();
        $this->setToFactNumberValidation();
        $this->setFactNumbersDifferenceValidation();
    }

    /**
     * @see parent::prepareDataForParsing()
     */
    protected function prepareDataForParsing()
    {
        // Bringing categories to the right format
        $categories = $this->defineCategoriesArray($this->categoryPrm);
        $numbers = [];

        // Defining which $from and $to points depend on which param is greater
        // If "a" param is greater than "b", than "b" is "from" and "a" is "to"
        if ($this->fromFactNumberPrm > $this->toFactNumberPrm) {
            $from = $this->toFactNumberPrm;
            $to = $this->fromFactNumberPrm;
        } else {
            $from = $this->fromFactNumberPrm;
            $to = $this->toFactNumberPrm;
        }

        // Filling numbers array with content
        while ($from <= $to) {
            $numbers[] = $from;
            $from++;
        }

        // Assigning categories to numbers and getting appropriate parsing data
        $data_to_parse = $this->linkNumbersWithRandomCategories($numbers, $categories);

        return $data_to_parse;
    }

    /**
     * Sets validation for 'category' param
     */
    private function setCategoryValidation() {
        $content = $this->categoryPrm;
        $subject = $this->cfg['CATEGORY_SUBJECT'];
        $is_required = true;

        $this->validator->setCommand(
            new CategoryValidationCommand($content, $subject, $this->cfg, $is_required)
        );
    }

    /**
     * Sets validation for 'parse facts FROM fact number' param
     */
    private function setFromFactNumberValidation() {
        $content = $this->fromFactNumberPrm;
        $subject = '"FROM" fact number';
        $is_required = true;

        $this->validator->setCommand(
            new FactNumberValidationCommand($content, $subject, $this->cfg, $is_required)
        );
    }

    /**
     * Sets validation for 'parse facts TO fact number' param
     */
    private function setToFactNumberValidation() {
        $content = $this->toFactNumberPrm;
        $subject = '"TO" fact number';
        $is_required = true;

        $this->validator->setCommand(
            new FactNumberValidationCommand($content, $subject, $this->cfg, $is_required)
        );
    }

    /**
     * Validates difference btw given numbers
     */
    private function setFactNumbersDifferenceValidation() {
        $content = ['from' => $this->fromFactNumberPrm, 'to' => $this->toFactNumberPrm];
        $subject = 'Difference btw "FROM" and "TO" fact numbers';

        $this->validator->setCommand(
            new FactNumbersDifferenceValidationCommand($content, $subject, $this->cfg)
        );
    }
}
