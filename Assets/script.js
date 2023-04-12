var startEl = document.querySelector("#start-button")
var timerEl = document.querySelector("#timer-count")
var scoreEl = document.querySelector("current-score")
var highScoreEl = document.querySelector(".high-score-count")
var nextBtn = document.getElementById("submit")
var answer = document.querySelectorAll(".answer");

var finish = false;
var timer;
var timerCount;
var timeInterval;
var highScoreCounter = 0;


// create object of question functions

// var questions = [question1, question2, question3];

function init() {
    getscore();
}

let question = {
    title: "the answer is here... I think?",
    answer: [
        "A. thats",
        "B. not",
        "C. a",
        "D. question"],
       correctAnswer: 3
   
};

// function question2 (){
//     question: 
//     answer:{"the answer is a"
//         a:""
//         b:""
//         c:""
//         d:""
//     };
//     correctAnswer:"a"
// }

// function question3 (){
//     question: 
//     answer:{"the answer is b"
//         a:""
//         b:""
//         c:""
//         d:""
//     };
//     correctAnswer:"b"
// }

function showquestion() {

let quizEl = document.getElementById("quiz");

     quizEl.textContent = question.title;



answer.forEach(function(element, index){
    element.textContent = question.answer[index];

    element.addEventListener('click', function(){

       if(question.correctAnswer == index) {

        scoreup()
        // nextquestion()

       }else{

        console.log('wrong');
        timerCount-5;
       }

    });
});

}



function startQuiz() {
   console.log("print when clicked");
   finish = false;
   timerCount = 10;
   startEl.disabled = true;
    countDownStart()
    showquestion()
}



function countDownStart () {

    timer = setInterval(function() {

        timerCount--;
        
        timerEl.textContent = timerCount;

        if (timerCount >= 0) {

          if (finish && timerCount > 0){

            clearInterval(timer);

            }

        } if(timerCount === 0) {

            timerEl.textContent = " ";
            clearInterval(timer)
            gameover()
        }
    }, 1000);


};

function gameover(){

    let gameOverEl = document.getElementById("quiz");
    gameOverEl.textContent = "GAME OVER";

    answer.textContent = question.title;

    answer.forEach(function(element){
        element.textContent = ' ';
})
}
function scoreup(){
highScoreCounter++;
setScore()
}

function setScore(){

    highScoreEl.textContent = highScoreCounter;
    localStorage.setItem('highScoreCount', highScoreCounter);
}

function getscore(){

    var storedScore = localStorage.getItem('highScoreCount');

    if(storedScore === null) {

        highScoreCounter = 0;

    } else {

        highScoreCounter = storedScore;

    }

    highScoreEl.textContent = highScoreCounter;

}

// event listeners listed bellow

nextBtn.addEventListener("click", function(){
    console.log('clicked');
} )

startEl.addEventListener("click", startQuiz);

