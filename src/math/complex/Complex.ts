export class Complex {
  re = 0
  im = 0

  constructor(z: number[]) {
    this.re = z[0]
    this.im = z[1]
  }
}

//TODO: complete PolarComplex class
export class PolarComplex {
  constructor(z: number[]) {
    return new Complex([z[0], z[1]])
  }
}
