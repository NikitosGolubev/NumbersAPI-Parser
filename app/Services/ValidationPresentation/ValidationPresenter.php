<?php
/**
 * @package App\Services\ValidationPresentation
 */
namespace App\Services\ValidationPresentation;

/**
 * Informs user about validation results.
 */
interface ValidationPresenter {
    /**
     * Shows validation results to user.
     * @param Array $val_results Bunch of validation results
     * @return View Template which display data
     */
    public function display(Array $val_results);
}
