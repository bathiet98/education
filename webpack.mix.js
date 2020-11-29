const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);

//front-end
mix.sass('resources/assets/scss/pages/home/home.scss','public/css')
mix.js('resources/assets/js/pages/home/home.js','public/js')

mix.autoload({
    jquery: ['$', 'jQuery', 'window.jQuery'],
});

//Admin=====
//mix.sass('resources/assets/valex/scss/pages/admin_dashboard.scss','public/css_admin');

//Admin======
//mix.js('resources/assets/valex/js/pages/admin_dashboard.js','public/js_admin');

// mix.autoload({
//    jquery: ['$', 'jQuery', 'window.jQuery'],
// });
