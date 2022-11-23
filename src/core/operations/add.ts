import { Complex } from "../../math"

//TODO: change system to switch case for better performance
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
  }
}
