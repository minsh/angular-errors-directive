angular-errors-directive
========================

AngularJS user error feedback directive.

Install
-------
**Requires Twitter Bootstrap**
```bower install angular-errors-directive```

Include
-------
Include the directive in your pages as:
```
<awesome-error target="'pageName'"></awesome-error>
```
where ```pageName``` is a unique id.

Messages
--------
You need to keep all your error messages in a JSON file ```errors_list.json```.

Add a default error message ```Undefined``` which will be called whenever a key is not found.

Example:
```
{
  "INVALID_DATE" : "Please enter a valid date",
  "username_not_found" : "Sorry, This username is already taken",
  "TWEET_POSTED": "Tweet was posted successfully",
  "Undefined": "Oops, something went wrong"
}
```
Convention: uppercase error messages represent errors from server while lowercase error messages represent
errors from client side.

Broadcast a Message
-------------------
Broadcast messages as follows:
```
$scope.$broadcast(type, target, error);
```
where
* **type** is the type of broadcast (see below),
* **target** is the unique id used while declaring the directive in your html file,
* **error** is the error key pointing to an error message value in ```errors_list.json```.

Types of Broadcast
------------------
**show error / hide error**

To show and hide an error message. Example:
```
$scope.$broadcast('show error', 'settingsPage', 'INVALID_DATE');
$scope.$emit('hide error', 'settingsPage');
```
**show success / hide success**

To show and hide a success message. Example:
```
$scope.$emit('show success', 'settingsPage', 'TWEET_POSTED');
$scope.$emit('hide success', 'settingsPage');
```
