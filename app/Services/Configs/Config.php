<?php

namespace App\Services\Configs;

abstract class Config {
    protected $c;

    public function __construct() {
        $this->c = $this->init();
    }

    abstract protected function init();

    public function getConfig() {
        return $this->c;
    }
}
