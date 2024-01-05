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
userInputText =  userInputText.trim();
let words = userInputText.split(" ");
let cleanList = words.filter(function(e){

    return e != "";
});
console.log(cleanList);
let wordsLength = words.length;
let wordCounter = document.getElementById("word");
wordCounter.innerHTML = wordsLength;
document.getElementById("word").innerHTML = cleanList.length;

});

