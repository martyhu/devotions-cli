#!/usr/bin/env node

let api = require('./index.js')
let fmt = require('./lib/fmt.js')

function main () {
  api.get(function (err, data) {
    if (err) {
      return console.error(err)
    }
    console.log(fmt(data))
  })
}

main()
