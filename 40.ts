/* Write a function called make_album() that builds an Object describing a music album. The 
function should take in an artist name and an album title, and it should return a Object containing 
these two pieces of information. Use the function to make three dictionaries representing different 
albums. Print each return value to show that Objects are storing the album information correctly. 
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make 
at least one new function call that includes the number of tracks on an album.  */

function make_album(Artist_Name:string, Album_Title:string){
    return {Artist_Name, Album_Title}
    }
    let Album1 = make_album("Rameez", "Andheri Ratein")
    let Album2 = make_album("Raja", "Fall of Love")
    let Album3 = make_album("Rohi", "Sirf Tum")
    console.log(Album1)
    console.log(Album2)
    console.log(Album3)

    function make_album2(Artist_Name:string, Album_Title:string, No_of_tracks?:number){
        return {Artist_Name, Album_Title, No_of_tracks}
        }
        let Album4 = make_album2("Rameez", "Andheri Ratein", 10)
        let Album5 = make_album2("Raja", "Fall of Love", 15)
        let Album6 = make_album2("Rohi", "Sirf Tum")
        console.log(Album4)
        console.log(Album5)
        console.log(Album6)
