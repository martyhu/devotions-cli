'use strict'

let got = require('got')
let cache = require('./lib/cache.js')
let storageKey = 'devotions-cli'
let opt = {
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

      got('www.esvapi.org/v2/rest/dailyVerse', opt)
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
