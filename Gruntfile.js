module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
   // Tasks
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['']);

};


module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'style/style.css' : 'sass/style.scss'
				}
			}
		},
		// sass: {
		// 	dist: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'styles',
		// 			src: ['*.scss'],
		// 			dest: '../public',
		// 			ext: '.css'
		// 		}]
		// 	}
		// },
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['watch']);
}