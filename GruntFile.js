
module.exports = function (grunt) {
	
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		clean: {
	      dist: {
	        files: [{
	          dot: true,
	          src: ["build/**/*", "css/style.scss"]
	        }]
	      }
	    },
		concat: {
			js: {
				src: ['js/1.js', 'js/2.js'],
				dest: 'build/js/script.js'
			},
			css: {
				src: ['css/*.scss'],
				dest: 'css/style.scss'
			}
		},
		sass: {
			dist: {
				files: {
					'build/css/style.css' : 'css/style.scss'
				}
			}
		}

	});

grunt.registerTask('build', ['clean', 'concat', 'sass']);
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
}