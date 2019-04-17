<?php
/**
 * @author NikitosGolubev <ask.please@mail.ru>
 * @package App\Services\Validation
 */

namespace App\Services\Validation;

use \SplQueue;
use App\Services\Validation\Commands\Command;

/**
 * Validation manager.
 * 
 * It manages the validational commands, executes them and orders them to execute later.
 * Recommend to see what Command pattern is to quckier figure out how this system works.
 * 
 * @uses \SplQueue For ordering.
 * @uses App\Services\Validation\Commands\Command To set and implement validational commands.
 */
class Validator {
    /**
     * Validation commands queue (storage)
     * @var SplQueue
     */
    protected $commandsQueue;

    public function __construct() {
        $this->commandsQueue = new SplQueue;
    }

    /**
     * Method which adds validation command to queue, NOT executes it!
     * @param Command $command Validational command
     */
    public function setCommand(Command $command) {
        $this->commandsQueue->enqueue($command);
    }

    /**
     * Executes some validational command
     * @param  Command $command Validational command
     * @return mixed Validation result
     */
    public function executeCommand(Command $command) {
        return $command->execute();
    }

    /**
     * Executes all the commands from the queue. (Which user set before)
     * @return array of validation results.
     */
    public function executeAllCommands(): array {
        $val_results = [];
        while (!$this->commandsQueue->isEmpty()) {
            $command = $this->commandsQueue->dequeue();
            $exec_result = $command->execute();
            $val_results[] = $exec_result;
        }
        return $val_results;
    }

    /**
     * Finds the common result for validations.
     * @param  array $validation_results Validations performed.
     * @return Boolean
     */
    public function getGeneralValidationResult(Array $validation_results) {
        /*
          If all validations had gone well, than general result is true,
          if at least one of them failed, than general result is false.
         */
        $generalValResult = true;
        for ($i = 0; $i < count($validation_results); $i++) {
            if (!$validation_results[$i]['result']) {
                $generalValResult = false;
                break;
            }
        }
        return $generalValResult;
    }
}
