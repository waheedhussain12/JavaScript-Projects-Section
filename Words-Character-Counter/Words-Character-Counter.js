// html element access
let textbox = document.getElementById("textbox");
// event for perform any task from keyboard or mouse
textbox.addEventListener("input",function(){
    // means get event values
let userInputText = this.value;
// get length
let char = userInputText.length;

let characterCount = document.getElementById("char").innerHTML = char;
// characterCount.innerHTML = char;




// words
// for delete start and end space
userInputText =  userInputText.trim();
// split use for seprate any word its convert in array
let words = userInputText.split(" ");
// use filter for clean list means do not count any space
let cleanList = words.filter(function(e){
    return e != "";
});
document.getElementById("word").innerHTML = cleanList.length;
// extra 
// console.log(cleanList);
// let wordsLength = words.length;
// let wordCounter = document.getElementById("word");
// wordCounter.innerHTML = wordsLength;


});

