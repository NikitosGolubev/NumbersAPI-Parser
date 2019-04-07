<?php
/**
 * JUST AN EXAMPLE. A TEMPLATE TO CREATE CONCRETE VALIDATIONAL COMMANDS FASTER.
 * @package App\Services\Validation\Commands\FieldValidationCommands
 */

namespace App\Services\Validation\Commands\FieldValidationCommands;

use App\Services\Validation\Commands\FieldValidationCommands\FieldValidationCommand;

/**
 * JUST AN EXAMPLE. A TEMPLATE TO CREATE CONCRETE VALIDATIONAL COMMANDS FASTER.
 */
class ExampleValidationCommand extends FieldValidationCommand {
    /*
     * !!! DELETE THIS COMMENT WHEN CREATE A CONCRETE COMMAND !!!
     * Take into account:
     * By default, you have (inheritated):
     * parent::content - given value, passed data to validate
     * parent::cfg - config which contains appropriate settings for validation
     * parent::isRequired - defines if field validation may be sometimes omitted or not
     * parent::fail($msg = '') - Method which says that validation ended negatively
     * $this->success($msg = '') - Method which says that validation ended positively
     */

    /**
     * Validates data.
     * @see Command::execute
     */
    public function execute() {
        // Your validation here
    }
}
