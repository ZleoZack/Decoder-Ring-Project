// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//We create our array to store characters and refer to later
const substitutionModule = (function () {
  const subThis = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E",
  "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
  "Y","Z"]
  //Here we are creating a helper function and using alphabet as a parameter challenging the length property if deeply equal to 26
  function requirements(alphabet) {
    return alphabet && alphabet.length == 26 &&
      (new Set(alphabet)).size == 26
  }
//This helper function is a falsy to determine whether or not the character is included in the array
  function encodeTime(character, alphabet) {
    if (!subThis.includes(character)) {
      return character;
    }
    //Here we declare our new variable moreSub taking the index of the array and setting it to lowercase returning our alphabet parameter with new index/.toLowerCase
    const moreSub = subThis.indexOf(character.toLowerCase())
    return alphabet[moreSub];
  }
//Looking for whether there are characters or not
  function decodeTime(character, alphabet) {
    if (character === " ") {
      return character;
    }
    //moreSub creates the variable takes the index of characters inside of alphabet which was declared as a param
    const moreSub = alphabet.indexOf(character)
    return subThis[moreSub];
  }
//Here we actually craft our function if our helper function is a falsy value we have already checked what it is doing, return false
  function substitution(input, alphabet, encode = true) {
    if (!requirements(alphabet)) {
      return false;
    }
    //Declare a new variable subbing, set it equal to an empty string
    let subbing = ''
    //Terinary operator to run either the encode or decode helper functions
    const action = encode ? encodeTime : decodeTime
    //For of loop, more concise than a for loop and basically chain that with our new subbing ="" string to add values from the terinary operator using the helper functions
    for (const char of input) {
      subbing += action(char, alphabet)
    }
    //return for the win!
    return subbing;
  }

  return {
    substitution,
  };
})();


//console.log(substitution("Thinking about thinkful", "" ));

module.exports = { substitution: substitutionModule.substitution };
