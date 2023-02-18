
//************ TEST FETCH *********** */

// const fetchPromise = fetch("http://localhost:8080/locations");
// console.log(fetchPromise); //promise {<pending>}

// fetchPromise.then(response => {
//     console.log(`reponse reçue: ${response.status}`);
// });
// console.log("ok"); //response reçue 200 ce qui indique que la requête a réussi




//************ FETCH WITH ASYNC AND AWAIT  *********** */

async function fetchLocation() {
    const response = await fetch("http://localhost:8080/locations", {
        method: 'GET',
    });
    const data = await response.json();
    // console.log(data);

    const target = document.querySelector("#location");
    
    let option = `<option disabled selected value="">Choisir</option>`;

    data.forEach(location => {
        option += `<option value="${location.id}">${location.name}</option>`;
    });

    target.innerHTML = option;

};
fetchLocation(); //j'ai mes data id de locations


async function fetchTopic() {
    const response = await fetch("http://localhost:8080/topics", {
        method: 'GET',
    });

    const data = await response.json();
    // console.log(data);

    const target = document.querySelector("#topic");
    
    let option = `<option disabled selected value="">Choisir</option>`;

    data.forEach(topic => {
        option += `<option value="${topic.id}">${topic.name}</option>`;
    });

    target.innerHTML = option;
    // console.log(option);
    // console.log(document.querySelector("#topic"));
    // console.log(target);
};
fetchTopic(); //j'ai mes data id de topics



//************ FETCH WITH THEN  *********** */

//GET request using fetch()
// fetch("http://localhost:8080/locations")
    // Converting received data to JSON
    // .then(res => res.json())
    // .then(data => {
    //     // Create a variable to store HTML
    //     let option = `<option value="">Choisir un lieu dans la liste</option>`;
         // Loop through each data and add in the select option
        // data.forEach(location => {
        //     option += `<option>${location.name}</option>`;
    
        // });
    // Display result
//     document.querySelector("#location").innerHTML = option;
// }); 

// fetch("http://localhost:8080/topics")
//     .then(res => res.json())
//     .then(data => {

//         let option = `<option value"">Choisir un thème dans la liste</option>`;

//         data.forEach(topic => {
//             option += `<option>${topic.name}</option>`;

//         });
//     document.querySelector("#topic").innerHTML = option;
//     });