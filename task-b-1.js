function temperature(input01, degree) {
    var input01 = document.querySelector('#value').value; //how many degrees you want to convert

    var degree = document.querySelector('#selectpicker').value; //Gets value you selected using the selectpicker



    switch (degree) {
        case "Celsius to Fahrenheit": //celsius to fahrenheit
            text = `${input01 * 9 / 5 + 32}`; //Calculates input into fahrenheit
            break;
        case "Fahrenheit to Celsius": //fahrenheit to Celsius
            text = `${(input01 -32) * 5 / 9}`; //Calculates input into Celsius
            break;
        default:
            text = "You didn't select Celsius to Fahrenheit, or Fahrenheit to Celsius"; //Displays if you didn't select anything
    }
    document.querySelector("#answer").innerHTML = text;
    // document.querySelector("#fahrenheit").innerHTML = text1;
}

let reset1 = () => { //This function is deployed when user clicks on the reset button
    //everything goes to nothing
    var input01 = document.querySelector('#value').value = "";

    var degree = document.querySelector('#selectpicker').value = "";
    var answer = document.querySelector('#answer').innerHTML = "";


}


convert.addEventListener('click', () => {
    //when this button is clicked it runs the temperature function that does the calculation
    temperature();

})

reset.addEventListener('click', () => {
    //when this button is clicked it runs the reset1 function that does chnages values to nought
    reset1();

})

/* Test Plan

Does my temperature webpage convert Fahrenheit to Celsius? 
Yes EAnand

Does my temperature webpage convert Celsius to Fahrenheit?
Yes EAanad

Does it display the answer clearly?
Yes EAanad

Can you navigate the webpage?
Yes mate
EAnand */