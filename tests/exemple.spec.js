import { expect } from "chai"

describe('Operations with number',function (){
  it('addition works properly',function (){
    const result = 5 + 7
    expect(result).to.eq(12)
  })

  it('subtraction works correctly',function (){
    expect(5 - 7).to.eq(-2)
  })
})