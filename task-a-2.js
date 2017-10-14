var seats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //This is my array. It has 11 values all set to zero. The reason it has 11 is because it goes 1 - 10. 
//If i have 10 values it goes 1-9
var numberKeep = 0; //This variable checks to see if all the seats in first and econommy class has been taken.
var text = document.querySelector('#text'); //Used to displaye First Class Seat
var text1 = document.querySelector('#text1'); //Used to display Economy class seat


let checkInput = () => {

    var inputFirstClass = document.querySelector('#firstClassBtn');
    var inputEconomyClass = document.querySelector('#economyClassBtn');

    if (numberKeep == seats.length) { //users numberkeep which gets added by 1 on every seat purchase in first and economy class. Then displays alert when all seats are taken. 
        alert("No seats available! Your Flight leaves in 3 hours.");
        return;
    }

    if (inputFirstClass) { //checks to see if input = 1 which is first class
        firstClassSeats();

    } else if (inputEconomyClass) { //checks to see if input = 2 which is economy class
        economyClass();

    } else {
        alert("You didn't enter 1 for First Class or 2 for Economy Class") //Displays if user didn't input.
    }
}

let firstClassSeats = () => { //this function is for first class seating (1-5)
    let keepgoing = true;

    for (let i = 0; i <= 4; i++) {
        var firstClassBOOL = false; //This checks to see if the seat is false. If its false it gets used.

        if (seats[i] == 0) {
            let a = i + 1;
            text.innerHTML = a; //displays seat number on webpage(doesn't display all seat numbers just the one you recently picked)
            alert("Your First Class seat number is " + a); //Tells you what seat number you have.


            seats[i] = 1; //adds seats to i so it all adds to 5. And shows that its used because its changed.
            firstClassBOOL = true; //This changes the seat that was false into true so its not picked again.
            numberKeep += 1; //adds seat to numberkeep to keep track of how many seats.
            console.log(seats.join())
            firstClassAsk(); //calls function that asks if you want another seat
            break;

        }


    }
    if (!firstClassBOOL) { //once all seats are true, this if statement calls checkfullfunction that displays a message saying first class is booked out, would you like to get a seat in economy.
        if (numberKeep == seats.length) { //users numberkeep which gets added by 1 on every seat purchase in first and economy class. Then displays alert when all seats are taken. 
            alert("No seats available! Your Flight leaves in 3 hours.");
            return;
        }

        checkFullFirst();
    }
}

let checkFullFirst = () => {

    let firstClassAsk = prompt("First Class is all booked out. Would you like to book an Economy Seat? Enter Yes or No"); //This prompt asks the user

    switch (firstClassAsk) { //used switch statement for multiple answers
        case "Yes": //if yes it opens the economy function

            economyClass();
            break;
        case "No": //if no it just displays a alert saying flight leaves in 3 hours.
            alert("Your flight leaves in 3 hours")
            break;
        case "no":
            alert("Your flight leaves in 3 hours")
            break;
        case "NO":
            alert("Your flight leaves in 3 hours")
            break;
        case "yes":

            economyClass();
            break;
        case "YES":

            economyClass();
            break;
        default: //pops up if you didn't enter anything or didn't enter Yes or No.
            alert("You didn't enter Yes or No")
            break;
    }
}

let firstClassAsk = () => { //This function asks the user if they would like to book another seat. (First Class Only function)
    let ask = prompt("Would you like to book another seat? Enter Yes or No") //prompt that asks user for input

    switch (ask) { //used switch statement for multiple answers
        case "Yes": //if yes it opens the economy function
            firstClassSeats();
            break;
        case "No": //if no it just displays a alert saying flight leaves in 3 hours.
            alert("Your flight leaves in 3 hours")
            break;
        case "no":
            alert("Your flight leaves in 3 hours")
            break;
        case "NO":
            alert("Your flight leaves in 3 hours")
            break;
        case "yes":

            firstClassSeats();
            break;
        case "YES":

            firstClassSeats();
            break;
        default:
            alert("You didn't enter Yes or No") //pops up if you didn't enter anything or didn't enter Yes or No.
            break;
    }
}
let economyClassAsk = () => {
    let ask = prompt("Would you like to book another seat? Enter Yes or No") //This function asks the user if they would like to book another seat. (Economy Class Only function)

    switch (ask) { //used switch statement for multiple answers
        case "Yes": //if yes it opens the economy function
            economyClass();
            break;
        case "No": //if no it just displays a alert saying flight leaves in 3 hours.
            alert("Your flight leaves in 3 hours")
            break;
        case "no":
            alert("Your flight leaves in 3 hours")
            break;
        case "NO":
            alert("Your flight leaves in 3 hours")
            break;
        case "yes":

            economyClass();
            break;
        case "YES":

            economyClass();
            break;
        default:
            alert("You didn't enter Yes or No") //pops up if you didn't enter anything or didn't enter Yes or No.
            break;


    }
}

let checkFullEconomy = () => {

    let economyAsk = prompt("Economy Class is all booked out. Would you like to book a First Seat? Enter Yes or No"); //This prompt asks the user

    switch (economyAsk) { //used switch statement for multiple answers
        case "Yes": //if yes it opens the economy function

            firstClassSeats();
            break;
        case "No": //if no it just displays a alert saying flight leaves in 3 hours.
            alert("Your flight leaves in 3 hours")
            break;
        case "no":
            alert("Your flight leaves in 3 hours")
            break;
        case "NO":
            alert("Your flight leaves in 3 hours")
            break;
        case "yes":

            firstClassSeats();
            break;
        case "YES":

            firstClassSeats();
            break;
        default:
            alert("You didn't enter Yes or No") //pops up if you didn't enter anything or didn't enter Yes or No.
            break;
    }
}

let economyClass = () => {


    for (let i = 5; i <= 9; i++) { //this function is for economy class seating (6-10)
        var economyBOOL = false; //This checks to see if the seat is false.
        if (seats[i] == 0) {
            let a = i + 1;
            alert("Your Economy Class seat number is " + a) //Tells you what seat number you have.
            text1.innerHTML = a; //displays seat number on webpage(doesn't display all seat numbers just the one you recently picked)

            seats[i] = 1; //adds seats to i so it all adds to 5. And shows that its used because its changed.
            economyBOOL = true; //This changes the seat that was false into true so its not picked again.
            numberKeep += 1; //adds seat to numberkeep to keep track of how many seats.
            console.log(seats.join())
            economyClassAsk(); //calls function that asks if you want another seat (economy)


            break;

        }
    };
    if (!economyBOOL) {
        if (numberKeep == seats.length) { //users numberkeep which gets added by 1 on every seat purchase in first and economy class. Then displays alert when all seats are taken. 
            alert("No seats available! Your Flight leaves in 3 hours.");
            return;
        }

        checkFullEconomy(); //once all seats are true, this if statement calls checkfullEconomy that displays a message saying Economy class is booked out, would you like to get a seat in First Class.

    }
}

firstClassBtn.addEventListener('click', (e) => { //this function just makes the button on the HTML page call the function checkInput which call all of the other functions.
    firstClassSeats();
})

economyClassBtn.addEventListener('click', (e) => { //this function just makes the button on the HTML page call the function checkInput which call all of the other functions.
    economyClass();
})