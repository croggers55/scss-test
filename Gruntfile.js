module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dev: {
				files: [{
					expand: true,
					cwd: 'source/css/',
					src: ['*.scss'],
					dest: 'local_resources/css',
					ext: '.css'
				}]
			}
		},
		watch: {
			css: {
				files: '**/*.{scss,sass}',
				tasks: ['sass:dev']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['sass:dev','watch']);
}