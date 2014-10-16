<?php

/*
 | --------------------------------
 | Homepage
 | --------------------------------
 | Website homepage controller
 |
*/

// Posts
$posts = Timber::get_posts();

$args = array('post_type'=>'filtr');
$filtry = Timber::get_posts($args);

$args = array('post_type'=>'aktualnosci',
				'limit' => '3',
				'orderby' => 'date',
				'order' => 'DESC');
$aktualnosci = Timber::get_posts($args);

$args = array('post_type'=>'opinie',
				'limit' => '5',
				'orderby' => 'date',
				'order' => 'DESC');
$opinie = Timber::get_posts($args);

$args = array('post_type'=>'inspiracje');
$pliki = Timber::get_posts($args);

$settings =  get_option( 'my_option_name' );

$theme->view('index', array(
	'posts' => $posts,
	'filtry' => $filtry,
	'aktualnosci' => $aktualnosci,
	'opinie' => $opinie,
	'pliki' => $pliki,
	'settings' => $settings,
));
