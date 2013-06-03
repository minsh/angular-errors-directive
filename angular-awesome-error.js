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
            "USERNAME_OR_PASSWORD_NOT_CORRECT": "Invalid username or password.",
            "USERNAME_OR_PASSWORD_OR_TOKEN_NOT_CORRECT" : "Invalid username or password.",
            "MISSING_USERNAME_OR_EMAIL" : "Please, enter a username or email.",
            "INVALID_USERNAME_OR_EMAIL" : "Invalid username or email.",
            "MISSING_USERNAME" : "Please, enter a username.",
            "INVALID_USERNAME" : "Invalid username.",
            "USERNAME_NOT_AVAILABLE": "This username is already taken!",
            "USERNAME_ALREADY_TAKEN": "This username is already taken!",
            "username_REQUIRED": "Please, enter a username.",
            "username_INVALID_PATTERN" : "Invalid username! Please, enter alphanumerics only and length between 1-15",

            "MISSING_PASSWORD" : "Please, enter a password.",
            "INVALID_PASSWORD" : "Invalid password.",
            "password_REQUIRED" : "Please, enter a password.",
            "password_LENGTH_PATTERN" : "Password should be 3 to 15 characters long",

            "email_INVALID" : "Invalid email.",
            "email_REQUIRED" : "Please, enter an email.",
            "MISSING_EMAIL" : "Please, enter an email.",
            "EMAIL_NOT_AVAILABE" : "This email is already taken!",
            "useremail_REQUIRED" :  "Please, enter an email.",
            "useremail_INVALID" : "Invalid email",

            "TOKEN_NOT_VALID" : "Oops, something went wrong. Please, try again later.",
            "MISSING_TOKEN" : "Oops, something went wrong. Please, try again later.",
            "INVALID_TOKEN" : "Oops, something went wrong. Please, try again later.",
            "TOKEN_NOT_CORRECT" : "Oops, something went wrong. Please, try again later.",
            "TOKEN_EXPIRED" : "Your session has expired. Please, try to login again.",

            "MISSING_GEO" : "We are not able to get your location. Please, try again.",
            "INVALID_GEO" : "We are not able to get your location. Please, try again.",

            "FILE_NOT_VALID" : "File not valid",
            "USER_NOT_FOUND" : "This user was not found, we apologise for the inconvenience.",
            "SHOUT_NOT_FOUND" : "This message was not found, we apologise for the inconvenience.",
            "MISSING_SHOUT" : "Please, enter a message.",
            "INVALID_SHOUT" : "Invalid message.",
            "INVALID_IN_REPLY_TO" : "Invalid reply message.",
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
