/* Testing comment system for JS, this file is just a time checker to greet a
user
 */

var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0){
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');

