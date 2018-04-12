'use strict';

import path from 'path';

var critical = require('critical').stream;

export default function (gulp, plugins, args, config, taskTarget, browserSync) {
    gulp.task('critical', () => {
        return gulp.src('build/*.html')
            .pipe(critical({
                base: 'build/',
                inline: true,
                minify: true,
                css: ['build/assets/infiniteimaginations/css/main.css']
            }))
            .on('error', function (err) { gutil.log(gutil.colors.red(err.message)); })
            .pipe(gulp.dest('build/'));
    });
}


