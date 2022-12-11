
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

//****** */=> Create a tooltip with bootstrap:
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
//****** */=> Create a tooltip with bootstrap:

//****** */=> Create a toast with bootstrap:
const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option));
//****** */=> Create a toast with bootstrap:

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
        
            const validity = element.validity;
            //console.log(validity);
            //I can see the status of my differents values (valueMissing, tooLong, tooShort...)

            //BE CAREFUL ! : condition before the method show
            if(element.validity.valueMissing == true) {
                element.setAttribute("data-bs-title", "Ce champ est obligatoire");
                //console.log("Value missing");
                //First error message if my form is empty,

            } else if (element.name == "date") {
                element.setAttribute("data-bs-title", "Doit être égale ou supèrieure à aujourd'hui");
                console.log("Too low");
                //if it's not empty but invalid input,
        
            } else if (element.name == "rate") {
                element.setAttribute("data-bs-title", "Doit être positif");
                console.log("Be positif");
                //if it's not empty but invalid input. 
            }

            const tooltip = bootstrap.Tooltip.getOrCreateInstance(element);

            tooltip.show();
            

            //Change the color of my helptext =>

            // 1°: I pick up the value "name" of my DOM from each input
            const name = element.name;
            // console.log(name);

            //2°: In my const, I pick up the "id" of my "names" (coming from each input) and with "-help"
            //"-help" is the word I put in each id of my div (helptext)
            const nameHelp = document.getElementById(`${name}-help`)
            
            //3°: I add a class in order to change the color text of my helptext
            nameHelp.classList.add("text-danger");
            // console.log(nameHelp);



            
        });
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("implement form reset");
    // console.log("implement toast");   


    form.reset();
    // console.log("form reset");

    
    //creation of my toast after submit my form
    const container = document.createElement("div");
    container.setAttribute("data-bs-autohide", "false");
    container.setAttribute("role", "alert");
    container.classList.add("text-bg-success", "d-flex", "toast");
    // message.textContent = "Votre message a été envoyé";

    const validationForm = document.createElement("div");
    validationForm.textContent = "Votre message a été envoyé";
    validationForm.classList.add("toast-body");

    const button = document.createElement("button");
    button.classList.add("btn-close", "me-2", "m-auto");
    button.setAttribute("data-bs-dismiss", "toast");
    button.setAttribute("type", "button");
    
    container.append(validationForm,button);

    form.append(container);
    // message.append(button);
    
    const toast = bootstrap.Toast.getOrCreateInstance(container);

    toast.show();

    console.log(toast);
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








