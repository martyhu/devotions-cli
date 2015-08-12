var got = require('got')
var cache = require('./lib/cache.js')
var key = '/v2/test/dailyVerse'

var opt = {
  timeout: 10000,
  query: {
    key: process.env.ESV_API_KEY || 'IP',
    'include-footnotes': false,
    'include-headings': false,
    'output-format': 'plain-text'
  }
}

module.exports = {
  get: function (callback) {
    cache.get(key, function (err, cached) {
      if (cached) {
        return callback(err, cached.contents)
      }
      got('www.esvapi.org/v2/rest/dailyVerse', opt, function (err, data, res) {
        if (err) {
          return callback(err)
        }
        cache.set(key, data, function (err) {
          if (err) {
            return callback(err)
          }
          callback(err, data)
        })
      })
    })
  }
}
