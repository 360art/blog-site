<?php

/*
 | --------------------------------
 | Single page
 | --------------------------------
 | Website single controller
 |
*/

$post = new TimberPost();
$type = $post->meta_typ_dokumentu;

$theme->view('single-aktualnosci', array(
	'post' => $post,
	'settings' => get_option('my_option_name'),
	'type' => $type,
	'aktualnosci' => Timber::get_posts(array(
		'post_type' => 'inspiracje',
		'orderby' => 'date',
		'meta_key' => 'meta_typ_dokumentu',
		'meta_value' => $type,
		'post__not_in' => array($post->ID),
		'order' => 'DESC'
	)),
));

