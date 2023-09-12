// waits for html to load before loading javascript
document.addEventListener("DOMContentLoaded", function () {
    //questions and answers
    const questions = [
        {
            question: "Is Beethoven a famous composer?",
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

    let currentQuestion = 0;
    let userScore = 0; 

    // Get DOM elements
    const questionText = document.getElementById("question-text");
    const trueBtn = document.getElementById("true");
    const falseBtn = document.getElementById("false");
    const userScoreElement = document.getElementById("user-score");
    


