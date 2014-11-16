<?php

/*
 | --------------------------------
 | Single page
 | --------------------------------
 | Website single controller
 |
*/

$post = new TimberPost();

$theme->view('single-aktualnosci', array(
	'post' => $post,
	'settings' => get_option('my_option_name'),
	'type' => 'wpisy',
	'aktualnosci' => Timber::get_posts(array(
		'post_type' => 'aktualnosci',
		'orderby' => 'date',
		'post__not_in' => array($post->ID),
		'order' => 'DESC'
	)),
));

