var gulp = require("gulp")
var mincss = require("gulp-clean-css")
var server = require("gulp-webserver")
var sequence = require('gulp-sequence');
var minjs = require("gulp-uglify")
gulp.task("mincss", function() {
    return gulp.src("css/*.css")
        .pipe(mincss())
        .pipe(gulp.dest("dist/css"))
})
gulp.task("minjs", function() {
    return gulp.src("js/*.js")
        .pipe(minjs())
        .pipe(gulp.dest("dist/js"))
})
gulp.task("wedserver", function() {
    return gulp.src("dist")
        .pipe(server({
            port: 8000,
            host: "localhost",
            livereload: true,
            middleware: function(req, res, next) {
                var data = '[{ "name": "电影8", "color": "rgb(146,220,155)", "num": 485, "bili": "15.21", "jiaodu": 54.75070555032926 }, { "name": "电影7", "color": "rgb(252,63,77)", "num": 450, "bili": "14.11", "jiaodu": 50.79962370649106 }, { "name": "电影2", "color": "rgb(169,229,30)", "num": 422, "bili": "13.23", "jiaodu": 47.6387582314205 }, { "name": "电影4", "color": "rgb(252,60,46)", "num": 391, "bili": "12.26", "jiaodu": 44.13922859830668 }, { "name": "电影3", "color": "rgb(173,80,238)", "num": 382, "bili": "11.98", "jiaodu": 43.12323612417686 }, { "name": "电影5", "color": "rgb(242,56,246)", "num": 353, "bili": "11.07", "jiaodu": 39.84948259642521 }, { "name": "电影6", "color": "rgb(217,23,223)", "num": 336, "bili": "10.54", "jiaodu": 37.930385700846664 }, { "name": "电影0", "color": "rgb(50,88,85)", "num": 225, "bili": "7.06", "jiaodu": 25.39981185324553 }, { "name": "电影1", "color": "rgb(173,176,11)", "num": 145, "bili": "4.55", "jiaodu": 16.368767638758232 }]';
                if (/\/page/.test(req.url)) {
                    res.end(data)
                }
                next()
            }
        }))
})
gulp.task("default", function(e) {
    sequence("mincss", "minjs", "wedserver", e)
});