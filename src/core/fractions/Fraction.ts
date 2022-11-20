export class Fraction {
  num: number = 0
  den: number = 1

  constructor(p_num: number, p_den: number) {
    if (p_den !== 0 && p_den !== undefined && p_num !== undefined) {
      this.num = p_num
      this.den = p_den
    } else {
      throw new Error(
        "Make sure you don't divide by zero! Numerator and denominator must be defined."
      )
    }
  }
}
