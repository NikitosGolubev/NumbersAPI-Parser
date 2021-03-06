<?php
/**
 * @package App\Services\Validation 
 */

namespace App\Services\Validation;

/**
 * Interface for building validation response.
 * It may be whether positive or negative.
 */
interface ResponseResult {
    /**
     * Builds successful validation response
     * @param  string $message
     */
    
    public function success($message = '');
    /**
     * Builds failure validation response
     * @param  string $message
     */
    public function fail($message = '');
}
