let cel = document.getElementById("cel");
let fah = document.getElementById("fah");
let kel = document.getElementById("kel");

cel.addEventListener("input", function () {
  let c = this.value;
  let f = (c * 9) / 5 + 32;
  if (!Number.isInteger(f)) {
    f = f.toFixed(2);
  }
  // let newAdd = document.createElement("h2");
  // newAdd.innerText = "this is value";
  // document.body.appendChild(newAdd);
  fah.value = f;
  console.log(f);

  let result1 = document.getElementById("result1");
  result1.innerHTML = `Celsius To Fahrenheit ${(fah.value = f)} `;
});

fah.addEventListener("input", function () {
  let f = fah.value;
  let c = ((f - 32) * 5) / 9;
  if (!Number.isInteger(c)) {
    c = c.toFixed(2);
  }
  let result1 = document.getElementById("result1");
  result1.innerHTML = `Fahrenheit To Celsius ${(cel.value = c)} `;
  cel.value = c;
});
























// Extra
function converter() {
  let temp = document.getElementById("input").value;
  let result = temp * 1.8 + 32;
  console.log(result);
  let output = document.getElementById("result");
  output.innerHTML += result;
}
