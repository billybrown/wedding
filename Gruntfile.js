'use strict';

module.exports = function(grunt) {
  var path = require('path');

  // this needs to go at the top - it will print out how long 
  // things took. Helps with debugging
  require('time-grunt')(grunt);
  
  // this allows you to remove all the 'loadNPMtasks' calls, and speeds up task running
  require('jit-grunt')(grunt, {
    htmllint: 'grunt-html'
  });

  // Metadata.
  var options = {
    pkg: grunt.file.readJSON('package.json')
  };

  //loads the various task configuration files
  var configs =   require('load-grunt-configs')(grunt, options);
  grunt.initConfig(configs);


  grunt.registerTask('default', ['node_version']);
  grunt.registerTask('css', ['node_version', 'sass', 'autoprefixer', 'csso']);
  grunt.registerTask('javascript', ['node_version', 'copy:customjs']);
  grunt.registerTask('images', ['node_version', 'imagemin', 'copy:images']);
  grunt.registerTask('templates', ['node_version', 'assemble', 'html-prettyprinter']);
  grunt.registerTask('fast', ['node_version', 'takana']);

  grunt.registerTask('build', [
    'node_version',
    'clean',
    'imagemin',
    'assemble',
    'copy',
    'sass',
    'autoprefixer',
    'csso',
    'html-prettyprinter'
  ]);

  grunt.registerTask('deploy', ['build', 'gh-pages']);

};
