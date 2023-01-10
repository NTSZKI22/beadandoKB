<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <!-- Styles -->
</head>

<body>

    <!-- React root DOM -->
    <div id="example">
    </div>

    <!-- React JS -->
    <script type="module" src="{{ asset('js/app.js') }}" defer></script>

</body>
</html>