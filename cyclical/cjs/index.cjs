const a = require('./a.cjs')
const b = require('./b.cjs')

console.log({ a, b })

a.update()

console.log({ a, b })