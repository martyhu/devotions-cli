var CacheSwap = require('cache-swap')

var swap = new CacheSwap({
  cacheDirName: 'devotions-cli'
})

var d = (new Date()).toISOString().slice(0, 10)

module.exports = {

  get: function (key, callback) {
    swap.getCached(key, d, callback)
  },

  set: function (key, data, callback) {
    swap.addCached(key, d, data, callback)
  }

}
