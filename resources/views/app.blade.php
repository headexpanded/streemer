<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta description="Streemer helps you control your energy cashflows to reduce large lump-sum energy bills">
        <meta name="theme-color" content="#ff006f"/>

        <title inertia>{{ config('app.name', 'Streemer') }}</title>

        <!-- Fonts -->
        {{-- <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap"> --}}
        
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
        <script src="{{asset('js/streemer_modal.js')}}"></script>
    </head>
    <body>
        @inertia
        
    </body>
</html>
