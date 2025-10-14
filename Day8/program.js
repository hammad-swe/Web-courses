
document.getElementById("main").innerText = "Hammad Ali"
document.getElementById("main").classList.add("text-5xl", "font-bold", "text-blue-500")
// document.getElementsByClassName("page")[0].innerText = "This is a web page."

function updateDescription() {
    const descriptionElement = document.getElementById("description");
    descriptionElement.innerText = "This is an updated description.";
    descriptionElement.classList.add("text-lg", "text-green-500");
    }

    