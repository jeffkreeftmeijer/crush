# Crush

Crushes internal stylesheets.

## Installation

    npm install jeffkreeftmeijer/crush

## Usage

    cat input.html | crush

``` html
<html>
  <head>
    <style>body{font:22px/1.6 system-ui,sans-serif;margin:auto;max-width:35em;padding:0 1em}</style>
  </head>
  <body>
    <h1>Hello world!</h1>
  </body>
</html>
```
