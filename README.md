# Tune test - Musici Trivia Quiz
[View the live site here](https://beccaob.github.io/music-trivia/)

## Final Design 
![website mockup](assets/images/readme-img/mockup.png)

## Introduction
My site is a music trivia quiz. The aim of this project was to create an interactive front-end site which responds to user actions. 

## User Expierence (UX)
### User Stories
1. As a user, I want to test my knowledge on music trivia.
  The user can test their knowledge by playing the quiz. 
2. As a user, I want to enter my unique username and have the game acknowledge it. 
 The user can enter their username by typing in the input-type(text) field. The game will welcome them and call them by their username. 
3. As a user, I want the screen to be responsive across all of my devices. 
 The game can be played across a reange of devices as it's fully responsive. 
4. As a user, I want to have answer options to choose from. 
 The game has two options - true & false. 
5. As a user, i want a wide array of questions to answer. 
 There are 20 questions to answer. 
6. As a user, I want to see my final score. 
 The users final score is displayed once all questions are answered. 
7. As a user, I want to be able to restart the quiz if needed. 
 There is a reset button which will reset the user score and randomly shuffle the questions again. 

- ### Design 
    - ### Colour Scheme 
    I used a olive to yellow gradient colour as I believe the colours go well together and do not cause any contrast errors. 
    1. Black was used for main text.  
    4. Black was used for hover background and olive was used for hover text, this allowed the user to confirm that they were hovering over the buttons. 
    5. 
    - ### Fonts
    For the fonts, I used 'Boogaloo' for headings & 'Abel' for regular text, both from Google Fonts. I used 'sans-serif' as a backup should those fonts not be available for all.

    - ### Icons 
    The icon used in the start button was obtained from Font Awesome. 

    - ### Images
    The logo image was designed using Canva Pro - image source in reference section. 

### Wireframes
I used wireframes to give myself a general idea of what I wanted the site to look like.

![home-page](assets/images/readme-img/home-page-wf.png)
![gamearea](assets/images/readme-img/game-wf.png)

## Features

- ### Logo Image

 Contains title & description of the game. This image also acts as a link to the home page.

 ![logo](assets/images/readme-img/logo.png)

- ### Username Input

 Allows user to enter their name. If a name is not entered - an error alert will display asking the user to choose a name before continuing. Once the name has been selected - the user is welcomed by their name and asked if they would like to begin the game.

 ![username](assets/images/readme-img/username.png)

- ### Start Button

Allows user to start the game. This button loads the game.js file. Functions are explained in the fuctions section below. The button text italicises when the user hovers over it so they know its a clickable button.

 ![start-btn](assets/images/readme-img/start.png)

- ### Question Text

 This area displays the game questions which are captured from the game.js file. 

 ![question](assets/images/readme-img/question.png)

- ### True & False Buttons

Allows user to choose their answer. The button changes colour when the user hovers over it so they know its a clickable button.

 ![true-false](assets/images/readme-img/truefalse.png)

- ### Restart

 This button will allow the user to restart the game at any time. The background colour and text colour will change if this button is hovered over so the user knows they can click it.

 ![restart](assets/images/readme-img/restart.png)

- ### User Score

 The user score is displayed over the question text. Once all questions are answered - the score is also displayed along with a message depending on the score gained.

 ![score](assets/images/readme-img/score.png)

 - ### Correct/Incorrect Message

Each time a question is answered - the game will tell the user if they have selected the correct answer or not. 

I used setTimeout on the currentQuestions function to allow time for this to display before the next question is shown. This elimates the need for the user to click into the next question and makes the game run smoother. The idea for setTimeout was obtained from the following website: [setTimeout Credit](https://www.tutorialspoint.com/How-to-delay-a-JavaScript-function-call-using-JavaScript#:~:text=Whenever%20we%20want%20to%20call,delay%20before%20executing%20a%20function.)

## Technologies used
 ### Languages
 1. HTML
 2. CSS
 3. JavaScript
   

### Programs

1. Balsamiq
Balsamiq was used to create my wireframes.
2. Git
Used for version control, commits and pushing to Github.
3. Github
Used for storing my repository, files and images pushed from gitpod.
4. Code Anywhere
IDE used.
5. Chrome Developer Tools
Used for troubleshooting when needed. Also used to check responsiveness.
6. Google Fonts
Used for site fonts.
7. Font Awesome
used for icons.
8. Canva Pro
Used to create the logo image.
9. Favicon.io
Favicon files were created using <https://favicon.io>

## Testing

The W3C Markup Validator, W3C CSS Validator Services and jshint.com were used to validate my project.

### HTML Testing: 

My game contains two .html files. I used WC3 Markup Validator to check each page. Please see results below:

#### index.html Testing

I ran into one error when testing index.html. Please see screenshot below:

![html-error](assets/images/readme-img/index-error.png)

This was corrected by just using the anchor tag and styling same. When i ran the validator again, it passed with no issues.
![html-error](assets/images/readme-img/index-pass.png)

#### game.html Testing

I ran into one error when testing game.html. Please see screenshot below:

![game-error](assets/images/readme-img/game-error.png)

I fixed this by moving the footer inside the body tags. 
![game-pass](assets/images/readme-img/game-pass.png)

## CSS Testing

No errors were found when testing my .css file. 
![css](assets/images/readme-img/css-validate.png)


### Js Hint

1. script.js 
   No errors encountered. One undefined document - this is referencing the dom. 
![script-js-hint](assets/images/readme-img/scriptjshint.png)

1. game.js
    Encountered six errors on inital test. See screenshot below: 
![game-js-hint](assets/images/readme-img/jshintgamejs.png)

    This was fixed by removing all unnessery semi-colons. One undefined document - this is referencing the dom.
![game-js-hint-correct](assets/images/readme-img/gamejshint.png)
    

### Lighthouse 

Lighthouse Timespan Testing:

![lightouse](assets/images/readme-img/lighthouse.png)

Lighthouse Navigation Testing:

![lighthouse-nav](assets/images/readme-img/lighthouse-navigation.png)

### WAVE Testing



