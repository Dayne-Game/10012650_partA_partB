var displayFirstName = document.querySelector('#firstNAME');
var displayLastName = document.querySelector('#lastNAME');
var displaySalary = document.querySelector('#SALARY');

let CreateEmployee = () => {

    //This is a employee function that is deployed when user enter deatils.
    let fn = document.querySelector('#firstname').value;
    let ln = document.querySelector('#lastname').value;
    let salary = document.querySelector('#salary').value;



    var employee = new Employee(fn, ln, salary); //This is a variable that gets firstname, lastname and salary all into one. Then sends it off to the displayEmployee function.

    employee.displayEmployee();
}

class Employee {


    constructor(FirstName, LastName, Salary) {
        //Constructor that has three parameters (firstname, lastname and salary)
        //this gets the values of firstname, lastname and salary and makes them able to be used. And can be changed at any point.
        this._FirstName = FirstName;
        this._LastName = LastName;
        this._Salary = Salary;
    }

    displayEmployee() {

        //This is where the function has the value and displays 
        displayFirstName.innerHTML = this._FirstName
        displayLastName.innerHTML = this._LastName
        displaySalary.innerHTML = this._Salary
    }
}
//this is where user input for firstname goes. It starts a function called Create employee. It doesnthis for LastName and Salary.
firstname.addEventListener('input', (e) => { //this function just makes the button on the HTML page call the function checkInput which call all of the other functions.
    CreateEmployee();
})

lastname.addEventListener('input', (e) => { //this function just makes the button on the HTML page call the function checkInput which call all of the other functions.
    CreateEmployee();
})

salary.addEventListener('input', (e) => { //this function just makes the button on the HTML page call the function checkInput which call all of the other functions.
    CreateEmployee();
})