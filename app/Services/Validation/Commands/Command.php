<?php
/**
 * @package App\Services\Validation\Commands
 */

namespace App\Services\Validation\Commands;

/**
 * Interface for creating commands. See "command" pattern.
 */
interface Command {
    /**
     * Method which executes command.
     */
    public function execute();
}
