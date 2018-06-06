function characterPositioning(string) {
  var noSpaces = string.split(" ").join("");
  //1. Creates an empty object
  var stats = {};
  //Every time the loop runs it checks it that key already exists, if it does it just increments the count
  for (var i = 0; i < noSpaces.length; i++){
    var currentLetter = noSpaces[i];
    //If currentLetter does not exist, it creates the property
    if (!stats[currentLetter]) {
          stats[currentLetter] = i;
        } else {
          stats[currentLetter] += ", " + i;
        }
        //Increments instance


      }
 console.log(stats);
 }



//012345 67891104936789
//lighthouseinthehouse

characterPositioning("lighthouse in the house");

//{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }