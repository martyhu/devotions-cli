#!/usr/bin/env node

var api = require('./index.js')
var fmt = require('./lib/fmt.js')

function main () {
  api.get(function (err, data) {
    console.log(fmt(data))
  })
}

main()
