module.exports = function(grunt) {
	grunt.initConfig({
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
		watch: {
			sass: {
				files: 'public/stylesheets/sass/*.scss',
				tasks: 'sass'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default',['sass'])
}