### HW04-timedquiz

## Overview
The purpose of this assignment was to build a timed coding quiz.  The quiz was to have a timer that is affected by the player's answer being correct or incorrect.  In this case, if you answer correctly you gain 5 seconds, whereas if you answer incorrectly, you're deducted a slightly more harsh 10 seconds.  The quiz was also to store the local value of the high score, with the intention being that you can compare your high score to your peers'. I specifically set it up so that only the highest score is retained, for in the words of Ricky Bobby, if you're not first you're last. 

I used Bootstrap to utilize the Bootstrap grid system, which is useful both for the construction of your general layout as well as  sizing elements differently depending on the screen size of the user.  I also used a css reset I found online (link in the section below) so that I could size things more specifically to how I wanted.  

If I had more time to work on this project I would do several things:
1. Make it less ugly.  Specifically some of the dimensions of certain elements and give it a more soothing background.  I think what I have now is decent for readability, but it could certainly be more stylized. 
2. I'd add more questions and/or make the current questions more difficult.  It would be entertaining to make this an actual assessment quiz and have it be 50-100 questions.
3. I could have condensed a few things in my css and probably my JS file as well.
4. Potentially parse out all the code into several files so my script.js file isn't 180 lines (although that's not the worst).
5. Add a congratulatory message when a new high score is achieved. 

Overall, I'd say this homework gave me the hardest time of the completed assignments so far.  Not only did we have to start from scratch with no starter code, we couldn't use jQuery (had to stick with vanilla Javascript) and it required several different functions and general JS skills.  While challenging, it was a great assignment to be forced to learn a large amount of material. 

## Used Appllications
1. CSS Reset - https://meyerweb.com/eric/tools/css/reset/

## Links
Github - https://github.com/AWSiegfried/HW04-timedquiz

Link to game - https://awsiegfried.github.io/HW04-timedquiz/

## PsuedoCode
1. Page opens and shows leaderboard, timer, welcome message with start button.
2. When "start quiz" is clicked each question and possible answers are shown.
    2a. When start quiz is clicked, timer begins to run down.
3. User clicks their answer. If it is correct, tell them it is correct, increase score by 10, move to next question.
    3a. If it is incorrect, tell them it is incorrect, decrease timer by 10 seconds, move to next question.
4. When all questions are asked, present final score.
    4a. Append enter intials prompt with submit button. 
    4b. Add initials/score to scoreboard
5. Show scoreboard


