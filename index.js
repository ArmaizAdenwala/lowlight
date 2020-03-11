'use strict'

var low = require('./lib/core.js')

module.exports = low
low.registerLanguage('cpp', require('highlight.js/lib/languages/cpp'))
low.registerLanguage('arduino', require('highlight.js/lib/languages/arduino'))
low.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
low.registerLanguage('asciidoc', require('highlight.js/lib/languages/asciidoc'))
low.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
low.registerLanguage('cs', require('highlight.js/lib/languages/cs'))
low.registerLanguage('css', require('highlight.js/lib/languages/css'))
low.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'))
low.registerLanguage('dart', require('highlight.js/lib/languages/dart'))
low.registerLanguage('diff', require('highlight.js/lib/languages/diff'))
low.registerLanguage('django', require('highlight.js/lib/languages/django'))
low.registerLanguage('dns', require('highlight.js/lib/languages/dns'))
low.registerLanguage(
  'dockerfile',
  require('highlight.js/lib/languages/dockerfile')
)
low.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'))
low.registerLanguage('erb', require('highlight.js/lib/languages/erb'))
low.registerLanguage('go', require('highlight.js/lib/languages/go'))
low.registerLanguage('gradle', require('highlight.js/lib/languages/gradle'))
low.registerLanguage('htmlbars', require('highlight.js/lib/languages/htmlbars'))
low.registerLanguage('http', require('highlight.js/lib/languages/http'))
low.registerLanguage('java', require('highlight.js/lib/languages/java'))
low.registerLanguage(
  'javascript',
  require('highlight.js/lib/languages/javascript')
)
low.registerLanguage('json', require('highlight.js/lib/languages/json'))
low.registerLanguage('kotlin', require('highlight.js/lib/languages/kotlin'))
low.registerLanguage('lua', require('highlight.js/lib/languages/lua'))
low.registerLanguage('makefile', require('highlight.js/lib/languages/makefile'))
low.registerLanguage('nginx', require('highlight.js/lib/languages/nginx'))
low.registerLanguage('pgsql', require('highlight.js/lib/languages/pgsql'))
low.registerLanguage(
  'plaintext',
  require('highlight.js/lib/languages/plaintext')
)
low.registerLanguage('python', require('highlight.js/lib/languages/python'))
low.registerLanguage('r', require('highlight.js/lib/languages/r'))
low.registerLanguage('roboconf', require('highlight.js/lib/languages/roboconf'))
low.registerLanguage('scala', require('highlight.js/lib/languages/scala'))
low.registerLanguage('scheme', require('highlight.js/lib/languages/scheme'))
low.registerLanguage('scss', require('highlight.js/lib/languages/scss'))
low.registerLanguage('shell', require('highlight.js/lib/languages/shell'))
low.registerLanguage('sql', require('highlight.js/lib/languages/sql'))
low.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'))
low.registerLanguage(
  'typescript',
  require('highlight.js/lib/languages/typescript')
)
low.registerLanguage('vim', require('highlight.js/lib/languages/vim'))
