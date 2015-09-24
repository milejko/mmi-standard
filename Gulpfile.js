var gulp = require('gulp');
var gutil = require('gulp-util');
var exec = require('gulp-exec');

gulp.task('dbdeploy', function () {
	var options = {
		continueOnError: false, // default = false, true means don't emit error event 
		pipeStdout: false, // default = false, true means stdout is written to file.contents 
		enviroment: 'PROD'
	};
	var reportOptions = {
		err: true, // default = true, false means don't write err 
		stderr: true, // default = true, false means don't write stderr 
		stdout: true // default = true, false means don't write stdout 
	};
	gulp.src('.')
			.pipe(exec('php vendor/mmi/mmi/src/Mmi/Command/DbDeploy.php <%= options.enviroment %>', options))
			.pipe(exec.reporter(reportOptions));
});
