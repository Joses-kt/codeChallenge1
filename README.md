# codeChallenge1
# Toy Problems

This repository contains solutions to three toy problems in JavaScript.

## Author

By Joses.T


#Description

1.gradeGenerator
This program is used to concert student's grades. The user will be prompted to input their marks which are then converted into a floating-point number.
 const marks = parseFloat(prompt("Enter your marks(out of 100):"));
The value that has been inputted is the ran through a loop until it matches the various conditions.

    if (marks >79 && marks <= 100){
    console.log("A")
} else if (marks >=60 && marks <=79){
    console.log("B")
} else if (marks >=49 && marks <=59){
    console.log("C")
} else if (marks >=40 && marks <=48){
    console.log("D")
} else if (marks <40){
    console.log("E")
The programme returns the grade appropriate to the users marks.

2.speedDetector.js
This is a programme that is ran with the intention of assessing legality of a road-using motorists speed.The user will be prompted to input the speed of the car.

    const speed = parseFloat(prompt("Enter car speed (in km/h):"));
The legal max speed limit is 70km/h so the inputted value (the speed) is taken through an if loop to ascertain first if the speed is 70km/h(referred to as the limit from hee on out) or lower.

    if (speed <=70){
    console.log('Ok')
 } 
If this condition is not satisfied, it is ran through further code where points are calculated based on how much faster the inputted speed is than the limit. A point is awarded for every 5km/h the speed is over the limit. If the points are more than 12, theuser receives an alert that their license is suspended.

    else if (speed >70){
    points = Math.abs((speed -70)/5)
    console.log('Points:' + points)
    if (points >=12){ 
        console.log("License suspended")
    }
}
3.salaryCalculator.js
This is a programme that is designed to come up with the users net salary after various deductions are made. The deductions include NSSF deductions, NHIF deductions and PAYE. The user is first prompted to input their basic salary.

    const basicSalary = parseFloat(prompt("Enter your basic salary here: "));
A function tax is created wherein other functions calculating the deductions are nested. There are some variables that are created as follows: nhifDeduction, payeableIncome, grossTax, personalRelief, taxableIncome, nssfDeduction among others.

    function tax(basicSalary, benefits = 0) {
    let nhif = 0;

function calcNHIFDeduction(basicSalary) {
    let nhifDeduction = 0;
    if (basicSalary > 0 && basicSalary <= 5999) {
        nhifDeduction = 150;
    } else if (basicSalary >= 6000 && basicSalary <= 7999) {
        nhifDeduction = 300;
    } else if (basicSalary >= 8000 && basicSalary <= 11999) {
        nhifDeduction = 400;
    } else if (basicSalary >= 12000 && basicSalary <= 14999) {
        nhifDeduction = 500;
    } else if (basicSalary >= 15000 && basicSalary <= 19999) {
        nhifDeduction = 600;
    } else if (basicSalary >= 20000 && basicSalary <= 24999) {
        nhifDeduction = 750;
    } else if (basicSalary >= 25000 && basicSalary <= 29999) {
        nhifDeduction = 850;
    } else if (basicSalary >= 30000 && basicSalary <= 34999) {
        nhifDeduction = 900;
    } else if (basicSalary >= 35000 && basicSalary <= 39999) {
        nhifDeduction = 950;
    } else if (basicSalary >= 40000 && basicSalary <= 44999) {
        nhifDeduction = 1000;
    } else if (basicSalary >= 45000 && basicSalary <= 49999) {
        nhifDeduction = 1100;
    } else if (basicSalary >= 50000 && basicSalary <= 59999) {
        nhifDeduction = 1200;
    } else if (basicSalary >= 60000 && basicSalary <= 69999) {
        nhifDeduction = 1300;
    } else if (basicSalary >= 70000 && basicSalary <= 79999) {
        nhifDeduction = 1400;
    } else if (basicSalary >= 80000 && basicSalary <= 89999) {
        nhifDeduction = 1500;
    } else if (basicSalary >= 90000 && basicSalary <= 99999) {
        nhifDeduction = 1600;
    } else if (basicSalary >= 100000) {
        nhifDeduction = 1700;
    }
    return nhifDeduction;
}

function calculateTax(payeableIncome) {
    let paye = 0;
    let grossTax = 0;
    let personalRelief = 2400;
    if (payeableIncome > 0 && payeableIncome <= 24000) {
        grossTax = payeableIncome * 0.10;
    } else if (payeableIncome > 24000 && payeableIncome <= 52000) {
        grossTax = 2400 + (payeableIncome - 24000) * 0.25;
    } else if (payeableIncome > 52000 && payeableIncome <= 102000) {
        grossTax = 10000 + (payeableIncome - 52000) * 0.30;
    } else if (payeableIncome > 102000) {
        grossTax = 26000 + (payeableIncome - 102000) * 0.35;
    }
    paye = Math.floor(grossTax - personalRelief);

    let netsalary = payeableIncome - paye;
    return { paye, netsalary };

    let nssfDeduction = benefits > 0 ? benefits : basicSalary * 0.06;

    nhif = nhifDeduction;
    let taxableIncome = basicSalary - (nssfDeduction + nhif);

    let taxed = calculateTax(taxableIncome);
The function then returns the net salary of the user as follows

    return "Your net salary is:" + "" + taxed.netsalary;
}

console.log(tax(basicSalary));

Installation
Installation requirements
You need access to a github account inorder to be able to fork and clone this into your local repository.

Installation instruction
Copy the SSH key in github, open your terminal and git clone it into your local repo

You will then use code . to open the files in VScode.

Technologies used
Javascript

Support and contact details
thuokjoses@gmail.com
License
The content of this site is licensed under the MIT license
