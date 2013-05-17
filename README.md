angular-errors-directive
========================

AngularJS user error feedback directive.

Usage
-----

* **Requires Twitter Bootstrap**

* Include the directive in your template as,
*   e.g. <awesome-error msg="errorMessage"></awesome-error> where, errorMessage is in the scope
* Then, broadcast or emit the message from controllers or directives. e.g.
*    $scope.$emit('show error');      // to show error msg
*    $scope.$emit('hide error');      // to hide error msg
*    $scope.$emit('show success');    // to show success msg
*    $scope.$emit('hide success');    // to hide success msg
