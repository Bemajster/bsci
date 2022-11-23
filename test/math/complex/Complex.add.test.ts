import { Complex, add } from "./../../../src/"

describe("Complex numbers addition", () => {
  test("Complex numbers addition - 1", () => {
    const c1 = new Complex([1, -2])
    const c2 = new Complex([-6, 8])

    const c3 = new Complex([-5, 6])
    expect(add(c1, c2)).toEqual(c3)
  })

  test("Complex numbers addition - 2", () => {
    const c1 = new Complex([1, -2])
    const c2 = new Complex([-6, 8])

    const c3 = new Complex([-5, 6])
    expect(add(c1, c2)).toEqual(c3)
  })

  test("Complex numbers addition - 3", () => {
    const c1 = new Complex([1, -2])
    const c2 = new Complex([-6, 8])

    const c3 = new Complex([-5, 6])
    expect(add(c1, c2)).toEqual(c3)
  })

  test("Complex numbers addition - 4", () => {
    const c1 = new Complex([1, -2])
    const c2 = new Complex([-6, 8])

    const c3 = new Complex([-5, 6])
    expect(add(c1, c2)).toEqual(c3)
  })

  test("Complex numbers addition - 5", () => {
    const c1 = new Complex([1, -2])
    const c2 = new Complex([-6, 8])

    const c3 = new Complex([-5, 6])
    expect(add(c1, c2)).toEqual(c3)
  })
})
