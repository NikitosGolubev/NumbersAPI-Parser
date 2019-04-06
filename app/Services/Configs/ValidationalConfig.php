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
            'DEFAULT_EMPTINESS_MESSAGE' => 'Empty! Provide appropriate data.'
        ];
    }
}
