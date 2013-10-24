angular-errors-directive
========================

AngularJS user error feedback directive.

Usage
-----

* **Requires Twitter Bootstrap**

* Include the directive in your template as,
*      <awesome-error target="'settingsPage'"></awesome-error> where, target defines the error directive you are targetting.
* Then, broadcast or emit the message from controllers or directives. e.g.
*      $scope.$broadcast(errorState, target, error);                         // template of broadcast
*      $scope.$broadcast('show error', 'settingsPage', 'INVALID_DATE');      // to show error msg
*      $scope.$emit('hide error', 'settingsPage');                           // to hide error msg
*      $scope.$emit('show success', 'settingsPage', 'TWEET_POSTED');         // to show success msg
*      $scope.$emit('hide success', 'settingsPage');                         // to hide success msg

You need to keep all your error messages in a JSON file 'errors_list.json'. e.g.
```
{
  "INVALID_DATE" : "Please enter a valid date",
  "username_not_found" : "Sorry, This username is already taken",
  "TWEET_POSTED": "Tweet was posted successfully"
}
```

Uppercase error messages represent errors from server while lowercase error messages represent 
errors from client side.
