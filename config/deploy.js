'use strict';

module.exports.tasks = {

    // this task allows you to publish to github pages
    'gh-pages': {
      options: {
        base: 'build'
      },
      src: ['**']
    },

    // copy over cname file
    copy: {
      cname: {
        files: [
          {expand: true, cwd: 'src', src: ['CNAME'], dest: 'build'}
        ],
      }
    }

};