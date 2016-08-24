var wordwrap = require('wordwrap')
var size = require('window-size')
var chalk = require('chalk')

module.exports = function fmt (message) {
  var lines, ref, wrap, width, maxWidth

  maxWidth = 80
  width = size.width < maxWidth ? size.width : maxWidth
  wrap = wordwrap(width)

  lines = message.split('\n')
  lines.splice(0, 1)

  ref = lines.shift() + ' (ESV)'

  lines = lines.map(function (line) {
    return line.replace(/\[[0-9:]+\]/g, '').replace(/\(ESV\)/, '').trim()
  }).filter(function (line) {
    return line
  })

  return [
    wrap(lines.join(' ')),
    Array(width - ref.length - 1).join(' ') + chalk.dim(ref)
  ].join('\n')
}
