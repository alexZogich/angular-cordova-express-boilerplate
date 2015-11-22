'use strict'

var gulp = require('gulp'),
	create = require('gulp-cordova-create'),
    plugin = require('gulp-cordova-plugin'),
    xml = require('gulp-cordova-xml'),
    android = require('gulp-cordova-build-android'),
    replace = require('gulp-replace'),
    runSequence = require('run-sequence'),
    cordovaConf = require('./config/cordovaConfig'),
    clean = require('gulp-clean');

module.exports = function () {
  runSequence(
  	'clean-cordova',
  	'build',
    'android'
    );
};

gulp.task('clean-cordova', function() {
  return gulp.src([cordovaConf.create.dir, cordovaConf.apkDest])
    .pipe(clean());
 });

gulp.task('lib', function () {
  return gulp.src(cordovaConf.buildSrc + "/index.html")
    .pipe(replace(cordovaConf.libMatch, cordovaConf.libSrc))
    .pipe(gulp.dest(cordovaConf.buildSrc));
});

gulp.task('android',['lib'], function() {
  return gulp.src(cordovaConf.buildSrc)
    .pipe(create(cordovaConf.create))
    .pipe(plugin(cordovaConf.plugins))
    .pipe(xml(cordovaConf.xml))
    .pipe(android())
    .pipe(gulp.dest(cordovaConf.apkDest));
});