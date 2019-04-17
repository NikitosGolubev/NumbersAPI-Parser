<?php
/**
 * @package App\Services\Configs
 */

namespace App\Services\Configs;

/**
 * Top Interface for all config classes
 */
abstract class Config {
    /**
     * Contains configurational settings
     * @var Array
     */
    protected $c;

    public function __construct() {
        $this->c = $this->init();
    }

    /**
     * Defines configurational storage
     * @return Array
     */
    abstract protected function init(): array;

    public function getConfig() {
        return $this->c;
    }
}
