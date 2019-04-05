<?php

namespace App\Services\Validation\Commands\FieldValidationCommands;

use App\Services\Validation\Commands\Command;
use App\Services\Validation\ResponseResult;
use App\Services\Validation\ValidationResponse;

abstract class FieldValidationCommand implements Command, ResponseResult {
    protected $content;
    protected $cfg;
    protected $isRequired;
    private $subjectName;
    private $response;

    public function __construct(
        $content,
        String $subject_name,
        Array $cfg,
        $is_required = true
    ) {
        $this->content = $content;
        $this->subjectName = $subject_name;
        $this->cfg = $cfg;
        $this->isRequired = $is_required;
        $this->response = new ValidationResponse;
    }

    public function success($message = '') {
        return $this->response->build(true, $this->content, $this->subjectName, $message);
    }

    public function fail($message = '') {
        return $this->response->build(false, $this->content, $this->subjectName, $message);
    }
}
