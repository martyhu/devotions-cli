var got = require('got')
var cache = require('./lib/cache.js')
var key = '/v2/test/dailyVerse'
var storage_key = 'devotions-cli';

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
    cache.get(storage_key, function (err, cached) {
      if (cached) {
        return callback(err, cached.contents)
      }

      got('www.esvapi.org/v2/rest/dailyVerse', opt)
        .then(res => {
            cache.set(storage_key, res.body, function (err) {
              if (err) {
                return callback(err)
              }
              callback(err, res.body)
            })
        })
        .catch(err => {
          return callback(err)
        })
    })
  }
}
