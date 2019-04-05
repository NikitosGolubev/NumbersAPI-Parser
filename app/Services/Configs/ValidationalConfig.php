<?php

namespace App\Services\Configs;

use App\Services\Configs\Config;

abstract class ValidationalConfig extends Config {
    protected function init() {
        return [
            'DEFAULT_SUCCESS_MESSAGE' => 'Looks good!',
            'DEFAULT_FAIL_MESSAGE' => 'Invalid!',
            'DEFAULT_EMPTINESS_MESSAGE' => 'Empty! Provide appropriate data.'
        ];
    }
}
