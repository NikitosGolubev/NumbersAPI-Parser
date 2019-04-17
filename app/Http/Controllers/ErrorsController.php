<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

/**
 * Responsible for displaying HTTP errors to user
 */
class ErrorsController extends Controller
{
    /**
     * Displays 403 HTTP response (FORBIDDEN).
     */
    public function show403() {
        // Sets settings to correctly display error data
        $error_data = [
            'code' => 403,
            'status' => 'FORBIDDEN',
            'message' => "You can't access this page. 
            You may try to use different request method
            or get rights which allow you to see the content."
        ];
        return view('errors.main', $error_data);
    }

    /**
     * Displays 404 HTTP response (NOT FOUND).
     */
    public function show404() {
        $error_data = [
            'code' => 404,
            'status' => 'NOT FOUND',
            'message' => ''
        ];

        return view('errors.main', $error_data);
    }

    /**
     * Displays 520 HTTP response (UNKNOWN ERROR).
     */
    public function show520() {
        $error_data = [
            'code' => 520,
            'status' => 'UNKNOWN ERROR',
            'message' => 'Just something went wrong. Try the same operation later.'
        ];

        return view('errors.main', $error_data);
    }
}
