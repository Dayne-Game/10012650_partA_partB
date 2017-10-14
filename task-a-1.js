let username = document.querySelector('#username')
let password1 = document.querySelector('#pd1')
let password2 = document.querySelector('#pd2')

let usernameError = document.querySelector('#error') //This is a variable that links to a div class or ID on the HTMl page.
let passwordError = document.querySelector('#error1')
let answer = document.querySelector('#answer')
let passwordText = document.querySelector('#passwordText')
let usernameText = document.querySelector('#usernameText')







let validateUsername = () => {

    if (username.value == "") {
        usernameError.innerHTML = "You have to enter a username!"
        usernameError.style.color = "red"; //message that is displayed if user enters nothing
        answer.innerHTML = "";
    } else {
        if (username.value.length >= 8) { //this checks if the user has entered a username that fits the question (8 characters or more)
            usernameError.innerHTML = ""
            usernameText.innerHTML = "Your username is long enough. Here have a medal 🏅" //This appears on the webpage if user has entered username with correct length
            usernameText.style.color = "green"; //Changes text to green
            answer.innerHTML = ""; //changes answer innerHTML to blank. So it doesn't display
        } else {
            usernameText.innerHTML = "Your username isn't at least 8 characters" //Appears if user hasn't entered username that is equal too or greater than 8.
            usernameText.style.color = "red"; //Changes text to red.
            answer.innerHTML = "";
        }
    }
}

let validatePasswords = () => {

    if (password1.value == "" || password2.value == "") { //This checks to see if user has entered a password
        passwordError.innerHTML = "You have to enter a Password!" //this is displayed if user hasn't entered a password.
        passwordError.style.color = "red"; //Changes text color to red
        answer.innerHTML = ""; //changes answer innerHTML to blank. So it doesn't display
    } else {
        if (password1.value == password2.value) { //checks to see if passwords match
            passwordError.innerHTML = "" //changes error1 innerHTML to blank. So it doesn't get displayed
            passwordText.innerHTML = "Your passwords match. Here have a medal 🏅" //This displays when passwords match
            passwordText.style.color = "green"; //changes txt color to green
            answer.innerHTML = ""; //changes answer innerHTML to blank. So it doesn't display
        } else {
            passwordText.innerHTML = "Your Passwords don't match" //This displays when passwords don't match
            passwordText.style.color = "red"; //changes text color to red
            answer.innerHTML = ""; //changes answer innerHTML to blank. So it doesn't get displayed
        }
    }
}

let checkall = () => {
        if (username.value.length < 8) { //checks to see if username value is smaller than 8

        } else if (password1.value != password2.value) { //checks to see if password 1 and 2 don't match

        } else if (password1.value == "" || password2.value == "") { //checks if passwords hasn't been entered

        } else {
            answer.innerHTML = "Username and Password have been set." //appears if username.value >= 8, Password has been entered and password1 == password 2.
            answer.style.color = "green" //changes text to green.
            passwordText.innerHTML = "" //changes passwordText innerHTML to blank. So it doesn't display
            usernameText.innerHTML = "" //chnages usernameText innerHtml to blank. So it doesn't display.

        }
    }
    //---------------------------------------------------------------------------------------------------------------------
let jeffJeff = () => { //This is just for fun.

    if (username.value == "JeffJeff") {
        document.getElementById('jeffJeff').src = 'img/logo.jpeg'

    } else if (username.value == "DayneGame") {
        document.querySelector('#jeffJeff').src = 'img/logo.jpg'

    } else {
        document.getElementById('jeffJeff').src = 'img/user.png'
    }
}
submit1.addEventListener('click', (e) => {

    validateUsername();
    validatePasswords();
    checkall();

    e.preventDefault()
})
username.addEventListener('input', (e) => {
    validateUsername();
    jeffJeff();
})