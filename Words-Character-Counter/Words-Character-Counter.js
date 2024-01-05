let textbox = document.getElementById("textbox");
textbox.addEventListener("input",function(){
let userInputText = this.value;
let char = userInputText.length;
let characterCount = document.getElementById("char");
characterCount.innerHTML = char;




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

console.log('hy');
console.log('hy');
console.log('hy');
console.log('hy');
console.log('hy');
console.log('hy');
console.log('hy');
console.log('hy');
console.log('hy');
console.log('hy');