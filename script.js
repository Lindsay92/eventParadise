
/*************** FILED DATE *****************/

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

/*************** FIELD DATE *****************/


/*************** EVENT *********************/

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

for (const element of elements) { // = forEach element
    const type = element.type;
    if (type != "submit") {
        // console.log(element);

        element.addEventListener("invalid", (event) => {  //=> FUNCTION CALLBACK
            event.preventDefault(); //= delete the event html validation
            // console.log(element.name);
            // console.log(element.style.backgroundColor = "red");

            element.classList.add("is-invalid"); 
            //add a class is-invalid for each element
            
            // *******CREATE MY TOOLTIPS *********

            //add dynamically attributes for after initializing tooltip 
            element.setAttribute("data-bs-title", "Ce champ est obligatoire");
            element.setAttribute("data-bs-custom-class", "custom-tooltip");

            //I initialize my tooltips with the method below 
            const tooltip = bootstrap.Tooltip.getOrCreateInstance(element);
            // tooltip.show(); => Can see all tooltips on each element when I submit
            // tooltip.enable(); //=> Can see the tooltip one by one
        
            const validity = element.validity;
            // console.log(validity);
            //I can see the status of my differents values (valueMissing, tooLong, tooShort...)

            //BE CAREFUL ! : condition before the method show
            let message = null;
            if(validity.valueMissing) {
                message = "Ce champ est obligatoire";
                //First error message if my form is empty,

            } else if (element.name == "date") {
                message = "Doit être égale ou supérieure à aujourd'hui";
                //if it's not empty but invalid input,

            } else if (element.name == "rate") {
                message = "Doit être positif";
            }
            
            tooltip.setContent({ '.tooltip-inner': message });
            
            
            // IN FACT, I INITIALIZED MY TOOLTYPE WITH THE METHOD : const tooltip = bootstrap.Tooltip.getOrCreateInstance()
            // I CAN NOW CHANGE THE MESSAGE OF MY TOOLTIP WITH SETCONTENT 
            // => tooltip.setContent({".tooltip-inner": message"});
            // setContent accepts an object between ()


            //******CREATE FOCUS WHEN IS INVALID *******

            const elementInvalid = document.querySelector(".is-invalid");
            elementInvalid.focus();
            

            //******* CHANGE THE COLOR HELPTEXT WHEN IS INVALID ******* 

            // 1°: I pick up the value "name" of my DOM from each input
            const name = element.name;
            // console.log(name);

            //2°: In my const, I pick up the "id" of my "names" (coming from each input) and with "-help"
            //"-help" is the word I put in each id of my div (helptext)
            const nameHelp = document.getElementById(`${name}-help`)
            
            //3°: I add a class in order to change the color of my helptext
            nameHelp.classList.add("text-danger");
            // console.log(nameHelp);
            

        //******* CHANGE THE ELEMENTS WHEN IS VALID ******* 

        element.addEventListener("change", (event) => {
            if (element.checkValidity()) {
                //check if element has any contraints

                element.classList.replace("is-invalid", "is-valid");
                
                const nameHelp = document.getElementById(`${name}-help`)
                nameHelp.classList.replace("text-danger", "text-success");
                
                tooltip.dispose({".tooltip": "trigger:hover focus"}); 
                //delete my tooltips when my input is correct
            }else{
                tooltip.enable({".tooltip": "trigger:hover focus"}); 
            }
        });

        });
    }
}

form.addEventListener("submit", (e) => { // => FUNCTION CALLBACK
    e.preventDefault(); //method to prevent the page from reloading
    // console.log("implement form reset");
    // console.log("implement toast");   
    

    // *******CREATE MY TOAST *********

    //************ creation of my big container which will contain my container
    const bigContainer = document.createElement("div");
    bigContainer.classList.add("d-flex", "justify-content-end");

    //************ creation of my container which will contain my const validationForm and const button
    const container = document.createElement("div");
    container.setAttribute("data-bs-autohide", "false");
    container.setAttribute("role", "alert");
    container.classList.add("text-bg-success", "d-flex", "toast");

    const validationForm = document.createElement("div");
    validationForm.textContent = "Evènement créé avec succés";
    validationForm.classList.add("toast-body");

    const button = document.createElement("button");
    button.classList.add("btn-close", "me-2", "m-auto");
    button.setAttribute("data-bs-dismiss", "toast");
    button.setAttribute("type", "button");

    container.append(validationForm,button);
    bigContainer.append(container);

    form.append(bigContainer);

    const toast = bootstrap.Toast.getOrCreateInstance(container);

    toast.show();


    // *******FORM RESET *********
    //restores a form's element to their default values

    form.reset();

    for (const element of elements) {
        element.classList.remove("is-valid");

        const name = element.name;
        const nameHelp = document.getElementById(`${name}-help`)
        nameHelp.classList.remove("text-success");
    }
    

});