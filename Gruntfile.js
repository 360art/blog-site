module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Define structure paths
		 */
		paths: {
			'bower': 'bower_components',
			'dist': 'dist',
			'src': 'src'
		},

		/**
		 * Lint php files
		 */
		phplint: {
			lint: ["<%= paths.src %>/**/*.php"],
		},

		/**
		 * Compile all .less files
		 */
		less: {
			options: {
				paths: [
					"<%= paths.bower %>/bootstrap/less",
				]
			},
			normal: {
				files: {
					"<%= paths.dist %>/css/styles.css": ['<%= paths.src %>/less/*.less']
				}
			},
			min: {
				options: {
					cleancss: true,
					report: 'min'
				},
				files: {
					"<%= paths.dist %>/css/styles.min.css": ['<%= paths.src %>/less/*.less']
				}
			}
		},

		/**
		 * Merege all scripts
		 * into one file
		 */
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				files: {
					'<%= paths.dist %>/js/scripts.js': [
						'<%= paths.src %>/js/**/*.js'
					]
				}
			}
		},

		/**
		 * Minify mereged script file
		 */
		uglify: {
			options: {
				report: 'min'
			},
			dist: {
				files: [{
					'<%= paths.dist %>/js/scripts.min.js': [
						'<%= paths.dist %>/js/scripts.js'
					]
				}],
			}
		},

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					flatten: true,
					src: '<%= paths.src %>/images/**/*.{png,jpg,jpeg,gif}',
					dest: '<%= paths.dist %>/images'
				}]
			}
		},

		/**
		 * Copy files
		 */
		copy: {
			twig: {
				expand: true,
				cwd: '<%= paths.src %>/',
				src: '**/*.twig',
				dest: '<%= paths.dist %>',
			},
			php: {
				expand: true,
				cwd: '<%= paths.src %>/',
				src: '**/*.php',
				dest: '<%= paths.dist %>',
			},
			fonts: {
				expand: true,
				flatten: true,
				src: '<%= paths.src %>/fonts/**/*',
				dest: '<%= paths.dist %>/fonts/',
			},
			lang: {
				expand: true,
				flatten: true,
				src: '<%= paths.src %>/languages/*.{po,mo}',
				dest: '<%= paths.dist %>/languages/',
			},
			components: {
				files: [
					{
						expand: true,
						flatten: true,
						cwd: '<%= paths.bower %>/',
						src: [
							'modernizr/modernizr.js',
							'jquery/dist/jquery.min.js',
							'jquery/dist/jquery.min.map',
							'bootstrap/dist/js/bootstrap.min.js'
						],
						dest: '<%= paths.dist %>/js/vendor/'
					},
				]
			},
		},

		/**
		 * Create Wordpress Theme
		 * Description File
		 */
		"file-creator": {
			make: {
				files: [{
					file: '<%= paths.dist %>/style.css',
					method: function(fs, fd, done) {
						var pkg = grunt.file.readJSON('package.json');
						fs.writeSync(fd, '/*' + '\n' +
							'Theme Name: ' + pkg.name + '\n' +
							'Theme URI: ' + pkg.homepage + '\n' +
							'Description: ' + pkg.description + '\n' +
							'Version: ' + pkg.version + '\n' +
							'Author: ' + pkg.author + '\n' +
							'Author URI: ' + pkg.link + '\n' +
							'Text Domain: ' + pkg.name + '\n' +
							'Domain Path: /languages' + '\n' +
							'*/');
						done();
					}
				}]
			}
		},

		/**
		 * Set watch
		 */
		watch: {
			twig: {
				files: ['<%= paths.src %>/**/*.twig'],
				tasks: ['build-php']
			},
			php: {
				files: ['<%= paths.src %>/**/*.php'],
				tasks: ['build-php']
			},
			css: {
				files: ['<%= paths.src %>/less/**/*.{css,less}'],
				tasks: ['build-css']
			},
			js: {
				files: ['<%= paths.src %>/js/**/*.js'],
				tasks: ['build-js']
			},
			img: {
				files: ['<%= paths.src %>/images/**/*.{jpg,jpeg,png,gif,svg}'],
				tasks: ['build-img']
			},
			lang: {
				files: ['<%= paths.src %>/languages/*.{po,mo}'],
				tasks: ['build-lang']
			}
		}
	});

	/**
	 * Register grunt tasks
	 */
	grunt.registerTask('default', [
		'phplint',
		'less',
		'concat',
		'uglify',
		'copy',
		'imagemin',
		'file-creator',
		'watch'
	]);

	grunt.registerTask('build-php', [
		'phplint', 'copy:php', 'copy:twig',
	]);

	grunt.registerTask('build-css', [
		'less', 'copy:fonts'
	]);

	grunt.registerTask('build-js', [
		'concat', 'uglify', 'copy'
	]);

	grunt.registerTask('build-img', [
		'imagemin'
	]);

	grunt.registerTask('build-lang', [
		'copy:lang'
	]);

};
