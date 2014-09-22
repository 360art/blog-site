<?php

class Theme extends WordpressWrapper
{

	/**
	 * Theme directory
	 * @var String
	 */
	protected $dir;


	/**
	 * Theme meta data
	 * @var Array
	 */
	protected $meta;


	/**
	 * Data collection for views
	 * @var Array
	 */
	protected $collection;


	/**
	 * Rendering view
	 * @param  String $view View name
	 * @param  Array $data Data passed to view
	 * @return Bool/String Compiled view
	 */
	public function view($view, $data)
	{
		return Timber::render(array("views/{$view}.twig"), $this->prepare($data));
	}


	/**
	 * Prepare collection for view
	 * @param  Array $data Source data
	 * @return Array       Prapared data collection for view
	 */
	public function prepare($data)
	{

		// Set current context
		$this->collection = Timber::get_context();
		$this->collection['pagination'] = Timber::get_pagination();

		// Add to collection passed data
		foreach ($data as $key => $value) {
			$this->collection[$key] = $value;
		}

		// Return prepared collection
		return $this->collection;

	}

	public function enqueueScripts($ver)
	{

		// Register and enqueue styles
		$this->register('style', array(
			'wsip' => array(
				'path' => 'css/styles.min.css'
			)
		));

		// Deregister
		$this->deregister('script', array(
			'jquery'
		));

		// Register and enqueue scripts
		$this->register('script', array(
			'jquery' => array(
				'path' => 'js/vendor/jquery.min.js',
				'footer' => true
			),
			'modernizr' => array(
				'path' => 'js/vendor/modernizr.js',
				'footer' => false
			),
			'bootstrap' => array(
				'path' => 'js/vendor/bootstrap.min.js',
				'dependences' => array('jquery'),
				'footer' => true
			),
			'scripts' => array(
				'path' => 'js/scripts.min.js',
				'dependences' => array('jquery', 'modernizr', 'bootstrap'),
				'footer' => true
			)
		));

	}


	public function createPostypes()
	{

	}


	public function createTaxonomies()
	{

	}


	public function createMetaboxes()
	{

	}

	/**
	 * Setup diffrent
	 * wordpress settings
	 */
	public function init()
	{

		$this->actions(array(
			'wp_enqueue_scripts' => 'enqueueScripts'
		));

		$this->createPostypes();
		$this->createTaxonomies();
		$this->createMetaboxes();

		// Disable admin bar on website
		add_filter('show_admin_bar', '__return_false');
		// Enable links
		add_filter('pre_option_link_manager_enabled', '__return_true');
		// Remove autop
		add_filter('the_content', 'wpautop');
		// Add support for post thumbnails
		add_theme_support('post-thumbnails');
		// Enable menus
		add_theme_support('menus');
		// Add site styles to WYSIG editor
		add_editor_style(array('css/styles.min.css'));

	}


	function __construct($dir, $meta)
	{

		$this->dir = $dir;
		$this->meta = $meta;

		$this->init();

	}

}
