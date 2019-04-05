@extends('layouts.main')

@section('title', $code.' '.$status)
@section('page-description', 'Error response page')

@section('head-tags')
    <link rel="stylesheet" type="text/css" href="/{{ env('TEMPLATE_DIR') }}/css/main/pages/errors.css" />
@endsection

@section('main')
    <div class='error-response'>
        <div class='error-response__code'>{{ $code }}</div>
        <div class='error-response__short-message'>{{ $status }}</div>
        <div class='error-response__full-message'><mark>{{ $message }}</mark></div>   
        <div class='error-response__link'>
        	<a href='/' class='link'>Return to main page</a>
        </div>
    </div>
@endsection

@section('footer', '')

@section('scripts', '')
