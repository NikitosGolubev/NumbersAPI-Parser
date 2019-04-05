<?php

namespace App\Http\Controllers\Parsing;

use Illuminate\Http\Request;
use App\Http\Controllers\Parsing\ParseController;
use App\Services\Validation\Commands\FieldValidationCommands\ValidateCategoryCommand;

class NumOfFactsController extends ParseController
{
    protected function defineValidation(Request $request) {
        return $this->categoryVal($request, 'category');
    }

    protected function categoryVal(Request $request, $name) {
    	$content = $request->input($name);
        $subject = $this->cfg['CATEGORY_SUBJECT'];
        $validation_result = $this->validator->executeCommand(
            new ValidateCategoryCommand($content, $subject, $this->cfg)
        );

        return $validation_result;
    }
}
