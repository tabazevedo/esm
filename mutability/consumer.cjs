const pkg = require('./package.cjs')

pkg.myValue = "first change"
pkg.updateMyValue("second change")

console.log(pkg.myValue)