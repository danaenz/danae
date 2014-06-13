module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        src: ['js/custom/*.js'],
        dest: 'js/main.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> || <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'js/main.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    watch: {
      css: {
        files: [
          'stylesheets/**/*.scss'
        ],
        tasks: ['compass']
      },
      concat: {
        files: ['js/custom/*.js'],
        tasks: ['concat', 'uglify']
      }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

// Default task(s).
  grunt.registerTask('default', ['compass', 'concat', 'uglify', 'watch']);
};