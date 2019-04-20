<?php

namespace App\Services\ComplexDbLoaders;

/**
 * Describes the api to load data to db
 * @package App\Services\ComplexDbLoaders
 */
interface DbLoader
{
    /**
     * Attempts to load data to DB if all conditions fulfilled.
     * @param $data
     * @return mixed
     */
    public function load($data);
}
