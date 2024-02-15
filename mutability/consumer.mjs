import * as pkg from './package.mjs'

pkg.myValue = "first change"
pkg.updateMyValue("second change")

console.log(pkg.myValue)