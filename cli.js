#!/usr/bin/env node

var api = require('./index.js')
var fmt = require('./lib/fmt.js')

function main () {
  api.get(function (err, data) {
    if (err) {
      return console.error(err)
    }
    console.log(fmt(data))
  })
}

main()
