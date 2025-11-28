let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");

let txt1 = document.getElementById("disp-1");
let txt2 = document.getElementById("disp-2");
let txt3 = document.getElementById("disp-3");
let txt4 = document.getElementById("disp-4");

// fun to generate random number
const getRandomNum = () => {
  return Math.floor(Math.random() * 6) + 1;
};

btn1.addEventListener("mouseover", () => {
  let ranNum = getRandomNum();
  btn1.innerText = ranNum;
  txt1.textContent = ranNum;
});

btn2.addEventListener("mouseover", () => {
  let ranNum = getRandomNum();
  btn2.innerText = ranNum;
  txt2.textContent = ranNum;
});

btn3.addEventListener("mouseover", () => {
  let ranNum = getRandomNum();
  btn3.textContent = ranNum;
  txt3.textContent = ranNum;
});

btn4.addEventListener("mouseover", () => {
  let ranNum = getRandomNum();
  btn4.textContent = ranNum;
  txt4.textContent = ranNum;
});

// reset all the displays
document.getElementById("reset").addEventListener("mouseover", () => {
  txt1.textContent = 0;
  txt2.textContent = 0;
  txt3.textContent = 0;
  txt4.textContent = 0;
});

// common button to display random values in all the four dice containers

document.getElementById("four").addEventListener("mouseover", () => {
  let ranNum = getRandomNum();
  btn1.innerText = ranNum;
  btn2.innerText = ranNum;
  btn3.innerText = ranNum;
  btn4.innerText = ranNum;
  txt1.textContent = ranNum;
  txt2.textContent = ranNum;
  txt3.textContent = ranNum;
  txt4.textContent = ranNum;
});
