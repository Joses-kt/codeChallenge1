//Spped Detector
// Prompt the user to input the speed in km/h
const prompt = require("prompt-sync")({ sigint: true });
const speed = parseFloat(prompt("Enter car speed (in km/h):"));
// Give the points a starting point (haha ikr)
let points = 0;
// Check speed limit
 if (speed <=70){
    console.log('Ok')
 } 
// Calculate and accumulate points: Define warning if points exceeded
 else if (speed >70){
    points = Math.abs((speed -70)/5)
    console.log('Points:' + points)
    if (points >=12){ 
        console.log("License suspended")
    }
 }

