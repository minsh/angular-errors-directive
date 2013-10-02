angular-errors-directive
========================

AngularJS user error feedback directive.

Usage
-----

* **Requires Twitter Bootstrap**

* Include the directive in your template as,
*      <awesome-error msg="errorMessage"></awesome-error> where, errorMessage is in the scope
* Then, broadcast or emit the message from controllers or directives. e.g.
*      $scope.$emit('show error');      // to show error msg
*      $scope.$emit('hide error');      // to hide error msg
*      $scope.$emit('show success');    // to show success msg
*      $scope.$emit('hide success');    // to hide success msg

You need to keep all your error messages in a JSON file 'errors_list.json'. e.g.
```
{
  "INVALID_DATE" : "Please enter a valid date",
  "username_not_found" : "Sorry, This username is already taken"
}
```

Uppercase error messages represent errors from server while lowercase error messages represent 
errors from client side.
