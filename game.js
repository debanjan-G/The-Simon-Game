// alert("Hemlo!")
// $("h1").text("Press A key to cry");
let gamePattern=[];

let buttonColors=["red","blue","green","yellow"];

let userClickedPattern=[];

let level=0;
let start=false;

$(document).on("keypress",function(){
if(start==false){
    nextSequence();
    start=true;
    
}
})

function nextSequence(){

    userClickedPattern=[];

    let randomNumber= Math.floor(Math.random()*4);

    var randomChosenColor=buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);

    level++;
    $("h1").text("Level "+level);

}

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}
    



$(".btn").on("click",function(event){

    var userChosenColor=event.target.id;

    userClickedPattern.push(userChosenColor);

    console.log(userClickedPattern);

    playSound(userChosenColor);

    setTimeout(animatePress(userChosenColor),100);

    setTimeout(function(){
        $("."+userChosenColor).removeClass("pressed")
    },100)

    checkAnswer(userClickedPattern.length-1);
    
    });


function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
}

function startOver(){
    level=0;
    start=false;
    gamePattern=[];
    
}







