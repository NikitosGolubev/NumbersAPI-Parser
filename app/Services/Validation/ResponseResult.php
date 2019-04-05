<?php

namespace App\Services\Validation;

interface ResponseResult {
    public function success($message = '');
    public function fail($message = '');
}
