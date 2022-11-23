import { GCD } from "./../../../src/"

describe("GCD", () => {
  test("GCD - 1", () => {
    expect(GCD(1000, 500)).toBe(500)
  })

  test("GCD - 2", () => {
    expect(GCD(10463656, 346462)).toBe(2)
  })

  test("GCD - 3", () => {
    expect(GCD(-2462346, 5346546)).toBe(6)
  })

  test("GCD - 4", () => {
    expect(GCD(-25, -2)).toBe(-1)
  })

  test("GCD - 5", () => {
    expect(GCD(10520, 364300)).toBe(20)
  })
})
