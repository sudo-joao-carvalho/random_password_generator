const upperAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerAlphabet = [];

for(var i = 0; i < upperAlphabet.length ; i++){
    //console.log(upperAlphabet);
    var lowerLetter = upperAlphabet[i].toLowerCase();
    lowerAlphabet[i] = lowerLetter;
    console.log(lowerAlphabet);
}

//console.log(lowerAlphabet);