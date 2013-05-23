/* 
 * Template for error/success message,
 * Show/hide error message when required, 
 * Show/hide success message when required.
 */

(function(window, angular, undefined) {

  'use strict';
  angular.module('ngAngularError', ['ng'])
    .directive('awesomeError', function () {
      return {
        restrict: 'E',
        replace: true,
        scope : {
          msg : '=msg'
        },
        template: '<div> \
                    <div ng-show="showerr"> \
                      <div class="alert fade in"> \
                        <button type="button" class="close" ng-click="hideError()">×</button> \
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
          scope.errorMessage = {
            "INVALID_EMAIL_OR_PASSWORD" : "Sorry, Invalid Email or Password.",
            "USERNAME_OR_PASSWORD_NOT_CORRECT" : "Sorry, Username or Password is not correct.",
            "USER_ALREADY_EXISTS" : "Sorry, User already exists.",
            "MISSING_NICKNAME_PARAMETER" : "Sorry, Missing Nickname",
            "MISSING_PASSWORD_PARAMETER" : "Sorry, Missing Password.",
            "MISSING_USERNAME" : "Sorry, Missing Username.",
            "INVALID_EMAIL" : "Sorry, Not a valid Email.",
            "EMAIL_REQUIRED" : "Sorry, Email required"
          };
        
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
             if (scope.showMessage === "undefined") { scope.showMessage = scope.errorMessage["Undefined"]; }
          });
         }
      };
    });

})(window, window.angular);
