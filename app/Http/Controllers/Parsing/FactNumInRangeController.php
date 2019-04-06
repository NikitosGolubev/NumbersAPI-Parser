<?php

namespace App\Http\Controllers\Parsing;

use Illuminate\Http\Request;
use App\Http\Controllers\Parsing\ParseController;

/**
 * Responsible for handling data of 'Range of fact numbers to parse' form
 */
class FactNumInRangeController extends ParseController
{
    /**
     * @see parent::setGeneralValidation
     */
    protected function setGeneralValidation() {
        
    }
}
