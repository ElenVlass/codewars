/*Complete the solution so that it returns true 
if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false 
*/
  function solution(str, ending){
    const length=ending.length
  let newStr=str.split('').slice(-length).join('');
  const result = newStr.includes(ending)
  return result
}

console.log(solution('abcde', 'cde'));  // true
console.log(solution('abcde', 'abc')) // false