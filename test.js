//var airbrake = require('airbrake').createClient("b8612b5afd7ac0a8073213f341d08335");
//airbrake.handleExceptions();


var airbrake = require('airbrake').createClient("4d7491c54a785e0b731ca764d3966d9f");
airbrake.handleExceptions();
throw new Error('New Error');







//var Exceptional = require('exceptional-node').Exceptional;

//Exceptional.API_KEY = 'b4e7435031db1d5d42af57783dbdaa9c5c1f1e40';


console.log("Welcome to Air brake Project");



//throw new Error('New Error');





/*

var err = new Error('Something went terribly wrong');
airbrake.notify(err, function(err, url) {
  if (err) throw err;

  // Error has been delivered, url links to the error in airbrake
});

*/

/*process.addListener('uncaughtException', function(err) {
    Exceptional.handle(err);
}); */

try {
  throw new Error("Test Error 1");
} catch(error) {
  console.log("Error occurred ", error.message);
  //Exceptional.handle(error);
}



hello();
throw new Error("Test Error 2");





function hello(){
	console.log("hello world");
	throw new Error('New Error 890');
}
