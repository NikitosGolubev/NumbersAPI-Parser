@extends('layouts.main')

@section('title', 'NumbersAPI Parser')

@section('page-description', 'Parsing facts from http://numbersapi.com/ to database')

@section('head-tags')
    <link rel="stylesheet" type="text/css" href="/{{ env('TEMPLATE_DIR') }}/css/main/pages/index.css" />
    <link rel="stylesheet" type="text/css" href="/{{ env('TEMPLATE_DIR') }}/css/main/media/pages/index.css" />
@endsection

@section('main')
    <div>
        <div>
            <div>
                <span>Choose the way to parse facts and load them to database:</span>
            </div>
            <div>
                <form name='get_particular_num_facts_form' method='' action=''>
                    @csrf
                    <div>
                        <div><span>1</span></div>
                        <div>
                            <select>
                                <option value=''>Category</option>
                                <option value='random'>Random</option>
                                <option value='trivia'>Trivia</option>
                                <option value='year'>Year</option>
                                <option value='date'>Date</option>
                                <option value='math'>Math</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" name="num_facts" placeholder="Number of facts" />
                        </div>
                        <div>
                            <input type='submit' name='get_num_facts' value='Parse' />
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <form name='get_facts_in_range_form' method='' action=''>
                    @csrf
                    <div>
                        <div><span>2</span></div>
                        <div>
                            <select>
                                <option value=''>Category</option>
                                <option value='random'>Random</option>
                                <option value='trivia'>Trivia</option>
                                <option value='year'>Year</option>
                                <option value='date'>Date</option>
                                <option value='math'>Math</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" name="from" placeholder="From:" />
                            <input type="text" name="to" placeholder="To:" />
                        </div>
                        <div>
                            <input type='submit' name='get_facts_in_range' value='Parse' />
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <form name='get_particular_facts_form' method='' action=''>
                    @csrf
                    <div>
                        <div><span>3</span></div>
                        <div>
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
                        <div>
                            <div>
                                <div>
                                    <input type="text" name="number_to_add" placeholder="Number:" />
                                </div>
                                <div>
                                    <input type="button" name="add_number" value="Add" />
                                </div>
                            </div>
                            <div>
                                <input type='submit' name='get_particular_facts' value='Parse' />
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