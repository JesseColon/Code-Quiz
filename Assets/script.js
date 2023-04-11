var startEl = document.querySelector("#start-button")
var timerEl = document.querySelector("#timer-count")
var scoreEl = document.querySelector("current-score")
var highScoreEl = document.querySelector(".high-score-count")

var timer;
var timerCount;
var timeInterval;
var highScoreCounter = 0;
var scoreCount = 0;

// create object of question functions

var questions = [question1, question2, question3];

function question1 (){
    question: ""
    answer:{
        a:""
        b:""
        c:""
        d:""
    };

}

function question2 (){
    question: 
    answer:{""
        a:""
        b:""
        c:""
        d:""
    };

}

function question3 (){
    question: 
    answer:{""
        a:""
        b:""
        c:""
        d:""
    };

}


function startQuiz() {
   console.log("print when clicked");
   timerCount = 90;
   startEl.disabled = true;
    countDownStart()
    // qusetionStart()
}



function countDownStart () {

    timer = setInterval(function() {

        timerCount--;
        
        timerEl.textContent = timerCount;

        if (timerCount >= 0) {

          if (iswin = false && timerCount > 0){

            clearInterval(timer);

            }

        } if(timerCount === 0) {

            timerEl.textContent = " ";
            clearInterval(timer)
            gameover()
        }
    }, 1000);


};

function qusetionStart () {


}

startEl.addEventListener("click", startQuiz);

