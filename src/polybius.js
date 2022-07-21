// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  //declare our array of keys correlating to different characters
  const decoder = {
    11: 'a',
    21: 'b',
    31: 'c',
    41: 'd',
    51: 'e',
    12: 'f',
    22: 'g',
    32: 'h',
    42: 'i/j',
    52: 'k',
    13: 'l',
    23: 'm',
    33: 'n',
    43: 'o',
    53: 'p',
    14: 'q',
    24: 'r',
    34: 's',
    44: 't',
    54: 'u',
    15: 'v',
    25: 'w',
    35: 'x',
    45: 'y',
    55: 'z'
  }
  //for the entries in the array we assign a new variable
  const decodeArr = Object.entries(decoder)
  //here is to make sure i/j are both treated as "42"
  decodeArr.push([42, 'i'])
  decodeArr.push([42, 'j'])


  function polybius(input, encode = true) {
    //here we set an accumulator and iterate through the elements while reducing
    const polyAcc = input.split(' ').reduce((accumulator, element) => accumulator += element.length, 0)
    //declare a new return string
      let returnPoly = ''
      //looking for odd and even numbers here also handling 0's & spaces
      if (!encode && polyAcc % 2 != 0) {
        return false
        //setting up for encoding or decoding
      } else if (!encode) {
        let theMessage = ''
        //separate string declaration that the next if else statement uses to encode or decode
        for (const character of input) {
          if (character === ' ') {
            returnPoly += character
            //if the newely declared string is greater than 0, iterate through the chars, run the decoder on stored values
            //while comparing to the decoder array
            //return the new "theMessage"
          } else if (theMessage.length > 0) {
            theMessage += character
            returnPoly += decoder[parseInt(theMessage)]
            theMessage = ''
            //if there is no condition met, add the encoded or decoded message to the newely declared string
          } else {
            theMessage += character
          }
        }
        return returnPoly
      } else {
        //else statements for handling our encoded value checking to see if thisArr includes our character value at
        //the first spot then declares a new variable and filters the decodeArr calls thisArr as a parameter and looks to see if characters are included at the first slot [0].
        for (const character of input) {
          if (character === ' ') {
            returnPoly += character
            continue
          }
          const encoder = decodeArr.filter(thisArr => thisArr.includes(character))[0]
          returnPoly += encoder[0]
        }
        return returnPoly
      }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
