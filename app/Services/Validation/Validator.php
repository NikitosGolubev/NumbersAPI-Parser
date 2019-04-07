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
     * @return SplQueue Queue of validation results.
     *     In the same order validational commands were set.
     */
    public function executeAllCommands() {
        $val_results_queue = new SplQueue;
        while (!$this->commandsQueue->isEmpty()) {
            $command = $this->commandsQueue->dequeue();
            $val_result = $command->execute();
            $val_results_queue->enqueue($val_result);
        }
        return $val_results_queue;
    }
}
