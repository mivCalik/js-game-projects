function computer_hand(){
  var options = ["rock", "paper", "scissors"];
  var rand_position = Math.floor(Math.random()*3);

  return options[rand_position];
}

your_score = 0;
computer_score = 0;

for(var i = 0; i < 3; i++){
  var button_hand = document.querySelectorAll("button")[i]
  if(button_hand){

    button_hand.addEventListener("click", function(){
      var your_choice =  this.innerHTML;
      var computer_choice = computer_hand();

      //        calculate result
      var result = "";
      if(your_choice === computer_choice){
        result = "Draw..."
      }else if ((your_choice === "rock" && computer_choice === "scissors")||
               (your_choice === "paper" && computer_choice === "rock")||
               (your_choice === "scissors" && computer_choice === "paper")){
        /// When you win
        result = "You won! " + your_choice + " beats " + computer_choice;
        your_score += 1;
      }else{
        result = "You lost! " + computer_choice + " beats " + your_choice;
        computer_score +=1;
      }


      //        print computer_choice , result and score
      document.querySelector("#computer_choice").innerHTML = computer_choice;
      document.querySelector("#result").innerHTML = result;
      score_str = your_score + " - " + computer_score;
      document.querySelector("#score").innerHTML = score_str;
      console.log(">" + result);

      //        add images
      var comp_img = "img/left-"+ your_choice + ".png";
      var your_img = "img/right-"+ computer_choice + ".png";

      document.querySelector(".left").setAttribute("src", comp_img);
      document.querySelector(".right").setAttribute("src", your_img);


    })
  }

  }
