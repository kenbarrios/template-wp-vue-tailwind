<?php

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('main-styles', get_template_directory_uri() . '/dist/styles/index.css', [], filemtime(get_template_directory() . '/dist/styles/index.css'), false);

    wp_register_script('/scripts/manifest.js', get_template_directory_uri() . '/dist/scripts/manifest.js', [], filemtime(get_template_directory() . '/dist/scripts/manifest.js'), true);
    wp_register_script('/scripts/vendor.js', get_template_directory_uri() . '/dist/scripts/vendor.js', ['/scripts/manifest.js'], filemtime(get_template_directory() . '/dist/scripts/vendor.js'), true);

    wp_enqueue_script('/scripts/index.js', get_template_directory_uri() . '/dist/scripts/index.js', ['/scripts/manifest.js', '/scripts/vendor.js'], filemtime(get_template_directory() . '/dist/scripts/index.js'), true);
});