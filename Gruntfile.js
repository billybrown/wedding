module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'app/styles/style.css': 'app/styles/style.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 9']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'app/styles/*.css',
        dest: 'app/styles/'
      },
    },
    concat: {
      css: {
        src: ['styles/styles.css'],
        dest: 'styles/styles.css',
      },
    },
    csso: {
      dynamic_mappings: {
        expand: true,
        cwd: 'styles/',
        src: ['styles.css', 'styles.min.css'],
        dest: 'styles/',
        ext: '.min.css'
      }
    },
    uglify: {
      my_target: {
        files: {
          'build/js/scripts.min.js': ['js/jquery-2.1.1.min.js', 'js/skrollr.min.js', 'js/jquery.fitvids.js', 'js/script.js']
        }
      }
    },
    watch: {
      sass: {
        files: ['app/styles/**/**/*.scss'],
        //tasks: ['sass:dist', 'autoprefixer:multiple_files:dest', 'concat:css:dest', 'csso:dynamic_mappings:dest']
        tasks: ['sass:dist', 'autoprefixer:multiple_files:dest']
      }//,
      //js: {
      //  files: ['js/*.js'],
      //  tasks: ['uglify:my_target:files']
      //}
    },
    "svg-sprites": {
      all:{
        options: {
          spriteElementPath: "app/img/svg-sprites",
          spritePath: "app/img/sprites/sprite.svg",
          cssPath: "app/styles/partials",
          cssPrefix: '_svg',
          prefix: 'sprite-',
          cssSuffix: 'scss',
          cssPngPrefix: '.no-svg',
          layout: "packed"
        }
      }
    },
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'img/',
            src: ['**/*.png'],
            // Could also match cwd line above. i.e. project-directory/img/
            dest: 'build/img/',
            ext: '.png'
          }
        ]
      },
      svg: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'img/',
            src: ['**/*.svg'],
            // Could also match cwd line above. i.e. project-directory/img/
            dest: 'img/',
            ext: '.svg'
          }
        ]
      },      
    }
  });
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default', ['sass:dist', 'watch']);
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-dr-svg-sprites');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
};