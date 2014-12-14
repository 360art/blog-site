<?php

/*
 | --------------------------------
 | Single page
 | --------------------------------
 | Website single controller
 |
*/

$post = new TimberPost();

$theme->view('single-o_mnie', array(
	'post' => $post,
	'o_mnie' => Timber::get_posts(array(
		'post_type' => 'o_mnie',
	)),
));