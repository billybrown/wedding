'use strict';

module.exports.tasks = {

    // copy custom JS file over to the build directory
    copy: {
      customjs: {
        files: [
          {expand: true, cwd: 'src/js', src: ['*.js'], dest: 'build/js/'}
        ]
      }
    }
    
};
