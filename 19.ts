/*Working with one of the programs from Exercises 14 through 18, print a message indicating 
the number of people you are inviting to dinner. */

let myFriends:string[] = ["Saleem Shah", "Abdul Rahman", "Asadullah", "Yaseen", "Malhar"]
console.log(`I am inviting ${myFriends.length} number of my friends for dinner, which are the following...`)
for(let i = 0; i<myFriends.length; i++){
    console.log(`${i + 1}. ${myFriends[i]} `)
}