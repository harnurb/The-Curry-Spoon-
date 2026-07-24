const form = document.getElementById("leadForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    alert(
        "Thank you for contacting The Curry Spoon! We will get back to you soon."
    );

    form.reset();

});
