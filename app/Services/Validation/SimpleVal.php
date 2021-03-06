<?php
/**
 * @package App\Services\Validation
 */

namespace App\Services\Validation;

/**
 * Contains static API to perform simple but frequent validation operations
 */
class SimpleVal {
    /**
     * Verifies if provided data is empty or not.
     * @param  mixed  $value
     * @param  boolean $is_required Defines if provided data MAY be empty or not
     * @return boolean|integer If empty = true; If empty but not required = -1; If not empty = false;
     */
    public static function isEmpty($value, $is_required = true) {
        // if empty AND required
        if (!$value && $value !== "0" && $value !== 0 && $is_required) {
            return true;
        } elseif (!$value && $value !== "0" && $value !== 0) {
            // if empty AND NOT required
            return -1;
        } else {
            // if not empty
            return false;
        }
    }

    /**
     * Defines if provided data contains integer or is integer.
     * @param Mixed $value
     * @return boolean
     */
    public static function isInteger($value) {
        // If number given (not array, or text or smth else) AND
        // if this number is integer(not double for instance)
        return (is_numeric($value) && is_integer($value+ 0));
    }

    /**
     * Verifies if some value fits the particular limit
     * @param  Mixed  $value Usually a number.
     * @param  integer $min
     * @param  integer $max
     * @return boolean
     */
    public static function isFitLimit($value, $min = -INF, $max = INF) {
        return ($value >= $min && $value <= $max);
    }

    /**
     * Checks if given value is an array after JSON decoding.
     * @param  mixed  $value
     * @return boolean
     */
    public static function isJSONArray($value) {
        $to_json = json_decode($value);
        return (!is_null($to_json) && is_array($to_json));
    }

    /**
     * Checks if an array contains any duplicates.
     * @param  Array $arr
     * @return boolean
     */
    public static function hasDuplicatesInArr(Array $arr) {
        $without_duplicates = array_unique($arr);
        return (count($arr) !== count($without_duplicates));
    }
}
