// DOM element variables
var quiz = document.querySelector("#main");
var orderedList = document.querySelector("#orderedList");
var welcome = document.querySelector("#welcome");
var timerSent = document.querySelector("#timer");
var highscore = document.querySelector("#highscore");
var button = document.querySelector("#button");
var grade = document.querySelector("#grade");
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")


//Gamestate variables
var thisQuestion = 0;
var timer = 60;
var score = 0;


button.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    //Hide welcome message
    welcome.style.display = "none";
    //Begin quiz
    askQuestions();
});

//Array of questions
var questions = [{
    thequestion: "Do you like pigs?",
    options: ["Heck yes", "Goopen No", "Big friggin yessir", "Goddamn that guy"],
    answer: "Goddamn that guy",
}, {
    thequestion: "Do you like anime?",
    options: ["Heck yes", "Goopen No", "Big friggin yessir", "Goddamn that guy"],
    answer: "Goddamn that guy",
}, {
    thequestion: "Are you the reincarnated ghost of Ghengis Khan?",
    options: ["Heck yes", "Goopen No", "Big friggin yessir", "Goddamn that guy"],
    answer: "Goddamn that guy",
}, {
    thequestion: "What does Pot of Greed do?",
    options: ["Heck yes", "Goopen No", "Big friggin yessir", "Goddamn that guy"],
    answer: "Goddamn that guy",
}];



//User clicks intended answer
//Declare right or wrong (matches object property yes or no)
//Change time
//Next question

//For loop cycling through each question.
function askQuestions() {

    //Start timer
    function startTimer() {
        var timerInterval = setInterval(function() {
            timerSent.textContent = timer + " seconds left";
            timer--;

            if (timer === 0) {
                clearInterval(timerInterval);
                //End Game (state Game Over, go to results page)
                return ""
            }
        }, 1000);
    }


    startTimer();

    //Present questions
    var currentQuestion = document.querySelector("#theQuestion");
    currentQuestion.textContent = questions[thisQuestion].thequestion;


    //Present 4 potential answers
    answer1.textContent = questions[thisQuestion].options[0]
    answer2.textContent = questions[thisQuestion].options[1]
    answer3.textContent = questions[thisQuestion].options[2]
    answer4.textContent = questions[thisQuestion].options[3]

    //Make them clickable
    function click(event) {
        var target = event.target.textContent;
        //Declare right or wrong by comparing answer in question object to clicked choice
        if (target === questions[thisQuestion].answer) {
            //Going to have to add time here
            grade.textContent = "Zip Zap Correct Is That"
            score += 10;
            timer += 5;
            //Clear old question 
            orderedList.innerHTML = "";
            currentQuestion.textContent = "";
        } else {
            grade.textContent = "Boom Bammed Shoulda Crammed"
            timer -= 10;
            //Clear old question 
            orderedList.innerHTML = "";
            currentQuestion.textContent = "";
        }
    }
    document.addEventListener("click", click);
    //Go to next question
    thisQuestion++;

    //Go to the next question
}
// Add timer
// Add score
// Highscore page