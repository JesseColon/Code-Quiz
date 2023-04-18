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



 function startQuiz() {
  
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


};}



var questions = [

{   
    numb: 1,
    correctAnswer: "D. Jesse",
    question: "what is my name?",
    answers: [
       { text:"A. Chris" },
       { text:"B. Sean" },
       { text:"C. Sam" },
       { text:"D. Jesse" }
    ],
       
   
},

 {
     numb: 2,
     correctAnswer: "A. thats" ,
     question: "the answer is A",
     answers:[
        {text: "A. thats" },
        {text: "B. not" },
        {text: "C. a" },
        {text: "D. question" }
 ]
     
 },

{   
     numb: 3,
     correctAnswer: "C. <--",
     question: "the answer is here... I think?",
     answers: [
        { text: "A. nope" },
        { text: "B. not it" },
        { text: "C. <--" },
        { text: "D. the arrows a lie" }
     ]
     
 }
]

// var questionsArray = [question, question2, question3];

//function showquestion() {
    //  console.log(currentQuestion);
     
    //addAnswers();

    //  questionsArray[0].textContent = question.title;
//var q = questionsArray[currentQuestion]
//quizEl.textContent = q.title
//answer.forEach(function(element, index){
    //element.textContent = q.answer[index];

  //element.addEventListener('click', function(){

       //if(q.correctAnswer == index && currentQuestion < [2]) {
        //scoreup()
       // nextQuestion()

       //}else{

        //console.log('wrong');
       // minusCounter()
       // nextQuestion()
      // }

  //  });


//});
//}

function showQuestion(index) {

    //question number changes

    let queNumber = 'Question ' + questions[index].numb;
    questionNumberElement.innerHTML = queNumber;

    //question changes
    let que = questions[index].question;
    questionElement.innerHTML = que;

    //answers change
    questions[index].answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('answer')
        //when answer is selected
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        // index++;
        answersElement.appendChild(button)
    })
}



function selectAnswer(answer) {
    var userAns = answer.target.innerText;
    var correctAns = questions[que_count].correctAnswer;
    if (userAns == correctAns) {
        scoreCounter++;
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


 function minusCounter() {
     timerEl.textContent--
     timerEl.textContent--
     timerEl.textContent--
     timerEl.textContent--
     timerEl.textContent--

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






//   handling timer func here





function gameover(){

    var gameOverEl = document.querySelector(".question");
    gameOverEl.textContent = "GAME OVER";

    resetState()


}



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
    console.log('clicked');
} )



   