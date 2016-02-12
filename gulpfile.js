var gulp = require('gulp');
var gutil = require('gulp-util');
var exec = require('gulp-exec');
var argv = require('yargs').argv;
var env = 'PROD';

if (argv.e !== undefined) {
	env = argv.e;
}
var options = {
	continueOnError: false, // default = false, true means don't emit error event 
	pipeStdout: false, // default = false, true means stdout is written to file.contents 
	enviroment: env
};
var reportOptions = {
	err: true, // default = true, false means don't write err 
	stderr: true, // default = true, false means don't write stderr 
	stdout: true // default = true, false means don't write stdout 
};

gulp.task('default', ['dbdeploy'], function () {
});

gulp.task('dev', function () {
	env = 'DEV';
});

gulp.task('dbdeploy', function () {
	gulp.src('.')
			.pipe(exec('php vendor/mmi/mmi/src/Mmi/Command/DbDeploy.php <%= options.enviroment %>', options))
			.pipe(exec.reporter(reportOptions));
});

gulp.task('daorender', function () {
	gulp.src('.')
			.pipe(exec('php vendor/mmi/mmi/src/Mmi/Command/DaoRender.php <%= options.enviroment %>', options))
			.pipe(exec.reporter(reportOptions));
});
