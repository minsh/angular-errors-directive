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
            "USERNAME_OR_PASSWORD_NOT_CORRECT" : "Sorry, Username or Password is not correct.",
            "MISSING_USERNAME_OR_EMAIL" : "Missing Username or Email",
            "INVALID_USERNAME_OR_EMAIL" : "Invalid Username or Email",
            "MISSING_PASSWORD" : "Missing Passowrd",
            "INVALID_PASSWORD" : "Invalid Passowrd",
            "MISSING_GEO" : "Missing Geo",
            "INVALID_GEO" : "Invalid Geo",
            "TOKEN_NOT_VALID" : "Token not valid",
            "FILE_NOT_VALID" : "File not valid",
            "EMAIL_NOT_AVAILABE" : "Email not available",
            "MISSING_TOKEN" : "Missing token",
            "INVALID_TOKEN" : "Token not valid",
            "TOKEN_NOT_CORRECT" : "Incorrect token",
            "TOKEN_EXPIRED" : "Your session has expired",
            "INVALID_EMAIL" : "Sorry, Not a valid Email.",
            "USERNAME_OR_PASSWORD_OR_TOKEN_NOT_CORRECT" : "Username or password or token is not correct",
            "MISSING_USERNAME" : "Missing Username",
            "INVALID_USERNAME" : "Invalid USername",
            "USERNAME_NOT_AVAILABLE" : "Username not available",
            "MISSING_EMAIL" : "Missing Email",
            "USER_NOT_FOUND" : "Sorry, User not found.",
            "SHOUT_NOT_FOUND" : "Shout not found",
            "MISSING_SHOUT" : "Missing shout",
            "INVALID_SHOUT" : "Invalid Shout",
            "INVALID_IN_REPLY_TO" : "Invalid Reply to ",

            "useremail_REQUIRED" : "Email Required",
            "username_REQUIRED" : "Username Required",
            "password_REQUIRED" : "Password Required",
            "useremail_INVALID" : "Invalid Email",
            "username_INVALID_PATTERN" : "Username should contain alphabets and number length between 1-15",
            "email_INVALID" : "Invalid Email",
            "email_REQUIRED" : "Email Required",
            "password_LENGTH_PATTERN" : "Password should be 3 to 15 characters long",
            "USERNAME_ALREADY_TAKEN" : "Sorry, Username already taken"          
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
