/* task 6 kyu on codewars */
function alphabetPosition(text) {
    text = text.toLowerCase().split('')
    let position = [];
    let alfabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for (const letter of text) {
    if(alfabet.includes(letter)) {
        let index= alfabet.indexOf(letter)
        position.push(index+1)}
    }
    return position.join(' ');
}
  console.log(alphabetPosition("The sunset sets at twelve o' clock.")); //"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

  function abbrevName(name){

    return name.toUpperCase().split(' ').map(word => word[0]).join('.') 
  }
    // console.log(abbrevName("Patrick Feenan"));

  function songDecoder(song){

    return song.split('WUB').filter(Boolean).join(' ')
  }
    //   console.log(songDecoder("AWUBBWUBC")); //A B C","WUB should be replaced by 1 space"
    //   console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
    //   console.log(songDecoder("WUBAWUBBWUBCWUB"));

