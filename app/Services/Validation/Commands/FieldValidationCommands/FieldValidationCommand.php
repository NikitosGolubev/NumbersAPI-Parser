<?php
/**
 * @package App\Services\Validation\Commands\FieldValidationCommands
 */

namespace App\Services\Validation\Commands\FieldValidationCommands;

use App\Services\Validation\Commands\Command;
use App\Services\Validation\ResponseResult;
use App\Services\Validation\ValidationResponse;

/**
 * Abstract validational command to validate data from forms, requests, etc...
 * 
 * @uses App\Services\Validation\Commands\Command
 * @uses App\Services\Validation\ResponseResult
 * @uses App\Services\Validation\ValidationResponse
 */
abstract class FieldValidationCommand implements Command, ResponseResult {
    /**
     * Data which should be validated
     * @var mixed
     */
    protected $content;

    /**
     * Config for validation
     * @var Array
     */
    protected $cfg;

    /**
     * Defines if correct validation of data is always required or may oprionally be omitted
     * @var boolean
     */
    protected $isRequired;

    /**
     * Name of validated parameter. How to call it.
     * @var [type]
     */
    private $subjectName;

    /**
     * Object which is capable for building validation response
     * @var object
     */
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

    /**
     * Builds positive validational response
     * @param  string $message
     * @return ValidationResponse 
     */
    public function success($message = '') {
        return $this->response->build(true, $this->content, $this->subjectName, $message);
    }

    /**
     * Builds negative validational response
     * @param  string $message
     * @return ValidationResponse
     */
    public function fail($message = '') {
        return $this->response->build(false, $this->content, $this->subjectName, $message);
    }
}
