import { sgn } from "./../../../src/"

describe("Sign function", () => {
  test("Sign function - 1", () => {
    expect(sgn(1)).toBe(1)
  })

  test("Sign function - 2", () => {
    expect(sgn(-346656)).toBe(-1)
  })

  test("Sign function - 3", () => {
    expect(sgn(0)).toBe(0)
  })

  test("Sign function - 4", () => {
    expect(sgn(4361356)).toBe(1)
  })

  test("Sign function - 5", () => {
    expect(sgn(-36461)).toBe(-1)
  })
})
