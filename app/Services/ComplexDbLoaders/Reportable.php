<?php

namespace App\Services\ComplexDbLoaders;

/**
 * Describes the api of making reports on some data.
 * @package App\Services\ComplexDbLoaders
 */
interface Reportable
{
    /**
     * Builds report about something.
     * @param $data
     * @return array
     */
    public function report($data): array;
}
