@extends('layouts.main')

@section('title', 'NumbersAPI Parser')

@section('page-description', 'Parsing facts from http://numbersapi.com/ to database')

@section('head-tags')
    <link rel="stylesheet" type="text/css" href="/{{ env('TEMPLATE_DIR') }}/css/main/pages/index.css" />
    <link rel="stylesheet" type="text/css" href="/{{ env('TEMPLATE_DIR') }}/css/main/media/pages/index.css" />
@endsection

@section('main')
    <div class='forms_wrap'>
        <div class='forms'>
            <div class='forms__header'>
                <span>Choose the way to parse facts and load them to database:</span>
            </div>
            <div>
                <form class='js-num-of-facts-form' name='get_particular_num_facts_form' method='' action=''>
                    @csrf
                    <div class='particular-num-facts-form parsing-form form-grid'>
                    	<div class='form-grid__elem'>
                            <div class='field field_default parsing-form__number_wrap'>
                                <span class='parsing-form__number'>1</span>
                            </div>
                        </div>
                        <div class='form-grid__elem'>
                            <select class='js-num-of-facts-form__category select field_default'>
                                <option value=''>Category</option>
                                <option value='random'>Random</option>
                                <option value='trivia'>Trivia</option>
                                <option value='year'>Year</option>
                                <option value='date'>Date</option>
                                <option value='math'>Math</option>
                            </select>
                        </div>
                        <div class='form-grid__elem'>
                            <input class='js-num-of-facts-form__num-of-facts input field_default input_default' type="text" name="num_facts" placeholder="Number of facts" />
                        </div>
                        <div class='form-grid__elem'>
                            <input class='js-particular-num-facts-form__submit btn btn_primary' type='submit' name='get_num_facts' value='Parse' />
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <form class='js-fact-num-in-range-form' name='get_facts_in_range_form' method='' action=''>
                    @csrf
                    <div class='facts-in-range-form parsing-form form-grid'>
                    	<div class='form-grid__elem'>
                            <div class='field field_default parsing-form__number_wrap'>
                                <span class='parsing-form__number'>2</span>
                            </div>
                        </div> 
                        <div class='form-grid__elem'>
                            <select class='js-fact-num-in-range-form__category select field_default'>
                                <option value=''>Category</option>
                                <option value='random'>Random</option>
                                <option value='trivia'>Trivia</option>
                                <option value='year'>Year</option>
                                <option value='date'>Date</option>
                                <option value='math'>Math</option>
                            </select>
                        </div>
                        <div class='form-grid__elem'>
                            <input class='js-fact-num-in-range-form__from input field_default input_default' type="text" name="from" placeholder="From:" />
                        </div>
                        <div class='form-grid__elem'>
                            <input class='js-fact-num-in-range-form__to input field_default input_default' type="text" name="to" placeholder="To:" />
                        </div>
                        <div class='form-grid__elem'>
                            <input class='btn btn_primary' type='submit' name='get_facts_in_range' value='Parse' />
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <form class='js-particular-fact-numbers-form' name='get_particular_facts_form' method='' action=''>
                    @csrf
                    <div class='particular-facts-form parsing-form form-grid'>
                    	<div class='form-grid__elem'>
                            <div class='field field_default parsing-form__number_wrap'>
                                <span class='parsing-form__number'>3</span>
                            </div>
                        </div>
                        <div class='form-grid__elem'>
	                        <div class='numbers-storage field field_default'>
	                            <div class='js-numbers-storage__message'>
	                                Add some fact numbers:
	                            </div>
	                            <div class='js-particular-fact-numbers-form__numbers-storage-box numbers-storage__content'>
	                                <!--
                                        FACT NUMBERS STORAGE BOX
                                    -->
	                            </div>
	                        </div>
                            <input class='js-particular-fact-numbers-form__numbers-storage-field' type="hidden" name='numbers_storage' value='' />
	                    </div>
                        <div class='form-grid__elem'>
                            <div>
                                <div>
                                    <input class='js-particular-fact-numbers-form__fact-number-field input field_default input_default' type="text" name="number_to_add" placeholder="Number:" />
                                </div>
                                <div>
                                    <div class='js-particular-fact-numbers-form__add-fact-number btn btn_alternative'>Add</div>
                                </div>
                            </div>
                            <div>
                                <input class='input btn btn_primary particular-facts-form__parse-btn' type='submit' name='get_particular_facts' value='Parse' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@section('footer', '')

@section('scripts')
    <script src='/{{ env('TEMPLATE_DIR') }}/js/build/mvc-starters/forms-validation.js'></script>
@endsection