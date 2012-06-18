var winston = require('winston');
require('winston-mongodb').MongoDB;
var loggly = require('loggly');
require('winston-loggly');




 var config = {
    subdomain:'TestLoggly123',
         inputToken:'2e86a908-e944-413d-a257-023ae542ecb4',
          auth: {
            username: " kavitham",
            password: "bluebird87*"
            },
	inputName:'logglytest'
  };
  var client = loggly.createClient(config);

var singleBucketTransport = new (Riak)({ bucket: 'some-logs-go-here' });

 // Generate a dynamic bucket based on the date and level
  var dynamicBucketTransport = new (Riak)({
    bucket: function (level, msg, meta, now) {
      var d = new Date(now);
      return level + [d.getDate(), d.getMonth(), d.getFullYear()].join('-');
    }
  });




winston.cli();

// prepare some custom log levels
var customLevels = {
levels: {
trace: 0,
debug: 1,
info: 2,
warn: 3,
error: 4,
fatal: 5
},
colors: {
trace: "blue",
debug: "grey",
info: "red",
warn: "magenta",
error: "red",
fatal: "red"
}
};
// create the logger
var logger = module.exports = new (winston.Logger)({
  level: 'debug',
  levels: customLevels.levels,
  //handleExceptions: true,
  //colors: customLevels.colors,
exitOnError:false,
 exceptionHandlers: [
 new (winston.transports.Console)({
 level: 'error', 
 colorize: true,
//json:false,
 handleExceptions: true

}),
    new (winston.transports.File)({
      filename: 'ErrorLog.log',
	json:true,
      colorize: true
    })
    ],
  transports: [
    // setup console logging
  new (winston.transports.Console)({
      level: 'debug',
      levels: customLevels.levels,
      handleExceptions: false,
      colorize: true
    }),
  new (winston.transports.File)({
      level: 'debug',
      levels: customLevels.levels,
     // handleExceptions: true,
      filename: 'LogFile.log',
     // json:false,
      colorize: true
    }),
    // setup logging to mongodb
    new (winston.transports.MongoDB)({
      host: 'localhost',
      db: 'logging',
      port:'1234',
      collection: 'log',
      level: 'debug',
      levels: customLevels.levels,
      handleExceptions: true
    }),
  new (winston.transports.Loggly)({
         level:'verbose',
         subdomain:'TestLoggly123',
	inputName:'logglytest',
 	inputToken:'2e86a908-e944-413d-a257-023ae542ecb4',
          auth: {
            username: " kavitham",
            password: "bluebird87*"
            },
	json:true

	})
  ]
 
})

// set the coloring
winston.addColors(customLevels.colors)
logger.setLevels(winston.config.syslog.levels);

 logger.cli();


logger.on('debug', function (transport, level, msg, meta) {
	console.log("inside logger on");
  // [msg] and [meta] have now been logged at [level] to [transport]
});



/*

var options.formatter = function(level, msg, meta) {
    return {
        datetime: new Date(),
        message: msg,
        tag: meta.tag
    };
}


*/













//command Line argument


//cat Logfile




/*
var mongotransport = new winston.transports.MongoDB({
                  host: 'logsever', // mongo server name
                  port: 1111, // mongo port
                  collection: 'log', // log collection
                  db: 'logsdb', // log database
                  handleExceptions: true,
                  level: 'verbose' // if you want all logs, including verbose to go into mongo
                });
mongotransport.on('error', function(err) {
  console.error('mongo transport failed to log message, err:', err);
});

*/



/*client.getInputs(function (err, inputs) {
  if (err) throw err;

  var input = inputs.filter(function (i) { return i.name === 'default' })[0];

console.log ("client Name "+input.input_token);

});*/






////////////////////////////////////////////////////////  Loggly
/*var client = loggly.createClient({
    subdomain:'TestLoggly123',
         inputToken:'934a891c-725d-479a-855e-1a059767c7f',
          auth: {
            username: " kavitham",
            password: "bluebird87*"
            },
	inputName:'default'
}); */



 /////////////////////////////////////  Raik


/* var Riak = require('winston-riak').Riak;
var options ={
debug:true,
level:"info"
}


 winston.add(Riak, options);

*/
