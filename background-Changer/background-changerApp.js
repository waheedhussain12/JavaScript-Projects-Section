function changeBG(color) {
  document.body.style.backgroundColor = color;
  let blackColr = document.getElementsByClassName("changeblackColr");
  if (color == "#000000") {
    for (let elm of blackColr) {
      elm.style.color = "white";
    }
  } else {
    for (let elm of blackColr) {
      elm.style.color = "black";
    }
  }
}
