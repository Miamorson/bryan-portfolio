console.log("Portfolio Website Loaded");

const form = document.getElementById("contact-form");
const popup = document.getElementById("popup-message");

form.addEventListener("submit", function(e){

    e.preventDefault();

    popup.style.display = "block";

    form.reset();

    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);

});