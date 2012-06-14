var winston = require('winston')
require('winston-mongodb').MongoDB

// prepare some custom log levels
var customLevels = {
  levels: {
    debug: 0,
    info: 1,
    warning: 2,
    error: 3
  },
  colors: {
    debug: 'cyan',
    info: 'green',
    warning: 'yellow',
    error: 'red'
  }
}

// create the logger
var logger = module.exports = new (winston.Logger)({
  level: 'debug',
  levels: customLevels.levels,
  handleExceptions: true,
  //colors: customLevels.colors,
  transports: [
    // setup console logging
  new (winston.transports.Console)({
      level: 'debug',
      levels: customLevels.levels,
      //handleExceptions: true,
      colorize: true
    }),
  new (winston.transports.File)({
      level: 'debug',
      levels: customLevels.levels,
      filename: 'LogFile.log',
      handleExceptions: true,
      colorize: true
    }),
    // setup logging to mongodb
    new (winston.transports.MongoDB)({
      host: 'localhost',
      db: 'node',
      collection: 'log',
      level: 'info',
      levels: customLevels.levels,
      handleExceptions: true
    })
  ]
})

// set the coloring
winston.addColors(customLevels.colors)
//Change levels on the default winston logger
winston.setLevels(winston.config.syslog.levels);
