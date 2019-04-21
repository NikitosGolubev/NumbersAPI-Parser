@extends('layouts.main')

@section('title', 'Parsing Report - NumbersAPI Parser')

@section('page-description', 'Parsing report from http://numbersapi.com/')

@section('head-tags')
    <link href="/{{ env('TEMPLATE_DIR') }}/css/main/pages/report.css" type="text/css" rel="stylesheet" />
@endsection

@section('main')
    <div class="report">
        <h3>Parsing report:</h3>
        <div><a class="link" href="/">Return to main page</a></div>
        @if ($reports)
            <table class="report__table" cellpadding="0" cellspacing="0" border="1">
                <tr>
                    <td class="report__header">
                        Number
                    </td>
                    <td class="report__header">
                        Category
                    </td>
                    <td class="report__header">
                        Accomplishment message
                    </td>
                    <td class="report__header">
                        Fact
                    </td>
                </tr>
            @foreach($reports as $report)
                <tr>
                    <td class="report__td">
                        @if ($report['result'])
                            <span class="report__number_success">{{ $report['number'] }}</span>
                        @else
                            <span class="report__number_error">{{ $report['number'] }}</span>
                        @endif
                    </td>
                    <td class="report__td">
                        <span class="report__category">{{ $report['category'] }}</span>
                    </td>
                    <td class="report__td">
                        @if ($report['result'])
                            <span class="report__message report__message_success">Successfully parsed to DB!</span>
                        @elseif (!$report['isFound'])
                            <span class="report__message report__message_error">Not Found at numbersapi.com!</span>
                        @elseif (!$report['isUnique'])
                            <span class="report__message report__message_error">This fact is already loaded to DB!</span>
                        @endif
                    </td>
                    <td class="report__td">
                        @if ($report['isFound'])
                            <span class="report__fact">{{ $report['fact'] }}</span>
                        @else
                            <span class="report__fact">-</span>
                        @endif
                    </td>
                </tr>
            @endforeach
            </table>
            <p class="centered">
                <a class="link" href="/">Return to main page</a>
            </p>
        @else
            <p class="centered text_big-sz">Something went wrong.<br /> Nothing were parsed :(</p>
        @endif
    </div>
@endsection

@section('footer', '')

@section('scripts', '')