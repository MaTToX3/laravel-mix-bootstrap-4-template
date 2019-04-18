const mix = require('laravel-mix');

mix
    .js([
        'src/js/app.js'
    ], 'dist/js/all.js')
    .sass('src/scss/app.scss', 'dist/css')
    .copy('*.html', 'dist')
    .copyDirectory('img', 'dist/img')
    .setPublicPath('dist');
