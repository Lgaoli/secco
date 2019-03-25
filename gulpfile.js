        /*
 	task（） 任务
 	参数一：任务名称
 	参数二：数组，依赖任务(优先级更高)
 	参数三：任务回调函数
 */

var gulp = require('gulp');
gulp.task('default',['copyhtml','copyindex','cssmin','minjs','minimg'])
//把src下面的html目录下所有的文件 复制到dist的html目录
gulp.task('copyhtml',function(){
    return gulp.src('src/html/*').pipe(gulp.dest('dist/html'));
});
gulp.task('copyindex',function(){
    return gulp.src('src/index.html').pipe(gulp.dest('dist'));
});

//压缩css文件
var cssmin = require('gulp-cssmin');
gulp.task('cssmin',function(){
    return gulp.src('src/css/*')
                .pipe(cssmin())
                    .pipe(gulp.dest('dist/css'));
});
//ES6转ES5//压缩js文件
var js = require('gulp-uglify');
let babel = require('gulp-babel');
gulp.task('minjs',function(){
	gulp.src('src/js/*')
	.pipe(babel({
		'presets':['es2015']
    }))
    .pipe(js())
	.pipe(gulp.dest('dist/js'));
});

//压缩图片
var img = require('gulp-imagemin');
gulp.task('minimg',function(){
    gulp.src('src/img/*')
    .pipe(img())
    .pipe(gulp.dest('dist/img'));
});

//复制接口
gulp.task('copyapi',function(){
    gulp.src('src/api/*')
    .pipe(gulp.dest('dist/api'));
});

//复制插件、库
gulp.task('copylib',function(){
    gulp.src('src/lib/*')
    .pipe(gulp.dest('dist/lib'));
});

//复制sass
gulp.task('copysass',function(){
    gulp.src('src/sass/*')
    .pipe(gulp.dest('dist/sass'));
});

gulp.task('minjs2',function(){
	gulp.src('src/js/cart.js')
	.pipe(babel({
		'presets':['es2015']
    }))
    .pipe(js())
	.pipe(gulp.dest('dist/js'));
});

gulp.task('copylib2',function(){
    gulp.src('src/lib/mycool.js')
    .pipe(gulp.dest('dist/lib'));
});
gulp.task('copydetail',function(){
    return gulp.src('src/html/goodsdetail.html').pipe(gulp.dest('dist/html'));
});
gulp.task('minjs3',function(){
	gulp.src('src/js/goodsdetail.js')
	.pipe(babel({
		'presets':['es2015']
    }))
    .pipe(js())
	.pipe(gulp.dest('dist/js'));
});