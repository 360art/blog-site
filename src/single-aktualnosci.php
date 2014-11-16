<?php

/*
 | --------------------------------
 | Single page
 | --------------------------------
 | Website single controller
 |
*/

$theme->view('single-aktualnosci', array(
	'post' => new TimberPost(),
	'settings' => get_option('my_option_name'),

	'aktualnosci' => Timber::get_posts(array(
		'post_type'=>'aktualnosci',
		'limit' => '3',
		'orderby' => 'date',
		'order' => 'DESC'
	)),
));

