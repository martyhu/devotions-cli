'use strict'

var got = require('got')
var cache = require('./lib/cache.js')
var storageKey = 'devotions-cli'
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
    cache.get(storageKey, function (err, cached) {
      if (cached) {
        return callback(err, cached.contents)
      }

      got('http://www.ourmanna.com/verses/api/get?format=text&order=random', opt)
        .then(res => {
          cache.set(storageKey, res.body, function (err) {
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
