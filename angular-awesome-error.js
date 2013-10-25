/*
 * Template for error/success message,
 * Show/hide error message when required,
 * Show/hide success message when required.
 */

(function(window, angular, undefined) {

  'use strict';

  angular.module('ngAngularError', ['ng'])
    .factory('list', function($http) {
      /* errors_list.json should contain a map of errors and user-feedback.
       * we use, $http to retrieve values from file errors_list.json,
       * errorsList factory returns a promise. */
      return $http.get('errors_list.json');
    })
    .directive('awesomeError', function (list) {
      return {
        restrict: 'E',
        replace: true,
        scope: {
          target: '='
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

          scope.messages = {};

          var _showMsg = function(val, args, target, str) {
            if (scope.target === target) {
              if (!str) {
                str = 'Undefined';
              }
              scope.showMessage = scope.messages[str];
              if (args.name.indexOf('error') !== -1) {
                scope.showerr = val;
              } else {
                scope.showsucc = val;
              }
            }
          };

          /* fetching data present in 'errors-list.json' file */
          list.success(function(data) {
            scope.messages = data;
          });

          scope.$on('show error', function (args, target, err) {
            _showMsg(true, args, target, err);
          });

          scope.$on('hide all', function(args, target) {
            scope.showerr = false;
            scope.showsucc = false;
          });

          scope.$on('hide error', function (args, target) {
            _showMsg(false, args, target);
          });

          scope.$on('show success', function (args, target, succ) {
            _showMsg(true, args, target, succ);
          });

          scope.$on('hide success', function (args, target) {
            _showMsg(false, args, target);
          });
        }
      };
    });
})(window, window.angular);
