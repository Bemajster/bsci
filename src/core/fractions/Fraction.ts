import { GCD } from "./../../../src"

export class Fraction {
  num = 0
  den = 1

  constructor(p_num: number, p_den: number) {
    if (p_den !== 0 && p_den !== undefined && p_num !== undefined) {
      this.num = p_num
      this.den = p_den

      if (GCD(p_num, p_den) !== 1) {
        this.num = p_num / GCD(p_den, p_den)
        this.den = p_den / GCD(p_den, p_den)
      }
    } else {
      throw new Error(
        "Make sure you don't divide by zero! Numerator and denominator must be defined."
      )
    }
  }
}
