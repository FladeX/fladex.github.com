module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            main: {
                files: {
                    'css/style.css': 'css/style.less'
                }
            }
        },
        watch: {
            less: {
                files: ['css/*.less'],
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less']);
};