var moment = require('moment-timezone')
var CacheSwap = require('cache-swap')

var swap = new CacheSwap({
  cacheDirName: 'devotions-cli'
})

var d = moment().tz('America/Belize').format('YYYY-MM-DD')

module.exports = {

  get: function (key, callback) {
    swap.getCached(key, d, callback)
  },

  set: function (key, data, callback) {
    swap.addCached(key, d, data, callback)
  }

}
