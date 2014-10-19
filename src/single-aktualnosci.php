<?php

/*
 | --------------------------------
 | Single page
 | --------------------------------
 | Website single controller
 |
*/

// Posts

$args = array('post_type'=>'aktualnosci',
				'limit' => '3',
				'orderby' => 'date',
				'order' => 'DESC');
$aktualnosci = Timber::get_posts($args);

$theme->view('single-aktualnosci', array(
	'aktualnosci' => $aktualnosci,
));
