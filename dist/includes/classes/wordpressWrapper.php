<?php

/**
* Theme Helper
*/
abstract class WordpressWrapper
{

	/**
	 * Deregister scripts form Wordpress
	 * @param  array  $items List of names
	 */
	public function deregister($type, $items = array())
	{

		foreach ($items as $item) {
			call_user_func("wp_deregister_{$type}", $item);
		}

	}

	/**
	 * Register and enqueue scripts or styles
	 * @param  String $type  Register type
	 * @param  array  $items List of items to register and enqueue
	 */
	public function register($type, $items = array())
	{

		// Register each item
		foreach ($items as $item => $settings) {

			// If there is no dependences use empty array
			$dependences = (isset($settings['dependences'])) ? $settings['dependences'] : array();

			// If there is no register place specifed,
			// use true for placing in footer
			$place = (isset($settings['footer'])) ? $settings['footer'] : 'screen';

			// Soome creepy switch for style type
			// for diffrent last argument
			// Need improvments
			if ($type === 'style') $place = 'screen';

			call_user_func("wp_register_{$type}",
				$item,
				"{$this->dir}/{$settings['path']}",
				$dependences,
				$this->meta->version,
				$place
			);

		}

		// Enqueue each item
		foreach ($items as $item => $key) {
			call_user_func("wp_enqueue_{$type}", $item);
		}

	}


	public function actions($actions = array())
	{
		foreach ($actions as $function => $callback) {
			add_action($function, $this->byMethod($callback));
		}
	}


	public function byMethod($method)
	{
		return array(&$this, $method);
	}


}
