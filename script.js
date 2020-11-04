// DOM element variables
var quiz = document.querySelector("#main");
var orderedList = document.querySelector("#orderedList");
var welcome = document.querySelector("#welcome");
var timerSent = document.querySelector("#timer");
var currentScore = document.querySelector("#currentScore");
var button = document.querySelector("#button");
var grade = document.querySelector("#grade");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var finalScore = document.querySelector("#final-score");
var answers = document.querySelectorAll(".answerClass")
var currentQuestion = document.querySelector("#theQuestion");
var gameover = document.querySelector("#gameover");
var submitButton = document.querySelector("#submit-button");
var initialsInput = document.querySelector("#initials");
var theLeaderboard = document.querySelector("#theleaderboard");
var scores = document.querySelector("#highscores");


//Gamestate variables
var thisQuestion = 0;
var timer = 60;
var score = 0;

//Array of questions
var questions = [{
    thequestion: "Do you like pigs?",
    options: ["Heck yes", "Goopen No", "Big friggin yessir", "Hate that guy"],
    answer: "3",
}, {
    thequestion: "Do you like anime?",
    options: ["Heck yes", "Goopen No", "Big friggin yessir", "Hate that guy"],
    answer: "3",
}, {
    thequestion: "Are you the reincarnated ghost of Ghengis Khan?",
    options: ["Heck yes", "Goopen No", "Big friggin yessir", "Hate that guy"],
    answer: "3",
}, {
    thequestion: "What does Pot of Greed do?",
    options: ["Heck yes", "Goopen No", "Big friggin yessir", "Hate that guy"],
    answer: "3",
}];

//For loop cycling through each question.
function askQuestions() {

    //Start timer
    function startTimer() {
        var timerInterval = setInterval(function() {
            timerSent.textContent = timer + " seconds left";
            timer--;

            if (timer === 0) {
                clearInterval(timerInterval);
                //End Game (state Game Over, go to results page), but if gameover has already  happened, don't do it
                if (gameover.style.display = "none") {
                    return;
                } else {
                    sendMessage();
                }
            }
        }, 1000);
    }

    function sendMessage() {
        welcome.style.display = "none";
        gameover.style.display = "block";
        finalScore.textContent = score;
    }


    startTimer();
    rerender();

    //Make them clickable
    function click(event) {
        event.preventDefault();
        event.stopPropagation();
        var answerIndex = this.dataset.index;
        //Declare right or wrong by comparing answer in question object to clicked choice
        if (answerIndex === questions[thisQuestion].answer) {
            //Going to have to add time here
            grade.textContent = "Zip Zap Correct Is That"
            score += 10;
            timer += 5;
        } else {
            grade.textContent = "Boom Bammed Shoulda Crammed"
            timer -= 10;
        }
        //Clear old question 
        answers.forEach(function(answer) {
            answer.textContent = "";
        })
        currentQuestion.textContent = "";
        setTimeout(function() {
            grade.textContent = "";
            thisQuestion++;
            if (thisQuestion === questions.length) {
                sendMessage();
            } else {
                rerender();
            }
        }, 1000);
        // clearTimeout(timeId)

    }

    function rerender() {
        //Present Score
        currentScore.textContent = "Score: " + score;

        //Present questions
        currentQuestion.textContent = questions[thisQuestion].thequestion;

        //Present 4 potential answers
        for (let index = 0; index < answers.length; index++) {
            var element = answers[index];
            element.textContent = questions[thisQuestion].options[index]
        }

        for (let index = 0; index < answers.length; index++) {
            var element = answers[index];
            element.addEventListener("click", click);
        }
    }
}

//Start Game
button.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    //Hide welcome message
    welcome.style.display = "none";
    //Begin quiz
    askQuestions();
});

//Submit initals/answer
submitButton.addEventListener("click", function() {
    //Get input
    var initials = initialsInput.value.trim();

    // If empty don't run, else 
    if (initials !== "") {
        // Pull from localstorage or set to empty array
        var leaderboard = JSON.parse(window.localStorage.getItem("leaderboard")) || [];

        // Create new score that includes initials
        var newScore = document.createElement("li");
        newScore = initials + " " + score;
        console.log(newScore);

        // save to localstorage
        leaderboard.push(newScore.textContent);
        window.localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

        // Show leaderboard
        theLeaderboard.append(newScore);
        gameover.style.display = "none";
        theLeaderboard.style.display = "block";
    }

});