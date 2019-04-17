<?php

namespace App\Http\Controllers\Parsing;

use \Closure;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Validation\Validator;
use App\Services\Configs\Concrete\Parsing\ParseConfig;
use App\Services\ValidationPresentation\FailValidationPresenter;
use App\Services\Parsing\Parser;
use App\Services\Parsing\DefaultFactsParser;

/**
 * This is common controller for all parse requests.
 * It's abstract.
 */
abstract class FactsParsingController extends Controller
{
    /**
     * @var Validator Thing which provides api to run validation commands.
     */
    protected $validator;

    /**
     * Provides array with different settings needed to establish the proccess of handling data
     * @var Config 
     */
    protected $cfg;

    /**
     * Provides object which can perform parsing
     * @var Parser
     */
    protected $parser;
    protected $request;

    public function __construct() {
        $this->validator = new Validator;
        $this->cfg = (new ParseConfig)->getConfig();
        $this->parser = new DefaultFactsParser;
    }

    public function setConfig(ParseConfig $cfg) {
        $this->cfg = $cfg->getConfig();
    }

    /**
     * @param Parser $parser
     */
    public function setParser(Parser $parser): void
    {
        $this->parser = $parser;
    }

    /**
     * @todo Complete development of this method and document it.
     */
    final public function index(Request $request) {
        $this->request = $request;
        $this->defineParams();
        $this->setGeneralValidation();

        $val_results = $this->validator->executeAllCommands();
        $generalValResult = $this->validator->getGeneralValidationResult($val_results);

        if (!$generalValResult) {
            $validation_presenter = new FailValidationPresenter;
            return $validation_presenter->display($val_results);
        }

        $data_for_parsing = $this->prepareDataForParsing();
        $this->adjustParserSettings();
        $parsing_result = $this->parser->parse($data_for_parsing);
        dd($parsing_result);
    }

    /**
     * Defines the data which supposed to be passed with request.
     * @return Void
     */
    abstract protected function defineParams();

    /**
     * Sets validation commands for provided data.
     *
     * If user has passed the certain data, than this method
     * defines how the params of data should be called and
     * how it should be validated.
     *
     * @return Void
     */
    abstract protected function setGeneralValidation();

    /**
     * Prepares data for parsing.
     * @return mixed Data, which may be send for parsing.
     */
    abstract protected function prepareDataForParsing();

    /**
     * Empty method, which may be overridden to adjust the parsing settings.
     * (usually through setters).
     */
    protected function adjustParserSettings() { /* May be overridden */ }

    /**
     * Assigns category randomly to each given number.
     *
     * @param array $numbers What to parse: [1,324,3....]
     * @param array $categories Which categories are allowed: ['animals', 'birds'...]
     * @return array [['category' => $fact_category, 'number' => $fact_number] ...]
     */
    protected function linkNumbersWithRandomCategories(Array $numbers, Array $categories) {
        // Number of categories passed
        $num_categories = count($categories);
        $numbers_with_categories_arr = [];

        // looping through all passed numbers
        for ($i = 0; $i < count($numbers); $i++) {
            // If 1 single category passed, than it's pointless to use rand() func
            if ($num_categories === 1) {
                $numbers_with_categories_arr[] = [
                    "category" => $categories[0],
                    "number" => $numbers[$i]
                ];
            } else {
                // if more than 1 categories provided, so randomly picking them
                $rand_category_index = rand(0, ($num_categories - 1));
                $rand_category = $categories[$rand_category_index];

                $numbers_with_categories_arr[] = [
                    "category" => $rand_category,
                    "number" =>$numbers[$i]
                ];
            }
        }

        return $numbers_with_categories_arr;
    }

    /**
     * Prepares provided category data to single format.
     * @param string|array $categories Single category or array of categories expected.
     * @return array
     */
    protected function defineCategoriesArray($categories) {
        $result = []; // will contain final result

        // here only real categories would be stored, particular ones.
        $only_concrete_categories = $this->cfg['CATEGORIES'];
        // Finding random category
        // Random category means: ANY OF CONCRETE EXISTING CATEGORIES
        $random_category_index = array_search('random', $only_concrete_categories, true);
        // Cutting of "random" category, now we have only concrete onces
        array_splice($only_concrete_categories, $random_category_index, 1);

        // If array with categories provided
        if (is_array($categories)) {
            // If there is a random cat. inside, than all the concrete cats. may be used
            if (in_array('random', $categories)) {
                $result = $only_concrete_categories;
            } else $result = $categories; // if not, than everything is valid
        } elseif ($categories === "random") {
            // Remind about that "random" means any of concrete cats.
            $result = $only_concrete_categories;
        } else {
            // If single category given as string, than pack it in array.
            $result[] = $categories;
        }

        return $result;
    }
}
