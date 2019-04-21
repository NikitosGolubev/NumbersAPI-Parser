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
use App\Services\ComplexDbLoaders\ConcreteLoaders\DefaultFactAndNumberLoader;

/**
 * This is common controller for all parse requests.
 * It's abstract.
 * @uses Validator
 * @uses ParseConfig
 * @uses FailValidationPresenter
 * @uses Parser
 * @uses DefaultFactsParser
 * @uses DefaultFactAndNumberLoader
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

    /**
     * Object which would load parsed data in the database.
     * @var DbLoader
     */
    protected $dbLoader;
    protected $request;

    public function __construct() {
        $this->validator = new Validator;
        $this->cfg = (new ParseConfig)->getConfig();
        $this->parser = new DefaultFactsParser;
        $this->dbLoader = new DefaultFactAndNumberLoader;
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
     * Main parsing method.
     *
     * Template method which fully manages
     * the process of handling and parsing data passed with request.
     *
     * @param Request $request Data which user provided to perform parsing
     * @return array $reports Data that was parsed and loaded to DB
     */
    final public function index(Request $request) {
        $this->request = $request;
        // Defining params(data fields) which are expected to be passed
        $this->defineParams();
        // Setting validation for given data
        $this->setGeneralValidation();

        // Executing all validation commands that were set
        $val_results = $this->validator->executeAllCommands();
        // Getting general result of validation, whether it's success or failure.
        $generalValResult = $this->validator->getGeneralValidationResult($val_results);

        // If general result of validation is 'failure' than saying that to user.
        if (!$generalValResult) {
            $validation_presenter = new FailValidationPresenter;
            return $validation_presenter->display($val_results);
        }

        // Preparing data to correct format to make in compatible with parser
        $data_for_parsing = $this->prepareDataForParsing();
        // Adjusting some parser settings to make it's work more effective for our purposes and limits.
        $this->adjustParserSettings();
        // Parsing data, expected array [0 => [result1], 1 => [result2]...]
        $parsing_result = $this->parser->parse($data_for_parsing);

        // Will contain all the reports about loading parsed facts to DB
        $reports = [];
        if (!empty($parsing_result)) {
            foreach ($parsing_result as $fact) {
                // Attempting to load parsed fact to DB, getting report about out attempt.
                $report = $this->dbLoader->load($fact);
                $reports[] = $report;
            }
        } else $reports = false;

        // Displaying reports to user
        return view('parsing.report', ['reports' => $reports]);
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
