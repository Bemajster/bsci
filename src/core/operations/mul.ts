import { Fraction, Complex } from "./../../../src"

//TODO: change system to switch case for better performance
//TODO: make mul() function take an array of objects to make it a multi-input function
export function mul(a, b?) {
  if (typeof a === "number" && typeof b === "number") {
    return a * b
  } else if (a instanceof Fraction && b instanceof Fraction) {
    return new Fraction(mul(a.num, b.num), mul(a.den, b.den))
  } else if (typeof a === "number" && b instanceof Fraction) {
    return new Fraction(mul(a, b.num), b.den)
  } else if (a instanceof Fraction && typeof b === "number") {
    return new Fraction(mul(a.num, b), a.den)
  } else if (typeof a === "number" && b instanceof Complex) {
    return new Complex([mul(a, b.re), mul(a, b.im)])
  } else if (a instanceof Complex && typeof b === "number") {
    return new Complex([mul(a.re, b), mul(a.im, b)])
  } else if (a instanceof Complex && b instanceof Complex) {
    return new Complex([
      mul(a.re, b.re) - mul(a.im, b.im),
      mul(a.re, b.im) + mul(a.im, b.re),
    ])
  }
}
