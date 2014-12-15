<?php

/*
 | --------------------------------
 | Single page
 | --------------------------------
 | Website single controller
 |
*/

$post = new TimberPost();

$theme->view('single-omnie', array(
	'post' => $post,
	'omnie' => Timber::get_posts(array(
		'post_type' => 'omnie',
	)),
));