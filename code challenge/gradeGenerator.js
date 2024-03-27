//GRADE GENERATOR
// The user is prompted to input marks
const prompt = require("prompt-sync")({ sigint: true });
const marks = parseFloat(prompt("Enter your marks(out of 100):"));

// Convert the marks into a grade
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
}
