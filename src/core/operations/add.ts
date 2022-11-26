import { Complex, Fraction, mul, currentPluginLoader } from "./../../../src"

//TODO: make add() function take an array of objects to make it a multi-input function
export function add(a, b?) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b
  } else if (a instanceof Complex && b instanceof Complex) {
    return new Complex([add(a.re, b.re), add(a.im, b.im)])
  } else if (a instanceof Complex && typeof b === "number") {
    return new Complex([add(a.re, b), a.im])
  } else if (typeof a === "number" && b instanceof Complex) {
    return new Complex([add(b.re, a), b.im])
  } else if (a instanceof Fraction && b instanceof Fraction) {
    return new Fraction(
      add(mul(a.num, b.den), mul(a.den, b.num)),
      mul(a.den, b.den)
    )
  } else {
    if (
      currentPluginLoader.useAddRules() !== undefined ||
      currentPluginLoader.useAddRules() !== 0
    ) {
      currentPluginLoader.useAddRules()
    } else {
      throw new Error("Cannot add these two variables.")
    }
  }
}
