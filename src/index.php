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

$args = array('post_type'=>'filtr', 'type' => 'excerpt');
$filtry = Timber::get_posts($args);

$theme->view('index', array(
	'posts' => $posts,
	'filtry' => $filtry,
));
