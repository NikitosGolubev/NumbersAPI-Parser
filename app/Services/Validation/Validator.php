<?php

namespace App\Services\Validation;

use \SplQueue;
use App\Services\Validation\Commands\Command;

class Validator {
    protected $commandsQueue;

    public function __construct() {
        $this->commandsQueue = new SplQueue;
    }

    public function setCommand(Command $command) {
        $this->commandsQueue->enqueue($command);
    }

    public function executeCommand(Command $command) {
        return $command->execute();
    }

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
