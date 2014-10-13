<?php

require_once 'includes/classes/jw_custom_posts.php';
require_once 'includes/classes/wordpressWrapper.php';
require_once 'includes/classes/theme.php';

$theme = new Theme(
	// Theme directory
	get_template_directory_uri(),
	// Theme data
	wp_get_theme(get_template_directory_uri())
);
