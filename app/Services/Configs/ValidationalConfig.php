<?php

namespace App\Services\Configs;

use App\Services\Configs\Config;

/**
 * Defines default settings for any validation possible.
 */
abstract class ValidationalConfig extends Config {
    /**
     * @see Config::init
     */
    protected function init(): Array {
        return [
            'DEFAULT_SUCCESS_MESSAGE' => 'Looks good!',
            'DEFAULT_FAIL_MESSAGE' => 'Invalid!',
            'DEFAULT_EMPTINESS_MESSAGE' => 'Empty! Provide appropriate data.',
            'INTEGERS_ONLY_MESSAGE' => "Only integers allowed.",
            'JSON_ARRAY_ONLY_MESSAGE' => "You may provide only JSON encoded array.",
            'NOT_UNIQUE_VALUES_MESSAGE' => "Duplicates are not allowed. Provide only unique values."
        ];
    }
}
