// let colorCode = Math.floor(Math.random() * 16777216).toString(16);
// console.log("#" + colorCode);
const btnColor = document.getElementById("generateNew");

const setBg = () => {
  let colorCode = Math.floor(Math.random() * 16777216).toString(16);
  document.body.style.backgroundColor = "#" + colorCode;
  generateNew.style.backgroundColor = "#" + colorCode;
  generateNew.style.filter = "#" + colorCode;
  color.innerHTML = "#" + colorCode;
};

generateNew.addEventListener("click", setBg);

function copyCode() {
  let hexCode = color.innerHTML;
  let input = document.createElement("input");
  input.setAttribute("value", hexCode);
  document.body.appendChild(input);
  input.select();

  document.execCommand("copy");
  document.body.removeChild(input);
  document.getElementById("tooltip").innerHTML = "Copied!";
}

color.addEventListener("click", copyCode);
