'use strict'

var test = require('tape')
var binCheck = require('bin-check')

test('check bin', function (t) {
  t.plan(1)

  binCheck('./cli.js').then(works => {
    t.ok(works, './cli.js has a zero exit code')
  })
})
