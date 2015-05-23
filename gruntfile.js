module.exports = function(grunt) {
	grunt.initConfig({
		// Telling grunt to initalise the configuration file
		pkg:grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'public/stylesheets/style.css': 'public/stylesheets/sass/style.scss'
				}
			}
		},
		express: {
			all: {
				options: {
					script: './app.js'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			sass: {
				files: 'public/stylesheets/sass/*.scss',
				tasks: 'sass'
			},
			jade: {
				files: 'views/*.jade'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');

	grunt.registerTask('default', ['sass']);
	grunt.registerTask('server', ['express','watch']);
}