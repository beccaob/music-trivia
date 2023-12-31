// waits for html to load before loading javascript
document.addEventListener("DOMContentLoaded", function () {


    // Get DOM elements
    const questionText = document.getElementById("question-text");
    const trueBtn = document.getElementById("true");
    const falseBtn = document.getElementById("false");
    const userScoreElement = document.getElementById("user-score");
    const endScoreElement = document.getElementById("end-score");
    const restartBtn = document.getElementById("restart");


    let currentQuestion = 0;
    let userScore = 0;

    

    //questions and answers
    const questions = [
        {
            question: "Beethoven is a famous composer.",
            answer: true,
        },
        {
            question: "The Beatles released their first album in 1963.",
            answer: true,
        },
        {
            question: "Elvis Presley is known as the 'King of Rock and Roll'.",
            answer: true,
        },
        {
            question: "Madonna's real name is Madonna Louise Ciccone.",
            answer: true,
        },
        {
            question: "Nirvana's album 'Nevermind' was released in 1993.",
            answer: false,
        },
        {
            question: "The Rolling Stones formed in London in 1962.",
            answer: true,
        },
        {
            question: "Taylor Swift's first studio album was released when she was just 16 years old.",
            answer: true,
        },
        {
            question: "The Beatles' 'Yellow Submarine' album was released before 'Sgt.Pepper's Lonely Hearts Club Band.'",
            answer: false,
        },
        {
            question: "The song 'Hotel California' by the Eagles is about a haunted hotel.",
            answer: false,
        },
        {
            question: "The Bee Gees were known for their contributions to the disco era.",
            answer: true,
        },
        {
            question: "Prince's film 'Purple Rain' was released in the 1990s.",
            answer: false,
        },
        {
            question: "Freddie Mercury was the lead vocalist for the band Queen.",
            answer: true,
        },
        {
            question: "The album 'Back in Black' by AC/DC is one of the best-selling albums of all time.",
            answer: true,
        },
        {
            question: "ABBA was a British rock band.",
            answer: false,
        },
        {
            question: "Madonna's birthplace is New York City.",
            answer: false,
        },
        {
            question: "Queen's hit song 'Bohemian Rhapsody' was recorded in a single take.",
            answer: false,
        },
        {
            question: "Pink Floyd's album 'The Wall' was released in the 1990s.",
            answer: false,
        },
        {
            question: "Jimi Hendrix is known for playing the guitar left-handed.",
            answer: true,
        },
        {
            question: "Stevie Wonder is a multi-instrumentalist known for playing the harmonica.",
            answer: true,
        },
        {
            question: "The Rolling Stones' lead guitarist, Keith Richards, is known for playing a Fender Stratocaster guitar.",
            answer: false,
        }
    ];


    // randomises question order 
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(questions);

    // display current questions 
    //
    function displayCurrentQuestion() {
        if (currentQuestion < questions.length) {
            const current = questions[currentQuestion];
            questionText.textContent = current.question;
        } else {
            // quiz is over - all questions answered
            let message = "";
            if (userScore >= 15 && userScore <= 20) {
                message = `Wow, you scored ${userScore} out of 20! You're amazing at this, well done!`;
                // Hide the True and False buttons
                trueBtn.style.display = "none";
                falseBtn.style.display = "none";
            } else if (userScore >= 10 && userScore < 15) {
                message = `Woohoo! You scored ${userScore} out of 20. You know your music trivia! Congratulations!`;
                // Hide the True and False buttons
                trueBtn.style.display = "none";
                falseBtn.style.display = "none";
            } else if (userScore <= 10) {
                message = `Oh no! You scored ${userScore} out of 20. Better luck next time!`;
                // Hide the True and False buttons
                trueBtn.style.display = "none";
                falseBtn.style.display = "none";
            }
            // Display the message
            feedbackMessage(message);
        }
    }

    // update user score 
    function updateUserScore() {
        userScoreElement.textContent = userScore;
        endScoreElement.textContent = " / " + questions.length;
    }

    function feedbackMessage(message) {
        questionText.textContent = message;
    }


    // check users answer 
    function checkAnswer(userAnswer) {
        if (currentQuestion < questions.length) {
            const current = questions[currentQuestion];
            if (userAnswer === current.answer) {
                feedbackMessage("Correct! Well done.");
                userScore++;
            } else {
                feedbackMessage(`Not quite! The correct answer is ${current.answer ? 'True' : 'False'}.`);
            }
            currentQuestion++;
            updateUserScore();
            setTimeout(displayCurrentQuestion, 1000); // Delay to display the next question
        }
    }


    // event listeners for true & false buttons 
    trueBtn.addEventListener("click", () => checkAnswer(true));
    falseBtn.addEventListener("click", () => checkAnswer(false));


    // restart event listener 
    restartBtn.addEventListener("click", () => {
        currentQuestion = 0;
        userScore = 0;
        // unhide the True and False buttons
        trueBtn.style.display = "inline-block";
        falseBtn.style.display = "inline-block";
        shuffleArray(questions); // Shuffle questions again
        displayCurrentQuestion();
        updateUserScore();
    });


    // begin quiz 
    displayCurrentQuestion();
    updateUserScore();


});




