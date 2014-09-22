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

$theme->view('index', array(
	'posts' => $posts,
));
