<?php
/**
 * Simpliest but COMMON form for providing validation result.
 * @package App\Services\Validation
 */

namespace App\Services\Validation;

class ValidationResponse {
    public function build($result, $value, $subject, $message) {
        return [
            "result" => $result,
            "value" => $value,
            "subject" => $subject,
            "message" => $message
        ];
    }
}
