<?php

namespace App\Http\Controllers\Parsing;

use \Closure;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Validation\Validator;
use App\Services\Configs\Concrete\Parsing\ParseConfig;

/**
 * This is common controller for all parse requests.
 * It's abstract.
 */
abstract class ParseController extends Controller
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
    protected $request;

    public function __construct() {
        $this->validator = new Validator;
        $this->cfg = (new ParseConfig)->getConfig();
    }

    /**
     * @todo Complete development of this method and document it.
     */
    public function index(Request $request) {
        $this->request = $request;
        $validation_result = $this->setGeneralValidation($request);

        $results_queue = $this->validator->executeAllCommands();
        while (!$results_queue->isEmpty()) {
            var_dump($results_queue->dequeue());
        }
    }

    public function setConfig(ParseConfig $cfg) {
        $this->cfg = $cfg->getConfig();
    }

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
     * Sets the validation command for particular data BY IT'S PARAM NAME.
     * 
     * @param String  $param_name Name of param to fetch its data from request
     * @param String  $subject Short description of subject which is needed to be validated
     * @param Closure $create_validation_command Creates command to validate some data.
     * @param boolean $is_required Defines if given data is required to go further or not
     */
    protected function setParamValidation(
        $param_name,
        $subject,
        Closure $create_validation_command,
        $is_required = true
    ) {
        $content = $this->request->input($param_name);
        $this->validator->setCommand(
            $create_validation_command($content, $subject, $this->cfg, $is_required)
        );
    }

    /**
     * Sets the validation command for particular data PROVIDED BY CLIENT.
     * 
     * @param Mixed $content Data which needed to be validated
     * @param String  $subject Short description of subject which is needed to be validated
     * @param Closure $create_validation_command Creates command to validate some data.
     * @param boolean $is_required Defines if given data is required to go further or not
     */
    protected function setDataValidation(
        $content,
        $subject,
        Closure $create_validation_command,
        $is_required = true
    ) {
        $this->validator->setCommand(
            $create_validation_command($content, $subject, $this->cfg, $is_required)
        );
    }
}
