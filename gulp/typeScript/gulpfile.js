const gulp = require('gulp')
const ts = require('gulp-typescript')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', () => {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', function (err) {console.log(err)})
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
})