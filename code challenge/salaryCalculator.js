//Salary Calculator
// Prompt the user to input their basic salary
const prompt = require("prompt-sync")({ sigint: true });

const basicSalary = parseFloat(prompt("Enter your basic salary here: "));

// Create a function tax within which the deductions have been nested
function tax(basicSalary, benefits = 0) {
    let nhif = 0;

// Create a function to calculate NHIF deductions
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
}
// Assign the NHIF deduction to a variable nhifDeduction 
let nhifDeduction = calcNHIFDeduction(basicSalary);

// Did not quite understand the different tiers in NSSF hence assume a base rate of 6%
let nssfDeduction = benefits > 0 ? benefits : basicSalary * 0.06;
nhif = nhifDeduction;
let taxableIncome = basicSalary - (nssfDeduction + nhif);
let taxed = calculateTax(taxableIncome);

// Return the users net salary
return "Your net salary is:" + "" + taxed.netsalary;
}

console.log(tax(basicSalary));
