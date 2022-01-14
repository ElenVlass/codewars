/* Square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
*/

export function square (number) {
    return Number(''.split.call(number, '').map(num => Math.pow(num, 2)).join(''))
}

console.log(square(9119));