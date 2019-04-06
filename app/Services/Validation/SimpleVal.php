<?php

namespace App\Services\Validation;

class SimpleVal {
    public static function isEmpty($value, $is_required = true) {
        if (!$value && $value !== "0" && $value !== 0 && $is_required) {
            return true;
        } elseif (!$value && $value !== "0" && $value !== 0) {
            return -1;
        } else {
            return false;
        }
    }

    public static function isInteger($value) {
        return (is_numeric($value) && is_integer($value+ 0));
    }

    public static function isFitLimit($value, $min = -INF, $max = INF) {
        return ($value >= $min && $value <= $max);
    } 
}
