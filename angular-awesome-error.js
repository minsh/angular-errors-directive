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
            "MISSING_PASSWORD" : "Sorry, Missing Password.",
            "MISSING_USERNAME" : "Sorry, Missing Username.",
            "INVALID_USERNAME" : "Sorry, Invalid Username.",
            "INVALID_PASSWORD" : "Sorry, Invalid Password.",
            "MISSING_EMAIL" : "Sorry, Missing Email.",
            "INVALID_EMAIL" : "Sorry, Invalid Email.",
            "USERNAME_NOT_AVAILABLE" : "Sorry, Username is not available.",
            "EMAIL_NOT_AVAILABE" : "Sorry, Email is not available",
            "FILE_NOT_VALID" : "Sorry, File is not valid",
            "Email_Confirm_Email_Not_Matching" : "Sorry, email and confirm email do not match.",
            "TAG_NOT_AVAILABLE" : "Sorry, tag not available.",
            "UPDATE_COMPLETE" : "Success, update complete.",
            "PASSWORD_UPDATE_COMPLETE" : "Success, password updated.",
            "file type is not audio/mp3" : "Sorry, file type is not in audio/mp3 format",
            "Uploading_Error" : "Uploading error",
            "PASSWORD_MODIFICATION_FAILED" : "Sorry, Password modification failed.",
            "Undefined" : "Sorry, we encounterned an Unknown problem"
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
