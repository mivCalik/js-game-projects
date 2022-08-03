function shuffle(array){
  var size = array.length;
  var shuffled_arr = [];
  var index_arr = []

  for (var i = 0;i<size;i++){
    index_arr.push(0);
  }

  while (index_arr.includes(0)){
    rand_index = Math.floor(Math.random()*size);

    if(index_arr[rand_index] === 0){
      index_arr[rand_index] = 1;
      shuffled_arr.push(array[rand_index]);
    }
  }
  return shuffled_arr;
}

//   for shuffle, sort() can also be used as below
//   cardArray.sort(() => 0.5-Math.random());

var cards = ["cheeseburger", "fries", "hotdog", "ice-cream", "milkshake", "pizza",
            "cheeseburger", "fries", "hotdog", "ice-cream", "milkshake", "pizza"];

cards = shuffle(cards);

console.log(cards);

//    card Displaying
var gridDisplay = document.querySelector("#grid");
for (var i = 0; i < 12; i++){
  var card = document.createElement("img");
  card.setAttribute("src", "img/blank.png");
  card.setAttribute("data-id", i);
  card.addEventListener("click",flipCard)
  gridDisplay.appendChild(card);
  }

var chosenCards =[];
var score = 0;
var count = 0;

function flipCard(e){
  var index = this.getAttribute("data-id");
  this.setAttribute("src", "img/"+cards[index]+ ".png");
  console.log("got clicked!");
  chosenCards.push(index);
  count +=1;

  if(chosenCards.length === 2){
    var index1 = chosenCards.pop();
    var index2 = chosenCards.pop();

    if(cards[index1]===cards[index2]){
      score +=1;
      setTimeout(function (){
        document.querySelectorAll("img")[index1].setAttribute("src","img/white.png");
        document.querySelectorAll("img")[index2].setAttribute("src","img/white.png");
      },500);
      document.querySelectorAll("img")[index1].removeEventListener("click", flipCard);
      document.querySelectorAll("img")[index2].removeEventListener("click", flipCard);
    }else{
      setTimeout(function (){
        document.querySelectorAll("img")[index1].setAttribute("src","img/blank.png");
        document.querySelectorAll("img")[index2].setAttribute("src","img/blank.png");
      },500);
    }
  }


  document.querySelector("#score").innerHTML = score;
  document.querySelector("#count").innerHTML = count;

}S
