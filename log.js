var winston = require('winston');


 //var MongoDB = require('winston-mongodb').MongoDB;
 //winston.add(MongoDB, options);

//,handleExceptions: true
var logger = new (winston.Logger)({

    transports: [
 	new (winston.transports.Console)(),
	
        new winston.transports.File({ filename: 'LogFile.log' })
    ],
    exceptionHandlers: [
 new (winston.transports.Console)({ level: 'error' }),
      new winston.transports.File({ filename: 'ErrorLog.log' })
   ]

  });

var err = new Error("ERROR TEDT ");
throw err;


//var category1 = winston.loggers.get('category1');

  //category1.info('logging from your IoC container-based logger');













//
  // Configure the logger for `category1`
  //
  winston.loggers.add('category1', {
    console: {
      level: 'silly',
      colorize: 'true'
    },
    file: {
      filename: '/path/to/some/file'
    }
  });

  //
  // Configure the logger for `category2`
  //
  winston.loggers.add('category2', {
   // couchdb: {
     // host: '127.0.0.1',
    //  port: 5984
    //}
  });








logger.info('This also works');
winston.log('info', "127.0.0.1 - there's no place like home");
logger.log('This also works'+"::::::::::::::::::::::::::");

logger.info('info', "127.0.0.1 - there's no place like home");


logger.exitOnError = false;


function ignoreEpipe(err) {
    return err.code !== 'EPIPE';
  }

  //var logger = new (winston.Logger)({ exitOnError: ignoreEpipe });

  //
  // or, like this:
  //

  //logger.exitOnError = ignoreEpipe;



/*

logger.on('log', function (transport, level, msg, meta) {
  // [msg] and [meta] have now been logged at [level] to [transport]
	console.log("Transport :::::::::::::::::::::::::::::::::::"+transport)
});


logger.on('error', function (err) {
  // handle an error

console.log("err :::::::::::::::::::::::::::::::::::"+err)
});

//logger.info('CHILL WINSTON! !!!!!!!!!!!!!!!', { seriously: true });


test();


function test(){

conole.log(" inside test method ");
logger.info(" inside test method ");
new Error("dkhfjdsh");

}*/

/*

////////////////////////////////////////////////// PROFILING

//
  // Start profile of 'test'
  // Remark: Consider using Date.now() with async operations
  //
  winston.profile('test');

 winston.profile('test 123');

  setTimeout(function () {
    //
    // Stop profile of 'test'. Logging will now take place:
    //   "17 Jan 21:00:00 - info: test duration=1000ms"
    //
    winston.profile('test');
  }, 1000);


/////////////////////////////////////////////////  Querying

var options = {
    from: new Date - 24 * 60 * 60 * 1000,
    until: new Date
  };

  //
  // Find items logged between today and yesterday.
  //
  winston.query(options, function (err, results) {
    if (err) {
      throw err;
    }

    console.log("RESULTS LOGGING ::::::"+results);
  });


///////////////////////////////////////////////////////  Streaming 

 //
  // Start at the end.
  //
  winston.stream({ start: -1 }).on('log', function(log) {
    console.log("Streaming :::::::::::::::::"+log);
  });
*/
/////////////////////////////////////////////////// LEVEL


 var myCustomLevels = {
    levels: {
      foo: 0,
      bar: 1,
      baz: 2,
      foobar: 3
    },
    colors: {
      foo: 'blue',
      bar: 'green',
      baz: 'yellow',
      foobar: 'red'
    }
  };

  var customLevelLogger = new (winston.Logger)({ levels: myCustomLevels.levels });
  customLevelLogger.foobar('some foobar level-ed message');


process.on('uncaughtException', function(err) {
	  console.log('Exception handled @ process\'s uncaughtException');	
	  console.log(err);

throw err;
});

