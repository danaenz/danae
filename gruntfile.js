module.exports = function (grunt) {
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
            },
            javascript: {
                src: [
                    'bower_components/jquery.browser/jquery.browser.js',
                    'bower_components/jquery-easing/jquery-easing.js',
                    'bower_components/jquery.transit/jquery.transit.js',
                    'bower_components/jquery-backstretch/jquery.backstretch.js',
                    'bower_components/FlowType.JS/flowtype.js',
                    'bower_components/fit.js/fit.js',
                    'bower_components/jquery-form/jquery.form.js',
                    'bower_components/jquery-validate/dist/jquery.validate.js',
                    'js/thirdparty/jquery.drawDoughnutChart.js'
                ],
                dest: 'js/thirdparty.combined.min.js'
            },
            IE8: {
                src: [
                    'bower_thirdparty/modernizr/modernizr.custom.js;',
                    'bower_thirdparty/respond/src/respond.js',
                    'bower_thirdparty/console-shim/console-shim.js'
                ],
                dest: 'js/IE8.combined.min.js'
            },
            jquery: {
                src: ['bower_components/jquery/jquery.min.js'],
                dest: 'js/jquery.min.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> || <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            javascript: {
                files: {
                    'js/thirdparty.combined.min.js': ['js/thirdparty.combined.min.js'],
                    'js/main.min.js': ['js/main.min.js'],
                    'js/selectivizr.min.js': ['bower_components/selectivizr/selectivizr.js']

                }
            }, IE8: {
                files: {
                    'js/IE8.combined.min.js': ['js/IE8.combined.min.js']
                }
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
    grunt.registerTask('default', ['compass', 'concat', 'concat:jquery', 'concat:javascript', 'uglify', 'watch']);
};