const upperAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerAlphabet = [];
const specialCharacters = ["-", "_", "@", "€", ")", "(", "/", "&", "%", "$", "#"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9" , "0"];

var password = document.getElementById("password");

for(var i = 0; i < upperAlphabet.length ; i++){
    var lowerLetter = upperAlphabet[i].toLowerCase();
    lowerAlphabet[i] = lowerLetter;
}

//const generalArray = [upperAlphabet, lowerAlphabet, specialCharacters, numbers];

function genPassword(){
    var passLength = 10;
    var pass = "";

    for(var i = 0; i < passLength; i++){
        var rand = Math.floor(Math.random() * 4);

        if(rand === 0){
            var int = Math.floor(Math.random() * upperAlphabet.length);
            pass += upperAlphabet[int];
            password.value = pass;
        }else if(rand === 1){
            var int = Math.floor(Math.random() * lowerAlphabet.length);
            pass += lowerAlphabet[int];
            password.value = pass;
        }else if(rand === 2){
            var int = Math.floor(Math.random() * specialCharacters.length);
            pass += specialCharacters[int];
            password.value = pass;
        }else if(rand === 3){
            var int = Math.floor(Math.random() * numbers.length);
            pass += numbers[int];
            password.value = pass;
        }
    }          

}

function copyPassword(){
    var copyText = document.getElementById("password");

    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand("copy");
}
