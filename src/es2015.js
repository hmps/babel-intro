// ES2015.JS
import angular from 'angular';
import { postman } from './postman';

postman.logger('Hello beautiful world of ES2015, with a named import!');

angular.module('babel-intro', []);

// Bootstrap Angular, so we do not have to add a pesky ng-app attribute
angular.element(document).ready(() => angular.bootstrap(document, ['babel-intro']));
