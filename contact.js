function submitForm(event) {
    event.preventDefault();

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    document.getElementById("submissionMessage").style.display = "block";

    setTimeout(function() {
        document.getElementById("submissionMessage").style.display = "none";
    }, 3000);
}