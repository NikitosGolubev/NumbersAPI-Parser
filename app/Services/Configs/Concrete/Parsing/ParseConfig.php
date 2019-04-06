<?php

namespace App\Services\Configs\Concrete\Parsing;

use App\Services\Configs\ValidationalConfig;

/**
 * Defines config for parsing facts related to numbers.
 */
class ParseConfig extends ValidationalConfig {
    /**
     * @see Config::init
     */
    protected function init() {
        $c = parent::init();

        $c['CATEGORY_SUBJECT'] = 'CATEGORY PARAMETER';
        $c['NUM_OF_FACTS_SUBJECT'] = 'NUMBER OF FACTS TO PARSE';

        $c['CATEGORIES'] = ['random', 'trivia', 'year', 'date', 'math'];

        $c['MIN_NUM_TO_PARSE'] = 1;
        $c['MAX_NUM_TO_PARSE'] = 100;

        $c['MIN_FACT_NUMBER'] = 0;
        $c['MAX_FACT_NUMBER'] = 9999;

        $c['INVALID_CATEGORY_MESSAGE'] = "Provided category doesn't exist.";

        $c['INVALID_NUMBERS_GAP_MESSAGE'] = 
        "You can't parse less than ".$c['MIN_NUM_TO_PARSE'].
        " and more than ". $c['MAX_NUM_TO_PARSE']." facts at once.";

        $c['INVALID_FACT_NUMBER_LIMIT_MESSAGE'] = 
        "You can only provide numbers from ".$c['MIN_FACT_NUMBER'].
        " to ".$c['MAX_FACT_NUMBER'].".";

        $c['INVALID_FACT_NUMBER_TYPE_MESSAGE'] = "Only integers allowed.";

        return $c;
    }
}
