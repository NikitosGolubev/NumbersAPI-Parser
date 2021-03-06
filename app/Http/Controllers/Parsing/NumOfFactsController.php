<?php

namespace App\Http\Controllers\Parsing;

use Illuminate\Http\Request;
use App\Http\Controllers\Parsing\FactsParsingController;
use App\Services\Validation\Commands\FieldValidationCommands\CategoryValidationCommand;
use App\Services\Validation\Commands\FieldValidationCommands\NumFactsToParseValidationCommand;

/**
 * Responsible for handling data of 'Number of facts to parse' form
 */
class NumOfFactsController extends FactsParsingController
{
    // Request params
    private $categoryPrm;
    private $numFactsToParsePrm;

    /**
     * @see parent::defineParams()
     */
    protected function defineParams() {
        $this->categoryPrm = $this->request->input('category');
        $this->numFactsToParsePrm = $this->request->input('num_facts');
    }

    /**
     * @see parent::setGeneralValidation()
     */
    protected function setGeneralValidation() {
        $this->setCategoryValidation();
        $this->setNumFactsToParseValidation();
    }

    /**
     * @see parent::prepareDataForParsing()
     */
    protected function prepareDataForParsing() {
        // Bringing categories to the right format
        $categories = $this->defineCategoriesArray($this->categoryPrm);
        $numbers = [];

        // Generating array with unique random numbers
        $i = 0;
        while ($i < $this->numFactsToParsePrm) {
            $rand_number = rand($this->cfg['MIN_FACT_NUMBER'], $this->cfg['MAX_FACT_NUMBER']);
            // if generated number is not unique(was generated before), than it's needed
            // to repeat generation process
            if (!in_array($rand_number, $numbers)) {
                $numbers[$i] = $rand_number;
                $i++;
            }
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
     * Sets validation for 'number of facts to parse' param
     */
    private function setNumFactsToParseValidation() {
        $content = $this->numFactsToParsePrm;
        $subject = $this->cfg['NUM_OF_FACTS_SUBJECT'];
        $is_required = true;

        $this->validator->setCommand(
            new NumFactsToParseValidationCommand($content, $subject, $this->cfg, $is_required)
        );
    }
}
