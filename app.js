const textcolor = document.getElementById("textchange");
const bgcolor = document.getElementById("bgcolor");
const fontSize = document.getElementById("fontchange");
const clearBtn = document.getElementById("clearbtn");
const saveBtn = document.getElementById("savebtn");
const retrieveBtn = document.getElementById("retrievebtn");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function updateBgColor() {
  const color = bgcolor.value;
  canvas.style.backgroundColor = color;
}
bgcolor.addEventListener("input", updateBgColor);
updateBgColor();

function clearCanvas() {
  canvas.style.backgroundColor = "#fff";
  //need to add text removal also.
}
clearBtn.addEventListener("click", clearCanvas);
clearCanvas();
