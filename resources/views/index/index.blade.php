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
                <form name='get_particular_num_facts_form' method='' action=''>
                    @csrf
                    <div class='particular-num-facts-form parsing-form form-grid'>
                    	<div class='form-grid__elem'>
                            <div class='field field_default parsing-form__number_wrap'>
                                <span class='parsing-form__number'>1</span>
                            </div>
                        </div>
                        <div class='form-grid__elem'>
                            <select class='field field_default'>
                                <option value=''>Category</option>
                                <option value='random'>Random</option>
                                <option value='trivia'>Trivia</option>
                                <option value='year'>Year</option>
                                <option value='date'>Date</option>
                                <option value='math'>Math</option>
                            </select>
                        </div>
                        <div class='form-grid__elem'>
                            <input class='field field_default' type="text" name="num_facts" placeholder="Number of facts" />
                        </div>
                        <div class='form-grid__elem'>
                            <input class='field' type='submit' name='get_num_facts' value='Parse' />
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <form name='get_facts_in_range_form' method='' action=''>
                    @csrf
                    <div class='facts-in-range-form parsing-form form-grid'>
                    	<div class='form-grid__elem'>
                            <div class='field field_default parsing-form__number_wrap'>
                                <span class='parsing-form__number'>2</span>
                            </div>
                        </div> 
                        <div class='form-grid__elem'>
                            <select class='field field_default'>
                                <option value=''>Category</option>
                                <option value='random'>Random</option>
                                <option value='trivia'>Trivia</option>
                                <option value='year'>Year</option>
                                <option value='date'>Date</option>
                                <option value='math'>Math</option>
                            </select>
                        </div>
                        <div class='form-grid__elem'>
                            <input class='field field_default' type="text" name="from" placeholder="From:" />
                        </div>
                        <div class='form-grid__elem'>
                            <input class='field field_default' type="text" name="to" placeholder="To:" />
                        </div>
                        <div class='form-grid__elem'>
                            <input class='field' type='submit' name='get_facts_in_range' value='Parse' />
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <form name='get_particular_facts_form' method='' action=''>
                    @csrf
                    <div class='particular-facts-form parsing-form form-grid'>
                    	<div class='form-grid__elem'>
                            <div class='field field_default parsing-form__number_wrap'>
                                <span class='parsing-form__number'>3</span>
                            </div>
                        </div>
                        <div class='form-grid__elem'>
	                        <div class='field field_default'>
	                            <div>
	                                <div><span>Add something here...</span></div>
	                            </div>
	                            <div>
	                                <div><span>Particular fact numbers</span></div>
	                            </div>
	                            <div>
	                                <div>
	                                    <div><span>7832</span></div>
	                                    <button>X</button>
	                                </div>
	                                <div>
	                                    <div><span>34</span></div>
	                                    <button>X</button>
	                                </div>
	                                <div>
	                                    <div><span>5345</span></div>
	                                    <button>X</button>
	                                </div>
	                                <div>
	                                    <div><span>234</span></div>
	                                    <button>X</button>
	                                </div>
	                                <div>
	                                    <div><span>3242</span></div>
	                                    <button>X</button>
	                                </div>
	                                <div>
	                                    <div><span>654</span></div>
	                                    <button>X</button>
	                                </div>
	                                <div>
	                                    <div><span>21</span></div>
	                                    <button>X</button>
	                                </div>
	                                <div>
	                                    <div><span>7</span></div>
	                                    <button>X</button>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
                        <div class='form-grid__elem'>
                            <div>
                                <div>
                                    <input class='field field_default' type="text" name="number_to_add" placeholder="Number:" />
                                </div>
                                <div>
                                    <input class='field' type="button" name="add_number" value="Add" />
                                </div>
                            </div>
                            <div>
                                <input class='field' type='submit' name='get_particular_facts' value='Parse' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@section('footer', '')

@section('scripts', '')