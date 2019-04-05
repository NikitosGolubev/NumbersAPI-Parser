<?php

namespace App\Services\Validation\Commands\FieldValidationCommands;

use App\Services\Validation\Commands\FieldValidationCommands\FieldValidationCommand;

class ExampleValidationCommand extends FieldValidationCommand {
    /*
     * Take into account:
     * By default, you have (inheritated):
     * $this->content - given value, passed data
     * $this->cfg - config which contains appropriate settings for validation
     * $this->isRequired - defined if field may be empty or not
     * $this->fail($msg = '') - Method to say that validation failed
     * $this->success($msg = '') - Method to say that provided data compliant 
     */
    
    public function execute() {
        // Your validation here
    }
}
