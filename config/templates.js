'use strict';

module.exports.tasks = {

    // Build HTML from templates and data
    assemble: {
      site: {
        options: {
          layout: ['src/templates/layouts/default.hbs'],
          partials: ['src/templates/partials/*.hbs'],
          data: ['src/templates/data/*.yaml'],
          prettify: { indent: 2 },
          flatten: true
        },
        files: {
          'build/': ['src/templates/pages/*.hbs']
        }
      }
    },

  // reindent, etc. the html to make it good looking
  'html-prettyprinter': {
    single: {
      // HTML file to beauty
      src: 'build/index.html',

      // Destination of HTML file
      dest: 'build/index.html'
    }
  },

  htmllint: {
      options: {
          ignore: ['Bad value “X-UA-Compatible” for attribute “http-equiv” on XHTML element “meta”.']
      },
      all: ["build/**/*.html"]
  }

    
};