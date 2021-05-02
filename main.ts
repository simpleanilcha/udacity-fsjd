const a = 4
const b = 6
const c = ('5' as unknown) as number
const d = ('cat' as unknown) as number

const multiply2 = (num1: number, num2: number) => {
  console.log(`${num1} * ${num2} =`, num1 * num2)
}

const add2 = (num1: number, num2: number) => {
  console.log(`${num1} + ${num2} =`, num1 + num2)
}

multiply2(a, b)
multiply2(a, c)
// multiply2(a, d)

add2(a, b)
add2(a, c)
add2(a, d)
