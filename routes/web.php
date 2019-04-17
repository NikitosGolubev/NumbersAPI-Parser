<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'IndexController@index');

// Handling parse forms
Route::prefix('parse')->group(function () {
    Route::post('num-of-facts', 'Parsing\NumOfFactsController@index');
    Route::post('fact-num-in-range', 'Parsing\FactNumInRangeController@index');
    Route::post('particular-fact-numbers', 'Parsing\ParticularFactNumbersController@index');
});

// Handling https errors
Route::group(['as' => 'error.', 'prefix' => 'error'], function () {
    Route::get('403', 'ErrorsController@show403')->name('403');
    Route::get('404', 'ErrorsController@show404')->name('404');
    Route::get('520', 'ErrorsController@show520')->name('520');
});