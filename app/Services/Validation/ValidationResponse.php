<?php
/**
 * @package App\Services\Validation
 */

namespace App\Services\Validation;

/**
 * Simpliest but COMMON way to provide validation result.
 */
class ValidationResponse {
    /**
     * Builds validation result.
     * @param  Boolean $result
     * @param  Mixed $value Given value by user
     * @param  String $subject Name of thing which is been validated.
     * @param  String $message Description of validation proccess.
     * @return Array
     */
    public function build($result, $value, $subject, $message) {
        return [
            "result" => $result,
            "value" => $value,
            "subject" => $subject,
            "message" => $message
        ];
    }
}
