/*
 * Template for error/success message,
 * Show/hide error message when required,
 * Show/hide success message when required.
 */

(function(window, angular, undefined) {

  'use strict';

  angular.module('ngAngularError', ['ng'])
    .factory('errorsList', function($http) {
      /* errors_list.json should contain a map of errors and user-feedback.
       * we use, $http to retrieve values from file errors_list.json,
       * errorsList factory returns a promise. */
      return $http.get('errors_list.json');
    })

    .directive('awesomeError', function (errorsList) {
      return {
        restrict: 'E',
        replace: true,
        scope : {
          msg : '=msg'
        },
        template: '<div> \
                    <div ng-show="showerr"> \
                      <div class="alert alert-error fade in"> \
                        {{showMessage}} \
                      </div> \
                    </div> \
                    <div ng-show="showsucc"> \
                      <div class="alert fade in alert-success"> \
                          {{showMessage}} \
                      </div> \
                    </div> \
                   </div>',
        link: function(scope) {
          scope.errorMessage = {};

          /* fetching data present in 'errors-list.json' file */
          errorsList.success(function(data) {
            scope.errorMessage = data;
          });

          scope.$on('show error', function (args) {
            scope.showerr = true;
          });

          scope.$on('hide error', function (args) {
            scope.showerr = false;
          });

          scope.hideError = function () {
            scope.showerr = false;
          };

          scope.$on('show success', function (args) {
            scope.showsucc = true;
          });

          scope.$on('hide success', function (args) {
            scope.showsucc = false;
          });

          scope.$watch(function() {return scope.msg}, function(value) {
             scope.showMessage = scope.errorMessage[scope.msg];
             if (scope.showMessage === "") {
               scope.$apply(function() {
                 scope.showMessage = scope.errorMessage["Undefined"];
               });
             }
          });
        }
      };
    });

})(window, window.angular);
