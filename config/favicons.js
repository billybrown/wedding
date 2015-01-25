'use strict';

module.exports.tasks = {

    // copy over favicons
    copy: {
      cname: {
        files: [
          {expand: true, cwd: 'src', src: ['favicon.ico', 'apple-touch-icon-precomposed.png'], dest: 'build'}
        ],
      }
    }

};