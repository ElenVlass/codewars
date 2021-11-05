/* 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
export function VowelCount (str) {
        return str.match(/[aeiou]+/g) ?
         str.match(/[aeiou]+/g).join('').length 
        : 0
}

function getUniqueVowelsCount(str) {
    return str.match(/[aeiou]+/g)
   .join('')
   .split('')
   .sort()
   .filter((char, ind, arr) => arr.indexOf(char) === ind)
   .length
    
  }

console.log(VowelCount('hfyrtueeeiogeeeeenaeeeahjklmlkjhdeerty8uiol jbyteeeewwqdda'));
console.log(getUniqueVowelsCount('hfyrtueeeiogeeeeenaeeeahjklmlkjhdeerty8uiol jbyteeeewwqdda'));
console.log(VowelCount("abracadabra"));
console.log(getUniqueVowelsCount("abracadabra"));