/* Choose a color for an alien as you did in Exercise 25, and write an if-else chain. 
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the 
alien. 
• If the alien’s color isn’t green, print a statement that the player just earned 10 points. 
• Write one version of this program that runs the if block and another that runs the else block. */

// Version 1
let alienColor = "green";
if(alienColor == "green"){
    console.log(`Player just earned 5 points for shooting the aliens.`)  
}else{console.log(`Player just earned 10 points.`)   
}

// Version 2
let alienColor2 = "green";
if(alienColor == "Red"){
    console.log(`Player just earned 5 points for shooting the aliens.`)  
}else{console.log(`Player just earned 10 points.`)   
}