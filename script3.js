
const element = document.querySelector("form");
const dataJson = JSON.stringify(element);
console.log(dataJson);

const submitHandler = async () => {
    // try {
    const response = await fetch("http://localhost:8080/events", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: dataJson
    });
    console.log(response); //status 204 no content
    
    const data = await response.json();
    console.log(data)
//     if (!response.ok) {
//         console.log(data.description);
//         return;
//     }
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }

// };
}

element.addEventListener("submit", submitHandler);

