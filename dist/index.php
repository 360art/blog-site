<?php

/*
 | --------------------------------
 | Homepage
 | --------------------------------
 | Website homepage controller
 |
*/

$theme->view('index', array(
	'filtry' => Timber::get_posts(array(
		'post_type'=>'filtr'
	)),
	'aktualnosci' => Timber::get_posts(array(
		'post_type'=>'aktualnosci',
		'orderby' => 'date',
		'order' => 'DESC'
	)),
	'opinie' => Timber::get_posts(array(
		'post_type'=>'opinie',
		'limit' => '5',
		'orderby' => 'date',
		'order' => 'DESC'
	)),
	'pliki' => Timber::get_posts(array(
		'post_type'=>'inspiracje'
	)),
	'settings' => get_option('my_option_name'),
));
