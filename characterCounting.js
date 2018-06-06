function countLetters(string) {
  var noSpaces = string.split(" ").join("");
  //1. Creates an empty object
  var stats = {};
  //Every time the loop runs it checks it that key already exists, if it does it just increments the count
  for (var i = 0; i < noSpaces.length; i++){
    var currentLetter = noSpaces[i];
    //If currentLetter does not exist, it creates the property
    if (!stats[currentLetter]) {
          stats[currentLetter] = 0;
        }
        //Increments instance
      stats[currentLetter]++
      }
 console.log(stats);
 }

 //how many instances of each letter
 //return an object where each unique character is a key and number of instances is the value


countLetters("lighthouse in the house");