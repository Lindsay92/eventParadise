
/*************** Field date *****************/

let givenDate = document.getElementById("date");
let currentDate = new Date();
// console.log(givenDate);
// console.log(currentDate);

let day = currentDate.getDate();
// console.log(day);
if (day < 10) {
    day = "0" + day;
}

let month = currentDate.getMonth();
// console.log(month);

let year = currentDate.getFullYear();
// console.log(year);

let newDate = year + "-" + (month + 1) + "-" + day;
// console.log(newDate);

givenDate.setAttribute("min", newDate);

/*************** Field date *****************/


/************* Event **************/

//****** */=> Creat a tooltip (bootstrap):
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//****** */=> Creat a tooltip :

const form = document.querySelector("form");
// console.log(form);

const elements = form.elements;

for (const element of elements) {
    const type = element.type;
    if (type != "submit") {
        // console.log(element);

        element.addEventListener("invalid", (event) => {
            event.preventDefault(); //delete the event html validation

            // console.log(element.name);
            // console.log(element.style.backgroundColor = "red");

            element.classList.add("is-invalid"); 
            //add a class is-invalid for each element
            
            //add setAttribute for creating tooltip attribut
            element.setAttribute("data-bs-title", "Ce champ est obligatoire");
            element.setAttribute("data-bs-custom-class", "custom-tooltip");
        
            const tooltip = bootstrap.Tooltip.getOrCreateInstance(element);

            tooltip.show();
            

            // 1°: I pick up the value "name" of my DOM from each input
            const name = element.name;
            // console.log(name);

            //2°: In my const, I pick up the "id" of my "names" (coming from each input) and with "-help"
            //"-help" is the word I put in each id of my div (helptext)
            const nameHelp = document.getElementById(`${name}-help`)
            
            //3°: I add a class in order to change the color text of my helptext
            nameHelp.classList.add("text-danger");
            // console.log(nameHelp);


            const validity = element.validity;
            console.log(validity);
            //I can see the status of differents values

            const validationName = document.getElementById("name");

            if(validationName.validity.valueMissing) {
                console.log("Value too small");
            } else {
                console.log("ok");
            }
        });
    }
}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("implement form reset");
    // console.log("implement toast");
});


    





// CODE NE REPOND PAS A L EXERCICE

// const myForm = document.getElementById("form");

// form.addEventListener("submit", validity);

//     function validity(){
//         if (!myForm.checkValidity()) {
//             document.getElementById("tooltips").innerHTML = "à remplir";
//             console.log("incorrect");
//         } else {
//             document.getElementById("tooltips").innerHTML = "Input ok";
//             document.getElementById("tooltips").style.backgroundColor = "green";
//             const message = document.getElementsByClassName("form-text");
//             message.color = "green";
//             console.log("ça fonctione");
//         }
//     }








