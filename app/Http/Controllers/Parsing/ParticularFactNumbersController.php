<?php

namespace App\Http\Controllers\Parsing;

use Illuminate\Http\Request;
use App\Http\Controllers\Parsing\FactsParsingController;
use App\Services\Validation\Commands\FieldValidationCommands\FactNumbersStorageValidationCommand;

/**
 * Responsible for handling data of 'Particular fact numbers to parse' form
 */
class ParticularFactNumbersController extends FactsParsingController
{
    // Request params
    private $numbersStoragePrm;

    /**
     * @see parent::defineParams()
     */
    protected function defineParams() {
        $this->numbersStoragePrm = $this->request->input('numbers_storage');
    }

    /**
     * @see parent::setGeneralValidation()
     */
    protected function setGeneralValidation() {
        $this->setNumbersStorageValidation();
    }

    /**
     * @see parent::prepareDataForParsing()
     */
    protected function prepareDataForParsing()
    {
        $category = $this->defineCategoriesArray('random');
        $numbers = json_decode($this->numbersStoragePrm); // Getting array from JSON

        // Assigning categories to numbers and getting appropriate parsing data
        $data_to_parse = $this->linkNumbersWithRandomCategories($numbers, $category);

        return $data_to_parse;
    }

    /**
     * Sets validation for 'chosen numbers to parse' param
     */
    private function setNumbersStorageValidation() {
        $content = $this->numbersStoragePrm;
        $subject = 'Storage for chosen numbers';
        $is_required = true;

        $this->validator->setCommand(
            new FactNumbersStorageValidationCommand($content, $subject, $this->cfg, $is_required)
        );
    }
}
