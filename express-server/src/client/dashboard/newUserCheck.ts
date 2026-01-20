const existingUser = localStorage.getItem("Existing User");

if ( existingUser ) {

    console.log("This previously visited");

} else {

    console.log("This user has not visited the site before");
    
}