<?php
class MySettingsPage
{
    /**
     * Holds the values to be used in the fields callbacks
     */
    private $options;

    /**
     * Start up
     */
    public function __construct()
    {
        add_action( 'admin_menu', array( $this, 'add_plugin_page' ) );
        add_action( 'admin_init', array( $this, 'page_init' ) );
    }

    /**
     * Add options page
     */
    public function add_plugin_page()
    {
        // This page will be under "Settings"
        add_options_page(
            'Settings Admin',
            'Ustawienia strony',
            'manage_options',
            'my-setting-admin',
            array( $this, 'create_admin_page' )
            );
    }

    /**
     * Options page callback
     */
    public function create_admin_page()
    {
        // Set class property
        $this->options = get_option( 'my_option_name' );
        ?>
        <div class="wrap">
            <?php screen_icon(); ?>
            <h2>Ustawienia strony</h2>
            <form method="post" action="options.php">
                <?php
                // This prints out all hidden setting fields
                settings_fields( 'my_option_group' );
                do_settings_sections( 'my-setting-admin' );
                submit_button();
                ?>
            </form>
        </div>
        <?php
    }

    /**
     * Register and add settings
     */
    public function page_init()
    {
        register_setting(
            'my_option_group', // Option group
            'my_option_name', // Option name
            array( $this, 'sanitize' ) // Sanitize
            );

///////
        add_settings_section(
            'setting_section_id', // ID
            'Dane podstawowe', // Title
            array( $this, 'print_section_info' ), // Callback
            'my-setting-admin' // Page
            );

        add_settings_field(
            'e_mail_id', // ID
            'E-mail', // Title
            array( $this, 'e_mail_id_callback' ), // Callback
            'my-setting-admin', // Page
            'setting_section_id' // Section
            );

        add_settings_field(
            'twitter_id', // ID
            'Twitter', // Title
            array( $this, 'twitter_id_callback' ), // Callback
            'my-setting-admin', // Page
            'setting_section_id' // Section
            );

        add_settings_field(
            'skype_id', // ID
            'Skype', // Title
            array( $this, 'skype_id_callback' ), // Callback
            'my-setting-admin', // Page
            'setting_section_id' // Section
            );

        add_settings_field(
            'facebook_id', // ID
            'Facebook', // Title
            array( $this, 'facebook_id_callback' ), // Callback
            'my-setting-admin', // Page
            'setting_section_id' // Section
            );

        add_settings_field(
            'telefon_id',
            'Telefon',
            array( $this, 'telephone_callback' ),
            'my-setting-admin',
            'setting_section_id'
            );

////////
        // add_settings_section(
        //     'buttons_id', // ID
        //     'Przyciski', // Title
        //     array( $this, 'print_section_info' ), // Callback
        //     'my-setting-admin' // Page
        //     );

        // add_settings_field(
        //     'down_link_id', // ID
        //     'Link do "Pobierz wszystko"', // Title
        //     array( $this, 'down_link_id_callback' ), // Callback
        //     'my-setting-admin', // Page
        //     'buttons_id' // Section
        //     );
////////
    }

    /**
     * Sanitize each setting field as needed
     *
     * @param array $input Contains all settings fields as array keys
     */
    public function sanitize( $input )
    {
        $new_input = array();
        if( isset( $input['e_mail_id'] ) )
            $new_input['e_mail_id'] = sanitize_text_field( $input['e_mail_id'] );

        if( isset( $input['telefon_id'] ) )
            $new_input['telefon_id'] = sanitize_text_field( $input['telefon_id'] );

        if( isset( $input['twitter_id'] ) )
            $new_input['twitter_id'] = sanitize_text_field( $input['twitter_id'] );

        if( isset( $input['skype_id'] ) )
            $new_input['skype_id'] = sanitize_text_field( $input['skype_id'] );

        if( isset( $input['facebook_id'] ) )
            $new_input['facebook_id'] = sanitize_text_field( $input['facebook_id'] );

        // if( isset( $input['down_link_id'] ) )
        //     $new_input['down_link_id'] = sanitize_text_field( $input['down_link_id'] );

        return $new_input;
    }

    /**
     * Print the Section text
     */
    public function print_section_info()
    {
        //print 'Wprowadź swoje ustawienia:';
    }

    /**
     * Get the settings option array and print one of its values
     */
    public function e_mail_id_callback()
    {
        printf(
            '<input type="text" id="e_mail_id" name="my_option_name[e_mail_id]" value="%s" />',
            isset( $this->options['e_mail_id'] ) ? esc_attr( $this->options['e_mail_id']) : ''
            );
    }

     /**
     * Get the settings option array and print one of its values
     */
    public function twitter_id_callback()
    {
        printf(
            '<input type="text" id="twitter_id" name="my_option_name[twitter_id]" value="%s" />',
            isset( $this->options['twitter_id'] ) ? esc_attr( $this->options['twitter_id']) : ''
            );
    }

     /**
     * Get the settings option array and print one of its values
     */
    public function skype_id_callback()
    {
        printf(
            '<input type="text" id="skype_id" name="my_option_name[skype_id]" value="%s" />',
            isset( $this->options['skype_id'] ) ? esc_attr( $this->options['skype_id']) : ''
            );
    }

     /**
     * Get the settings option array and print one of its values
     */
    public function facebook_id_callback()
    {
        printf(
            '<input type="text" id="facebook_id" name="my_option_name[facebook_id]" value="%s" />',
            isset( $this->options['facebook_id'] ) ? esc_attr( $this->options['facebook_id']) : ''
            );
    }

    /**
     * Get the settings option array and print one of its values
     */
    public function telephone_callback()
    {
        printf(
            '<input type="text" id="telefon_id" name="my_option_name[telefon_id]" value="%s" />',
            isset( $this->options['telefon_id'] ) ? esc_attr( $this->options['telefon_id']) : ''
            );
    }

    /**
     * Get the settings option array and print one of its values
     */
    // public function down_link_id_callback()
    // {
    //     printf(
    //         '<input type="text" id="down_link_id" name="my_option_name[down_link_id]" value="%s" />',
    //         isset( $this->options['down_link_id'] ) ? esc_attr( $this->options['down_link_id']) : ''
    //         );
    // }
}

if( is_admin() )
    $my_settings_page = new MySettingsPage();
