// waits for html to load before loading javascript
document.addEventListener("DOMContentLoaded", function () {


    // Get DOM elements
    const usernameInput = document.getElementById("username-input");
    const startBtn = document.getElementById("start");
    const submitBtn = document.getElementById("submit");

    // hides start button before username is entered
    startBtn.style.display = "none";


    // submit button event listener 

    submitBtn.addEventListener("click", () => {
        const username = usernameInput.value.trim(); // get entered username


        // checks if username is provided 
        if (username) {
            const welcomeMessage = document.querySelector(".welcome h1"); // searches for h1 in welcome class and selects it
            welcomeMessage.textContent = `Hi, ${username}! Ready to test your knowledge?`;
            // hide input field & submit button
            usernameInput.style.display = "none";
            submitBtn.style.display = "none";
            // shows start button 
            startBtn.style.display = "";
        } else {
            // display error alert if no username is entered
            alert("Please enter a username to start the game.");
        }
    });

});

