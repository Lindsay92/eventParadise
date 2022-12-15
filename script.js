
/*************** FILED DATE *****************/

const givenDate = document.getElementById("date");
const currentDate = new Date();
// console.log(givenDate);
// console.log(currentDate);

let day = currentDate.getDate().toString().padStart(2, "0"); // add 2 digits
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();


let newDate = `${year}-${month}-${day}`;
//console.log(newDate);
givenDate.setAttribute("min", newDate);

//string.prototype.padStart()
// =>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

/*************** FIELD DATE *****************/


/*************** EVENT *********************/

const form = document.querySelector("form");
// console.log(form);

const elements = form.elements;

const options = {
    title: "Ce champ est obligatoire",
};

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
            

            // *******CREATE MY TOOLTIPS DYNAMICALLY *********

            //I initialize my tooltips with the method below 
            const tooltip = bootstrap.Tooltip.getOrCreateInstance(element, options);
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

            } else if (element.name == "date" && validity.rangeUnderflow ) {
                message = "Doit être égale ou supérieure à aujourd'hui";
                //if it's not empty but invalid input,

            } else if (element.name == "rate" && validity.rangeUnderflow) {
                message = "Doit être positif";
            }
            
            tooltip.setContent({ '.tooltip-inner': message });
            
            
            // IN FACT, I INITIALIZED MY TOOLTYPE WITH THE METHOD : const tooltip = bootstrap.Tooltip.getOrCreateInstance()
            // I CAN NOW CHANGE THE MESSAGE OF MY TOOLTIP WITH SETCONTENT 
            // => tooltip.setContent({".tooltip-inner": message"});
            // setContent accepts an object between ()


            //******CREATE FOCUS WHEN IS INVALID *******

                const firstElementInvalid = document.querySelector(".is-invalid");
                // I pick up my first element invalid with my const firstElementInvalid
                if (firstElementInvalid == element) {
                    // I compare my first element invalid with the next element
                    // => to compare element means eg: if input date == input name
                    firstElementInvalid.focus();
                    // if yes : focus
                }
                // if not, no focus 


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
            
        });


        //******* CHANGE THE ELEMENTS WHEN IS VALID ******* 

        element.addEventListener("change", (event) => {
            if (element.checkValidity()) {
                //check if element has any contraints

                element.classList.remove("is-invalid");
                element.classList.add("is-valid");
                
                const name = element.name;
                const nameHelp = document.getElementById(`${name}-help`)
                nameHelp.classList.remove("text-danger");
                nameHelp.classList.add("text-success");
                
                const tooltip = bootstrap.Tooltip.getOrCreateInstance(element, options);
                tooltip.dispose(); 
                //delete my tooltips when my input is correct
            }
        });
    }
}


form.addEventListener("submit", (e) => { // => FUNCTION CALLBACK
    e.preventDefault(); //method to prevent the page from reloading
    // console.log("implement form reset");
    // console.log("implement toast");   
    

    // *******CREATE MY TOAST *********

    const myToast = document.querySelector('.toast')

    const toast = new bootstrap.Toast(myToast);
    // console.log(toast)
    toast.show();


    // *******FORM RESET *********
    //restores a form's element to their default values

    form.reset();

    for (const element of elements) {
        element.classList.remove("is-valid");

        const name = element.name;
        const nameHelp = document.getElementById(`${name}-help`);
        nameHelp.classList.remove("text-success");  
    }
    
});