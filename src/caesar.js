// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//declare decoder so we have a bank to refer to when encrypting/decrypting
const caesarModule = (function () {
  const decoder = ['a','b','c','d','e','f','g','h','i',
  'j','k','l','m','n','o','p','q','r','s','t','u','v',
  'w','x','y','z'];


  function caesar(input, shift, encode = true) {
    //be sure to return false is specifications aren't met
    if (shift === 0 || shift < -25 || shift > 25) {
      return false
    }
    //differentiates between encoding and decoding
    if (!encode) {
      shift *= -1
    }
    //beautiful idea of creating an array with three 1-26 combinations lined up
const decoderKeys = [...decoder,...decoder,...decoder];
//declare array where we will return our answer
const afterCaesar = [];
//dealing with the difference between uppercase and lowercase
input = input.toLowerCase();
//standard for of loop, cleaner more concise
for(seizEr of input){
  //declares new variable and targets the index of the "seizEr" in decoder array
  const theDecoding = decoder.indexOf(seizEr);
  //terinary operator, concise, and pushes our results whether or not they met
  //our conditions of being encoded or decoded the end statement deals with
  //letters at the end of the alphabet and sets them in the middle of the array
  !decoder.includes(seizEr) ? afterCaesar.push(seizEr) : afterCaesar.push(decoderKeys[theDecoding + 26 + shift]);
}
    return afterCaesar.join('');
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
