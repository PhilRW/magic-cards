const cardProcessor = require('./CardProcessor')

var args = process.argv.slice(2)

cardProcessor.remote(args[0], args[1])
