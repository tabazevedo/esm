const b = require('./b.cjs')

let value = "foo"

const update = () => value = "baz"

module.exports = { b: b.value, value, update }