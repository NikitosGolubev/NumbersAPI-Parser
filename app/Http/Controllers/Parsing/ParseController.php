<?php

namespace App\Http\Controllers\Parsing;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Validation\Validator;
use App\Services\Configs\Concrete\Parsing\ParseConfig;

abstract class ParseController extends Controller
{
    protected $validator;
    protected $cfg;

    public function __construct() {
        $this->validator = new Validator;
        $this->cfg = (new ParseConfig)->getConfig();
    }

    public function index(Request $request) {
        $validation_result = $this->defineValidation($request);
        dd($validation_result);
    }

    public function setConfig(ParseConfig $cfg) {
        $this->cfg = $cfg->getConfig();
    }

    abstract protected function defineValidation(Request $request);
}
