document.getElementById("username").innerHTML = "Anonymous";

let credits = 7000;

document.querySelector("#creditAmount").innerHTML = credits;

const lever = document.querySelector("#gamble");

let ended = true;
video = document.querySelector("#ChestVideo").addEventListener('ended', () => {
  ended = true;
});
video = document.querySelector("#ChestVideo").addEventListener('playing', () => {
  ended = false;
});


lever.addEventListener('click', () => {
  if (ended == true) {
    if (credits >= 0) {
      credits = lesdoit(credits);
    }
  }
  
});

function lesdoit(credits) {
  let buyAmount = 650;
  credits = credits - buyAmount;
  document.querySelector("#ChestVideo").play();
  let guess = getRandomInt(1, 100);
  let prize = 0;

  if (guess == 1) {
    prize = 50000;
  } else if (guess <= 15) {
    prize = 5000;
  } else if (guess <= 45) {
    prize = 500;
  } else {
    prize = 100;
  }

  document.querySelector("#creditAmount").innerHTML = credits + prize;

  document.querySelector("#wonAmount").innerHTML = `You win ${prize} credits!!`;
  console.log(`you won ${prize} after scoring ${guess}`);
  return prize + credits;
}





function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


