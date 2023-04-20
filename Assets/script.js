var startEl = document.querySelector("#start-button");
var timerEl = document.querySelector("#timer-count");
var scoreEl = document.querySelector(".current-score");
var highScoreEl = document.querySelector(".high-score-count");
var finishBtn = document.getElementById("submit");
var answerElement = document.querySelectorAll(".answer");
var answersElement = document.getElementById("answers");
var questionElement = document.querySelector(".question");
var questionNumberElement = document.querySelector(".question-number");

var finish = false;
var timer;
var timerCount;
var timeInterval;
var scoreCounter = 0;
var highScoreCount = 0;
var que_count = 0;

// create object of question functions

startEl.onclick = () => {
     console.log("print when clicked");
    finish = false;
    timerCount = 30;
    startEl.disabled = true;
    countDownStart();
    showQuestion(0);

function init() {
    getscore();



}





//   handling timer func here

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


};}

// questions listed here

var questions = [

{   
    numb: 1,
    correctAnswer: "D. Jesse",
    question: "what is my name?",
    answers: [
       { text:"Chris" },
       { text:"Sean" },
       { text:"Sam" },
       { text:"Jesse" }
    ],
       
   
},

 {
     numb: 2,
     correctAnswer: "A. thats" ,
     question: "the answer is A",
     answers:[
        {text: "A.thats" },
        {text: "B.not" },
        {text: "C.a" },
        {text: "D.question" }
 ]
     
 },

{   
     numb: 3,
     correctAnswer: "C. <--",
     question: "the answer is here... I think?",
     answers: [
        { text: "nope" },
        { text: "not it" },
        { text: "this one" },
        { text: "lies" }
     ]
     
 }
]



function showQuestion(index) {

    let queNumber = 'Question ' + questions[index].numb;

    questionNumberElement.innerHTML = queNumber;

    
    let que = questions[index].question;

    questionElement.innerHTML = que;

    
    questions[index].answers.forEach(answer => {

        const button = document.createElement('button')

        button.innerText = answer.text

        button.classList.add('answer')
        
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)

        answersElement.appendChild(button)
    })
}



function selectAnswer(answer) {
    var userAns = answer.target.innerText;
    var correctAns = questions[que_count].correctAnswer;
    if (userAns == correctAns) {
        scoreup();
    }
    resetState();
    if (que_count < questions.length - 1) {
        minusCounter();
        nextQuestion();
    }
    else {
        gameover();
    }
}

// need to find a more eficient way to do this

 function minusCounter() {
     timerCount--;
     timerCount--;
     timerCount--;
     timerCount--;
     timerCount--;

 }





function nextQuestion() {
    que_count++;
    showQuestion(que_count);
}

function resetState() {
    // clearStatusClass(document.body)
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild)
    }
}












function gameover(){

    var gameOverEl = document.querySelector(".question");
    gameOverEl.textContent = "GAME OVER";

    resetState()


}

// trying to set and get score

function scoreup(){
scoreCounter++;
setScore()
}



function setScore(){

    scoreEl.textContent = scoreCounter;
    localStorage.setItem('highScoreCount', highScoreCount);
}



function getscore(){

    var storedScore = localStorage.getItem('highScoreCount');

    if(storedScore === null) {

        scoreCounter = 0;

    } else {

        scoreCounter = storedScore;

    }

    scoreEl.textContent = scoreCounter;

}

getscore()

// event listeners listed bellow

finishBtn.addEventListener("click", function(){
    window.location.reload();
} )



   