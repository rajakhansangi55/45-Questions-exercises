/*Think of something you could store in an array. For example, you could make a list of mountains, 
rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list 
containing these items. */
let myTourPlaces:string[] = ["Saudi", "UAE","USA","Iran","UK","China","Kashmir","Italy", "Qatar","France"]

console.log("Insha'Allah! Oneday with the Grace of God, with my loved ones, my world tour will be in the following countries...")

for(let i = 0; i<myTourPlaces.length; i++){
    console.log(`${i + 1}. ${myTourPlaces[i]}`)
}