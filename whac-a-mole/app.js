const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const startBtn = document.querySelector("button");

const time = 30;

var result ;
var hitPosition;
var currentTime;
var timerId = null;
var countDownTimerId = null;

startBtn.addEventListener("click", function (){
  game();
  startBtn.disabled = true;
  setTimeout(function(){startBtn.disabled = false;},time)
  reset();
})


squares.forEach(sq => {
  sq.addEventListener("mousedown", function () {
    if(sq.id == hitPosition){
      //    point
      result +=1;
      score.innerHTML = result;
      hitPosition = null;
      }
  });
});



function randomSquare(){
  squares.forEach(sq => {sq.classList.remove("mole");});
  var randomPosition = Math.floor(Math.random()*9);

  squares[randomPosition].classList.add("mole");
  hitPosition = squares[randomPosition].id;
}


function game(){
  timerId = setInterval(randomSquare,500);
  countDownTimerId = setInterval(countDown,1000);
}

function countDown(){
    currentTime -=1;

    if (currentTime == 0){
      timeLeft.textContent = currentTime;
      clearInterval(countDownTimerId);
      clearInterval(timerId);
      alert("You score " + result + " mole in "+time+" seconds.")
    }

    timeLeft.textContent = currentTime;
}

function reset(){
  result = 0;
  currentTime = time;
  score.innerHTML = result;
}

function disabledBtn(){
  startBtn.disabled = true;
  sta
}
