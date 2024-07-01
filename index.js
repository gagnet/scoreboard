let hScore = document.getElementById("h-score");
let gScore = document.getElementById("g-score");

hPoints = 0;
gPoints = 0;

function hBasket1() {
  hPoints += 1;
  hScore.textContent = hPoints;
  console.log(hPoints);
}

function hBasket2() {
  hPoints += 2;
  hScore.textContent = hPoints;
  console.log(hPoints);
}

function hBasket3() {
  hPoints += 3;
  hScore.textContent = hPoints;
  console.log(hPoints);
}

function gBasket1() {
  gPoints += 1;
  gScore.textContent = gPoints;
  console.log();
}
function gBasket2() {
  gPoints += 2;
  gScore.textContent = gPoints;
  console.log(gPoints);
}

function gBasket3() {
  gPoints += 3;
  gScore.textContent = gPoints;
  console.log(gPoints);
}

function testNum(gPoints) {
  let result;
  if (gPoints > hPoints) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
  return result;
}

function newGame() {
  hPoints = 0;
  gPoints = 0;
  hScore.textContent = hPoints;
  gScore.textContent = gPoints;
}
