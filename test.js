var airbrake = require('airbrake').createClient("4d7491c54a785e0b731ca764d3966d9f");
airbrake.handleExceptions();
//throw new Error('New Error');


var winston = require('winston');

winston.log('info', 'Hello from Winston!');
winston.info('This also works');

console.log("Welcome to Winston Project");
hello();

function hello(){
	console.log("hello world");
	throw new Error('New Error 890');
}




////////////////// Tried for airbrake and exceptional error logging


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




//var Exceptional = require('exceptional-node').Exceptional;

//Exceptional.API_KEY = 'b4e7435031db1d5d42af57783dbdaa9c5c1f1e40';


/*
try {
  throw new Error("Test Error 1");
} catch(error) {
  console.log("Error occurred ", error.message);
  //Exceptional.handle(error);
}




throw new Error("Test Error 2");

*/





