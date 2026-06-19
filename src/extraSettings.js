let extraScore = 1;
let wuDi = true;
let firstFruit = 2;
let reverseLevelUp = false;

const minRandomFruitNum = reverseLevelUp ? 6 : 2;
const maxRandomFruitNum = reverseLevelUp ? 11 : 6;

let setFruits = {
  startFruits: reverseLevelUp ? [10, 10, 8, 7, 7, 6] : [2, 2, 3, 4, 4, 5],
  randomFunction: () => {
    return minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum));
  }
};

let fruitQTan = false;
let fruitSlowDown = false;
let clickChangeFruit = false;
let adLink = false;

document.getElementsByTagName("title")[0].innerText = "合成崔志宇";

let selectModal = false;
