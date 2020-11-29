@extends('pages.layouts.app_master_frontend')
@section('style')
    <link rel="stylesheet" href="{{asset('css/home.css')}}">
@stop

@section('content')
    @include('pages.home.include._inc_banner')
    <h1>Nguyen Ba Thiet</h1>
@stop

@section('script')
    <script src="{{asset('js/home.js')}}"></script>
@stop
