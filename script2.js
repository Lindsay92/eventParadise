// const form = document.querySelector("form");

// const dataJson = JSON.stringify();
// console.log(dataJson);
// console.log("test");

// fetch("http://localhost:8080/locations", {
//     method: "GET", 
    // elementsSelector: "#location", 
// });


//************ FETCH *********** */

//GET request using fetch()
fetch("http://localhost:8080/locations")
    // Converting received data to JSON
    .then(res => res.json())
    .then(data => {
        // Create a variable to store HTML
        let option = `<option value="">Choisir un lieu dans la liste</option>`;
         // Loop through each data and add in the select option
        data.forEach(location => {
            option += `<option>${location.name}</option>`;
    
        });
    // Display result
    document.querySelector("#location").innerHTML = option;
}); 

fetch("http://localhost:8080/topics")
    .then(res => res.json())
    .then(data => {

        let option = `<option value"">Choisir un thème dans la liste</option>`;

        data.forEach(topic => {
            option += `<option>${topic.name}</option>`;

        });
    document.querySelector("#topic").innerHTML = option;
    });