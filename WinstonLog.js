var winston = require('winston')
require('winston-mongodb').MongoDB

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
info: "white",
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
      db: 'node',
      port:'1234',
      collection: 'log',
      level: 'verbose',
      levels: customLevels.levels,
      handleExceptions: true
    })
  ]
 
})

// set the coloring
winston.addColors(customLevels.colors)


 logger.cli();



var options.formatter = function(level, msg, meta) {
    return {
        datetime: new Date(),
        message: msg,
        tag: meta.tag
    };
}














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

 
