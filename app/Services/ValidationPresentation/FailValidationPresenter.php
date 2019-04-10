<?php
/**
 * @package App\Services\ValidationPresentation
 */
namespace App\Services\ValidationPresentation;

/**
 * Shows to user only failed validation data
 */
class FailValidationPresenter implements ValidationPresenter {
    /**
     * @see ValidationPresentation::display()
     */
    public function display(Array $val_results) {
        $json_result = ""; // result storage
        for ($i = 0; $i < count($val_results); $i++) {
            // getting all failed results, and encoding them into json
            if (!$val_results[$i]['result']) {
                $json_result .= json_encode($val_results[$i]);
            }
        }
        // showing user a result
        return view('responses.json', ['json' => $json_result, 'title' => 'Validation result']);
    }
}
