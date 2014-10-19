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
));
