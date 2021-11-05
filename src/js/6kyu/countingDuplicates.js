/*  Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters 
and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
 */


export function numberOfDuplicates (srt) {
    const occurancse = srt.toLowerCase().split('').reduce((acc, char, ind, arr)=> {
       if ( arr.indexOf(char) !== ind ) { 
        if (acc[char]) {
            acc[char] += 1
        }
        else {
            const newChar = {};
            newChar[char] = 1
            return {...acc, ...newChar}  }
    
    }
    return acc;
    }, {})
    return Object.keys(occurancse).length
    }

// console.log(numberOfDuplicates("abcde"));
// console.log(numberOfDuplicates("aabbcde"));
// console.log(numberOfDuplicates("aabBcde"));
// console.log(numberOfDuplicates("Indivisibilities"));
// console.log(numberOfDuplicates("Indivisibility"));

// export function arrOfDuplicates (srt) {
// return srt.toLowerCase().split('').reduce((acc, char, ind, arr)=> {
//   return arr.indexOf(char) === ind ? acc : [...acc, ...char]
// }, [])
// }

// export function sumOfDuplicates (srt) {
// return srt.toLowerCase().split('').reduce((acc, char, ind, arr)=> {
//   return arr.indexOf(char) === ind ? acc : acc += 1
// }, 0)
// }

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(duplicateCount(""), 0);
//   Test.assertEquals(duplicateCount("abcde"), 0);
//   Test.assertEquals(duplicateCount("aabbcde"), 2);
//   Test.assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
//   Test.assertEquals(duplicateCount("Indivisibility"), 1)
//   Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
  
//     });
//   });
let hello = "   Hello, World!  ";
let wsRegex = /^\S(\w+)\S$/; // Change this line
let result = hello.match(wsRegex);
console.log(result);