import { add, Fraction } from "./../../../src"

describe("Fraction addition", () => {
  test("Fraction addition - 1", () => {
    const f1 = new Fraction(1, 5)
    const f2 = new Fraction(1, 10)

    const f3 = new Fraction(3, 10)
    expect(add(f1, f2)).toEqual(f3)
  })
})
